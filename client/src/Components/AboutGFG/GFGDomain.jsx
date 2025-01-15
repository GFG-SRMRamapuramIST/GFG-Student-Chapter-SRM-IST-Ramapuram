import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ImageLoaderComponent } from "../../Utility";

// Importing Icons
import { BiRightArrowAlt } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";

// Importing APIs
import { getAllDomains } from "../../APIs/APICall";
import { urlFor } from "../../APIs/APIConfiguration";

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
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDomains = async () => {
      setLoading(true);
      const data = await getAllDomains();
      if (data?.error) {
        setError(true);
      } else {
        setDomains(data);
        //console.log(data);
      }
      setLoading(false);
    };

    fetchDomains();
  }, []);

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
                Join a vibrant community where innovation meets learning. Dive
                into multiple domains, collaborate with peers, and shape your
                technical journey with hands-on experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                className="inline-flex items-center py-3 text-lg font-medium text-gfgsc-green transition duration-300 group"
                whileHover={{ scale: 1.02 }}
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
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <FaSpinner className="spinner text-center text-sm sm:text-sm" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              Failed to load domains. Please try again later.
            </div>
          ) : (
            <div className="grid gap-6 h-full">
              {domains.map((domain, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-md bg-${domain.cardbgColor}-100`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-8">
                      <ImageLoaderComponent
                        url={urlFor(domain.domainlogo)}
                        alt={domain.domaintitle}
                        hashCode={domain.domainlogo.hashCode}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg">
                      {domain.domaintitle}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.domaintags.map((tag, tagIndex) => (
                      <motion.span
                        key={`${domain.hashCode}-${tagIndex}`}
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
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default GFGDomain;
