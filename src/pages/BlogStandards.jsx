import React from 'react'
import aboutBg from '../assets/contact-bg.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RoomDetailLayout from '../components/RoomDetailsLayout'
import '../assets/stylesheet/pagestyle/RoomStyle.css'

const BlogStandards = () => {
  return (
    <>
      <div className='roomstyle-body'>
      <Navbar/>
    <section
      className="roomstyle-hero"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="overlay">
        <div className="roomstyle-hero-content">
          <h1>Blog Standards</h1>
          <p>
            <span className="breadcrumb-home">Home</span> - <span className="breadcrumb-current">Blog Standards</span>
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
