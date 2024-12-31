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
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint tempore quaerat natus aperiam vel voluptas repellendus, quos consequuntur ratione distinctio molestiae optio harum corrupti nostrum maxime est labore ea.",
      date: "Tuesday, 31 October 2025",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint tempore quaerat natus aperiam vel voluptas repellendus, quos consequuntur ratione distinctio molestiae optio harum corrupti nostrum maxime est labore ea.",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint tempore quaerat natus aperiam vel voluptas repellendus, quos consequuntur ratione distinctio molestiae optio harum corrupti nostrum maxime est labore ea.",
    },
    {
      url: templateImg,
      hashCode: "LCF~Kjii-:I=yNs%NKt5??.7xvRO",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint tempore quaerat natus aperiam vel voluptas repellendus, quos consequuntur ratione distinctio molestiae optio harum corrupti nostrum maxime est labore ea.",
      date: "Friday, 10 November 2025",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint tempore quaerat natus aperiam vel voluptas repellendus, quos consequuntur ratione distinctio molestiae optio harum corrupti nostrum maxime est labore ea.",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint tempore quaerat natus aperiam vel voluptas repellendus, quos consequuntur ratione distinctio molestiae optio harum corrupti nostrum maxime est labore ea.",
    },
  ];

  return (
    <div className="flex flex-col justify-center px-8 items-center pb-16 pt-32 sm:pb-8 relative bg-green-100">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-60 bg-repeat"
        style={{
          backgroundImage: `url(${boxBackdrop})`,
          backgroundSize: "30px sm:40px",
        }}
      />

      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold lg:font-black uppercase text-gfgsc-green pd-8 z-[1] relative">
        BLOGS
      </h1>

      {/* Latest Blog Section */}
      <motion.div
        className="latest mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="pl-6 text-xl sm:text-2xl md:text-3xl font-bold lg:font-black uppercase text-gfgsc-green z-[1] relative">
          Latest Blog
        </h2>

        {/* Blog Card */}
        <Link to={`/blogs/website-launch`} className="flex flex-col max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-4 md:p-8 mb-10 rounded-lg shadow-md mt-4 flex flex-col sm:flex-row relative z-[1] cursor-pointer"
            whileHover={{ scale: 1.02 }}
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
              <h4
                id="heading"
                className="text-gray-700 text-lg sm:text-2xl font-bold mb-2 capitalize whitespace-nowrap leading-tight"
              >
                {shortTitle("Exploring the Tech World Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint repudiandae dolorum maxime ratione sapiente.")}
              </h4>
            </div>

            {/* Right Side: Content */}
            <div className="sm:w-1/2 pl-0 sm:pl-8 relative z-[1]">
              <h5
                id="subheading"
                className="text-gray-700 text-[14px] sm:text-[20px] font-bold mb-4 capitalize"
              >
                {shortTitle("Exploring the Tech World Lorem ipsum dolor sit amet consectetur adipisicing elit.")}
              </h5>
              <p
                id="about"
                className="text-gray-500 text-sm py-8 sm:text-md font-semibold mb-6"
              >
                {shortDesc("Dive into the latest advancements in technology and how they are shaping our future. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint tempore quaerat natus aperiam vel voluptas repellendus, quos consequuntur ratione distinctio molestiae optio harum corrupti nostrum maxime est labore ea.")}
              </p>
              <div className="text-left absolute bottom-0 w-full">
                <span className="bg-white text-green-400 py-2 px-0 hover:text-gfgsc-green transition text-center">
                  Read More...
                </span>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* All Blogs Section */}
      <div className="px-[30px] flex flex-col gap-[10px] sm:gap-[30px] mt-[30px] relative z-[1]">
        <h2 className="text-[40px] font-bold capitalize text-gfgsc-green text-center">
          All Blogs
        </h2>
        <div className="flex flex-wrap justify-center gap-[20px] mt-[20px]">
          {allBlogs.map((blog, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/blogs/${blog.details}`}>
                <AllBlogsCard
                  url={blog.url}
                  hashCode={blog.hashCode}
                  title={shortTitle(blog.title)}
                  date={blog.date}
                  about={shortAbout(blog.about)}
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

const shortTitle = (title) =>
  title.length > 30 ? `${title.substring(0, 30)}...` : title;

const shortAbout = (about) =>
  about.length > 20 ? `${about.substring(0,80)}...` : about;

const shortDesc = (about) =>
  about.length > 150 ? `${about.substring(0, 350)}...` : about;

export default Blogs;
