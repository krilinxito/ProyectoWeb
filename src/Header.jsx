import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <video className="video-bg" autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1>BEST<br />MOVIES</h1>
        <p>Your favorite movies, revisited and analyzed</p>
      </div>
    </header>
  );
};

export default Header;
