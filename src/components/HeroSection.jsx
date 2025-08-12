import React from "react";
import "../assets/stylesheet/HeroSection.css";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-images">
        <img
          src={hero}
          alt="Room 1"
          className="image image-1"
        />
        <img
          src={hero}
          alt="Room 2"
          className="image image-2"
        />
        <img
          src={hero}
          alt="Room 3"
          className="image image-3"
        />
      </div>

      <div className="hero-text">
        <p className="subtitle">Awesome Place</p>
        <h1 className="title">We're a unique place to <br /> Spend time</h1>
        <p className="description">
          Phasellus malesuada convallis purus bibendum dictum. Maecenas semper nulla justo,
          quis pulvinar risus sagittis eget. Sed libero eros, tincidunt eu ante a,
          ultrices elementum arcu.
        </p>
        <Link to="/about" className="hero-link">
        <button className="read-more-btn">READ MORE →</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
