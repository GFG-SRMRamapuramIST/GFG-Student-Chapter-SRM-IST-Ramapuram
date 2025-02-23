import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { GridBackdropDiv, MemberCard } from "../ui";

//Importing icons
import { FaSpinner } from "react-icons/fa";

// APIs calls
import { getAll2024Member } from "../../APIs/APICall";

const MembersSection = ({ title, caption, description, batch }) => {
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        // Move to next index, or back to 0 if at end
        return prevIndex === members24Data.length - 1 ? 0 : prevIndex + 1;
      });
    }, 2000); // Change member every 2 seconds

    return () => clearInterval(interval);
  }, [members24Data.length, isPaused]);

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

      {loading ? (
        <div className="flex justify-center items-center w-full h-64 md:h-80">
          <FaSpinner className="spinner text-center text-sm sm:text-sm" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-full text-red-500">
          <div className="text-center">
            Failed to load this component!! <br /> Please try again later!!
          </div>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative w-full md:w-1/2 overflow-hidden h-64 md:h-80 "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute w-full pt-16 md:pt-24">
            {batch == "2024" ? (
              members24Data.map((member, index) => (
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
              ))
            ) : (
              <div className="flex justify-center items-center h-full text-red-500">
                <div className="text-center">
                  Failed to load this component!! <br /> Please try again
                  later!!
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </GridBackdropDiv>
  );
};

MembersSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  batch: PropTypes.string.isRequired,
};

export default MembersSection;
