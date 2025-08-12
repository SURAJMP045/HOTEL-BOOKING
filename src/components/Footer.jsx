import React from "react";
import "../assets/stylesheet/Footer.css";
import { FaFacebookF, FaTwitter, FaBehance, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">
            <span className="logo-icon">🏠</span> HOSTILY
          </h2>
          <p>
            Nunc at lacus at nibh scelerisque scelerisque id vel metus. Vivamus
            mollis diam maximus, consequat nulla sit amet, ultricies quam.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaBehance />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-section links">
          <h3>Pages Links</h3>
          <ul>
            <li>Room Cleaning</li>
            <li>Car Parking</li>
            <li>Swimming pool</li>
            <li>Fitness Gym</li>
            <li>Spa Center</li>
          </ul>
        </div>

        <div className="footer-section recent-posts">
          <h3>Recent Post</h3>
          <div className="post">
            <span>📅 20 June, 2022</span>
            <p>The best architecture is competition</p>
          </div>
          <div className="post">
            <span>📅 29 June, 2022</span>
            <p>The best architecture is competition</p>
          </div>
        </div>

        <div className="footer-section hours">
          <h3>Opening Hours</h3>
          <ul>
            <li>
              <span>Sun</span> <span>7:00 AM - 2:00 PM</span>
            </li>
            <li>
              <span>Mon</span> <span>9:00 AM - 4:00 PM</span>
            </li>
            <li>
              <span>Tue</span> <span>6:00 AM - 1:00 PM</span>
            </li>
            <li>
              <span>Wed</span> <span>8:00 AM - 3:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2022 <span>ThemeOri</span> Website by <span>Hostily</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
