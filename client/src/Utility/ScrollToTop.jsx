import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {backToTop && (
        <motion.button
          className="bg-gray-700 p-2 rounded-full"
          onClick={scrollUp}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
<<<<<<< HEAD
          <FaArrowUp className="text-green-500 w-5 h-5" />
=======
          <FaArrowUp className="text-gfgsc-green w-5 h-5" />
>>>>>>> 24ecc86c0e06a2f86c82c520a12881ba075f7718
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTop;
