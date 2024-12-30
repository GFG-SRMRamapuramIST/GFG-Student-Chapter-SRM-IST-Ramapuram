import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaArrowRightLong } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { logo } from "../../assets/icons";

// Navigation content
const BLOG_ITEMS = [
  {
    title: "Website Launch",
    date: "1st January 2025",
    path: "/blogs/website-launch",
  },
  {
    title: "Halloween Hangout",
    date: "31st October 2024",
    path: "/blogs/halloween-hangout",
  },
  {
    title: "Onboarding Meet",
    date: "19th October 2024",
    path: "/blogs/onboarding-meet",
  },
];

const NAV_LINKS = [{ title: "Our Team", path: "/our-teams" }];

const USER_NAV_LINKS = [
  {
    title: "GFG Official Page",
    path: "https://www.geeksforgeeks.org/",
    icon: <CiGlobe />,
    isExternal: true,
  },
  {
    title: "Join Us",
    path: "https://forms.gle/YgJeDFs564iiY33L6",
    icon: <FaArrowRightLong />,
    isExternal: true,
    className: "text-gfgsc-green",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setIsBlogsOpen(false);
  };

  return (
    <header className="fixed top-6 left-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-[160rem] -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto px-6 md:px-10 py-3 bg-white/95 backdrop-blur-md rounded-[2.4rem] shadow-lg hover:shadow-xl transition-shadow duration-500"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative flex items-center p-0.5">
            <img
              src={logo}
              alt="GFG Logo"
              className="max-w-[7rem] sm:max-w-[9rem]"
            />
          </Link>

          <button
            className="md:hidden p-2 rounded-full hover:bg-hover-gray"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-center">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 0 : -8,
                }}
                transition={{ duration: 0.3 }}
                className="absolute w-full h-0.5 rounded bg-gfg-black origin-center"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scale: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute w-full h-0.5 rounded bg-gfg-black"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? 0 : 8,
                }}
                transition={{ duration: 0.3 }}
                className="absolute w-full h-0.5 rounded bg-gfg-black origin-center"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-between items-center ml-8">
            {/* Main Menu */}
            <ul className="flex items-center gap-2">
              <li className="relative group">
                <Link
                  to="/blogs"
                  className="flex items-center gap-1 px-3 py-2 text-[#4c555e] rounded-full hover:bg-hover-gray transition-colors duration-200"
                >
                  Blogs
                  <FaChevronDown className="text-[#a1a7ad] text-sm" />
                </Link>

                <AnimatePresence>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.2, ease: "easeOut" },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="invisible group-hover:visible absolute top-full pt-2 opacity-0 group-hover:opacity-100"
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-[#eef0f3] min-w-[18rem]">
                      <div className="p-4">
                        <Link
                          to="/blogs"
                          className="text-gfgsc-green mb-2 inline-block"
                        >
                          Blogs
                        </Link>
                        {BLOG_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block p-2 rounded hover:bg-hover-gray transition-colors duration-200 group/item"
                          >
                            <div className="flex items-center justify-between text-[#28323b] font-medium">
                              {item.title}
                              <FaArrowRightLong className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 text-sm" />
                            </div>
                            <span className="text-sm text-[#4c555e]">
                              {item.date}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </li>

              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="px-3 py-2 text-[#4c555e] rounded-full hover:bg-hover-gray transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* User Navigation */}
            <ul className="flex items-center gap-6">
              {USER_NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    target={link.isExternal ? "_blank" : undefined}
                    className={`flex items-center gap-1 px-3 py-2 ${
                      link.className || "text-[#434b52]"
                    } rounded-full hover:bg-hover-gray hover:underline hover:underline-offset-8 transition-all duration-200`}
                  >
                    {link.title}
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <ul className="space-y-2 pb-3 border-b border-gray-200">
                <li>
                  <button
                    onClick={() => setIsBlogsOpen(!isBlogsOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 text-[#4c555e] rounded-lg hover:bg-hover-gray"
                  >
                    <span>Blogs</span>
                    <motion.span
                      animate={{ rotate: isBlogsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-[#a1a7ad]" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isBlogsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pr-3 py-2 space-y-2">
                          {BLOG_ITEMS.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block p-2 rounded hover:bg-hover-gray transition-colors duration-200"
                            >
                              <div className="text-[#28323b] font-medium">
                                {item.title}
                              </div>
                              <span className="text-sm text-[#4c555e]">
                                {item.date}
                              </span>
                            </Link>
                          ))}
                          <Link
                            to="/blogs"
                            className="block p-2 text-sm text-gfgsc-green hover:underline"
                          >
                            See all blogs...
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="block px-3 py-2 text-[#4c555e] rounded-lg hover:bg-hover-gray"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 py-3">
                {USER_NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      target={link.isExternal ? "_blank" : undefined}
                      className={`flex items-center gap-1 px-3 py-2 ${
                        link.className || "text-[#434b52]"
                      } rounded-lg hover:bg-hover-gray`}
                    >
                      {link.title}
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
