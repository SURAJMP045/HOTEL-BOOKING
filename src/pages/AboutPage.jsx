import React, { Suspense, lazy } from "react";
import "../assets/stylesheet/pagestyle/AboutPage.css";
import aboutBg from "../assets/contact-bg.png";

const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const RoomGallery = lazy(() => import("../components/RoomGallery"));
const OfferSection = lazy(() => import("../components/OfferSection"));
const Services = lazy(() => import("../components/Services"));
const Team = lazy(() => import("../components/Team"));

const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
    <p className="loading-text">loading...</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="about-body">
      <Suspense fallback={<Loader />}>
        <Navbar />
      </Suspense>

      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="overlay">
          <div className="about-hero-content">
            <h1>About Us</h1>
            <p>
              <span className="breadcrumb-home">Home</span> -{" "}
              <span className="breadcrumb-current">About Us</span>
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<Loader />}>
        <OfferSection />
        <Services />
        <Team />
        <RoomGallery />
        <Footer />
      </Suspense>
    </div>
  );
};

export default AboutPage;
