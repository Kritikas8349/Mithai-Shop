import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-bar-track">
          <p>
            SAME DAY DELIVERY WITHIN BHOPAL
            <span className="dot">•</span>
            FRESHNESS AND HYGIENE ASSURED
          </p>
          <p aria-hidden="true">
            SAME DAY DELIVERY WITHIN BHOPAL
            <span className="dot">•</span>
            FRESHNESS AND HYGIENE ASSURED
          </p>
          
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <img src="clogo.png" alt="Logo" className="logo" />

        <ul className="nav-links">
          <li><NavLink to="/" end>HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT US</NavLink></li>
          <li><NavLink to="/menu">MENU</NavLink></li>
          <li><NavLink to="/restaurant">RESTAURANT</NavLink></li>
          <li><NavLink to="/catering">CATERING</NavLink></li>
        </ul>

        <div className="nav-icons">
          <button className="contact-btn desktop-only">CONTACT US</button>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-links">
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</NavLink></li>
          <li><NavLink to="/menu" onClick={() => setMenuOpen(false)}>MENU</NavLink></li>
          <li><NavLink to="/restaurant" onClick={() => setMenuOpen(false)}>RESTAURANT</NavLink></li>
          <li><NavLink to="/catering" onClick={() => setMenuOpen(false)}>CATERING</NavLink></li>
        </ul>

        <button className="contact-btn mobile-only">CONTACT US</button>
      </div>
    </>
  );
};

export default Navbar;
