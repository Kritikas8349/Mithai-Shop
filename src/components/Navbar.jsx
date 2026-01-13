import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // ✅ Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // ✅ Close when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);
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
      <nav className="navbar" ref={navRef}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="clogo.png"
            alt="Logo"
            className="logo"
            style={{ cursor: "pointer" }}
          />
        </Link>

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
                window.open("https://zomato.onelink.me/xqzv/8zunoq5d", "_blank");
              }}
            >
              ORDER NOW
            </button>

          </li>
        </ul>


        <div className="nav-icons">
          <button
            className="contact-btn desktop-only"
            onClick={() => window.open("https://zomato.onelink.me/xqzv/8zunoq5d", "_blank")}
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
