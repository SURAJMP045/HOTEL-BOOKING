import React from 'react';
import { FaBroom, FaCarAlt, FaSwimmingPool, FaShuttleVan } from 'react-icons/fa';
import '../assets/stylesheet/Services.css';

const services = [
  {
    icon: <FaBroom />,
    title: 'Room Cleaning',
    desc: 'Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris.',
  },
  {
    icon: <FaCarAlt />,
    title: 'Car Parking',
    desc: 'Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris.',
  },
  {
    icon: <FaSwimmingPool />,
    title: 'Swimming Pool',
    desc: 'Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris.',
  },
  {
    icon: <FaShuttleVan />,
    title: 'PickUp & Drop',
    desc: 'Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris.',
  },
];

const Services = () => {
  return (
    <section className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
