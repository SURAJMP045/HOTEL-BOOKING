import React from 'react';
import '../assets/stylesheet/MapSection.css';

const MapSection = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.788828356009!2d-74.00594118459157!3d40.712775979330155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzQ2LjAiTiA3NMKwMDAnMjYuMCJX!5e0!3m2!1sen!2sin!4v1627899999999!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
