import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Importing icons
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";

//Importing APIs
import { getAllFootercourses } from "../../APIs/APICall";

const Footer = () => {
  const [footerCourses, setFootercourses] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading animation
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFootercourses = async () => {
      setLoading(true);
      const data = await getAllFootercourses();
      if (data.error) {
        setError(true);
      } else {
        setFootercourses(data);
        //console.log(data);
      }
      setLoading(false);
    };

    fetchFootercourses();
  }, []);
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col max-md:items-center max-md:self-center md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-green-500">
              GFG Student Chapter
            </h1>
            <p className="text-xs md:text-sm mt-2">SRM IST Ramapuram</p>
            <p className="text-xs md:text-sm text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} GFG Student Chapter. All rights
              reserved.
            </p>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2 justify-between">
            <div className="w-1/3 mb-6 max-md:text-center">
              <h2 className="text-md md:text-lg font-semibold">Quick Links</h2>
              <ul className="text-sm md:text-md mt-4 space-y-2">
                <li>
                  <Link
                    to={"/blogs"}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/our-teams"}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact-us"}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                <Link
                    to={"/join-us"}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                     Join Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/3 mb-6 max-md:text-center">
              <h2 className="text-md md:text-lg font-semibold">Courses</h2>
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <FaSpinner className="spinner text-center text-sm sm:text-sm" />
                </div>
              ) : error ? (
                <div className="flex justify-center mt-3 h-full text-red-500">
                  <div>
                    Failed to load this component!! <br /> Please try again
                    later!!
                  </div>
                </div>
              ) : (
                <>
                  <ul className="text-sm md:text-md mt-4 space-y-2">
                    {footerCourses.map((element, index) => (
                      <li key={index}>
                        <Link
                          to={element.courseurl}
                          className="text-gray-400 hover:text-white transition duration-300"
                        >
                          {element.coursetitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="w-1/3 mb-6 max-md:text-center">
              <h2 className="text-md md:text-lg font-semibold">Developers</h2>
              <ul className="text-sm md:text-md mt-4 space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/vishal-kumar-yadav-8085a3232/"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Vishal Kumar Yadav
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/amisha-kumari-351ab9274/"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Amisha Kumari
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/jeyasuryaur"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Jeyasurya U R
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/thesaiprashanth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Sai Prashanth
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="flex space-x-4 mt-4 md:mt-0 md:pr-4 md:border-r-2">
              <Link to="/contact-us">
                <p className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                  Contact Us
                </p>
              </Link>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0 md:pl-4">
              <a
                href="https://x.com/GFG_SRM_RMP"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/geeksforgeeks_srm_rmp/"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/geeksforgeeks-srm-rmp/"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
              <div className="relative group">
                <a
                  href="mailto:your_email@example.com" // Optional, makes the icon a mail link
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  <MdEmail size={24} />
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded">
                  geeksforgeeks.srmistrmp@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
