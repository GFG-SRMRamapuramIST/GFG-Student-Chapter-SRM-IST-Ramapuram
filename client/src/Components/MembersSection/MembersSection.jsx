import { useRef, useMemo } from "react";
import { GridBackdropDiv, MemberCard } from "../ui";
import { useScrollEffect } from "../../hooks";

const MembersSection = ({ title, caption, description, members }) => {
  const containerRef = useRef(null);

  const membersMemo = useMemo(() => members, [members]);

  useScrollEffect(containerRef, membersMemo);

  return (
    <GridBackdropDiv className="flex flex-col md:flex-row justify-center items-center mt-12 mx-8 lg:mx-24 px-3 sm:px-6 md:px-12 max-md:py-8 border-2 rounded-lg bg-[#FCFCFD] text-black gap-1 lg:gap-4 relative">
      <div className="md:w-1/2 flex flex-col justify-center max-md:items-center max-md:text-center md:pr-8 lg:pr-16">
        <div className="flex flex-col w-fit mb-2">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 uppercase text-gray-700">
            {title}
          </h3>
          <span className="text-xs md:text-sm w-auto overflow-hidden text-gray-500">
            {caption}
          </span>
        </div>

        <p className="text-md md:text-lg text-zinc-900 mt-2 max-w-md">
          {description}
        </p>
      </div>
      <div
        className="relative flex max-md:w-full flex-col pb-2 md:pb-4 lg:pt-4 overflow-y-scroll no-scrollbar md:w-1/2 max-h-64 md:max-h-80"
        // className="relative flex sm:flex-col max-md:w-full flex-row pb-2 md:pb-4 overflow-y-scroll no-scrollbar md:w-1/2  md:max-h-80"

        ref={containerRef}
      >
        <MemberCard
          member={membersMemo[membersMemo.length - 1]}
          index={membersMemo.length - 1}
        />
        {membersMemo.map((member, index) => (
          <MemberCard key={index} member={member} index={index} />
        ))}
        <MemberCard member={membersMemo[0]} index={0} />
      </div>
    </GridBackdropDiv>
  );
};

export default MembersSection;
