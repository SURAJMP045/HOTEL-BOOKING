import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutBg from '../assets/contact-bg.png'
import RoomCard from '../components/RoomCard'
import '../assets/stylesheet/pagestyle/RoomList.css'
import Amenities from '../components/Amenities'

const RoomDetail = () => {
  return (
    <>
      <div className='roomlist-body'>
      <div className="navbar-wrapper">
          <Navbar />
        </div>
    <section
      className="roomlist-hero"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="overlay">
        <div className="roomlist-hero-content">
          <h1>Room Details</h1>
          <p>
            <span className="breadcrumb-home">Home</span> - <span className="breadcrumb-current">Room Details</span>
          </p>
        </div>
      </div>
    </section>
    <Amenities/>
    <Footer/>
    </div>
    </>
  )
}

export default RoomDetail
