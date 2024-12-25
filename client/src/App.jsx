import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar, Footer } from "./Navigation";
import { Home, OurTeams } from "./Pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-teams" element={<OurTeams />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
