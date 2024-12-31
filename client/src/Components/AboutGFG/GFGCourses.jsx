import { useState, useEffect } from "react";
import {
  HiOutlineCodeBracket,
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineBookOpen,
  HiOutlineTrophy,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import { courses } from "../../Utility/constants";

const GFGCourses = () => {
  // Content Arrays
  const whyChooseContent = [
    {
      title: "Industry-Ready Content",
      desc: "Curated by industry experts with real-world applications",
      Icon: HiOutlineCodeBracket,
    },
    {
      title: "Practice-Oriented Learning",
      desc: "10,000+ coding problems with detailed solutions",
      Icon: HiOutlineAcademicCap,
    },
    {
      title: "Learn at Your Pace",
      desc: "Flexible schedule with lifetime access to content",
      Icon: HiOutlineClock,
    },
  ];

  const impactStats = [
    { Icon: HiOutlineUserGroup, count: "2M+", label: "Students" },
    { Icon: HiOutlineBookOpen, count: "500+", label: "Courses" },
    { Icon: HiOutlineTrophy, count: "98%", label: "Success Rate" },
  ];

  // State and Effects
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getOrder = (index) => {
    const diff = (index - currentIndex + courses.length) % courses.length;
    return diff === 0 ? 1 : diff === 1 ? 2 : 0;
  };

  // Component Markup
  return (
    <div className="flex max-w-screen overflow-x-hidden flex-col md:flex-row w-full min-h-[600px]">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center w-full md:w-1/2 bg-hover-gray p-8 lg:p-16"
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
            Why Choose GeeksforGeeks?
          </h2>
          <div className="space-y-8">
            {whyChooseContent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start space-x-4 group"
              >
                <div className="bg-green-100 p-4 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                  <item.Icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-md md:text-lg lg:text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 bg-[#E6F9E6] p-8 lg:p-16"
      >
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 text-center">
            Our Impact
          </h2>

          <div className="grid grid-cols-3 gap-6 mb-8 w-fit">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="mb-3 transform transition-transform group-hover:scale-110">
                  <stat.Icon className="w-8 h-8 mx-auto text-green-600" />
                </div>
                <p className="text-xl font-bold text-green-700 mb-1">
                  {stat.count}
                </p>
                <p className="text-xs text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Course Carousel */}
          <div className="relative w-full h-52 mb-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`absolute left-1/2 transition-all duration-500 cursor-pointer bg-white rounded-lg shadow-xl 
                ${
                  getOrder(index) === 0
                    ? "w-40 md:w-44 lg:w-48 top-2 -translate-x-full opacity-60 scale-85"
                    : getOrder(index) === 1
                    ? "w-56 md:w-60 lg:w-64 top-0 -translate-x-1/2 opacity-100 scale-100 z-20"
                    : "w-40 md:w-44 lg:w-48 top-2 translate-x-0 opacity-60 scale-85"
                }`}
              >
                <div className="relative w-full pb-[66.67%] overflow-hidden rounded-t-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm truncate">
                    {course.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Course Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {courses[currentIndex].title}
            </h3>
            <div className="flex justify-center items-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => {
                const difference = courses[currentIndex].rating - i;

                return (
                  <div key={i} className="relative">
                    {/* Empty star as background */}
                    <HiOutlineStar className="w-5 h-5 text-gray-300" />

                    {/* Filled star with width based on rating */}
                    <div
                      className="absolute top-0 left-0 overflow-hidden"
                      style={{
                        width:
                          difference >= 1
                            ? "100%"
                            : difference > 0
                            ? `${difference * 100}%`
                            : "0%",
                      }}
                    >
                      <HiStar className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                );
              })}
              <span className="ml-2 text-gray-600">
                {courses[currentIndex].rating}/5
              </span>
            </div>
            <p className="text-gray-600 max-w-md mx-auto">
              {courses[currentIndex].description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GFGCourses;
