import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { FaAward, FaLeaf, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // -------- PHILOSOPHY TEXT ANIMATION --------
    const philosophyText = document.querySelector(".philosophy-text");
    if (philosophyText) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            philosophyText.classList.add("in-view");
            observer.unobserve(philosophyText);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(philosophyText);
    }

    // -------- ABOUT SECTION --------
    const aboutSection = aboutRef.current;
    if (aboutSection) {
      const aboutObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            aboutSection.classList.add("in-view");
            aboutObserver.unobserve(aboutSection);
          }
        },
        { threshold: 0.2 }
      );
      aboutObserver.observe(aboutSection);
    }

    // -------- FEATURE ITEMS --------
    const featureItems = document.querySelectorAll(".feature-item, .divider");
    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            featureObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    featureItems.forEach((item) => featureObserver.observe(item));

    // -------- CATALOG SECTION --------
    const catalogTargets = document.querySelectorAll(
      ".catalog-title, .catalog-tabs, .catalog-info, .catalog-grid img"
    );
    const catalogObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("catalog-animate");
            catalogObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    catalogTargets.forEach((el) => catalogObserver.observe(el));

  }, []);





  const data = {
    hampers: {
      title: "Gift Hampers",
      desc: "Premium festive and customized hampers for every occasion.",
      items: [
        "Diwali Mawa Sweets",
        "Dry Fruit Box",
        "Corporate Gift Box",
        "Mix Chikki Box",
        "Festival Special Combos",
        "Baklava Box"
      ],
      images: [
        "diwali mawa sweets.JPG",
        "4 in 1 dry fruit box.JPG",
        "Hamper.JPG",
        "mix lai chikki 1kg.JPG",
        "4 in 1 mix box.JPG",
        "baklava.JPG"
      ]
    },
    sweets: {
      title: "Sweets",
      desc: "Traditional mithai prepared with love since 1957.",
      items: ["Rasmalai", "Dryfruit Laddu", "Kaju Katli", "Ghee Boondi Ladoo", "Kheer Kadam", "Sugar Free Anjeer"],
      images: [
        "/rasmalai.png",
        "/dry fruit laddu.JPG",
        "/kaju katli.JPG",
        "/motichur.jpg",
        "/kheer kadam.JPG",
        "/sugar free anjeer.JPG"
      ]
    },
    chaat: {
      title: "Chaat Center",
      desc: "Street-style chaat with authentic Indian flavors.",
      items: ["Kachori", "Pani Puri", "Masala Patties", "Sev Poori", "Bombay Bhel", "Chole Tikki"],
      images: [
        "/kachori.JPG",
        "/panipoori.png",
        "/masalapatties.JPG",
        "/sev poori.JPG",
        "/bombay bhel.JPG",
        "/chole tikki (1).JPG"
      ]
    },
    fastfood: {
      title: "Fast Food",
      desc: "Quick bites made fresh for every craving.",
      items: ["Red Sauce Pasta", "Manchurian", "Schezwan Noodles", "Pav Bhaji", "Chilli Paneer", "Veg Hot Sandwich"],
      images: [
        "/red sauce pasta.JPG",
        "/dry Manchurian (2) (1).JPG",
        "/Schezwan noodles.JPG",
        "/pav bhaji (1).JPG",
        "/chilli paneer.JPG",
        "/veg hot sandwich.JPG"
      ]
    },
  };

  const [active, setActive] = useState("hampers");

  return (
    <div className="main" id="home" >
     <section className="hero">
  {/* DESKTOP IMAGE */}
  <img
    src="edits1.png"
    alt="Chanchal Sweets traditional Indian mithai"
    className="hero-bg desktop-img"
  />

  {/* MOBILE IMAGE */}
  <img
    src="mobile.png"
    alt="Chanchal Sweets Mithai"
    className="hero-bg mobile-img"
  />

  <div className="hero-overlay"></div>

  <div className="hero-content">
  <div className="hero-right">
  <h1 className="reveal delay-1">
    Chanchal <span>Sweets</span>
  </h1>

  <h2 className="reveal delay-2">House of Quality</h2>

  <p className="reveal delay-3">
    Experience the authentic taste of premium Indian sweets. <br />
    Crafted with Tradition, Served with Love.
  </p>

  <Link to="/menu" className="hero-btn reveal delay-4">
    Explore More
  </Link>
</div>

  </div>
</section>




      <section className="feature-strip">
        <div className="feature-item">
          <FaAward className="feature-icon" />
          <span>High Quality</span>
        </div>

        <div className="divider1" />

        <div className="feature-item">
          <FaLeaf className="feature-icon" />
          <span>100% Vegetarian</span>
        </div>

        <div className="divider1" />

        <div className="feature-item">
          <FaShieldAlt className="feature-icon" />
          <span>Hygienic</span>
        </div>
      </section>





      <section className="about-section" ref={aboutRef}>
  <div className="about-container">

    <div className="about-images">
      <img src="/noodle.jpg" className="about-animate delay-1" />
      <img src="/mithais.jpg" className="about-animate delay-2" />
      <img src="/gajarhalwa.jpg" className="about-animate delay-3" />
      <img src="/sand.jpg" className="about-animate delay-4" />
    </div>

    <div className="about-content">
      <div className="divider top about-animate delay-1"></div>

      <span className="about-tag about-animate delay-2">Our Story</span>

      <h2 className="about-animate delay-3">
        Authentic Mithai & <br />
        Pure Vegetarian Restaurant in Bhopal
      </h2>

      <p className="about-animate delay-4">
        <strong>Chanchal Sweets</strong> is a trusted destination in Bhopal
        for authentic Indian mithai and pure vegetarian food.
      </p>

      <p className="about-animate delay-5">
        From handcrafted Indian sweets made fresh every day to a warm and
        welcoming pure vegetarian restaurant.
      </p>

      <div className="about-buttons about-animate delay-6">
        <Link to="/menu" className="primary">Explore Our Menu</Link>
        <Link to="/about" className="secondary">Know Our Story</Link>
      </div>

      <div className="divider bottom about-animate delay-6"></div>
    </div>
  </div>
</section>






      <section className="catalog-section">

    {/* BACKGROUND IMAGE */}
    <img
      src="/bg1.avif"
      alt="Catalog background"
      className="catalog-bg-img"
    />


    <h2 className="catalog-title ">Our Catalog</h2>


    {/* TABS */}
    <div className="catalog-tabs">
    <button
    className={active === "hampers" ? "active" : ""}
    onClick={() => setActive("hampers")}
  >
    Hampers
  </button>
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
      <div className="catalog-info  -left">
        <h3>{data[active].title}</h3>
        <p>{data[active].desc}</p>

        <ul>
          {data[active].items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Link to="/menu" className="catalog-btn">
  View Menu
</Link>
      </div>

      {/* IMAGE GRID */}
      <div className="catalog-grid">
        {data[active].images.map((img, index) => (
          <img src={img} alt="" key={index} />
        ))}
      </div>
    </div>

</section>





<section className="philosophy-section">
  {/* DESKTOP IMAGE */}
  <img
    src="ladoobg1.png"
    alt="Traditional Indian Mithai"
    className="philosophy-bg desktop-img"
  />

  {/* MOBILE IMAGE */}
  <img
    src="ladoobg2.png"
    alt="Traditional Indian Mithai"
    className="philosophy-bg mobile-img"
  />

  <div className="philosophy-overlay"></div>

  <div className="philosophy-text">
    {/* TOP BORDER */}
    <img src="/border.png" alt="Top border" className="border-img-top" />

    <span className="philosophy-tag">Our Philosophy</span>

    <h2>
      Luxurious Mithais, <br />
      Accessible To Everyone
    </h2>

    <p>
      Our luxurious mithais are crafted with the finest ingredients,
      ensuring a melt-in-your-mouth experience that speaks of elegance
      and quality. Yet, our mission goes beyond indulgence; we believe
      that these exquisite delights should be accessible to everyone,
      bringing a touch of luxury to your everyday moments.
    </p>

    {/* BOTTOM BORDER */}
    <img src="/border.png" alt="Bottom border" className="border-img-bottom" />
  </div>
</section>





<section className="map-section">
  <div className="map-container">
    <h2 className="map-title">Find Us Here</h2>

    <div className="map-frame">
      <iframe
        title="Google Map Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1325.11174731885!2d77.33659412096443!3d23.27087321698158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67a1e2f725d9%3A0xe23a7b45346f7768!2sChanchal%20Sweet%20House!5e0!3m2!1sen!2sin!4v1768043746579!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>



    </div>
  );
};

export default Hero;
