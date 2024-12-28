import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa";
import { codolioIcon } from "../../assets/icons";
import { ImageLoaderComponent } from "../../Utility";

const MemberCard = ({ member, index, style }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-2 m-2 flex items-center"
      style={style}
    >
      <div className="flex items-center w-full pl-2 pr-2">
        <div className="flex items-center justify-center border-1 md:border-2 rounded-full w-2/12 md:w-[12%] mr-2 max-md:p-1">
          <ImageLoaderComponent
            url={member.image.url}
            hashCode={member.image.hashCode}
            alt={member.image.alt}
            className="rounded-full bg-hover-gray "
            blurWidth={"32px"}
            blurHeight={"32px"}
            rounded
          />
        </div>
        <div className="flex flex-col w-6/12 md:w-[53%] p-2">
          <div className="text-sm sm:text-md md:text-lg font-semibold text-gray-900">
            {member.name}
          </div>
          <p className="text-xs sm:text-sm md:text-md text-green-500 hover:text-green-700 transition duration-300">
            {member.caption}
          </p>
        </div>
        <div className="flex space-x-2 md:space-x-4 items-center justify-end w-4/12 md:w-[35%] p-2">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 hover:text-blue-700 hover:scale-105 transition duration-300"
            >
              <FaLinkedin size={32} className="max-md:w-5 max-lg:w-6" />
            </a>
          )}
          {member.socials.codolio && (
            <a
              href={member.socials.codolio}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img
                src={codolioIcon}
                alt="codolio"
                className="aspect-square max-md:h-5 max-lg:h-6 h-8 filter brightness-125 grayscale-[20%] hover:filter-none hover:scale-105 transition duration-300 object-contain"
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
    caption: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      hashCode: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    socials: PropTypes.shape({
      linkedin: PropTypes.string,
      codolio: PropTypes.string,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object,
};

export default MemberCard;
