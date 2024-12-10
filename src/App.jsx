import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/about" && location.pathname !== "/contact" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

// Wrapper necesario para usar useLocation
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
