import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

//Importing icons
import { FaSpinner } from "react-icons/fa";

//Importing APIs
import { getAll2024Member } from "../APIs/APICall";

import { CoreTeam24, roles, Members24 } from "../Utility/constants";
import { LeadCard, YearSelector } from "../Components/ui";
import { MembersSection } from "../Components";
import HeikiBackground from "../Components/ui/HeikiBackground";

const OurTeams = () => {
  const [members24Data, setMembers24Data] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
      const fetchAllMembers24Data = async () => {
        setLoading(true);
  
        const data = await getAll2024Member();
        if (data?.error) {
          setError(true);
        } else {
         //console.log(data);
         setMembers24Data(data);
         
        }
  
        setLoading(false);
      };
  
      fetchAllMembers24Data();
    }, []);


  //Google Analytics
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "gfgsrmrmp.vercel.app/our-teams",
      title: "Our Teams Page",
    });
  }, []);

  const [year, setYear] = useState(24);

  return (
    <div className="relative">
      <HeikiBackground
        primaryColor="#00895e"
        secondaryColor="#2f8d46"
        pattern="blocks"
        opacity={0.2}
      />
      <div className="pb-16 pt-32  sm:pb-8  relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold lg:font-black uppercase text-gray-700 pd-8">
          Our Team
        </h1>
        <YearSelector year={year} setYear={setYear} />

        {year === 24 ? (
          <div className="mt-16 mb-8">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end ">
              <div className="hidden lg:flex flex-col ">
                <h3 className="text-xl text-center font-bold text-gray-700 py-2">
                  {roles.TechHead}
                </h3>
                <LeadCard lead={CoreTeam24[roles.TechHead]} />
              </div>

              <div className="flex flex-col scale-110 md:scale-125 mb-6 md:mb-12 mx-4 md:mx-8">
                <h3 className="text-xl text-center font-bold text-gray-700 py-2">
                  {roles.President}
                </h3>
                <div className="flex">
                  <LeadCard lead={CoreTeam24[roles.President]} />
                </div>
              </div>

              <div className="flex flex-col scale-105 md:scale-110 mb-3 md:mb-6 mx-2 md:mx-4">
                <h3 className="text-xl text-center font-bold text-gray-700 py-2">
                  {roles.VicePresident}
                </h3>
                <LeadCard lead={CoreTeam24[roles.VicePresident]} />
              </div>

              <div className="hidden lg:flex flex-col">
                <h3 className="text-xl text-center font-bold text-gray-700 py-2">
                  {roles.OpsHead}
                </h3>
                <LeadCard lead={CoreTeam24[roles.OpsHead]} />
              </div>
            </div>

            {/* Only for Mobile View */}
            <div className="lg:hidden flex flex-col sm:flex-row justify-center items-center sm:items-end ">
              <div className="flex flex-col mx-0 px-0">
                <h3 className="text-lg text-center font-bold text-gray-700 pt-4 pb-1">
                  {roles.OpsHead}
                </h3>
                <div className="flex">
                  <LeadCard lead={CoreTeam24[roles.OpsHead]} />
                </div>
              </div>
              <div className="flex flex-col mx-0 px-0">
                <h3 className="text-lg text-center font-bold text-gray-700 pt-4 pb-1">
                  {roles.TechHead}
                </h3>
                <div className="flex">
                  <LeadCard lead={CoreTeam24[roles.TechHead]} />
                </div>
              </div>
            </div>

            {/* for Members */}
        {loading ? (
                          <div className="flex justify-center items-center h-64">
                            <FaSpinner className="spinner text-center text-sm sm:text-sm" />
                          </div>
                        ): error ? (<div className="flex justify-center items-center h-full text-red-500">
                          <div className="">
                            Failed to load this component!! <br /> Please try
                            again later!!
                            <Link
                              to="/blogs"
                              className="block p-2 text-sm text-gfgsc-green hover:underline"
                              onClick={closeMobileMenu}
                            >
                              See all blogs...
                            </Link>
                          </div>
                        </div>
                      ) : ( <MembersSection
                        title="The Geek League"
                        caption="Fueled by passion and powered by coffee"
                        description="We’re not just a club; we’re a family of dreamers, doers, and
                    game-changers."
                        members={members24Data}
                      />)
                        }
          
          </div>
        ) : (
          <div className="flex justify-center items-center h-full m-4 md:m-8">
            <div className="bg-gradient-to-r from-gfg-green to-gfgsc-green rounded-xl shadow-lg hover:shadow-2xl duration-300 p-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                This Could Be You!
              </h2>
              <p className="text-lg text-white mb-6">
                Join our team and shine brightly to be remembered forever. You
                could be here next year!
              </p>
              <Link
                to="https://forms.gle/YgJeDFs564iiY33L6"
                target="_blank"
                className="bg-white text-gfgsc-green font-bold py-2 px-4 rounded-full hover:shadow-2xl transition duration-300"
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurTeams;
