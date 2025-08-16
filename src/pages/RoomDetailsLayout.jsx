import React from "react";
import "../assets/stylesheet/pagestyle/RoomDetailsLayout.css"

const RoomDetailLayout = () => {
  return (
    <div className="room-detail-container">
      {/* Left Section */}
      <div className="room-left">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Room"
        />

        {/* Bottom Info Bar */}
        <div className="info-bar">
          <span>👤 By- Admin</span>
          <span>📅 07, March 2022</span>
          <span>💬 3 Comment</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="room-right">
        {/* Search Box */}
        <div className="search-box">
          <input type="text" placeholder="Search....." />
          <button>🔍</button>
        </div>

        {/* Category Section */}
        <div className="category-box">
          <h3>Category</h3>
          <ul>
            <li>Luxury Room <span>(08)</span></li>
            <li>Small Suite <span>(06)</span></li>
            <li>Single <span>(05)</span></li>
            <li>Family <span>(09)</span></li>
            <li>Double Room <span>(03)</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailLayout;
