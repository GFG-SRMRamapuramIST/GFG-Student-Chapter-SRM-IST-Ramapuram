import { useEffect } from "react";
import ReactGA from "react-ga4";

import {
  Hero,
  AlumaniWorkAt,
  SubHeading,
  GFGDomain,
  GFGIntro,
  GFGCourses,
  Testimonials,
} from "../Components";

const Home = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "gfgsrmrmp.vercel.app/",
      title: "Home Page",
    });
  }, []);

  return (
    <>
      <Hero />
      <AlumaniWorkAt />
      <SubHeading />
      <GFGDomain />
      <Testimonials />
      <GFGIntro />
      <GFGCourses />
    </>
  );
};

export default Home;
