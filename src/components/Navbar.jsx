import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes
} from "react-icons/fa";
import "./Navbar.css"; // agar same CSS use kar rahe ho to LandingPage.css bhi chal jayega

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="logo.png" alt="Chanchal Sweets Logo" className="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>WINTER SPECIAL</li>
          <li>ABOUT US</li>
          <li>GIFTING</li>
          <li>CELEBRATE WITH US</li>
          <li>MENU</li>
          <li>RESTAURANT</li>
        </ul>

        <div className="nav-icons">
          <FaSearch />
          <FaUser />
          <FaShoppingBag />

          {/* Hamburger for mobile */}
          <FaBars
            className="hamburger"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <FaTimes
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        />

        {/* Logo inside menu */}
        <div className="mobile-menu-logo">
          <img src="logo.png" alt="Chanchal Logo" />
        </div>

        {/* Menu cards */}
        <ul className="mobile-menu-links">
          <li className="menu-card">WINTER SPECIAL</li>
          <li className="menu-card">ABOUT US</li>
          <li className="menu-card">GIFTING</li>
          <li className="menu-card">CELEBRATE WITH US</li>
          <li className="menu-card">MENU</li>
          <li className="menu-card">RESTAURANT</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
