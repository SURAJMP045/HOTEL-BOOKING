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
      <Navbar/>
    <section
      className="service-hero"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="overlay">
        <div className="service-hero-content">
          <h1>Services Details</h1>
          <p>
            <span className="breadcrumb-home">Home</span> - <span className="breadcrumb-current">Services Details</span>
          </p>
        </div>
      </div>
    </section>
    <Services/>
    <CustomerBenefits/>
    <Footer/>
    </div>
    </>
  )
}

export default ServicePage
