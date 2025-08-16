import React from 'react'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import aboutBg from '../assets/contact-bg.png'
import '../assets/stylesheet/pagestyle/ServicePage.css'
import CustomerBenefits from '../components/CustomerBenefits'

const ServicePage = () => {
  return (
    <>
      <div className='service-body'>
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <section
          className="service-hero"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="overlay">
            <div className="service-hero-content fade-in">
              <h1>Our Services</h1>
              <p className="breadcrumbs">
                <span className="breadcrumb-home">Home</span> 
                <span className="breadcrumb-divider"> / </span> 
                <span className="breadcrumb-current">Services</span>
              </p>
            </div>
          </div>
        </section>
        <Services />
        <CustomerBenefits />
        <Footer />
      </div>
    </>
  )
}

export default ServicePage
