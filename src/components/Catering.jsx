import React from "react";
import "./Catering.css";

const Catering = () => {
  return (
    <div className="catering-page-c">

      {/* HERO SECTION */}
      <section className="catering-hero-c">
        <img
          src="/catHome.jpg"
          alt="Catering Services"
          className="catering-hero-img-c"
        />

        <div className="catering-hero-overlay-c">
          {/* <div className="hero-blur-card-c">
            <h1 className="catering-hero-title-c">Premium Catering Services</h1>
            <p className="catering-hero-subtitle-c">
              Traditional Taste • Modern Presentation
            </p>
            <button className="catering-hero-btn-c">Explore Catering</button>
          </div> */}
        </div>

      </section>

      {/* OCCASION SECTION */}
      <section className="catering-occasion-c">
        <h2 className="catering-section-title-c">Perfect for Every Occasion</h2>
        <p className="catering-section-desc-c">
          We cater for all your special moments with up to
          <strong> 200 sweet boxes per event</strong>.
        </p>

        <div className="catering-cards-c">

          <div className="catering-card-c">
            <img src="/birth.png" alt="Birthday" />
            <h3>Birthday Parties</h3>
            <p>Delicious sweets to make your celebrations extra special.</p>
          </div>

          <div className="catering-card-c">
            <img src="/family1.png" alt="Family Function" />
            <h3>Family Functions</h3>
            <p>Adding sweetness to your family gatherings and festivities.</p>
          </div>

          <div className="catering-card-c">
            <img src="/corporate.png" alt="Corporate" />
            <h3>Corporate & Events</h3>
            <p>Elegant sweet boxes for corporate events and meetings.</p>
          </div>

        </div>
      </section>

      {/* BULK SECTION */}
      <section className="catering-bulk-c">
        <div className="catering-bulk">
          <h2>Bulk Orders Up to 200 Boxes</h2>
          <p>
            From weddings to festivals, we handle large orders
            with care, hygiene, and consistent quality.
          </p>
          <button onClick={() => {

            window.open("https://www.zomato.com/bhopal/chanchal-sweets-kohefiza", "_blank");
          }} className="catering-bulk-btn-c">
            Order Now
          </button>
        </div>
      </section>

      {/* CTA */}

    </div>
  );
};

export default Catering;
