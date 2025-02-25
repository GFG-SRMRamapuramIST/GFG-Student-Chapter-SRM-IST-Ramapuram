import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing icons
import { FaSpinner, FaPaperPlane, FaCircle, FaAsterisk } from "react-icons/fa"; // Added FaAsterisk

// Importing assets
import { boxBackdrop } from "../assets";
import { ImageLoaderComponent } from "../Utility";
import contactImage from "../assets/imgs/contactusdino.png";

// API call
import { submitContactForm } from "../APIs/APICall";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [lastSubmitted, setLastSubmitted] = useState(
    sessionStorage.getItem("lastSubmitted") || null
  );
  const [errors, setErrors] = useState({
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (lastSubmitted) {
      const timeElapsed = Date.now() - lastSubmitted;
      if (timeElapsed >= 60000) {
        sessionStorage.removeItem("lastSubmitted");
        setLastSubmitted(null);
      }
    }
  }, [lastSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: "", // Reset error message on change
    }));
  };

  const validateForm = () => {
    let formValid = true;
    const newErrors = {};

    if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long.";
      formValid = false;
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (lastSubmitted && Date.now() - lastSubmitted < 60000) {
      toast.error("Please wait a minute before submitting again!");
      return;
    }

    const { name, email, subject, message } = formData;
    setLoading(true);

    try {
      const data = await submitContactForm({ name, email, subject, message });

      if (data.error) {
        toast.error(`Error: ${data.message || "Something went wrong"}`);
        return;
      }

      toast.success("Form submitted successfully!");

      // Set last submitted time
      const currentTime = Date.now();
      sessionStorage.setItem("lastSubmitted", currentTime);
      setLastSubmitted(currentTime);
    } catch (error) {
      toast.error(`Error: ${error.message || "Network error"}`);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const contactUs = [
    {
      image: contactImage,
      imageAltText: "Contact Image",
      imageHashCode: "LGN-J-^,}09saMt7-;M{#=RjSwR%",
    },
  ];
  const [typingText, setTypingText] = useState("");
  const fullText = "We would love to hear from you!";

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
          <div className="space-y-4 sm:space-y-6 py-4 sm:py-8 px-4 text-black">
            <div className="flex items-center space-x-4">
              <FaCircle className="w-3 h-3 flex-shrink-0 text-green-700 fill-green-700" /> {/* Reduced size */}
              <span>
                Contact us for queries about upcoming events, collaborations, or
                recruitment.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaCircle className="w-3 h-3 flex-shrink-0 text-green-700 fill-green-700" /> {/* Reduced size */}
              <span>
                Share your suggestions for events you'd like us to organize.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaCircle className="w-3 h-3 flex-shrink-0 text-green-700 fill-green-700" /> {/* Reduced size */}
              <span>
                Send us your testimonials about our club and past events.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaCircle className="w-3 h-3 flex-shrink-0 text-green-700 fill-green-700" /> {/* Reduced size */}
              <span>Have an idea to improve our website? Let us know!</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaCircle className="w-3 h-3 flex-shrink-0 text-green-700 fill-green-700" /> {/* Reduced size */}
              <span>
                Multiple form submissions are not allowed; we will reach out to
                you soon.
              </span>
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
                Name <FaAsterisk className="inline text-red-500 ml-[2px] text-[6px]" /> {/* Added Asterisk */}
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
                Email <FaAsterisk className="inline text-red-500 ml-[2px] text-[6px]" /> {/* Added Asterisk */}
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
                htmlFor="subject"
                className="block text-sm font-medium text-green-700 mb-1 sm:mb-2"
              >
                Subject <FaAsterisk className="inline text-red-500 ml-[2px] text-[6px]" /> {/* Added Asterisk */}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Reason for contacting"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-green-700 mb-1 sm:mb-2"
              >
                Message <FaAsterisk className="inline text-red-500 ml-[2px] text-[6px]" /> {/* Added Asterisk */}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Type your message here"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
              className="w-full bg-green-600 text-white py-2 sm:py-3 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                {loading ? (
                <>
                  <FaSpinner className="spinner text-center text-sm sm:text-sm" />
                  <span>Loading</span>
                </>
                ) : (
                <>
                  <FaPaperPlane className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span>Send Message</span>
                </>
                )}
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
