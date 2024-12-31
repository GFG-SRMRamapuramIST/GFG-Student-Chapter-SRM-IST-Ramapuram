import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { abtGfg } from "../../assets";
import { GridBackdropDiv2 } from "../ui";
import { Link } from "react-router-dom";

const GFGIntro = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-10 w-full flex justify-center px-0 sm:px-2 md:px-4 lg:px-12 bg-white">
      <GridBackdropDiv2 className="flex flex-col lg:flex-row justify-between w-full p-6 gap-6 lg:gap-12 shadow-sm rounded-lg border border-gray-200 min-h-full bg-white">
        <div className="md:w-1/2 md:py-12 md:px-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <p className="text-gray-700 text-base lg:text-l xl:text-xl font-medium leading-relaxed whitespace-normal break-words">
            <span className="text-green-600">GeeksforGeeks</span> is a trusted
            platform for coding enthusiasts, offering a wide range of resources,
            including tutorials, coding challenges, and interview preparation
            materials.
            <span className="bg-green-300 rounded">
              {" "}
              With over 12 million users worldwide
            </span>
            , it provides courses and practice problems across various domains
            to help programmers enhance their skills and achieve success in
            their tech careers.{" "}
          </p>
          {!isSmallScreen && (
            <Link
              to={"https://www.geeksforgeeks.org/"}
              target="_blank"
              className="mt-5 text-left group relative"
            >
              <p className="inline-flex items-center text-xl text-green-600 cursor-pointer transition-transform duration-300">
                Explore the integrations
                <FaArrowRight className="ml-2" />
              </p>
              {/* Green line under text */}
              <span className="absolute bottom-0 left-0 h-0.5 bg-green-600 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          )}
        </div>
        <div className="flex md:w-1/2 bg-cover justify-center items-center">
          <img
            src={abtGfg}
            alt="GeeksforGeeks"
            className={`max-w-xs md:max-w-sm ${
              isSmallScreen ? "w-full max-w-xs" : "w-auto"
            }`}
            style={{
              maxHeight: isSmallScreen ? "80vh" : "auto",
            }}
          />
        </div>
      </GridBackdropDiv2>
    </div>
  );
};

export default GFGIntro;
