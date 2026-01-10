import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= TOP BAR ================= */}
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


      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <img src="clogo.png" alt="Logo" className="logo" />

        {/* SAME nav-links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
  <li>
    <NavLink to="/" end onClick={() => setMenuOpen(false)}>HOME</NavLink>
  </li>
  <li>
    <NavLink to="/about" onClick={() => setMenuOpen(false)}>ABOUT</NavLink>
  </li>
  <li>
    <NavLink to="/menu" onClick={() => setMenuOpen(false)}>MENU</NavLink>
  </li>
  <li>
    <NavLink to="/restaurant" onClick={() => setMenuOpen(false)}>RESTAURANT</NavLink>
  </li>
  <li>
    <NavLink to="/catering" onClick={() => setMenuOpen(false)}>CATERING</NavLink>
  </li>

  {/* ✅ MOBILE CONTACT BUTTON */}
  <li className="mobile-contact">
  <button
  className="contact-btn mobile-contact-btn"
  onClick={() => {
    setMenuOpen(false);
    window.open("https://www.zomato.com/bhopal/chanchal-sweets-kohefiza", "_blank");
  }}
>
  ORDER NOW
</button>

  </li>
</ul>


        <div className="nav-icons">
        <button
  className="contact-btn desktop-only"
  onClick={() => window.open("https://www.zomato.com/bhopal/chanchal-sweets-kohefiza", "_blank")}
>
  ORDER NOW
</button>


          {/* HAMBURGER = ONLY CLOSE */}
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
    </>
  );
};

export default Navbar;
