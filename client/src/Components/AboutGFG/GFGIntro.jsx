import React, { useState, useEffect } from "react";
import { abtGfg } from "../../assets";
import { FaArrowRight } from "react-icons/fa";
import { GridBackdropDiv2 } from "../ui";

const GFGIntro = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-20 w-full flex justify-center px-12">
      <GridBackdropDiv2 className="flex flex-col lg:flex-row justify-between w-full p-8 gap-10 lg:gap-20 shadow-lg rounded-lg border border-gray-300">
        <div className="md:w-1/2 md:py-12 md:px-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <p className="text-gray-700 text-base lg:text-2xl font-medium  leading-relaxed">
            <span className="text-green-600">GeeksforGeeks</span> is a premier
            platform offering coding resources, challenges, and interview
            preparation for programmers and tech enthusiasts.{" "}
            <span className="bg-green-200 px-1 rounded">
              Trusted by 12M+ users
            </span>
            , it provides tutorials, practice problems, and courses across
            diverse domains.
          </p>
          {!isSmallScreen && (
            <div className="mt-5 text-left">
              <p
                onClick={handleClick}
                className={`inline-flex items-center text-2xl text-green-600 cursor-pointer transition-transform duration-300 ${
                  isActive ? "transform -translate-y-1" : ""
                }`}
                onMouseEnter={handleClick}
                onMouseLeave={() => setIsActive(false)}
              >
                Explore the integrations
                <FaArrowRight className="ml-2" />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-width duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </p>
            </div>
          )}
        </div>
        <div className="flex md:w-1/2 bg-cover justify-center items-center">
          <img src={abtGfg} className="max-w-xs md:max-w-sm" />
        </div>
      </GridBackdropDiv2>
    </div>
  )
};

export default GFGIntro;
