import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Importing Icons
import { FaSpinner } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight, BsQuote } from "react-icons/bs";

import { ImageLoaderComponent } from "../../Utility";

// Importing APIs
import { getAllTestimonials } from "../../APIs/APICall";
import { urlFor } from "../../APIs/APIConfiguration";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading animation
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      const data = await getAllTestimonials();
      if (data.error) {
        setError(true);
      } else {
        setTestimonials(data);
        //console.log(data);
      }
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  // Next btn click with debouncing effect
  let timer;
  const handleNext = () => {
    if (timer) return;
    timer = setTimeout(() => {
      setIsAutoPlaying(false);
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      timer = null;
    }, 300);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const highlightText = (text, phrases) => {
    let result = text;
    phrases.forEach((phrase) => {
      result = result.replace(
        phrase,
        `<span class="bg-gfgsc-green-200 px-1 rounded">${phrase}</span>`
      );
    });
    return result;
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-screen overflow-x-hidden">
      <div className="">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-8 md:mb-16 text-gray-800">
          Testimonials
        </h2>

        <div className="relative">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div className="absolute top-4 left-4 text-gfgsc-green opacity-20">
              <BsQuote size={60} className="max-sm:max-w-8 max-sm:max-h-8" />
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl overflow-hidden  min-h-[200px]">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <FaSpinner className="spinner text-center text-sm sm:text-sm" />
                </div>
              ) : error ? (
                <div className="flex justify-center items-center h-fit text-red-500">
                  <div className="text-center">
                    Failed to load this component!! <br /> Please try again
                    later!!
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-2/3 px-4 pt-4 sm:px-8 sm:pt-8 sm:pb-2 md:py-12 md:pl-8 md:pr-4">
                      <div className="relative">
                        <div
                          className="text-gray-700 text-md sm:text-lg md:text-xl text-justify leading-relaxed mt-8 sm:mb-6"
                          dangerouslySetInnerHTML={{
                            __html: highlightText(
                              testimonials[currentIndex].testimonial,
                              testimonials[currentIndex].highlightedPhrases
                            ),
                          }}
                        />
                      </div>
                      <div className="hidden md:flex flex-col mt-8">
                        <p className="font-bold text-xl text-gray-900">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-gray-600 mt-1">
                          {testimonials[currentIndex].position}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 sm:gap-4 w-full md:w-1/3 p-4 sm:px-8 sm:pb-8 sm:pt-2 md:py-4 md:px-8 lg:py-8">
                      <motion.div
                        className="relative w-24 h-24 sm:w-40 sm:h-40 md:w-64 md:h-64 mx-2 "
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-full rounded-2xl sm:rounded-lg overflow-hidden shadow-xl">
                          <ImageLoaderComponent
                            url={urlFor(testimonials[currentIndex].image)}
                            alt={testimonials[currentIndex].imageAltText}
                            hashCode={testimonials[currentIndex].imageHashCode}
                            className="object-cover w-full h-full bg-white  "
                            blurWidth="400px"
                            blurHeight="400px"
                          />
                        </div>
                      </motion.div>
                      <div className="flex flex-col md:hidden ">
                        <p className="font-bold text-md sm:text-lg text-gray-900">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                          {testimonials[currentIndex].position}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center mt-6 gap-4">
          <button
            onClick={handlePrev}
            className="p-4 rounded-full bg-white shadow-lg hover:bg-green-50 transition-colors duration-200"
          >
            <BsChevronLeft className="text-gray-600" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-gfgsc-green" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-4 rounded-full bg-white shadow-lg hover:bg-green-50 transition-colors duration-200"
          >
            <BsChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
