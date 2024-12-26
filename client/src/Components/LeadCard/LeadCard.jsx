import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import ImageLoaderComponent from '../../Utility/ImageLoaderComponent';

const LeadCard = ({ lead }) => {
  return (
    <motion.div 
      className="w-60 h-auto bg-blue-950 rounded-xl shadow-lg p-6 flex flex-col items-center m-2 transition-transform transform "
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.85 }}
    >
      <div className="relative w-32 h-32 mb-4">
        <ImageLoaderComponent
          url={lead.image.url}
          hashCode={lead.image.hashCode}
          alt={lead.image.alt}
          className="bg-blue-200 w-full h-full rounded-full object-cover border-4 border-white shadow-md"
          blurWidth={'128px'}
          blurHeight={'128px'}
          rounded={true}
        />
      </div>
      <div className="text-lg font-bold text-white text-center ">
        {lead.name}
      </div>
      <div className="text-sm font-light text-gray-300 text-center mb-4">
        {lead.role}
      </div>
      <div className="flex space-x-4">
        {lead.socials.linkedin && (
          <a href={lead.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-[#0A66C2] transition duration-300" size={28} />
          </a>
        )}
        {lead.socials.instagram && (
          <a href={lead.socials.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-[#E4405F] transition duration-300" size={28} />
          </a>
        )}
        {lead.socials.twitter && (
          <a href={lead.socials.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-[#1DA1F2] transition duration-300" size={28} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

LeadCard.propTypes = {
  lead: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      hashCode: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    socials: PropTypes.shape({
      linkedin: PropTypes.string,
      instagram: PropTypes.string,
      twitter: PropTypes.string,
    }),
  }).isRequired,
};

export default LeadCard;