import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes
} from "react-icons/fa";

const LandingPage = () => {
  const images = [
    "/mitha.jpg",
    "/gulabjamun.jpg",
    "/jalebi.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    reveals.forEach((el) => observer.observe(el));
  }, []);
  

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <p>
          ENJOY SAME-DAY DELIVERY ON ORDERS PLACED BEFORE 3 PM;
          ORDERS AFTER 3 PM ARRIVE THE NEXT DAY
        </p>
      </div>

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

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <img src="stand.png" alt="Barfi" className="barfi" />

          <div className="hero-box">
            <img
              src="bg1.avif"
              alt="background"
              className="hero-box-bg"
            />

            <h1>
              Chanchal Sweets <br />
              <span>House of Quality</span>
            </h1>

            <p className="subtitle">
              Chanchal Sweets, making every moment sweet!
            </p>

            <button className="cta">SHOP NOW</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Dessert"
            className="hero-image"
          />
        </div>

        <div className="whatsapp">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </div>

        <div className="carousel-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </section>




 {/* SWEET LEGACY */}
<section className="sweet-legacy">

{/* TOP HEADING */}
<div className="legacy-heading reveal">
  <h2>Our Sweet Legacy</h2>
  <p>From Our Family’s Heart to Your Home</p>
</div>

<div className="legacy-wrapper">

  {/* LEFT IMAGE */}
  <div className="legacy-left reveal reveal-left">
    <img src="fam.jpg" alt="Sweet Legacy" />
  </div>

  {/* RIGHT COLUMN */}
  <div className="legacy-right-column">

    {/* RIGHT TOP IMAGE */}
<div className="legacy-right reveal reveal-right">
  <img
    src="ss.png"
    alt="Legacy Design"
    className="legacy-right-img"
  />
</div>


    {/* POINTS */}
    <div className="legacy-points">
      <div className="legacy-point reveal">
        <img src="ladoo.png" alt="" />
        <div>
          <strong>1957: The Humble Beginning</strong>
          <p>Our first sweets shared from a small cart.</p>
        </div>
      </div>

      <div className="legacy-point reveal">
        <img src="ladoo.png" alt="" />
        <div>
          <strong>Today: A Shop is Sweetness</strong>
          <p>Serving smiles offline and online.</p>
        </div>
      </div>
    </div>

  </div>
</div>
</section>




  


    </>
  );
};

export default LandingPage;
