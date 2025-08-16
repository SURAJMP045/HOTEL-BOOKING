import React from 'react'
import aboutBg from '../assets/SideRoom.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogGrid from '../components/BlogGrid'

const BlogList = () => {
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
          <h1>Blog Grid</h1>
          <p>
            <span className="breadcrumb-home">Home</span> - <span className="breadcrumb-current">Blog Grid</span>
          </p>
        </div>
      </div>
    </section>
    <BlogGrid/>
    <Footer/>
    </div>
    </>
  )
}

export default BlogList
