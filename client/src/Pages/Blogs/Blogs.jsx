import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

// Importing Icons
import { FaSpinner } from "react-icons/fa";

import { ImageLoaderComponent } from "../../Utility";
import AllBlogsCard from "../../Components/BlogsCard/AllBlogsCard";

import { boxBackdrop } from "../../assets";

// API call
import { getAllBlogs } from "../../APIs/APICall";
import { urlFor } from "../../APIs/APIConfiguration";

const Blogs = () => {
  // Google Analytics *********************************
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "gfgsrmrmp.vercel.app/blogs",
      title: "Blogs Page",
    });
  }, []);
  // *************************************************

  const [latestBlog, setLatestBlog] = useState([]);
  const [remainingBlogs, setRemainingBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      setLoading(true);
      const data = await getAllBlogs();
      if (data?.error) {
        setError(true);
      } else {
        // Separate the first blog as the latest and the rest as remaining blogs
        const [latest, ...remaining] = data;
        setLatestBlog(latest); // Set the latest blog
        setRemainingBlogs(remaining); // Set the remaining blogs
        //console.log(data);
        //console.log(latestBlog);
      }
      setLoading(false);
    };

    fetchAllBlogs();
  }, []);

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
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="spinner text-center text-sm sm:text-sm" />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-full text-red-500">
            <div className="text-center">
              Failed to load this component!! <br /> Please try again later!!
            </div>
          </div>
        ) : (
          <>
            <Link
              to={`/blogs/${latestBlog?.blogtitle
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="flex flex-col max-w-4xl mx-auto"
            >
              <motion.div
                className="bg-white p-4 md:p-8 mb-10 rounded-lg shadow-md mt-4 flex flex-col sm:flex-row relative z-[1] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Left Side: Image */}
                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                  <ImageLoaderComponent
                    url={urlFor(latestBlog.blogimage)}
                    hashCode={latestBlog.blogimage.blogimghashCode}
                    alt={latestBlog.blogimage.altText || "Blog Image"}
                    className="w-full h-auto rounded-lg"
                    blurWidth={"100%"}
                    blurHeight={"250px"}
                  />
                  <p className="text-[#666666] py-2 text-sm sm:text-md font-semibold mb-2">
                    {new Date(latestBlog.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h4
                    id="heading"
                    className="text-gray-700 text-lg sm:text-2xl font-bold mb-2 capitalize whitespace-nowrap leading-tight"
                  >
                    {shortTitle(latestBlog.blogtitle)}
                  </h4>
                </div>

                {/* Right Side: Content */}
                <div className="sm:w-1/2 pl-0 sm:pl-8 relative z-[1]">
                  <h5
                    id="subheading"
                    className="text-gray-700 text-[14px] sm:text-[20px] font-bold mb-4 capitalize"
                  >
                    {shortTitle(latestBlog.subHeading)}
                  </h5>
                  <p
                    id="about"
                    className="text-gray-500 text-sm py-8 sm:text-md font-semibold mb-6"
                  >
                    {shortDesc(latestBlog.description.join(" "))}
                  </p>
                  <div className="text-left absolute bottom-0 w-full">
                    <span className="bg-white text-green-400 py-2 px-0 hover:text-gfgsc-green transition text-center">
                      Read More...
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </>
        )}
      </motion.div>

      {/* All Blogs Section */}
      <div className=" flex flex-col gap-[10px] sm:gap-[30px] mt-[30px] relative z-[1]">
        <h2 className="text-[40px] font-bold capitalize text-gfgsc-green text-center">
          All Blogs
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="spinner text-center text-sm sm:text-sm" />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-full text-red-500">
            <div className="text-center">
              Failed to load this component!! <br /> Please try again later!!
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-[20px] mt-[20px]">
              {remainingBlogs.map((blog, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/blogs/${blog.blogtitle
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    <AllBlogsCard
                      url={urlFor(blog.blogimage)}
                      hashCode={blog.blogimage.blogimghashCode}
                      title={shortTitle(blog.blogtitle)}
                      date={new Date(blog.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                      about={shortAbout(blog.subHeading || "")}
                      details={shortDesc(blog.description?.join(" ") || "")}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const shortTitle = (title) =>
  title.length > 30 ? `${title.substring(0, 30)}...` : title;

const shortAbout = (about) =>
  about.length > 20 ? `${about.substring(0, 80)}...` : about;

const shortDesc = (about) =>
  about.length > 150 ? `${about.substring(0, 450)}...` : about;

export default Blogs;
