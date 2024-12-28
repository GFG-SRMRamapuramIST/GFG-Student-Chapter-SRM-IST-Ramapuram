import React from "react";
import { AakashPic } from "../../assets";
import { ImageLoaderComponent } from "../../Utility";

const PresidentTestimonial = () => {
  return (
    <div className="py-20 w-full flex justify-center px-0 sm:px-2 md:px-4 lg:px-12">
      <div className="relative flex flex-col lg:flex-row justify-between w-full p-8 gap-10 lg:gap-20 bg-green-50 ">
        <div className="content flex-1 sm:text-left sm:w-full mb-6 sm:mb-0 py-28">
          <blockquote className="px-2 testimonial_quote text-gray-600 italic break-words whitespace-pre-wrap text-sm sm:text-base md:text-lg lg:text-xl max-w-full text-center py-3">
            "Hunter is a great tool for
            <span className="highlighted-text bg-green-300">
              saving time and building pipelines and prospecting.
            </span>{" "}
            Before we had Hunter in place, I was spending a long time guessing
            emails and using up valuable time every day. The email verifier is also a{" "}
            <span className="highlighted-text bg-green-300">game changer for our team.</span>"
          </blockquote>

          <div className="px-3 testimonial_source mt-4 sm:mt-1 sm:text-left sm:mx-0 text-sm sm:text-base md:text-lg lg:text-xl py-4 sm:block hidden">
            <strong className="testimonial__author font-bold block sm:inline mt-4 sm:mt-2">
              Aakash Kumar Yadav,
            </strong>{" "}
            <span className="testimonial__position text-xs sm:text-sm font-italic text-black block sm:inline whitespace-normal">
              President at GeeksforGeeks Student Chapter SRM RMP
            </span>
          </div>
        </div>
        <div className="flex sm:flex-row sm:gap-5 flex-col justify-center items-center relative">
          <div className="flex-shrink-0 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-96 lg:h-96 w-22 h-28 sm:w-38 sm:h-38 rounded-full sm:rounded-lg lg:rounded-lg overflow-hidden bg-white transition-all duration-300 mb-12 sm:mb-0">
            <ImageLoaderComponent
              url={AakashPic.url}
              alt={AakashPic.alt}
              hashCode={AakashPic.hashCode}
              className="object-cover w-full h-full"
              blurWidth={"400px"}
              blurHeight={"400px"}
            />
          </div>
          <div className="px-3 source mt-4 sm:mt-2 sm:text-left sm:mx-0 text-sm sm:text-base md:text-lg lg:text-xl py-4 lg:hidden sm:block">
            <strong className="person font-bold block sm:inline mt-4 sm:mt-2">
              Aakash Kumar Yadav,
            </strong>{" "}
            <span className="position text-xs sm:text-sm font-italic text-black block sm:inline whitespace-normal">
              President at GeeksforGeeks Student Chapter SRM RMP
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PresidentTestimonial;
