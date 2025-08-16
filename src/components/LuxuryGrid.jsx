import React from "react";
import "../assets/stylesheet/LuxuryGrid.css";
import { Link } from "react-router-dom";

const rooms = [
  {
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Luxury Living Room",
    title: "Small Suite",
    price: 224,
    desc: "Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia",
    beds: 3,
    guests: 4,
    rating: 4.9,
    reviews: "2k",
    link: "/readmore",
  },
  {
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Modern Study Room",
    title: "Small Suite",
    price: 224,
    desc: "Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia",
    beds: 3,
    guests: 4,
    rating: 4.9,
    reviews: "2k",
    link: "/readmore",
  },
  {
    img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Sophisticated Lounge",
    title: "Small Suite",
    price: 224,
    desc: "Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia",
    beds: 3,
    guests: 4,
    rating: 4.9,
    reviews: "2k",
    link: "/readmore",
  },
];

const LuxuryGrid = () => {
  return (
    <div className="luxury-rooms-grid">
      {rooms.map((room, idx) => (
        <div className="room-card" key={idx}>
          <div className="room-image">
            <img src={room.img} alt={room.alt} loading="lazy" />
            <div className="room-overlay">
              <div className="room-info">
                <h3>
                  {room.title}{" "}
                  <span className="price">
                    ${room.price}
                    <span>/Night</span>
                  </span>
                </h3>
                <p>{room.desc}</p>
                <div className="room-icons">
                  <span>🛏 ({room.beds}) bed's</span>
                  <span>👥 ({room.guests}) Guest's</span>
                </div>
                <div className="room-footer">
                  <Link to={room.link} className="read-more">
                    READ MORE
                  </Link>
                  <div className="rating">
                    ⭐ <strong>{room.rating}</strong>{" "}
                    <span>{room.reviews}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LuxuryGrid;
