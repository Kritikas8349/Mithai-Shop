import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { FaAward, FaLeaf, FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const items = document.querySelectorAll(".feature-item, .divider");
    const aboutSection = aboutRef.current;

    /* ABOUT SECTION OBSERVER */
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("in-view");
          aboutObserver.unobserve(aboutSection);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutSection) {
      aboutObserver.observe(aboutSection);
    }

    /* FEATURE ITEMS OBSERVER */
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            itemObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => itemObserver.observe(item));
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
    <div className="main">
      <section className="hero">
        <img
          src="edits1.png"
          alt="Chanchal Sweets traditional Indian mithai"
          className="hero-bg"
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
          <div className="about-images image-cluster">
            <img src="/meethai.jpg" alt="Indian dish" className="cluster-img img-a" />
            <img src="/noodle.jpg" alt="Traditional sweets" className="cluster-img img-b" />
            <img src="/panipuri.jpg" alt="Veg thali" className="cluster-img img-c" />
            <img src="/jalebi.jpg" alt="Restaurant burgers" className="cluster-img img-d" />
          </div>

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




    </div>
  );
};

export default Hero;
