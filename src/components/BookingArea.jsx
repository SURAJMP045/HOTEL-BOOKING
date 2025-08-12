import React from "react";
import "../assets/stylesheet/BookingArea.css";
import SingleRoom from '../assets/image.png'

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

      <section class="room-section">
  <div class="room-left">
    <span class="subtitle">Our Features</span>
    <h1 class="title">Single Room</h1>
    <p class="desc">
      Phasellus semper vehicula eros, non ultricies neque rhoncus sed. 
      Morbi aliquam ex in dui aliquet consectetur. Fusce pellentesque 
      turpis ut lorem elementum commodo.
    </p>

    <div class="phone-box">
      <div class="phone-icon">
        <i class="fas fa-phone-alt"></i>
      </div>
      <span class="phone-number">+123 (458) 585 568</span>
    </div>
  </div>

  <div class="room-center">
    <img src={SingleRoom} alt="Single Room" />
  </div>

  <div class="room-right">
    <div class="feature">
      <div class="icon-circle"><i class="fas fa-key"></i></div>
      <div>
        <h3>Smart Key</h3>
        <p>Phasellus semper vehicula eros, non ultricies neque rhoncus sed</p>
      </div>
    </div>
    <div class="feature">
      <div class="icon-circle"><i class="fas fa-utensils"></i></div>
      <div>
        <h3>Breakfast</h3>
        <p>Phasellus semper vehicula eros, non ultricies neque rhoncus sed</p>
      </div>
    </div>
    <div class="feature">
      <div class="icon-circle"><i class="fas fa-wifi"></i></div>
      <div>
        <h3>Home Wifi</h3>
        <p>Phasellus semper vehicula eros, non ultricies neque rhoncus sed</p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default BookingArea;
