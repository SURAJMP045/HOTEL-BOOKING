import React from "react";
import { FaUser, FaEnvelope, FaGlobe, FaPen } from "react-icons/fa";
import "../assets/stylesheet/pagestyle/RoomDetailsLayout.css";

const RoomDetailLayout = () => {
  return (
    <div className="room-detail-container">
      {/* Left Section */}
      <div className="room-left">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Room"
        />

        {/* Bottom Info Bar */}
        <div className="info-bar">
          <span>👤 By- Admin</span>
          <span>📅 07, March 2022</span>
          <span>💬 3 Comment</span>
        </div>

         <div className="hotel-info-container">
      {/* Title */}
      <h2>Booking is an easy way to find the best hotels for you</h2>

      {/* Description */}
      <p>
        Maecenas tincidunt hendrerit odio sed consectetur. Duis porta purus sapien, eget pretium augue consectetur ut. 
        Nunc nibh augue, pretium quis imperdiet pellentesque, molestie eget nisi. Sed rutrum sit amet eros ac egestas. 
        Maecenas tincidunt dolor in massa iaculis, vitae dignissim sem finibus. Pellentesque elementum vel arcu sit amet rhoncus.
      </p>

      <p>
        Nulla at eleifend lorem. Praesent et ex sed metus egestas feugiat. Donec velit libero, feugiat ac dictum vel, 
        dignissim id ante. Praesent hendrerit posuere condimentum.
      </p>

      {/* Testimonial Box */}
      <div className="testimonial-box">
        <p>
          Aenean imperdiet finibus sodales. Sed non ex nisl. Maecenas ut dictum neque, at euismod felis. 
          Etiam rhoncus neque vitae efficitur mollis. Vestibulum sed pulvinar magna. Suspendisse
        </p>
        <div className="author">
          <span className="line"></span>
          <strong>David Beckham</strong>
        </div>
      </div>
    </div>

    <div className="room-content-container">
      {/* Text Section */}
      <p>
        Vestibulum eget tellus rhoncus, dictum massa a, mattis massa. Cras in leo semper, ultricies ligula nec, ornare tellus. 
        Suspendisse quam risus, semper et ultricies a, commodo eu tortor. Phasellus elementum tincidunt varius. 
        Nam facilisis, ante eget gravida vestibulum, ante nisi feugiat nulla, in dapibus neque turpis et dolor. Vestibulum in urna urna.
      </p>

      {/* Images Section */}
      <div className="image-grid">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpx8Jl7b_9v-oLPIYAcAXb2gO_RUP5UwWu9Q&s"
          alt="Room 1"
        />
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"
          alt="Room 2"
        />
      </div>

      {/* Bottom Text */}
      <p>
        Design pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, 
        iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus 
        dictum hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
        Integer tristique sem eget leo faucibus porttitor.
      </p>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comment (2)</h3>

        {/* Comment 1 */}
        <div className="comment-item">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User 1"
          />
          <div className="comment-content">
            <h4>Justin Bieber</h4>
            <span className="date">20 May, 2022 At 9:PM</span>
            <p>
              Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus felis. 
              Nulla non pulvinar enim, vel viverra nunc. Integer condimentum vulputate justo.
            </p>
          </div>
          <a href="#" className="reply">↩ Reply</a>
        </div>

        {/* Comment 2 */}
        <div className="comment-item">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User 2"
          />
          <div className="comment-content">
            <h4>Camila Cabello</h4>
            <span className="date">22 May, 2022 At 7:PM</span>
            <p>
              Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus felis. 
              Nulla non pulvinar enim, vel viverra nunc. Integer condimentum vulputate justo.
            </p>
          </div>
          <a href="#" className="reply">↩ Reply</a>
        </div>
      </div>
    </div>

<div className="comment-form">
      <h2>Add Comment</h2>
      <form>
        <div className="comment-form-row">
          <div className="comment-form-group">
            <input className="form-group-input" type="text" placeholder="Full Name" required />
            <span className="icon"><FaUser /></span>
          </div>
          <div className="comment-form-group">
            <input className="form-group-input" type="email" placeholder="Email Address" required />
            <span className="icon"><FaEnvelope /></span>
          </div>
        </div>

        <div className="comment-form-group form-group-input-http">
          <input className="form-group-input-http" type="url" placeholder="https://" />
          <span className="icon"><FaGlobe /></span>
        </div>

        <div className="comment-form-group comment-textarea-group">
          <textarea className="form-group-textarea" placeholder="Type your comments...." required></textarea>
          <span className="icon"><FaPen /></span>
        </div>

        <button type="submit" className="submit-btn">
          POST COMMENT →
        </button>
      </form>
    </div>

      </div>

      {/* Right Section */}
      <div className="room-right">
        {/* Search Box */}
        <div className="search-box">
          <input type="text" placeholder="Search....." />
          <button>🔍</button>
        </div>

        {/* Category Section */}
        <div className="category-box">
          <h3>Category</h3>
          <ul>
            <li>
              Luxury Room <span>(08)</span>
            </li>
            <li>
              Small Suite <span>(06)</span>
            </li>
            <li>
              Single <span>(05)</span>
            </li>
            <li>
              Family <span>(09)</span>
            </li>
            <li>
              Double Room <span>(03)</span>
            </li>
          </ul>
        </div>

        {/* Recent Post Section */}
        <div className="RoomDetails-recent-posts">
          <h3>Recent Post</h3>
          <div className="post-item">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Post 1"
            />
            <div className="post-info">
              <span className="date">📅 05 June, 2022</span>
              <p>Book your next Trip today!</p>
            </div>
          </div>

          <div className="post-item">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"
              alt="Post 2"
            />
            <div className="post-info">
              <span className="date">📅 02 June, 2022</span>
              <p>Booking is an Easy way to find</p>
            </div>
          </div>

          <div className="post-item">
            <img
              src="https://www.omnihotels.com/-/media/images/hotels/ftwdtn/digex/carousel/ftwdtn_11_2880x1870.jpg?la=en&h=1286&mw=1980&w=1980&hash=7062A0914A62573B80B2D6F5DBE6A70D01667DD7"
              alt="Post 3"
            />
            <div className="post-info">
              <span className="date">📅 04 June, 2022</span>
              <p>Book instantly And also get</p>
            </div>
          </div>
        </div>

        {/* Tag Section */}
        <div className="tag-box">
          <h3>Tag'g</h3>
          <div className="tags">
            <span>Hotel</span>
            <span>Booking Now</span>
            <span>Luxury</span>
            <span>Single room</span>
            <span>Small suite</span>
            <span>Family</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailLayout;
