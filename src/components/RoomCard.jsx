import React from "react";
import "../assets/stylesheet/RoomCard.css";

const rooms = [
  {
    id: 1,
    title: "Superior Room",
    description:
      "Savvy travelers are looking for more than just the next destination. They seek a memorable experience.",
    beds: 3,
    guests: 7,
    price: 249,
    rating: 4.5,
    reviews: "2k",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Deluxe Suite",
    description:
      "Enjoy luxury and comfort with elegant interiors and modern amenities for a relaxing stay.",
    beds: 2,
    guests: 5,
    price: 320,
    rating: 4.8,
    reviews: "1.5k",
    image: "https://5.imimg.com/data5/ANDROID/Default/2021/1/VL/CD/YX/8880463/product-jpeg.jpg",
  },
  {
    id: 3,
    title: "Family Room",
    description:
      "Perfect for families, offering spacious living and cozy comfort with top-class facilities.",
    beds: 4,
    guests: 8,
    price: 400,
    rating: 4.7,
    reviews: "3.1k",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH4PmEND3yNm73MLOg2KY9E9NI4Zefphx4WgSHwlGGMDI1HszFgRYQHNLIQV3HE1cCtI&usqp=CAU",
  },
];

const SingleRoomCard = () => {
  return (
    <div className="single-room-container">
      {rooms.map((room) => (
        <div key={room.id} className="single-room-card">
          {/* Left - Image */}
          <div className="room-image">
            <img src={room.image} alt={room.title} />
          </div>

          {/* Middle - Details */}
          <div className="room-details">
            <h3>{room.title}</h3>
            <p>{room.description}</p>
            <div className="room-meta">
              <span>🛏️ ({room.beds}) Beds</span>
              <span>👥 ({room.guests}) Guests</span>
            </div>
          </div>

          {/* Right - Price & Read More */}
          <div className="room-extra">
            <div className="room-price">
              ${room.price}
              <span>/Night</span>
            </div>
            <div className="room-rating">
              ⭐ <strong>{room.rating}</strong>{" "}
              <span className="reviews">{room.reviews}</span>
            </div>
            <a href="#" className="read-more">
              ➜ READ MORE
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleRoomCard;
