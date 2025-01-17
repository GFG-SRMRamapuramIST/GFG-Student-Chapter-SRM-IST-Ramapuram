import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Importing Icons
import { FaSpinner } from "react-icons/fa";

// Importing APIs
import { getAllBlogs } from "../../APIs/APICall";
import { urlFor } from "../../APIs/APIConfiguration";

import { ImageLoaderComponent } from "../../Utility";
import HeikiBackground from "../../Components/ui/HeikiBackground";

const BlogTemplate = () => {
  const location = useLocation();

  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Extract the blog title from the route
  const extractBlogTitle = () => {
    const pathParts = location.pathname.split("/");
    return pathParts[pathParts.length - 1]?.replace(/-/g, " ");
  };

  const blogTitle = extractBlogTitle();

  // Fetch blog data based on the title
  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      const data = await getAllBlogs();
      if (data?.error) {
        setError(true);
      } else {
        const matchingBlog = data.find(
          (blog) => blog.blogtitle.toLowerCase() === blogTitle.toLowerCase()
        );
        setBlogData(matchingBlog);
        //console.log(matchingBlog);
      }
      setLoading(false);
    };

    fetchBlogData();
  }, [blogTitle]);

  return (
    <div className="py-14 md:py-5 px-2 sm:px-5 min-h-screen relative">
      <HeikiBackground
        primaryColor="#00895e"
        secondaryColor="#2f8d46"
        pattern="grid"
        density="dense"
        opacity={0.2}
      />
      {loading ? (
        <div className="flex justify-center items-center h-full w-full absolute">
          <FaSpinner className="spinner text-center text-sm sm:text-sm" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-full w-full text-red-500 absolute">
          <div className="text-center">
            Failed to load this blog!! <br /> Please try again later!!
          </div>
        </div>
      ) : (
        <div className="pt-[45px] sm:pt-[30px] md:pt-[50px] relative">
          <div className="max-w-4xl mx-auto bg-white p-3 md:p-8 mb-10 rounded-lg shadow-md">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1 }}
              transition={{
                scale: { duration: 0.25 },
                opacity: { duration: 2 },
              }}
            >
              <ImageLoaderComponent
                url={urlFor(blogData.blogimage)}
                hashCode={blogData.blogimage.blogimghashCode}
                alt={blogData.blogimage.altText}
                className="w-full h-auto rounded-lg"
                blurWidth={"100%"}
                blurHeight={"250px"}
              />
            </motion.div>
            {/* Title */}
            <h1 className="text-gray-700 text-[24px] sm:text-4xl font-bold mb-8 capitalize">
              {blogData.blogtitle}
            </h1>
            {/* Date */}
            <p className="text-[#666666] text-sm sm:text-md font-semibold mb-4">
              {new Date(blogData.date).toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            {/* Sub-heading */}
            <p className="text-gray-500 text-sm sm:text-md font-semibold mb-6">
              {blogData.subHeading}
            </p>
            {/* Paragraph 1 */}
            <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
              {blogData.description[0]}
            </div>
            {/* Paragraph 2 */}
            <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
              {blogData.description[1]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogTemplate;
