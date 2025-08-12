import React from 'react';
import '../assets/stylesheet/CustomerBenefits.css';
import LuxuryRoom from '../assets/hotel-offer.png'

const CustomerBenefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-image">
        <img src={LuxuryRoom} alt="Luxury Room" />
      </div>
      <div className="benefits-content">
        <h2>Customer Benefits</h2>
        <p>
          Businesses A Guide To Attracting Clients To Your Agency, Amazon,
          Walmart or General Motors. The heart of USA, however
        </p>
        <ul>
          <li>Automotive service our clients receive</li>
          <li>Praesent efficitur quam sit amet</li>
          <li>We use the latest diagnostic equipment</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerBenefits;
