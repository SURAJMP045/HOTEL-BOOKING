import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutBg from '../assets/contact-bg.png'
import RoomCard from '../components/RoomCard'

const RoomList = () => {
  return (
    <>
      <div className='roomlist-body'>
      <Navbar/>
    <section
      className="roomlist-hero"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="overlay">
        <div className="roomlist-hero-content">
          <h1>Room Lists Details</h1>
          <p>
            <span className="breadcrumb-home">Home</span> - <span className="breadcrumb-current">Room Lists Details</span>
          </p>
        </div>
      </div>
    </section>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <Footer/>
    </div>
    </>
  )
}

export default RoomList
