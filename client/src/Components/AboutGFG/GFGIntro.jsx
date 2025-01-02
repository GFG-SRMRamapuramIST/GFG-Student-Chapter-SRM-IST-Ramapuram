import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi"; // Added BiRightArrowAlt import
import { motion } from "framer-motion"; // Added motion import

import { abtGfg } from "../../assets";
import { GridBackdropDiv2 } from "../ui";

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
          <p className="text-gray-700 text-base lg:text-lg xl:text-xl font-medium leading-relaxed whitespace-normal break-words">
            <span className="text-gfgsc-green">GeeksforGeeks</span> is a trusted
            platform for coding enthusiasts, offering a wide range of resources,
            including tutorials, coding challenges, and interview preparation
            materials.
            <span className="bg-gfgsc-green-200 rounded">
              {" "}
              With over 12 million users worldwide
            </span>
            , it provides courses and practice problems across various domains
            to help programmers enhance their skills and achieve success in
            their tech careers.
          </p>
          {!isSmallScreen && (
            <Link
              to={"https://www.geeksforgeeks.org/"}
              target="_blank"
              className="mt-5 text-left group relative"
            >
              <motion.div
                className="inline-flex items-center py-3 text-lg font-medium text-gfgsc-green transition duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore the integrations
                <BiRightArrowAlt className="ml-2 text-xl transform group-hover:translate-x-1 transition-transform" />
              </motion.div>
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
