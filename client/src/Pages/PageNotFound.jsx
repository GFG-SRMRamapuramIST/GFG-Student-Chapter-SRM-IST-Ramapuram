import React from "react";
import { ImageLoaderComponent } from "../Utility";
import DinoImage from "../assets/icons/gfg Dino.png";

const PageNotFound = () => {
  const  PageNotFound_Img= [
    {
      image: DinoImage,
      imageAltText: "Cute dinosaur",
      imageHashCode: "LGN-J-^,}09saMt7-;M{#=RjSwR%",
    },
  ];
  const imgWidth = "500px";
  const imgHeight = "300px";

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center max-w-3xl w-full">
        <div>
          <ImageLoaderComponent
            url={PageNotFound_Img[0].image}
            alt={PageNotFound_Img[0].imageAltText}
            hashCode={PageNotFound_Img[0].imageHashCode}
            className={`w-[${imgWidth}] h-[${imgHeight}] mx-auto my-6 transition-opacity duration-500`}
            blurWidth={imgWidth}
            blurHeight={imgHeight}
          />
        </div>

        <div>
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
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
