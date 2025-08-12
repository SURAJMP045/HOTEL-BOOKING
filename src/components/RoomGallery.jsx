import React from 'react';
import '../assets/stylesheet/RoomGallery.css';

const images = [
  "https://html.nextwpcook.com/hostily/assets/img/features/instagram-3.jpg",
  "https://html.nextwpcook.com/hostily/assets/img/features/instagram-2.jpg",
  "https://html.nextwpcook.com/hostily/assets/img/features/instagram-1.jpg",
  "https://html.nextwpcook.com/hostily/assets/img/features/instagram-4.jpg",
  "https://html.nextwpcook.com/hostily/assets/img/features/instagram-5.jpg",
  "https://html.nextwpcook.com/hostily/assets/img/features/instagram-6.jpg",
  "https://html.nextwpcook.com/hostily/assets/img/features/instagram-2.jpg",
  "https://html.nextwpcook.com/hostily/assets/img/features/instagram-3.jpg",
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
