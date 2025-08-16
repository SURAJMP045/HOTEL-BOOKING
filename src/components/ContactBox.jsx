import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../assets/stylesheet/ContactBox.css";

const ContactBox = () => {
  return (
    <section className="contact-box">
      <h2 className="contact-text">Need any Contact with Us</h2>

      <div className="contact-info">
        <div className="contact-icon">
          <FaPhoneAlt />
        </div>
        <span className="contact-number">+123 (458) 585 568</span>
      </div>
    </section>
  );
};

export default ContactBox;
