import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";
import RoomGallery from "./RoomGallery";

// Eagerly loaded pages
import TeamMembers from '../pages/TeamMembers';
import ServicesDetails from '../pages/ServicePage';
import ComingSoon from "../pages/ComingSoon";
import RoomStyle from "../pages/RoomStyle";
import RoomModern from "../pages/RoomModern";
import RoomList from "../pages/RoomList";
import RoomDetails from "../pages/RoomStyle";
import BlogGrid from "../pages/BlogList";
import BlogStandard from "../pages/BlogStandards";
import BlogDetails from "../pages/BlogStandards";
import AboutPage from "./About";
import ContactPage from "./Contact";

// Keep only truly heavy components lazy-loaded
const HeaderSection = React.lazy(() => import("./HeaderSection"));
const CompanyName = React.lazy(() => import("./CompanyName"));
const HeroSection = React.lazy(() => import("./HeroSection"));
const LuxuryRooms = React.lazy(() => import("./LuxuryRooms"));
const BookingArea = React.lazy(() => import("./BookingArea"));
const BlogSection = React.lazy(() => import("./BlogSection"));
const Footer = React.lazy(() => import("./Footer"));

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

function Home() {
  return (
    <Suspense
      fallback={
        <div className="loader-container">
          <div className="loader"></div>
          <p className="loading-text">Loading...</p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/services-details" element={<ServicesDetails />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Rooms */}
        <Route path="/room-style" element={<RoomStyle />} />
        <Route path="/room-modern" element={<RoomModern />} />
        <Route path="/room-details" element={<RoomDetails />} />
        <Route path="/room-lists" element={<RoomList />} />

        {/* Blog */}
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
