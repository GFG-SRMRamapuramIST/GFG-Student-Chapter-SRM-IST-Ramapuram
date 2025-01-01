import { Route, Routes } from "react-router-dom";

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
        <Route path="/blogs/onboarding-meet" element={<OnboardingMeet />} />
        {/* ************************************************************** */}

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
