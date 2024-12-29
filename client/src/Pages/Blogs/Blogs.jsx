import { Link } from "react-router-dom";
import { ImageLoaderComponent } from "../../Utility";
import AllBlogsCard from "../../Components/BlogsCard/AllBlogsCard";
import { templateImg } from "../../assets";
import { motion } from "framer-motion";
import { boxBackdrop } from "../../assets";

const Blogs = () => {
  const allBlogs = [
    {
      url: templateImg,
      hashCode: "LCF~Kjii-:I=yNs%NKt5??.7xvRO",
      title: "Exploring the Tech World",
      date: "Wednesday, 1 January 2025",
      about: "Dive into the latest advancements in technology and how they are shaping our future.",
      details: "exploring-the-tech-world",
    },
    {
      url: templateImg,
      hashCode: "LCF~Kjii-:I=yNs%NKt5??.7xvRO",
      title: "Mastering Web Development",
      date: "Monday, 10 February 2025",
      about: "A comprehensive guide to becoming a proficient web developer in today's market.",
      details: "mastering-web-development",
    },
  ];

  return (
    <div className="pb-16 pt-32 sm:pb-8 relative bg-green-100">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `url(${boxBackdrop})`, // Use the correct backdrop image URL here
          backgroundSize: "30px sm:40px",
        }}
      />

      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold lg:font-black uppercase text-gfgsc-green pd-8 z-[1] relative">
        BLOGS
      </h1>

      {/* Latest Blog Section with top-up motion */}
      <motion.div
        className="latest mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="pl-[400px] text-6xl sm:text-4xl md:text-2xl font-bold lg:font-black uppercase text-gfgsc-green z-[1] relative">
          Latest Blog
        </h2>

        {/* Blog Card */}
        <motion.div
          className="max-w-4xl mx-auto bg-white p-4 md:p-8 mb-10 rounded-lg shadow-md mt-8 flex flex-col sm:flex-row relative z-[1]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left Side: Image */}
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <ImageLoaderComponent
              url={templateImg}
              hashCode={"LCF~Kjii-:I=yNs%NKt5??.7xvRO"}
              alt="Template Image"
              className="w-full h-auto rounded-lg"
              blurWidth={"100%"}
              blurHeight={"250px"}
            />
            <p className="text-[#666666] py-2 text-sm sm:text-md font-semibold mb-2">
              Wednesday, 1 January 2025
            </p>
            <h4 className="text-gray-700 text-lg sm:text-2xl font-bold mb-2 capitalize whitespace-nowrap leading-tight">
              Exploring the Tech World
            </h4>
          </div>

          {/* Right Side: Content */}
          <div className="sm:w-1/2 pl-0 sm:pl-8 relative z-[1]">
            <h8 className="text-gray-700 text-[24px] sm:text-4xl font-bold mb-4 capitalize">
              Exploring the Tech World
            </h8>
            <p className="text-gray-500 text-sm py-8 sm:text-md font-semibold mb-6">
              Dive into the latest advancements in technology and how they are shaping our future.
            </p>
            <div className="text-left absolute bottom-0 w-full">
              <Link
                to={`/blogs/${"WebsiteLaunch.jsx"}`} // Make the link point to the blog page
                className="bg-white text-gray-400 py-2 px-0 hover:text-gray-700 transition text-center"
              >
                Read More...
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* All Blogs Section */}
      <div className="px-[30px] flex flex-col gap-[10px] sm:gap-[30px] mt-[30px] relative z-[1]">
        <h2 className="text-[40px] font-bold capitalize text-gfgsc-green text-center">All Blogs</h2>
        <div className="flex flex-wrap justify-center gap-[20px] mt-[20px]">
          {allBlogs.map((blog, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/blogs/${blog.details}`} key={blog.details}>
                <AllBlogsCard
                  url={blog.url}
                  hashCode={blog.hashCode}
                  title={blog.title}
                  date={blog.date}
                  about={blog.about}
                  details={blog.details}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
