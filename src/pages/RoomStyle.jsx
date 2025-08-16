import React from 'react'
import aboutBg from '../assets/SingleRoom.png'
import '../assets/stylesheet/pagestyle/RoomStyle.css'
import RoomList from '../components/RoomList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RoomStyle = () => {
  return (
    <>
      <div className='roomstyle-body'>
        {/* Added wrapper for margin-top */}
        <div className="navbar-wrapper">
          <Navbar />
        </div>

        <section
          className="roomstyle-hero"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="overlay">
            <div className="roomstyle-hero-content">
              <h1>Room Style</h1>
              <p>
                <span className="breadcrumb-home">Home</span> - <span className="breadcrumb-current">Room Style</span>
              </p>
            </div>
          </div>
        </section>

        <RoomList />
        <Footer />
      </div>
    </>
  )
}

export default RoomStyle
