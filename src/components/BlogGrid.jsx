import React from 'react';
import '../assets/stylesheet/RoomList.css';

const rooms = [
  {
    title: 'Double Room',
    price: 219,
    beds: 3,
    guests: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  },
  {
    title: 'Small Suite',
    price: 188,
    beds: 2,
    guests: 3,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba934822d',
  },
  {
    title: 'Luxury room',
    price: 229,
    beds: 3,
    guests: 6,
    image: 'https://images.unsplash.com/photo-1560448070-c9839e67ad37',
  },
  {
    title: 'Junior Suite',
    price: 205,
    beds: 4,
    guests: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  },
  {
    title: 'Superior Room',
    price: 249,
    beds: 3,
    guests: 7,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba934822d',
  },
  {
    title: 'Single Room',
    price: 167,
    beds: 1,
    guests: 2,
    image: 'https://images.unsplash.com/photo-1560448070-c9839e67ad37',
  },
];

const categories = [
  { name: 'Luxury Room', count: 8 },
  { name: 'Small Suite', count: 6 },
  { name: 'Single', count: 5 },
  { name: 'Family', count: 9 },
  { name: 'Double Room', count: 3 },
];

const BlogGrid = () => {
  return (
    <div className="room-section">
      <div className="room-list">
        {rooms.map((room, i) => (
          <div className="room-card" key={i}>
            <div className="room-img">
              <img src={room.image} alt={room.title} />
              <span className="room-price">${room.price}/Night</span>
            </div>
            <div className="room-info">
              <h4>{room.title}</h4>
              <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
              <div className="room-meta">
                <span>🛏️ ({room.beds}) bed's</span>
                <span>👥 ({room.guests}) Guest's</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
