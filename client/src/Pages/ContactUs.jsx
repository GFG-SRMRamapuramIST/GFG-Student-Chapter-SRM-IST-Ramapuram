import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
//Importing icons
import { FaPaperPlane } from "react-icons/fa";
//Importing assets
import { boxBackdrop } from "../assets";
import { ImageLoaderComponent } from "../Utility";
import contactImage from "../assets/imgs/contactusdino.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    message: "",
  });
  const contactUs = [
    {
      image: contactImage,
      imageAltText: "Contact Image",
      imageHashCode: "LGN-J-^,}09saMt7-;M{#=RjSwR%",
    },
  ];

  const [typingText, setTypingText] = useState("");
  const fullText = "We would love to hear from you!";
  const [formSubmitted, setFormSubmitted] = useState(false);

 
  const currentIndex = 0;

  useEffect(() => {
    let timer;
    if (typingText.length < fullText.length) {
      timer = setTimeout(() => {
        setTypingText(fullText.slice(0, typingText.length + 1));
      }, 100);
    } else {
      setTimeout(() => setTypingText(""), 1000);
    }
    return () => clearTimeout(timer);
  }, [typingText]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      domain: "",
      message: "",
    });

    setFormSubmitted(true);
  };

  return (
    <div
      className="relative min-h-[500px] bg-gradient-to-br from-white to-green-50 flex items-center justify-center py-8 p-8 pt-28"
      style={{
        backgroundImage: `url(${boxBackdrop})`,
        backgroundSize: "30px 30px",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
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
      <div className="relative z-10 bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
        {/* Left Side */}
        <div className="flex flex-col space-y-4 sm:space-y-6 mt-2 sm:mt-4">
          <div className="flex items-center flex-col sm:flex-row">
            <div className="relative h-[80px] sm:h-[100px] flex-shrink-0">
              <ImageLoaderComponent
                url={contactUs[currentIndex].image}
                alt={contactUs[currentIndex].imageAltText}
                hashCode={contactUs[currentIndex].imageHashCode}
                className="object-cover h-full bg-white"
                blurWidth="100px"
                blurHeight="100px"
              />
            </div>
            <div className="ml-0 sm:ml-4 mt-4 sm:mt-0 flex flex-col min-w-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 text-green-800 text-center sm:text-left">
                Contact Us
              </h2>
              <p className="text-green-600 mb-4 h-6 text-center sm:text-left">
                {typingText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-2 sm:space-y-4 py-4 sm:py-8 px-4 text-black pl-4">
            <div className="flex items-center space-x-4">
              <span className="w-2 h-2 rounded-full bg-green-700"></span>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-2 h-2 rounded-full bg-green-700"></span>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-2 h-2 rounded-full bg-green-700"></span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-2 h-2 rounded-full bg-green-700"></span>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-2 h-2 rounded-full bg-green-700"></span>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center mt-[-10px] sm:mt-[-20px]">
          <form
            onSubmit={handleSubmit}
            className="space-y-3 sm:space-y-4 p-4 sm:p-2"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-green-700 mb-1 sm:mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-green-700 mb-1 sm:mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="domain"
                className="block text-sm font-medium text-green-700 mb-1 sm:mb-2"
              >
                Domain
              </label>
              <input
                type="text"
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                placeholder="Reason for contact"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-green-700 mb-1 sm:mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Message"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 sm:py-3 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <FaPaperPlane className="w-4 sm:w-5 h-4 sm:h-5" />
              <span>Send Message</span>
            </button>
            {formSubmitted && (
              <p className="text-center text-green-600 mt-2 sm:mt-4 font-semibold">
                Form Submitted
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
