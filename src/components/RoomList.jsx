import React from 'react';
import '../assets/stylesheet/RoomList.css';

const rooms = [
  {
    title: 'Double Room',
    price: 219,
    beds: 3,
    guests: 4,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Small Suite',
    price: 188,
    beds: 2,
    guests: 3,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Luxury room',
    price: 229,
    beds: 3,
    guests: 6,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Junior Suite',
    price: 205,
    beds: 4,
    guests: 2,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Superior Room',
    price: 249,
    beds: 3,
    guests: 7,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Single Room',
    price: 167,
    beds: 1,
    guests: 2,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];


const categories = [
  { name: 'Luxury Room', count: 8 },
  { name: 'Small Suite', count: 6 },
  { name: 'Single', count: 5 },
  { name: 'Family', count: 9 },
  { name: 'Double Room', count: 3 },
];

const RoomList = () => (
  <div className="room-section">
    <aside className="room-categories">
      <h3>Category</h3>
      <ul>
        {categories.map((cat, i) => (
          <li key={i}>
            <span>› {cat.name}</span>
            <span className="count">({cat.count.toString().padStart(2, '0')})</span>
          </li>
        ))}
      </ul>
    </aside>

    <aside className="booking-form">
      <h3>Booking Now</h3>
      <hr className="form-divider" />
      <form>
        <select>
          <option>Check In</option>
        </select>
        <select>
          <option>Check Out</option>
        </select>
        <select>
          <option>Room</option>
        </select>
        <button type="submit">
          CHECK <span>→</span>
        </button>
      </form>
    </aside>

    <div className="room-list">
      {rooms.map((room, i) => (
        <div className="room-card" key={i}>
          <div className="room-img">
            <img src={room.image} alt={room.title} />
            <span className="room-price">${room.price}/Night</span>
          </div>
          <div className="room-info">
            <h4>{room.title}</h4>
            <p>Facilisis tempor erat facilisis. Proin imperdiet rutrum cursus.</p>
            <div className="room-meta">
              <span>🛏️ ({room.beds}) beds</span>
              <span>👥 ({room.guests}) guests</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RoomList;
