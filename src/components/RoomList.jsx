import React from "react";
import "../assets/stylesheet/RoomList.css";

const rooms = [
  {
    title: "Double Room",
    price: 219,
    beds: 3,
    guests: 4,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Small Suite",
    price: 188,
    beds: 2,
    guests: 3,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2070&q=80",
  },
];

const categories = [
  { name: "Luxury Room", count: 8 },
  { name: "Small Suite", count: 6 },
  { name: "Single", count: 5 },
  { name: "Family", count: 9 },
  { name: "Double Room", count: 3 },
];

const RoomList = () => {
  return (
    <section className="room-section">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Categories */}
        <aside className="room-categories">
          <h3>Category</h3>
          <ul>
            {categories.map((cat, i) => (
              <li key={i}>
                <span>› {cat.name}</span>
                <span className="count">
                  ({cat.count.toString().padStart(2, "0")})
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Booking Form */}
        <aside className="booking-form">
          <h3>Booking Now</h3>
          <hr className="form-divider" />
          <form>
            <label>
              <input type="date" required />
            </label>
            <label>
              <input type="date" required />
            </label>
            <label>
              <select required>
                <option value="">Select Room</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">
              CHECK <span>→</span>
            </button>
          </form>
        </aside>
      </div>

      {/* Room List */}
      <div className="room-list">
        {rooms.map((room, i) => (
          <article className="room-card" key={i}>
            <div className="room-img">
              <img src={room.image} alt={room.title} loading="lazy" />
              <span className="room-price">${room.price}/Night</span>
            </div>
            <div className="room-info">
              <h4>{room.title}</h4>
              <p>
                Facilisis tempor erat facilisis. Proin imperdiet rutrum cursus.
              </p>
              <div className="room-meta">
                <span>🛏️ ({room.beds}) beds</span>
                <span>👥 ({room.guests}) guests</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RoomList;
