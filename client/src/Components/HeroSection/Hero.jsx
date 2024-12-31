import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaUserFriends } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { boxBackdrop } from "../../assets";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleLearnMoreClick = () => {
    const subHeadingElement = document.getElementById("SubHeading");
    if (subHeadingElement) {
      const offset = 32; // Adjust this value to change the offset
      const elementPosition = subHeadingElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-gradient-to-bl from-hover-gray via-green-50 to-gfgsc-green-200 ">
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center px-8 sm:px-6 md:px-8 lg:px-16 pt-16 pb-8 md:pt-24 md:pb-16 gap-8 md:gap-12">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center max-md:items-center max-md:text-center space-y-4 md:space-y-6 md:pr-12 md:pl-8 relative z-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2"
          >
            <SiGeeksforgeeks className="text-gfgsc-green w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-md md:text-lg lg:text-xl font-semibold text-gfgsc-green">
              Student Chapter SRM RMP
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold md:font-black text-gray-800 leading-tight"
          >
            Where Code Meets
            <span className="text-gfgsc-green"> Community</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 py-2"
          >
            {"Join SRM Ramapuram's premier coding community. Learn, grow, and build together with fellow tech enthusiasts guided by GeeksforGeeks."}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 sm:gap-4">
            <button className="px-4 sm:px-8 py-2.5 sm:py-3 bg-gfgsc-green text-white rounded-lg font-semibold shadow-lg hover:bg-opacity-95 transform hover:scale-105 transition-all text-sm sm:text-base">
              Join Chapter
            </button>
            <button 
              className="px-4 sm:px-8 py-2.5 sm:py-3 border-2 border-gfgsc-green text-gfgsc-green rounded-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all text-sm sm:text-base"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
          </motion.div>

          <motion.div variants={containerVariants} className="flex flex-wrap items-center max-md:justify-center gap-2 md:gap-4 sm:gap-8 pt-4">
            {[
              { icon: FaUserFriends, text: "50+ Members" },
              { icon: FaLaptopCode, text: "20+ Events" },
              { icon: FaCode, text: "100+ Contests" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-2"
              >
                <item.icon className="text-gfgsc-green w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium text-gray-600">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Code Pattern Overlay */}
          <div
              className="hidden  max-md:flex absolute inset-0 text-black opacity-40 bg-repeat z-[-1]"
              style={{
                backgroundImage: `url(${boxBackdrop})`,
                backgroundSize: "30px sm:40px",
              }}
            />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="hidden md:flex w-full md:w-1/3 lg:w-1/2 h-[300px] sm:h-[400px] md:h-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg aspect-square">
            {/* Animated Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gfgsc-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            />
            <motion.div
              animate={{
                y: [-20, 20, -20],
                x: [10, -10, 10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gfgsc-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            />

            {/* Code Pattern Overlay */}
            <div
              className="absolute inset-0 text-black opacity-40 bg-repeat"
              style={{
                backgroundImage: `url(${boxBackdrop})`,
                backgroundSize: "30px sm:40px",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;