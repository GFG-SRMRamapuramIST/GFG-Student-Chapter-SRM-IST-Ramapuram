import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa";
import { codolioIcon } from "../../assets/icons";

const MemberCard = ({ member, index, style }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 m-2 flex items-center"
      style={style}
    >
      <div className="flex items-center w-full px-4">
        {/* <div className="text-2xl font-bold text-gray-700 mr-4 w-1/12">
          {index + 1}
        </div> */}
        <div className="flex flex-col w-8/12 ">
          <div className="text-lg font-semibold text-gray-900">
            {member.name}
          </div>
          <p className="text-blue-500 hover:text-blue-700 transition duration-300">
            {"Member Caption"}
          </p>
        </div>
        <div className="flex space-x-4 justify-end w-4/12">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 hover:scale-105 transition duration-300"
            >
              <FaLinkedin size={32} />
            </a>
          )}
          {member.socials.codolio && (
            <a
              href={member.socials.codolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={codolioIcon}
                alt="codolio"
                className="w-8 h-8 filter brightness-125 grayscale-[20%] hover:filter-none hover:scale-105 transition duration-300"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    socials: PropTypes.shape({
      linkedin: PropTypes.string,
      codolio: PropTypes.string,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object,
};

export default MemberCard;
