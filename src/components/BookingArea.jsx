import React from "react";
import "../assets/stylesheet/BookingArea.css";
import BookingAreaPng from "../assets/BookingArea.png";

const BookingArea = () => {
  return (
    <div>
      <section className="booking-section">
        <div className="booking-header">
          <p className="booking-subtitle">Booking Area</p>
          <h2 className="booking-title">Find the best hotels in Your area</h2>
        </div>

        <div className="booking-form-container">
          <form className="booking-form">
            <input type="date" placeholder="Check-in" />
            <input type="date" placeholder="Check-out" />
            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="room-section">
        <div className="room-left">
          <span className="subtitle">Our Features</span>
          <h1 className="title">Single Room</h1>
          <p className="desc">
            Phasellus semper vehicula eros, non ultricies neque rhoncus sed.
            Morbi aliquam ex in dui aliquet consectetur. Fusce pellentesque
            turpis ut lorem elementum commodo.
          </p>

          <div className="phone-box">
            <div className="phone-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <span className="phone-number">+123 (458) 585 568</span>
          </div>
        </div>

        <div className="room-center">
          <img src={BookingAreaPng} alt="Single Room" />
        </div>

        <div className="room-right">
          <div className="feature">
            <div className="icon-circle">
              <i className="fas fa-key"></i>
            </div>
            <div>
              <h3>Smart Key</h3>
              <p>
                Phasellus semper vehicula eros, non ultricies neque rhoncus sed
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon-circle">
              <i className="fas fa-utensils"></i>
            </div>
            <div>
              <h3>Breakfast</h3>
              <p>
                Phasellus semper vehicula eros, non ultricies neque rhoncus sed
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon-circle">
              <i className="fas fa-wifi"></i>
            </div>
            <div>
              <h3>Home Wifi</h3>
              <p>
                Phasellus semper vehicula eros, non ultricies neque rhoncus sed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingArea;
