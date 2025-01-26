import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import DinoImage from "../assets/icons/gfg Dino.png";

const PageNotFound = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center max-w-3xl w-full">
        {/* Show loader until the image is loaded */}
        {!imageLoaded && (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="spinner animate-spin text-center text-4xl text-gray-600" />
          </div>
        )}

        {/* Image element with onLoad to toggle the loader */}
        <img
          src={DinoImage}
          alt="Cute dinosaur"
          className={`w-[500px] h-[300px] mx-auto my-6 transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {imageLoaded && (
          <>
            <p className="text-gray-800 text-lg md:text-xl mb-8">
              "Oh, it's you again... 😉"
              <br />
              Why are you back here? Shoo shoo, go fix it already!
            </p>
            <a
              href="/"
              className="bg-gfgsc-green text-white px-6 py-3 rounded inline-block text-base"
            >
              Go Home
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default PageNotFound;
