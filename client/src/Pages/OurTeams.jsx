import { useState } from "react";
import { CoreTeam24, roles, members } from "../Utility/constants";
import { GridBackdropDiv, LeadCard, YearSelector } from "../Components/ui";
import { MembersSection } from "../Components";

const OurTeams = () => {
  const [year, setYear] = useState(24);

  return (
    <div className="pb-16 pt-24 sm:pb-8 sm:pt-24 relative">
      <h1 className="text-[64px] text-center font-bold uppercase text-gray-700 pd-8">
        Our Team
      </h1>
      <YearSelector year={year} setYear={setYear} />

      {year === 24 ? (
        <div className="mt-16 mb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end ">
            <div className="hidden md:flex flex-col ">
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

            <div className="hidden md:flex flex-col">
              <h3 className="text-xl text-center font-bold text-gray-700 py-2">
                {roles.OpsHead}
              </h3>
              <LeadCard lead={CoreTeam24[roles.OpsHead]} />
            </div>
          </div>

          {/* Only for Mobile View */}
          <div className="hidden max-md:flex flex-col sm:flex-row justify-center items-center sm:items-end ">
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

          <MembersSection
            title="The Geek League"
            caption="Fueled by passion and powered by coffee"
            description="We’re not just a club; we’re a family of dreamers, doers, and
          game-changers."
            members={members}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-full m-4 md:m-8">
          <div className="bg-gradient-to-r from-green-500 via-green-600 to-gfg-green rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              This Could Be You!
            </h2>
            <p className="text-lg text-white mb-6">
              Join our team and shine brightly to be remembered forever. You
              could be here next year!
            </p>
            <button className="bg-white text-gfg-green font-bold py-2 px-4 rounded-full hover:shadow-2xl transition duration-300">
              Join Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeams;
