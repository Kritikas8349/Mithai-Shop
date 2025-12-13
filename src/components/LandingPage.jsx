import React from "react";
import "./LandingPage.css";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

const LandingPage = () => {
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
          <li>SHOP CHANCHAL</li>
          <li>GIFTING</li>
          <li>CELEBRATE WITH CHANCHAL</li>
          <li>MENU</li>
          <li>ABOUT US</li>
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
      <h1>
        Chanchal Sweets <br />
        <span>House of Quality</span>
      </h1>

      <p className="subtitle">
      Chanchal Sweets, making every moment sweet!
      </p>

      {/* <p className="subtitles">
      Experience the rich taste of traditional Indian sweets, lovingly crafted using pure, high-quality ingredients and timeless recipes passed down through generations. Perfect for celebrations, gifting, or simply indulging in a moment of sweetness.
      </p> */}

      <button className="cta">SHOP NOW</button>
    </div>
  </div>

  {/* RIGHT PANEL */}
  <div className="hero-right">
    <img src="mitha.jpg" alt="Dessert" />
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
