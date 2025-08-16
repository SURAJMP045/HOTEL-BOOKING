import React from "react";
import "../assets/stylesheet/BookingArea.css";
import BookingAreaPng from "../assets/BookingArea.png";

const BookingArea = () => {
  return (
    <div>
      {/* Booking Section */}
      <section className="booking-section">
        <div className="booking-header">
          <p className="booking-subtitle">Booking Area</p>
          <h2 className="booking-title">Find the best hotels in Your area</h2>
        </div>

        <div className="reservation-form-container">
          <form className="reservation-form">
            {/* Check-in */}
            <div className="reservation-field">
              <label>Check In</label>
              <input type="date" />
            </div>

            {/* Check-out */}
            <div className="reservation-field">
              <label>Check Out</label>
              <input type="date" />
            </div>

            {/* Rooms */}
            <div className="reservation-field">
              <label>Room</label>
              <select>
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
                <option>4+ Rooms</option>
              </select>
            </div>

            {/* Button */}
            <button type="submit" className="reservation-btn">
              CHECK NOW
            </button>
          </form>
        </div>
      </section>

      {/* Room Section */}
      <section className="bookingarea-room-section">
        <div className="bookingarea-room-left">
          <span className="bookingarea-subtitle">Our Features</span>
          <h1 className="bookingarea-title">Single Room</h1>
          <p className="bookingarea-desc">
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
