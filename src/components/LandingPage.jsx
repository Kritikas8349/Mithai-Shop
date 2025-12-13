import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

const LandingPage = () => {
    const images = [
        "mitha.jpg",
        "gulabjamun.jpg",
        "jalebi.jpg"
      ];
      
      const [currentIndex, setCurrentIndex] = useState(0);
      
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 10000); 
      
        return () => clearInterval(interval);
      }, []);
      
      
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <p>
          ENJOY SAME-DAY DELIVERY ON ORDERS PLACED BEFORE 3 PM;
          ORDERS AFTER 3 PM ARRIVE THE NEXT DAY
        </p>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="logo.png" alt="Khoya Logo" className="logo" />
        </div>

        <ul className="nav-links">
          <li>WINTER SPECIAL</li>
          <li>ABOUT US</li>
          <li>GIFTING</li>
          <li>CELEBRATE WITH US</li>
          <li>MENU</li>
          <li>RESTUARANT</li>
          
        </ul>

        <div className="nav-icons">
          <FaSearch />
          <FaUser />
          <FaShoppingBag />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
  {/* LEFT PANEL */}
  <div className="hero-left">

    {/* Inner light box */}
    <div className="hero-box">

  {/* Background image */}
  <img
    src="bg1.avif"
    alt="background"
    className="hero-box-bg"
  />

  {/* Content */}
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

  {/* RIGHT PANEL */}
  <div className="hero-right">
  <img
    key={currentIndex}   
    src={images[currentIndex]}
    alt="Dessert"
    className="hero-image"
  />
</div>




  {/* Bottom-left sweets */}
  <img src="stand.png" alt="Barfi" className="barfi" />

  {/* WhatsApp */}
  <div className="whatsapp">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
    />
  </div>

  {/* Carousel dots */}
  <div className="carousel-dots">
    <span className="active"></span>
    <span></span>
    <span></span>
  </div>
</section>

    </>
  );
};

export default LandingPage;
