import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="logo">
         <Link to="/"> <img src="/logo.png" alt="Film Camera Logo" /></Link>
        </div>
        <div
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </nav>

      {/* Video Background */}
      <div className="video-container">
        <video className="video-bg" autoPlay loop muted>
          <source src="#" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h1>
            BEST
            <br />
            MOVIES
          </h1>
          <p>your favorite movies, revisited and analysed</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
