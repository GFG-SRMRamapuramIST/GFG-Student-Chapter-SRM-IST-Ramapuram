import React, { useRef, useMemo } from "react";
import { GridBackdropDiv, MemberCard } from "../ui";
import { useScrollEffect } from "../../hooks";

const MembersSection = ({ title, caption, description, members }) => {
  const containerRef = useRef(null);

  const membersMemo = useMemo(() => members, [members]);

  useScrollEffect(containerRef, membersMemo);

  return (
    <GridBackdropDiv className="flex justify-center items-center mt-12 mx-24 px-12 border-2 rounded-lg bg-[#FCFCFD] text-black gap-4 relative">
      <div className="w-1/2 flex flex-col justify-center pr-12">
        <div className="flex flex-col w-fit mb-2">
          <h3 className="text-3xl font-bold mb-1 uppercase text-gray-700">
            {title}
          </h3>
          <span className="text-sm w-auto overflow-hidden text-gray-500">
            {caption}
          </span>
        </div>

        <p className="text-lg text-zinc-900 mt-2 max-w-md">
          {description}
        </p>
      </div>
      <div
        className="relative flex flex-col pb-4 overflow-y-scroll no-scrollbar w-1/2 max-h-80"
        ref={containerRef}
      >
        <MemberCard
          member={membersMemo[membersMemo.length - 1]}
          index={membersMemo.length - 1}
          style={{ transform: "scale(0.8)" }}
        />
        {membersMemo.map((member, index) => (
          <MemberCard
            key={index}
            member={member}
            index={index}
            style={{ transform: "scale(0.8)" }}
          />
        ))}
        <MemberCard
          member={membersMemo[0]}
          index={0}
          style={{ transform: "scale(0.8)" }}
        />
      </div>
    </GridBackdropDiv>
  );
};

export default MembersSection;
