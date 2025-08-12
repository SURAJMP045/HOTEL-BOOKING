import React from 'react'
import '../assets/stylesheet/pagestyle/RoomModern.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import roommodernBg from '../assets/contact-bg.png'
import LuxuryGrid from '../components/LuxuryGrid'

const RoomModern = () => {
  return (
    <>
      <div className='roommodern-body'>
      <Navbar/>
    <section
      className="roommodern-hero"
      style={{ backgroundImage: `url(${roommodernBg})` }}
    >
      <div className="overlay">
        <div className="roommodern-hero-content">
          <h1>Room Modern</h1>
          <p>
            <span className="breadcrumb-home">Home</span> - <span className="breadcrumb-current">Room Modern</span>
          </p>
        </div>
      </div>
    </section>
    <LuxuryGrid/>
    <LuxuryGrid/>
    <LuxuryGrid/>
    <Footer/>
    </div>
    </>
  )
}

export default RoomModern
