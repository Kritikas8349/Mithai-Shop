import React from "react";
import { FaLeaf, FaUtensils, FaCheckCircle } from "react-icons/fa";
import "./Resturant.css";

const Resturant = () => {
  return (<>
    <section
      className="restaurant-hero"
      role="banner"
      aria-label="The Chanchal Restaurant - Authentic Indian Dining"
    >
      {/* Background slider */}
      <div className="bg-slider" aria-hidden="true"></div>

      <div className="overlay"></div>

      <div className="hero-content">
        <p className="small-top">
          Since 1950 • Pure Veg Restaurant in Bhopal
        </p>

        {/* MAIN SEO HEADING */}
        <h1 className="main-heading">
          The <br /> Chanchal <br /> Restaurant
        </h1>

        {/* SUPPORTING KEYWORDS */}
        <h2 className="script-text">
          Authentic Indian Cuisine & Family Dining
        </h2>

        {/* Hidden SEO paragraph */}
        <p className="seo-text">
          The Chanchal Restaurant in Bhopal offers authentic Indian cuisine,
          traditional recipes, hygienic preparation, and a premium family
          dining experience since 1950.
        </p>
      </div>

      {/* <div className="bottom-bar">
        Authentic Indian Restaurant in Bhopal • Family Dining • Since 1950
      </div> */}
    </section>

    <section className="why-section">
      <div className="why-container">

        <div className="why-card">
          <FaLeaf className="why-icon" />
          <h3>Fresh Ingredients</h3>
          <p>
            We use handpicked fresh ingredients every day to ensure
            rich taste, purity and authentic flavours in every dish.
          </p>
        </div>

        <div className="why-card">
          <FaUtensils className="why-icon" />
          <h3>Authentic Recipes</h3>
          <p>
            Our recipes are passed down through generations,
            preserving the true essence of Indian sweets & cuisine.
          </p>
        </div>

        <div className="why-card">
          <FaCheckCircle className="why-icon" />
          <h3>Hygiene & Quality</h3>
          <p>
            Prepared in a clean, hygienic environment with strict
            quality checks to serve you the best every time.
          </p>
        </div>

      </div>
    </section>

  </>
  );
};

export default Resturant;
