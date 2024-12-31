import React from "react";
import { motion } from "framer-motion";
import { BiCode, BiCodeBlock, BiRightArrowAlt } from "react-icons/bi";
import { 
  SiWebpack, 
  SiTableau, 
  SiTensorflow, 
  SiFigma 
} from "react-icons/si";

const domains = [
  {
    name: "Competitive Programming",
    icon: BiCodeBlock,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    tags: ["DSA", "DP", "Problem Solving", "Algorithms"]
  },
  {
    name: "Web Development",
    icon: SiWebpack,
    color: "text-green-500",
    bgColor: "bg-green-50",
    tags: ["Frontend", "Backend", "Full Stack", "DevOps"]
  },
  {
    name: "Data Analytics",
    icon: SiTableau,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    tags: ["Statistics", "SQL", "Tableau", "Data Visualization"]
  },
  {
    name: "Machine Learning",
    icon: SiTensorflow,
    color: "text-red-500",
    bgColor: "bg-red-50",
    tags: ["Deep Learning", "Neural Networks", "TensorFlow", "NLP"]
  },
  {
    name: "Design",
    icon: SiFigma,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    tags: ["UI/UX", "Graphic Design", "Figma", "Prototyping"]
  }
];

const TextReveal = ({ children, delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="inline-block"
  >
    {children}
  </motion.span>
);

const GFGDomain = () => {
  return (
    <div className="py-6 sm:py-10 w-full flex justify-center px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row w-full sm:gap-12 rounded-xl border border-gray-100 shadow-lg bg-white overflow-hidden">
        {/* Left Section */}
        <motion.div 
          className="flex-1 p-8 lg:p-12 flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl space-y-8">
            <div className="space-y-4">
              <motion.div 
                className="text-sm uppercase tracking-widest text-gfgsc-green font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                The diversity of our club
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <TextReveal>Discover Your</TextReveal>{" "}
                <div className="relative inline-block">
                  <TextReveal delay={0.3}>
                    <span className="text-gfgsc-green">Tech Path</span>
                  </TextReveal>
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-1 bg-green-200 w-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  />
                </div>
              </h2>
            </div>

            <motion.div 
              className="prose prose-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="leading-relaxed">
                Join a vibrant community where innovation meets learning. 
                Dive into multiple domains, collaborate with peers, and shape 
                your technical journey with hands-on experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                className="inline-flex items-center py-3 text-lg font-medium text-gfgsc-green  transition duration-300 group"
                whileHover={{ scale: 1.02, }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Domains
                <BiRightArrowAlt className="ml-2 text-xl transform group-hover:translate-x-1 transition-transform" />
              </motion.div>
              
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="flex-1 p-8 lg:p-12 bg-gray-50"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-6 h-full">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.name}
                className={`p-6 rounded-xl ${domain.bgColor} backdrop-blur-sm transition-all duration-300 hover:shadow-md`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <domain.icon className={`text-2xl ${domain.color}`} />
                  <h3 className="font-semibold text-lg">{domain.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-white/80 text-gray-700"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GFGDomain;