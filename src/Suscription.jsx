import React from "react";
import Footer from "./Footer";
import './Suscription.css'

const Suscription = () => {
  return (
    <>
    <div className="subscription-container">
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Join Our Movie Newsletter</h1>
          <br />
          <p>Stay updated with the latest reviews and recommendations.</p>
        </div>
      </div>
      <div className="plans-container">
        <div className="plan-card">
          <h2 className="plan-name">Basic Plan</h2>
          <p className="plan-price">$5/month</p>
          <ul className="plan-features">
            <li>Weekly Newsletter</li>
            <li>Exclusive Reviews</li>
          </ul>
          <button className="subscribe-button">Subscribe</button>
        </div>
        <div className="plan-card">
          <h2 className="plan-name">Premium Plan</h2>
          <p className="plan-price">$10/month</p>
          <ul className="plan-features">
            <li>Weekly Newsletter</li>
            <li>Exclusive Reviews</li>
            <li>Early Access to Recommendations</li>
          </ul>
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Suscription;
