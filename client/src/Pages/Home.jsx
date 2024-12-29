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
  return (
    <>
      <Hero />
      <AlumaniWorkAt />
      <SubHeading />
      <Testimonials />
      <GFGIntro />
      <GFGDomain/>
      <GFGCourses />
    </>
  );
};

export default Home;
