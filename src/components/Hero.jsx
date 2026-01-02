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
        "kachori.JPG",
        "panipoori.png",
        "masala patties.JPG",
        "sev poori.JPG",
        "bombay bhel.JPG",
        "chole tikki (1).JPG"
      ]
    },
    fastfood: {
      title: "Fast Food",
      desc: "Quick bites made fresh for every craving.",
      items: ["Red Sauce Pasta", "Manchurian", "Schezwan Noodles", "Pav Bhaji", "Chilli Paneer", "Veg Hot Sandwich"],
      images: [
        "red sauce pasta.JPG",
        "dry Manchurian (2) (1).JPG",
        "Schezwan noodles.JPG",
        "pav bhaji (1).JPG",
        "chilli paneer.JPG",
        "veg hot sandwich.JPG"
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

        <div className="divider" />

        <div className="feature-item">
          <FaLeaf className="feature-icon" />
          <span>100% Vegetarian</span>
        </div>

        <div className="divider" />

        <div className="feature-item">
          <FaShieldAlt className="feature-icon" />
          <span>Hygienic</span>
        </div>
      </section>

      <section className="about-section" ref={aboutRef}>
  <div className="about-container">

    {/* LEFT : SINGLE IMAGE */}
    <div className="about-image-single">
      <img
        src="/fl.png"
        alt="Chanchal Sweets Special"
        className="single-img"
      />
    </div>

    {/* RIGHT : CONTENT (UNCHANGED) */}
    <div className="about-content">
      <img src="/border.png" alt="Top border" className="border-img-top" />

      <span className="about-tag">Our Story</span>

      <h2>
        Authentic Mithai & <br />
        Pure Vegetarian Restaurant
      </h2>

      <p>
        <strong>Chanchal Sweets</strong> is a trusted name for premium Indian
        mithai and traditional vegetarian food. From handcrafted sweets
        made with pure ingredients to a welcoming family restaurant above,
        we bring you the true taste of Indian culture and hospitality.
      </p>

      <p>
        Whether you are celebrating festivals, weddings, or simply craving
        something delicious, our sweets and meals are prepared fresh every
        day with unmatched quality and hygiene.
      </p>

      <div className="about-buttons">
        <a href="#menu" className="btn primary">View Menu</a>
        <a href="#contact" className="btn secondary">About Us</a>
      </div>

      <img src="/border.png" alt="Bottom border" className="border-img-bottom" />
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
