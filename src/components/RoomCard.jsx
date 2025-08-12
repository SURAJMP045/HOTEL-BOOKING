import React from "react";
import "../assets/stylesheet/RoomCard.css";


const SingleRoomCard = () => {
  return (
    <div className="single-room-container">
      <div className="single-room-card">
        {/* Left - Image */}
        <div className="room-image">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Superior Room"
          />
        </div>

        {/* Middle - Details */}
        <div className="room-details">
          <h3>Superior Room</h3>
          <p>
            Savvy travelers are looking for more than just the next destination
            on the map. They are looking for a memorable experience.
          </p>
          <div className="room-meta">
            <span>🛏️ (3) bed's</span>
            <span>👥 (7) Guest's</span>
          </div>
        </div>

        {/* Right - Price & Read More */}
        <div className="room-extra">
          <div className="room-price">$249<span>/Night</span></div>
          <div className="room-rating">
            ⭐ <strong>2.9</strong> <span className="reviews">2k</span>
          </div>
          <a href="#" className="read-more">
            ➜ READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomCard;
