import React from "react";
import "./Hero.css";
import { FaAward, FaLeaf, FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
    <section className="hero">
      {/* BACKGROUND IMAGE */}
      <img
        src="edits1.png"
        alt="Chanchal Sweets traditional Indian mithai"
        className="hero-bg"
      />

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <div className="hero-right">
          <h1>
            Chanchal <span>Sweets</span>
          </h1>
          <h2>House of Quality</h2>

          <p>
            Experience the authentic taste of premium Indian sweets,
            handcrafted with purity, tradition, and love.
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

</div>

  );
};

export default Hero;
