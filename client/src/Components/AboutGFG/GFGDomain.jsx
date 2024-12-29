import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import gfgdomainImage from "../../assets/imgs/gfgdomain.jpeg"; 

const GFGDomain = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-10 w-full flex justify-center px-0 sm:px-2 md:px-4 lg:px-12 bg-white">
      <div className="flex px-0 flex-col lg:flex-row justify-between w-full p-6 gap-6 lg:gap-12 shadow-sm rounded-lg border border-gray-200 min-h-full bg-white h-[500px]">
        <div className="flex-1 p-6 bg-white rounded-lg flex items-center justify-center">
          <div className="text-left">
            <p className="text-gray-700 px-12 text-base lg:text-xl xl:text-2xl font-medium leading-relaxed whitespace-normal break-words">
              <span className="text-green-600">Domain</span> Identify relevant leads based on your ideal customer profile.
            </p>
            {!isSmallScreen && (
              <div className="mt-5 text-left">
                <p className="inline-flex items-left text-2xl px-12 text-green-600 cursor-pointer relative group">
                  Explore our Domains
                  <FaArrowRight className="ml-2" />
                  <span className="absolute bottom-0 left-0 h-0.5 bg-green-600 w-0 group-hover:w-full transition-all duration-300"></span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex md:w-1/2 bg-cover justify-center items-center">
        <div className={`flex-1 p-6 bg-white rounded-lg relative ${isSmallScreen ? "" : "pb-0"}`}>
          <div className="flex justify-center items-center h-full w-full px-0">
            <img
              src={gfgdomainImage} 
              alt="GeeksforGeeks"
              className={`object-contain w-full h-full rounded-lg border-t-2 border-l-2 border-gray-200 mt-12 ml-10 ${
                isSmallScreen ? "max-w-xs" : "w-full max-w-none"
              }`}
              style={{
                maxHeight: isSmallScreen ? "80vh" : "auto",
              }}
            />
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default GFGDomain;
