import React from "react";
import "../assets/stylesheet/LuxuryRooms.css";
import Luxury1 from "../assets/Luxury1.png";
import Luxury2 from "../assets/Luxury2.png";
import Luxury3 from "../assets/Luxury3.png";
import { FaBed, FaUserFriends, FaStar } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    title: "Small Suite",
    price: "$224/Night",
    desc: "Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia",
    beds: 3,
    guests: 4,
    rating: 4.9,
    reviews: "2k",
    image: Luxury1,
  },
  {
    id: 2,
    title: "Luxury Suite",
    price: "$350/Night",
    desc: "Elegant and spacious suite with premium interiors and comfort",
    beds: 4,
    guests: 5,
    rating: 4.8,
    reviews: "1.5k",
    image: Luxury2,
  },
  {
    id: 3,
    title: "Deluxe Room",
    price: "$180/Night",
    desc: "Perfect for short stays with all luxury amenities",
    beds: 2,
    guests: 3,
    rating: 4.7,
    reviews: "900",
    image: Luxury3,
  },
];

const LuxuryRooms = () => {
  return (
    <section className="luxury-section">
      <div className="luxury-header">
        <p className="luxury-subtitle">Deluxe And Luxury</p>
        <h2 className="luxury-title">Luxury Rooms</h2>
      </div>

      <div className="luxury-cards">
        {rooms.map((room) => (
          <div className="card" key={room.id}>
            <img src={room.image} alt={room.title} className="card-image" />
            <div className="card-overlay">
              <div className="card-header">
                <h3>{room.title}</h3>
                <span className="price">{room.price}</span>
              </div>
              <p className="desc">{room.desc}</p>
              <div className="room-info">
                <span>
                  <FaBed /> ({room.beds}) bed's
                </span>
                <span>
                  <FaUserFriends /> ({room.guests}) Guest's
                </span>
              </div>
              <div className="card-footer">
                <span className="read-more">READ MORE →</span>
                <span className="rating">
                  <FaStar color="#b88b2d" /> {room.rating}{" "}
                  <small>{room.reviews}</small>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LuxuryRooms;
