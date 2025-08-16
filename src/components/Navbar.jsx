import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheet/Navbar.css";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Pages", "Room", "Blog", "Contact"];

  const getLinkPath = (link) => {
    switch (link) {
      case "Home":
        return "/";
      case "Contact":
        return "/contact";
      default:
        return "#";
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <div className="logo-icon">
              <div className="house-icon">
                <LocationCityIcon />
              </div>
            </div>
            <span className="logo-text">HOSTILY</span>
          </div>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <div
                key={link}
                className="nav-item"
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link to={getLinkPath(link)} className="nav-link">
                  {link}
                  {link !== "Contact" && hoveredLink === link
                    ? " -"
                    : link !== "Contact"
                    ? " +"
                    : ""}
                </Link>

                {/* Dropdowns */}
                {link === "Home" && hoveredLink === "Home" && (
                  <div className="dropdown-menu">
                    <Link to="/" className="dropdown-item">Home 1</Link>
                    <Link to="/home2" className="dropdown-item">Home 2</Link>
                    <Link to="/home3" className="dropdown-item">Home 3</Link>
                  </div>
                )}
                {link === "Pages" && hoveredLink === "Pages" && (
                  <div className="dropdown-menu">
                    <Link to="/about" className="dropdown-item">About</Link>
                    <Link to="/team" className="dropdown-item">Team</Link>
                    <Link to="/services-details" className="dropdown-item">Services Details</Link>
                    <Link to="/coming-soon" className="dropdown-item">Coming Soon</Link>
                  </div>
                )}
                {link === "Room" && hoveredLink === "Room" && (
                  <div className="dropdown-menu">
                    <Link to="/room-style" className="dropdown-item">Room Style</Link>
                    <Link to="/room-modern" className="dropdown-item">Room Modern</Link>
                    <Link to="/room-details" className="dropdown-item">Room Details</Link>
                    <Link to="/room-lists" className="dropdown-item">Room Lists</Link>
                  </div>
                )}
                {link === "Blog" && hoveredLink === "Blog" && (
                  <div className="dropdown-menu">
                    <Link to="/blog-grid" className="dropdown-item">Blog Grid</Link>
                    <Link to="/blog-details" className="dropdown-item">Blog Details</Link>
                    <Link to="/blog-standard" className="dropdown-item">Blog Standard</Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="navbar-actions">
            <button
              className="search-btn"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            <button className="menu-btn" onClick={() => setIsSidebarOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay" onClick={() => setIsSearchOpen(false)}>
          <input
            type="text"
            className="search-input"
            placeholder="Search something..."
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Sidebar (always mounted, toggled by className) */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`sidebar ${isSidebarOpen ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <LocationCityIcon />
              <span className="logo-text">HOSTILY</span>
            </div>
            <button
              className="sidebar-close"
              onClick={() => setIsSidebarOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <p>Morbi et tellus imperdiet, aliquam nulla sed, dapibus erat.</p>
          <p>Aenean dapibus sem non purus venenatis vulputate.</p>
          <p>Donec accumsan eleifend blandit. Nullam auctor ligula.</p>

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Room"
            className="sidebar-image"
          />

          <div className="sidebar-contact">
            <h4>Contact Info</h4>
            <p>
              📞 Call Now<br />
              <strong>+125 (895) 658 568</strong>
            </p>
            <p>
              📧 Quick Email<br />
              <strong>info@hostily.com</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
