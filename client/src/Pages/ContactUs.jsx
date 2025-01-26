import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Importing assets
import contactImage from "../assets/imgs/contactusdino.png";
import { boxBackdrop } from "../assets";
// Importing Icons
import { FaPaperPlane } from "react-icons/fa";
import { Blurhash } from "react-blurhash"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    message: "",
  });

  const [typingText, setTypingText] = useState("");
  const fullText = "We would love to hear from you!";
  const [imageLoaded, setImageLoaded] = useState(false); // Image loading state
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

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

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      domain: "",
      message: "",
    });

    // Show form submitted message
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
      <div className="relative z-10 bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 gap-8 p-8">
        {/* Left Side: Contact Form */}
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4 p-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-green-800 text-center">Get in Touch</h2>
              <p className="text-green-600 text-center mb-6 h-6">
                {typingText}
                <span className="animate-pulse">|</span>
              </p>
              <label htmlFor="name" className="block mt-12 text-sm font-medium text-green-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full px-3 py-2 bg-white/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-3 py-2 bg-white/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="domain" className="block text-sm font-medium text-green-700 mb-2">
                Domain
              </label>
              <input
                type="text"
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                placeholder="Your Company/Website"
                className="w-full px-3 py-2 bg-white/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-green-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Message"
                className="w-full px-3 py-2 bg-white/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <FaPaperPlane className="w-5 h-5" />
              <span>Send Message</span>
            </button>
            {formSubmitted && (
              <p className="text-center text-green-600 mt-4 font-semibold">Form Submitted</p>
            )}
          </form>
        </div>
        <div className="flex flex-col">
          <div className="relative w-full h-50 overflow-hidden">
            {!imageLoaded && (
              <Blurhash
                hash="LGN-J-^,}09saMt7-;M{#=RjSwR%"
                width="100%"
                height="100%"
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            )}
            <img
              src={contactImage}
              alt="Contact"
              className={`w-full object-cover transition-opacity duration-700 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-4 text-green-700 px-4">
              <span className="w-2 h-2 rounded-full bg-green-700 mr-2"></span> 
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
            </div>
            <div className="flex items-center space-x-4 text-green-700 px-4">
              <span className="w-2 h-2 rounded-full bg-green-700 mr-2"></span> 
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
            </div>
            <div className="flex items-center space-x-4 text-green-700 px-4">
              <span className="w-2 h-2 rounded-full bg-green-700 mr-2"></span> 
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
            </div>
            <div className="flex items-center space-x-4 text-green-700 px-4">
              <span className="w-2 h-2 rounded-full bg-green-700 mr-2"></span>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit</span>
            </div>
            <div className="flex items-center space-x-4 text-green-700 px-4">
              <span className="w-2 h-2 rounded-full bg-green-700 mr-2"></span>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit</span>
            </div>
          </div>
        </div>
      </div>
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
        className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gfgsc-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
    </div>
  );
};

export default ContactUs;
