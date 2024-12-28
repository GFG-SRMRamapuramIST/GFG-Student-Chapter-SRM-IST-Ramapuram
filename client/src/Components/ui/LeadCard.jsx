import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import ImageLoaderComponent from "../../Utility/ImageLoaderComponent";
import { codolioBWIcon, codolioIcon } from "../../assets/icons";

const LeadCard = ({ lead }) => {
  return (
    <motion.div
      className="w-60 h-auto bg-green-900 rounded-xl shadow-lg shadow-zinc-500 p-6 flex flex-col items-center m-2 transition-transform transform"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.85 }}
      whileHover={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="relative w-32 h-32 mb-4">
        <ImageLoaderComponent
          url={lead.image.url}
          hashCode={lead.image.hashCode}
          alt={lead.image.alt}
          className="bg-green-200 w-full h-full rounded-full rounded-t-full rounded-bl-full object-cover border-4 border-white shadow-md"
          blurWidth={"128px"}
          blurHeight={"128px"}
          rounded={true}
        />

        <a
          href={lead.socials.codolio}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition duration-300 flex absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-1 h-8 items-center justify-center rounded-full"
        >
          <img
            src={codolioIcon}
            alt="codolio"
            className="w-6"
          />
        </a>
      </div>
      <div className="text-lg font-bold text-white text-center">
        {lead.name}
      </div>
      <div className="flex space-x-4 mt-4">
        <a
          href={lead.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="text-white hover:scale-110 transition duration-300"
            size={28}
          />
        </a>

        {lead.socials.instagram && (
          <a
            href={lead.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-white hover:scale-110 transition duration-300"
              size={28}
            />
          </a>
        )}
        {lead.socials.twitter && (
          <a
            href={lead.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              className="text-white hover:scale-110 transition duration-300"
              size={28}
            />
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
      linkedin: PropTypes.string.isRequired,
      instagram: PropTypes.string,
      twitter: PropTypes.string,
      codolio: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default LeadCard;
