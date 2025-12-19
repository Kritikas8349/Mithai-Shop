import React from "react";
import "./Resturant.css";

const Resturant = () => {
  return (
    <section className="restaurant-hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <p className="small-top">Since 1950</p>

        <h1 className="main-heading">
          THE <br />
          CHANCHAL <br />
          SWEETS
        </h1>

        <p className="script-text">House of Quality</p>
      </div>

      <div className="bottom-bar">
        The Chanchal Restaurant • Authentic Indian Cuisine • Est. 1950
      </div>
    </section>
  );
};

export default Resturant;
