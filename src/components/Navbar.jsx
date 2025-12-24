import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
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
          <p aria-hidden="true">
            SAME DAY DELIVERY WITHIN BHOPAL
            <span className="dot">•</span>
            FRESHNESS AND HYGIENE ASSURED
          </p>
          <p aria-hidden="true">
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

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="clogo.png" alt="Logo" className="logo" />
        </div>

        <ul className="nav-links">
        <li className="menu-card">
  <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
</li>

        <li className="menu-card">
  <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
</li>

        <li className="menu-card">
          <Link to="/menu" onClick={() => setMenuOpen(false)}>MENU</Link>
        </li>

        <li className="menu-card">
  <Link to="/restaurant" onClick={() => setMenuOpen(false)}>RESTAURANT</Link>
</li>

<li className="menu-card">
  <Link to="/catering" onClick={() => setMenuOpen(false)}>CATERING</Link>
</li>

      </ul>


        <div className="nav-icons">
          {/* DESKTOP CONTACT BUTTON — SAME AS BEFORE */}
          <button className="contact-btn desktop-only">
            CONTACT US
          </button>

          <FaBars
            className="hamburger"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <FaTimes
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        />

        <ul className="mobile-menu-links">
          <li className="menu-card">HOME</li>
          <li className="menu-card">ABOUT US</li>
          <li className="menu-card">CELEBRATIONS</li>
          <li className="menu-card">MENU</li>
          <li className="menu-card">RESTAURANT</li>
        </ul>

        {/* SAME CONTACT BUTTON — MOBILE */}
        <button className="contact-btn mobile-only">
          CONTACT US
        </button>
      </div>
    </>
  );
};

export default Navbar;