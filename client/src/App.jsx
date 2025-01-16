import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";

import { Navbar, Footer } from "./Navigation";
import {
  Blogs,
  HalloweenHangout,
  Home,
  OnboardingMeet,
  OurTeams,
  PageNotFound,
  WebsiteLaunch,
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
        <Route path="/blogs/website-launch" element={<WebsiteLaunch />} />
        <Route path="/blogs/halloween-hangout" element={<HalloweenHangout />} />
        <Route path="/blogs/onboarding-meeting" element={<OnboardingMeet />} />
        {/* ************************************************************** */}

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
