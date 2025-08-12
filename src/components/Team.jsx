import React from 'react';
import '../assets/stylesheet/Team.css';

const members = [
  {
    name: 'Michelle Yeoh',
    title: 'Services man',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'David Fincher',
    title: 'Services man',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Michelle Reis',
    title: 'Services man',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <p className="team-subtitle">Our Expert Member</p>
      <h2 className="team-title">Expert Our Services man</h2>

      <div className="team-container">
        {members.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-overlay">
                <div className="team-socials">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-behance"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
