import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col max-md:items-center max-md:self-center md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-green-500">GFG Student Chapter</h1>
            <p className="text-xs md:text-sm mt-2">SRM IST Ramapuram</p>
            <p className="text-xs md:text-sm text-gray-400 mt-2">&copy; {new Date().getFullYear()} GFG Student Chapter. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2 justify-between">
            <div className="w-1/3 mb-6 max-md:text-center">
              <h2 className="text-md md:text-lg font-semibold">Quick Links</h2>
              <ul className="text-sm md:text-md mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Events</a></li>
              </ul>
            </div>
            <div className="w-1/3 mb-6 max-md:text-center">
              <h2 className="text-md md:text-lg font-semibold">Club</h2>
              <ul className="text-sm md:text-md mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Join Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-1/3 mb-6 max-md:text-center">
              <h2 className="text-md md:text-lg font-semibold">Developers</h2>
              <ul className="text-sm md:text-md mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Vishal Kumar Y</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Jeyasurya U R</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Dev 3</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Dev 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="flex space-x-4 mt-4 md:mt-0 md:pr-4 md:border-r-2">
              <a href="https://x.com/GFG_SRM_RMP" className="text-white hover:text-gray-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/geeksforgeeks_srm_rmp/" className="text-white hover:text-gray-400 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/geeksforgeeks-srm-rmp/" className="text-white hover:text-gray-400 transition duration-300">
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0 md:ml-4">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
              <a href="/contact-us" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;