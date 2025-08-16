import React from 'react'
import aboutBg from '../assets/Luxury3.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RoomDetailLayout from './RoomDetailsLayout'
import '../assets/stylesheet/pagestyle/RoomStyle.css'

const BlogStandards = () => {
  return (
    <>
      <div className='roomstyle-body'>
      <div className="navbar-wrapper">
          <Navbar />
        </div>
    <section
      className="roomstyle-hero"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="overlay">
        <div className="roomstyle-hero-content">
          <h1>Blog Details</h1>
          <p>
            <span className="breadcrumb-home">Home</span> - <span className="breadcrumb-current">Blog Details</span>
          </p>
        </div>
      </div>
    </section>
    <RoomDetailLayout/>
    <Footer/>
    </div>
    </>
  )
}

export default BlogStandards
