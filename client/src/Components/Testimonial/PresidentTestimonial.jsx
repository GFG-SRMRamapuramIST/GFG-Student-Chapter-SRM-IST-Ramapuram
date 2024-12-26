import React from "react";
import "./PresidentTestimonial.css";
import { AakashPic } from "../../assets";
import { BsChatLeftQuoteFill } from "react-icons/bs";
import { ImageLoaderComponent } from "../../Utility";

const PresidentTestimonial = () => {
  return (
    <div className="testimonial">
      <div className="quote">
        <BsChatLeftQuoteFill size={100} color="green" />
      </div>
      <div className="content">
        <blockquote className="testimonial_quote">
          "Hunter is a great tool for
          <span className="highlighted-text">
            saving time and building pipelines and prospecting.
          </span>{" "}
          Before we had Hunter in place, I was spending a long time guessing
          emails and using up valuable time every day. The email verifier is
          also a{" "}
          <span className="highlighted-text">game changer for our team.</span>"
        </blockquote>
        <div className="testimonial_source">
          <strong className="testimonial__author">Aakash Kumar Yadav ,</strong>
          <span className="testimonial__position">
            President at GeeksforGeeks Student Chapter SRM RMP
          </span>
        </div>
      </div>

      <div className="visual">
        <ImageLoaderComponent
          url={AakashPic.url}
          alt={AakashPic.alt}
          hashCode={AakashPic.hashCode}
          className="testimg bg-white"
          blurWidth={"200px"}
          blurHeight={"200px"}
        />

        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230403183704/gfg_logo.png"
          alt="gfglogo"
          width="40"
          height="40"
          className="logo"
        />
      </div>
    </div>
  );
};

export default PresidentTestimonial;
