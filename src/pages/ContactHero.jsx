import React from "react";
import "../assets/stylesheet/pagestyle/Contact.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MapSection from "../components/MapSection";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaUser,
  FaPen,
} from "react-icons/fa";
import { MdSubject } from "react-icons/md";

const ContactHero = () => {
  return (
    <>
     <div className="contact-body">
      <Navbar/>
      {/* HERO */}
      <section
        className="contact-hero"
      >
        <div className="overlay">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>
              <span className="breadcrumb-home">Home</span> /{" "}
              <span className="breadcrumb-current">Contact</span>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you! Whether you have a question about our
            services, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <div className="label">Address:</div>
                <div className="value">123 Main Street, City, Country</div>
              </div>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <div>
                <div className="label">Phone:</div>
                <div className="value">+1 234 567 890</div>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <div>
                <div className="label">Email:</div>
                <div className="value">info@example.com</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form>
            <div className="form-row">
              <div className="form-group">
                <FaUser />
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <FaEnvelope />
                <input type="email" placeholder="Your Email" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <FaPhoneAlt />
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <MdSubject />
                <input type="text" placeholder="Subject" />
              </div>
            </div>

            <div className="form-group full">
              <FaPen />
              <textarea placeholder="Your Message" rows="5"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
      <MapSection/>
      <Footer/>
    </>  
  );
};

export default ContactHero;
