import React from 'react';
import '../assets/stylesheet/OfferSection.css';
import offerImage from '../assets/hotel-offer.png'; 

const OfferSection = () => {
  return (
    <section className="offer-section">
      <div className="text-content">
        <p className="offer-label">Company Offers</p>
        <h1 className="offer-heading">Book now and save up to 35%</h1>
        <h2 className="offer-subheading">On hotel rooms</h2>
        <p className="offer-description">
          hasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus felis. Nulla non pulvinar enim,
          vel viverra nunc. Integer condimentum vulputate justo. Morbi rhoncus elit in tellus viverra,
          vel fermentum orci dictum. Vestibulum non nisi commodo, tincidunt elit non, consectetur tellus.
          Fusce in commodo velit. In dapibus dui vitae tortor ullamcorper mollis.
        </p>
      </div>
      <img src={offerImage} alt="Hotel Offer" className="offer-image" />
    </section>
  );
};

export default OfferSection;
