import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaUsers } from 'react-icons/fa';

const SubHeading = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-gfgsc-green" size={28} />,
      title: "Learn",
      description: "Access curated DSA content and hands-on coding workshops"
    },
    {
      icon: <FaCode className="text-gfgsc-green" size={28} />,
      title: "Build",
      description: "Work on real projects and enhance your development skills"
    },
    {
      icon: <FaUsers className="text-gfgsc-green" size={28} />,
      title: "Connect",
      description: "Join a community of passionate student developers"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='SubHeading' className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Subheading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
              Where Knowledge Meets
              <span className="text-gfgsc-green"> Opportunity</span>
            </h2>
            <div className="w-20 md:w-32 h-1 md:h-1.5 bg-gfgsc-green mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sub Heading Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white p-6 rounded-xl hover:rounded-b-md border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gfgsc-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-sm" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubHeading;