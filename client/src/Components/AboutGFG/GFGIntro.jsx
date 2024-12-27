import React, { useState, useEffect } from "react";
import abtgfg from "../../assets/imgs/abtgfg.jpg";
import { FaArrowRight } from "react-icons/fa";

const GFGIntro = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); 
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-[5rem] w-full flex justify-center px-[20px]">
  <div
    className="bg-white flex justify-between w-full h-[500px] shadow-lg rounded-lg border border-gray-300"
    style={{
      gap: "20px",
    }}
  >
        <div
          className="flex-1 py-12 px-5 flex justify-center items-center"
          style={{
            padding: "10px",
            paddingTop: "0px",
            marginLeft: "60px",
          }}
        >
          <div className="mb-8" style={{ textAlign: "center", padding: "5px" }}>
            <p
              className="text-gray-700 text-base"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.8rem)", 
                lineHeight: "clamp(1.5rem, 3vw, 2.5rem)", 
                overflowWrap: "break-word", 
              }}
            >
              "<span style={{ color: "green" }}>GeeksforGeeks</span> is a premier
              platform offering coding resources, challenges, and interview
              preparation for programmers and tech enthusiasts.{" "}
              <span
                style={{
                  backgroundColor: "rgba(144, 238, 144, 0.8)",
                }}
              >
              Trusted by 12M+ users</span>, it provides tutorials, practice problems, and courses across
              diverse domains."
            </p>
            {!isSmallScreen && (
              <div
                style={{
                  textAlign: "left",
                  marginTop: "20px",
                }}
                className="responsive-div"
              >
                <p
                  onClick={handleClick}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "1.8rem",
                    color: "green",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    transform: isActive ? "translateY(-5px)" : "none",
                  }}
                  onMouseEnter={handleClick}
                  onMouseLeave={() => setIsActive(false)}
                >
                  Explore the integrations
                  <FaArrowRight style={{ marginLeft: "8px" }} />
                  <span
                    style={{
                      content: "''",
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: isActive ? "100%" : "0",
                      height: "2px",
                      backgroundColor: "green",
                      transition: "width 0.3s ease",
                    }}
                  ></span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className="flex-1"
          style={{
            backgroundImage: `url(${abtgfg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            borderRadius: "0 10px 10px 0",
            marginLeft: "100px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default GFGIntro;
