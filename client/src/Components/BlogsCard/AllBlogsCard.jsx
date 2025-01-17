import { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ImageLoaderComponent } from "../../Utility";

function AllBlogsCard({ url, hashCode, title, date, about, details }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const cardStyle = {
    transition: "box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out",
    boxShadow: isHovered
      ? "0 4px 16px rgba(255, 255, 255, 0.6)"
      : "0 4px 12px rgba(207, 216, 220, 0.4)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    cursor: "pointer",
  };

  const shortAbout = about.length > 180 ? `${about.substring(0, 180)}...` : about;
  const shortTitle = title.length > 24 ? `${title.substring(0, 24)}...` : title;

  return (
    <motion.div
      className="bg-white p-[10px] pb-[16px] rounded-[16px] min-w-[300px] max-w-[350px] min-h-[408px]"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.75 }}
    >
      <div
        className="rounded-[12px] overflow-hidden border border-gray-400 text-center"
        style={{ width: "330px", height: "250px" }}
      >
        <ImageLoaderComponent
          url={url}
          hashCode={hashCode}
          alt={title}
          className="h-[250px] w-[330px] object-cover"
          blurWidth={"330px"}
          blurHeight={"250px"}
        />
      </div>

      <div className="mt-6">
        <p className="mt-4 mb-1.5 text-[#333333] text-[13px] font-semibold">
          {date}
        </p>

        <div className="flex justify-between items-center">
          <h3 className="mb-1.5 font-bold text-[20px] capitalize text-gray-700">
            {shortTitle}
          </h3>

          <motion.div
            className="cursor-pointer"
            initial={{ scale: 1, color: "darkgray" }}
            whileHover={{ scale: 1.4, color: "green" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => navigate(`/blogs/${details}`)}
          >
            <MdArrowOutward size={27} />
          </motion.div>
        </div>

        <p className="text-[14px] text-gray-700">{shortAbout}</p>
      </div>
    </motion.div>
  );
}

export default AllBlogsCard;
