import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { FaAward, FaLeaf, FaShieldAlt } from "react-icons/fa";

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
        "/ghee boondi laddu.JPG",
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
        "/masala patties.JPG",
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
      <h1>
        Chanchal <span>Sweets</span>
      </h1>
      <h2>House of Quality</h2>

      <p>
        Experience the authentic taste of premium Indian sweets. <br />
        Crafted with Tradition, Served with Love.
      </p>

      <a href="#products" className="hero-btn">
        Explore Our Mithai
      </a>
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





      <section className="about-section">
      <div className="about-container">

        {/* LEFT IMAGE GRID */}
        <div className="about-images">
          <img src="/noodle.jpg" alt="Indian Mithai" />
          <img src="/mithais.jpg" alt="Vegetarian Food" />
          <img src="/gajarhalwa.jpg" alt="Traditional Sweets" />
          <img src="/manch.jpg" alt="Jalebi" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <div className="divider top"></div>

          <span className="about-tag">Our Story</span>

          <h2>
            Authentic Mithai & <br />
            Pure Vegetarian Restaurant in Bhopal
          </h2>

          <p>
            <strong>Chanchal Sweets</strong> is a trusted destination in Bhopal
            for authentic Indian mithai and pure vegetarian food, known for
            uncompromising quality, taste, and hygiene. For generations, we have
            been crafting traditional sweets using pure ingredients and
            time-honored recipes.
          </p>

          <p>
            From handcrafted Indian sweets made fresh every day to a warm and
            welcoming pure vegetarian restaurant, we bring together Indian
            culinary heritage with modern standards of cleanliness and service.
          </p>

          <div className="about-buttons">
            <button className="primary">Explore Our Menu</button>
            <button className="secondary">Know Our Story</button>
          </div>

          <div className="divider bottom"></div>
        </div>
      </div>
    </section>




      <section className="catalog-section">

    {/* BACKGROUND IMAGE */}
    <img
      src="/patterns.jpg"
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








    </div>
  );
};

export default Hero;
