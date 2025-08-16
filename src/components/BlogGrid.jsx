import React from 'react';
import "../assets/stylesheet/pagestyle/BlogGrid.css"

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
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/490190593.jpg?k=490f762e14bfdc24b53a4fa2576523b51481b7208d3af36722f3337ecb470221&o=&hp=1',
  },
  {
    title: 'Luxury room',
    price: 229,
    beds: 3,
    guests: 6,
    image: 'https://www.travelandleisure.com/thmb/o7LEqLUpOtf0nIm7ErqGrsVA3yo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-hotel-room-interior-bed-BOOKHOTEL0223-786eb1910382404a8806d1e1e8ed7716.jpg',
  },
  {
    title: 'Junior Suite',
    price: 205,
    beds: 4,
    guests: 2,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/375098351.jpg?k=24d5f9e508df3c61166d124d17a8b450f791583f93d8f68e090bc34c8995c4a9&o=&hp=1',
  },
  {
    title: 'Superior Room',
    price: 249,
    beds: 3,
    guests: 7,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/623998727.jpg?k=453f7787feb1b0f4231f8fd41b6002ccd3b29c9dd64ff3721273df049abca02c&o=&hp=1',
  },
  {
    title: 'Single Room',
    price: 167,
    beds: 1,
    guests: 2,
    image: 'https://4.imimg.com/data4/XR/WO/ANDROID-3742316/product.jpeg',
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
