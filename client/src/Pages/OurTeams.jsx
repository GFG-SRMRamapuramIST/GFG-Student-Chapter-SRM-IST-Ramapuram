import { useState } from "react";
import { LeadCard } from "../Components";
import { CoreTeam24, roles } from "../Utility/constants";

const YearSelector = ({ year, setYear }) => {
  const getClassNames = (selectedYear) => {
    return year === selectedYear
      ? "text-2xl text-[#0DCAF0] hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded cursor-default"
      : "text-lg text-gray-500 hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded cursor-default";
  };

  return (
    <div className="flex items-center justify-center space-x-4 ">
      <div onClick={() => setYear(24)} className={getClassNames(24)}>
        2024-25
      </div>
      <div onClick={() => setYear(25)} className={getClassNames(25)}>
        2025-26
      </div>
    </div>
  );
};

const OurTeams = () => {
  const [year, setYear] = useState(24);

  return (
    <div className="pb-16 pt-24 sm:pb-8 sm:pt-24">
      <h1 className="text-[64px] text-center font-bold uppercase text-gray-700 pd-8">
        Leads
      </h1>
      <YearSelector year={year} setYear={setYear} />

      {year === 24 ? (
        <div className="mt-16 mb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end ">
            <div className="hidden md:flex flex-col ">
              <h3 className="text-xl text-center font-bold text-gray-700 py-2">
                Technical
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
                Operations
              </h3>
              <LeadCard lead={CoreTeam24[roles.OpsHead]} />
            </div>
          </div>

          <div className="hidden max-md:flex flex-col sm:flex-row justify-center items-center sm:items-end ">
            <div className="flex flex-col mx-0 px-0">
              <h3 className="text-lg text-center font-bold text-gray-700 pt-4 pb-1">
                Operations
              </h3>
              <div className="flex">
                <LeadCard lead={CoreTeam24[roles.OpsHead]} />
              </div>
            </div>
            <div className="flex flex-col mx-0 px-0">
              <h3 className="text-lg text-center font-bold text-gray-700 pt-4 pb-1">
                Technical
              </h3>
              <div className="flex">
                <LeadCard lead={CoreTeam24[roles.TechHead]} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Other Year Content</div>
      )}
    </div>
  );
};

export default OurTeams;
