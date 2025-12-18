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


  const data = {
    sweets: {
      title: "Sweets",
      desc: "Traditional mithai prepared with love since 1957",
      items: ["Rasmalai", "Gulab Jamun", "Kaju Katli", "Ladoo", "Gujiya", "Ghevar"],
      images: [
        "rasmalai.jpg",
        "gulabjamun.jpg",
        "kaju.jpg",
        "lado.jpg",
        "gujiya.jpg",
        "ghevar.jpg"
      ]
    },
    chaat: {
      title: "Chaat Center",
      desc: "Street-style chaat with authentic Indian flavors",
      items: ["Samosa", "Pani Puri", "Raj Kachori", "Bhel Puri", "DahiChaat", "Chole Tikki"],
      images: [
        "samosa.jpg",
        "panipuri.jpg",
        "rajkachori.jpg",
        "bhel.jpg",
        "dahipuri.jpg",
        "choletikki.jpg"
      ]
    },
    fastfood: {
      title: "Fast Food",
      desc: "Quick bites made fresh for every craving",
      items: ["Pasta", "Manchurian", "Noodles", "Spring Rolls", "Chilli Potato", "Momos"],
      images: [
        "pasta.jpg",
        "manch.jpg",
        "noodle.jpg",
        "roll.jpg",
        "chillipotato.jpg",
        "momo.jpg"
      ]
    }
  };

  const [active, setActive] = useState("sweets");
  

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



<section className="catalog-section">
<h2 className="catalog-title reveal">Our Catalog</h2>
      {/* TABS */}
      <div className="catalog-tabs reveal">
        <button
          className={active === "sweets" ? "active" : ""}
          onClick={() => setActive("sweets")}
        >
          Sweets
        </button>
        <button
          className={active === "chaat" ? "active" : ""}
          onClick={() => setActive("chaat")}
        >
          Chaat Center
        </button>
        <button
          className={active === "fastfood" ? "active" : ""}
          onClick={() => setActive("fastfood")}
        >
          Fast Food
        </button>
      </div>

      <div className="catalog-layout">
        {/* LEFT INFO BOX */}
        <div className="catalog-info reveal reveal-left">
          <h3>{data[active].title}</h3>
          <p>{data[active].desc}</p>

          <ul>
            {data[active].items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button>View Menu</button>
        </div>

        {/* IMAGE GRID */}
        <div className="catalog-grid">
          {data[active].images.map((img, index) => (
            <img src={img} alt="" key={index} />
          ))}
        </div>
      </div>
    </section>


    <section className="testimonials">

<h1 className="testimonials-titles reveal reveal-up">
  Sweet Reviews
</h1>

<h2 className="testimonials-title reveal reveal-up delay-1">
  Loved by families, and sweet lovers across the city.
</h2>

<div className="testimonials-grid">
  {/* CARD 1 */}
  <div className="testimonial-card reveal reveal-up delay-1">
    <div className="stars">★★★★★</div>
    <p className="testimonial-text">
      The taste instantly reminded me of childhood festivals. Fresh,
      perfectly balanced sweetness, and authentic flavors that you
      rarely find today.
    </p>

    <div className="testimonial-user">
      <img src="t.png" alt="Anita Sharma" />
      <div>
        <strong>Anita Sharma</strong>
        <span>Bhopal, MP</span>
      </div>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="testimonial-card reveal reveal-up delay-2">
    <div className="stars">★★★★★</div>
    <p className="testimonial-text">
      Chanchal Sweets never disappoints. From laddoos to chaat, everything
      is prepared fresh and served with warmth. Truly a trusted name.
    </p>

    <div className="testimonial-user">
      <img src="ss3.png" alt="Rohit Verma" />
      <div>
        <strong>Rohit Verma</strong>
        <span>Bairagarh, MP</span>
      </div>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="testimonial-card reveal reveal-up delay-3">
    <div className="stars">★★★★★</div>
    <p className="testimonial-text">
      Ordered sweets for a family function and everyone loved it.
      Beautiful packaging, rich taste, and on-time delivery.
    </p>

    <div className="testimonial-user">
      <img src="ss4.png" alt="Neha Patel" />
      <div>
        <strong>Neha Patel</strong>
        <span>Sehore, MP</span>
      </div>
    </div>
  </div>
</div>
</section>






  


    </>
  );
};

export default LandingPage;
