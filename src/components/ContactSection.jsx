import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section lazy-loaded">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Need any Contact with Us</h2>
        </div>
        <div className="contact-phone">
          <div className="phone-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <span className="phone-number">+123 (458) 585 568</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 