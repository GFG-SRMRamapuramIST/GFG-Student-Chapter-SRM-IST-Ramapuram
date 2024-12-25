import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import { Navbar, Footer } from "./Navigation";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
