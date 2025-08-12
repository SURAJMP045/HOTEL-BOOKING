import React from 'react';
import "../assets/stylesheet/LuxuryGrid.css";
import { Link } from "react-router-dom";

const LuxuryGrid = () => {
  return (
    <div className="luxury-rooms-grid">
      {/* Card 1 */}
      <div className="room-card">
        <div className="room-image">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Living Room"
            loading="lazy"
          />
          <div className="room-overlay">
            <div className="room-info">
              <h3>
                Small Suite{" "}
                <span className="price">
                  $224<span>/Night</span>
                </span>
              </h3>
              <p>
                Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia
              </p>
              <div className="room-icons">
                <span>🛏 (3) bed's</span>
                <span>👥 (4) Guest's</span>
              </div>
              <div className="room-footer">
                <Link to="/readmore" className="read-more">
                  READ MORE
                </Link>
                <div className="rating">
                  ⭐ <strong>4.9</strong> <span>2k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="room-card">
        <div className="room-image">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern Study Room"
            loading="lazy"
          />
          <div className="room-overlay">
            <div className="room-info">
              <h3>
                Small Suite{" "}
                <span className="price">
                  $224<span>/Night</span>
                </span>
              </h3>
              <p>
                Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia
              </p>
              <div className="room-icons">
                <span>🛏 (3) bed's</span>
                <span>👥 (4) Guest's</span>
              </div>
              <div className="room-footer">
                <Link to="/readmore" className="read-more">
                  READ MORE
                </Link>
                <div className="rating">
                  ⭐ <strong>4.9</strong> <span>2k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="room-card">
        <div className="room-image">
          <img
            src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Sophisticated Lounge"
            loading="lazy"
          />
          <div className="room-overlay">
            <div className="room-info">
              <h3>
                Small Suite{" "}
                <span className="price">
                  $224<span>/Night</span>
                </span>
              </h3>
              <p>
                Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia
              </p>
              <div className="room-icons">
                <span>🛏 (3) bed's</span>
                <span>👥 (4) Guest's</span>
              </div>
              <div className="room-footer">
                <Link to="/readmore" className="read-more">
                  READ MORE
                </Link>
                <div className="rating">
                  ⭐ <strong>4.9</strong> <span>2k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryGrid;
