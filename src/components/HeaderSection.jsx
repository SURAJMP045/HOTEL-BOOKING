import React from "react";
import "../assets/stylesheet/HeaderSection.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png"; 
import Navbar from "./Navbar";

const HeaderSection = () => {
  return (
    <div className="lazy-loaded">
      <div className="Header-section">
        <Navbar />
        <div className="Header-content">
          <div className="Header-text">
            <p className="Header-subtitle">Hotel Booking Website</p>
            <h1 className="Header-title">Book hotels online</h1>
            <h2 className="Header-subtitle-large">Get 20% Off !</h2>
            <Link to="/about" className="Header-link">
              <button className="Header-btn">
                READ MORE
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </Link>
          </div>
          <div className="Header-image">
            <div className="image-placeholder">
              <img src={heroImage} alt="hero Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
