import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";
import RoomGallery from "./RoomGallery";

// Eagerly loaded components
import TeamMembers from '../pages/TeamMembers';
import ServicesDetails from '../pages/ServicePage';
import ComingSoon from "../pages/ComingSoon";
import RoomStyle from "../pages/RoomStyle";
import RoomModern from "../pages/RoomModern"
import RoomList from "../pages/RoomList";
import RoomDetails from "../pages/RoomStyle";
import BlogGrid from "../pages/BlogList";
import BlogStandard from "../pages/BlogStandards"
import BlogDetails from "../pages/BlogStandards"

// Lazy loaded components
const HeaderSection = lazy(() => import("./HeaderSection"));
const CompanyName = lazy(() => import("./CompanyName"));
const HeroSection = lazy(() => import("./HeroSection"));
const LuxuryRooms = lazy(() => import("./LuxuryRooms"));
const BookingArea = lazy(() => import("./BookingArea"));
const BlogSection = lazy(() => import("./BlogSection"));
const Footer = lazy(() => import("./Footer"));
const AboutPage = lazy(() => import("./About"));
const ContactPage = lazy(() => import("./Contact"));


// Home page combining all sections
function HomePage() {
  return (
    <>
      <HeaderSection />
      <CompanyName />
      <HeroSection />
      <LuxuryRooms />
      <BookingArea />
      <BlogSection />
      <RoomGallery />
      <Footer />
    </>
  );
}

// Main app routes with Suspense fallback
function Home() {
  return (
    <Suspense
      fallback={
        <div className="loader-container">
          <div className="loader"></div>
          <p className="loading-text">loading...</p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Pages dropdown routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/services-details" element={<ServicesDetails />}/> 
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Room dropdown routes */}
        <Route path="/room-style" element={<RoomStyle />} />
        <Route path="/room-modern" element={<RoomModern />} />
        <Route path="/room-details" element={<RoomDetails />} />
        <Route path="/room-lists" element={<RoomList />} />

        {/* Blog dropdown routes */}
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-standard" element={<BlogStandard />} />


        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}

export default Home;
