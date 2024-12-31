import { useEffect, useState, useRef } from "react";
import { GridBackdropDiv, MemberCard } from "../ui";

const MembersSection = ({ title, caption, description, members }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        // Move to next index, or back to 0 if at end
        return prevIndex === members.length - 1 ? 0 : prevIndex + 1;
      });
    }, 2000); // Change member every 2 seconds

    return () => clearInterval(interval);
  }, [members.length, isPaused]);

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
        ref={containerRef}
        className="relative w-full md:w-1/2 overflow-hidden h-64 md:h-80 "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute w-full pt-16 md:pt-24">
          {members.map((member, index) => (
            <div
              key={index}
              className="transition-all duration-1000 ease-in-out absolute w-full"
              style={{
                transform: `translateY(${(index - activeIndex) * 100}%)`,
                opacity: index === activeIndex ? 1 : 0.5,
                scale: index === activeIndex ? "1" : "0.9",
                filter: index === activeIndex ? "none" : "blur(1px)",
              }}
            >
              <MemberCard member={member} index={index} />
            </div>
          ))}
        </div>
      </div>
    </GridBackdropDiv>
  );
};

export default MembersSection;
