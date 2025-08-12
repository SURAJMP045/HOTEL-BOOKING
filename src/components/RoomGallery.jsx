import React from 'react';
import '../assets/stylesheet/RoomGallery.css';

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
];

const RoomGallery = () => {
  return (
    <div className="gallery-container">
      {images.map((src, index) => (
        <div className="gallery-item" key={index}>
          <img src={src} alt={`Room ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default RoomGallery;
