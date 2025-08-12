import React, { useEffect, useState } from 'react';
import '../assets/stylesheet/pagestyle/ComingSoon.css';

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-31T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coming-soon">
      <div className="overlay">
        <h1>Coming Soon</h1>
        <div className="countdown">
          <div><span>{timeLeft.days}</span><p>DAYS</p></div>
          <div><span>{timeLeft.hours}</span><p>HOURS</p></div>
          <div><span>{timeLeft.minutes}</span><p>MINUTES</p></div>
          <div><span>{timeLeft.seconds}</span><p>SECONDS</p></div>
        </div>
        <p className="subscribe-text">Subscribe to Our newsletter stay with us</p>
        <form className="subscribe-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
