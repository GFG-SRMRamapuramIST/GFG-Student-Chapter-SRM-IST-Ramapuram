import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";

import { Navbar, Footer } from "./Navigation";
import {
  Blogs,
  BlogTemplate,
  ContactUs,
  Home,
  OurTeams,
  PageNotFound,
} from "./Pages";
import { ScrollToTop } from "./Utility";

// https://www.youtube.com/watch?v=AHSOdHIsYR0
// Follow the above YT tutorial to integrate Google Analytics with React
ReactGA.initialize("G-P81845BYP3");

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-teams" element={<OurTeams />} />

        {/* ****************************BLOGS***************************** */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogTemplate />} />
        {/* ************************************************************** */}

        {/* ****************************FORMS***************************** */}
        <Route path="/contact-us" element={<ContactUs/>} />
        {/* ************************************************************** */}

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
