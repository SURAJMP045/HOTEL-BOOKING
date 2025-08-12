import { useState, useEffect } from 'react';
import '../assets/stylesheet/CompanyName.css';
import { Link } from "react-router-dom";

const CompanyName = () => {
  const [statNumber, setStatNumber] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const targetNumber = 180;

  useEffect(() => {
    const duration = 2000;
    const increment = targetNumber / (duration / 16);
    
    const timer = setInterval(() => {
      setStatNumber(prev => {
        if (prev >= targetNumber) {
          clearInterval(timer);
          return targetNumber;
        }
        return prev + increment;
      });
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="company-section lazy-loaded">
      <div className="company-content">
        {/* Left Side - Statistics */}
        <div className="hero-stats">
          <div className="stat-item">
            <h2 className="stat-number">{Math.floor(statNumber)}+</h2>
            <p className="stat-label">Get International</p>
          </div>
        </div>
        
        {/* Middle - Image */}
        <div className="hero-image">
          <div className="image-placeholder">
            {!imageError ? (
              <img 
                src="https://html.nextwpcook.com/hostily/assets/img/hotel/hotel-9.jpg" 
                alt="Modern Hotel Room"
                className={`lazy-image ${imageLoaded ? 'loaded' : ''}`}
                onError={handleImageError}
                onLoad={handleImageLoad}
                loading="lazy"
              />
            ) : (
              <div className="image-fallback">
                <p>Hotel Room Image</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Side - Text Content */}
        <div className="hero-text">
          <p className="hero-subtitle">Company</p>
          <h1 className="hero-title">Optimize your business<br />For online bookings.</h1>
          <p className="hero-description">
            Morbi et tellus imperdiet, aliquam nulla sed, dapibus erat. Aenean dapibus sem non purus venenatis vulputate. Donec accumsan eleifend blandit. Nullam auctor ligula vel ante volutpat,
          </p>
          <Link to="/about" className="company-link">
          <button className="hero-btn">
            READ MORE
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyName;
