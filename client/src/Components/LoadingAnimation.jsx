import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { gfg as image } from "../assets/icons";
import Home from "../pages/Home";

const LoadingAnimation = () => {
  const imgRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const logoAnimatedRef = useRef(false);
  const textAnimatedRef = useRef(false);

  const [showDiv, setShowDiv] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!logoAnimatedRef.current) {
      logoAnimatedRef.current = true;

      let logoSize = "200px"; // Default size
      if (screenWidth <= 400) logoSize = "50px"; // For very small screens
      else if (screenWidth < 600) logoSize = "80px";
      else if (screenWidth < 1024) logoSize = "150px";
      else if (screenWidth <= 1366) logoSize = "180px";

      gsap.fromTo(
        imgRef.current,
        { width: "50px", height: "50px", opacity: 0 },
        {
          width: logoSize,
          height: logoSize,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );

      gsap.to(imgRef.current, {
        x: -Math.min(200, screenWidth / 3) + "px",
        duration: 1.5,
        delay: 1.5,
        ease: "power2.out",
        onComplete: () => setShowDiv(true),
      });
    }
  }, [screenWidth]);

  useEffect(() => {
    if (showDiv && textRef1.current && !textAnimatedRef.current) {
      textAnimatedRef.current = true;

      const text1 = textRef1.current.textContent;
      textRef1.current.innerHTML = "";
      const characters = text1.split("").map((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.color = index < 13 ? "#138660" : "#002132";
        return span;
      });

      characters.forEach((span) => textRef1.current.appendChild(span));
      const chars1 = textRef1.current.querySelectorAll("span");

      gsap.fromTo(
        chars1,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          onComplete: () => setShowSecondLine(true),
        }
      );
    }
  }, [showDiv]);

  useEffect(() => {
    if (showSecondLine && textRef2.current) {
      const text2 = textRef2.current.textContent;
      textRef2.current.innerHTML = "";
      const characters2 = text2.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.color = "#002132";
        return span;
      });

      characters2.forEach((span) => textRef2.current.appendChild(span));
      const chars2 = textRef2.current.querySelectorAll("span");

      gsap.fromTo(
        chars2,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          onComplete: () => setTimeout(() => setShowHome(true), 500),
        }
      );
    }
  }, [showSecondLine]);

  if (showHome) {
    return <Home />;
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen overflow-hidden relative">
      <img
        ref={imgRef}
        src={image}
        alt="Animated"
        className="absolute"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "90%", // Ensures image doesn't exceed screen
          maxHeight: "90%",
          objectFit: "contain",
        }}
      />

      {showDiv && (
        <div
          className="absolute text-center"
          style={{
            left:
              screenWidth > 1024 ? "65%" : screenWidth < 400 ? "50%" : "55%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0 10px",
            maxWidth: "95vw",
          }}
        >
          <p
            ref={textRef1}
            style={{
              fontSize:
                screenWidth < 400
                  ? "12px"
                  : screenWidth < 600
                  ? "15px"
                  : screenWidth <= 1024
                  ? "25px"
                  : "40px",
              // fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            GeeksforGeeks Student Chapter
          </p>

          {showSecondLine && (
            <p
              ref={textRef2}
              style={{
                fontSize:
                  screenWidth < 400
                    ? "12px"
                    : screenWidth < 600
                    ? "15px"
                    : screenWidth <= 1024
                    ? "25px"
                    : "40px",
                // fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              SRMIST Ramapuram
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default LoadingAnimation;
