import React from "react";
import "./Catering.css";

const Catering = () => {
  return (
    <div className="catering-page-c">

      {/* HERO SECTION */}
      <section className="catering-hero-c">
        <img
          src="/catering bg.png"
          alt="Catering Services"
          className="catering-hero-img-c"
        />

        <div className="catering-hero-overlay-c">
          <h1 className="catering-hero-title-c">Premium Catering Services</h1>
          <p className="catering-hero-subtitle-c">
            Traditional Taste • Modern Presentation
          </p>
          <button className="catering-hero-btn-c">Watch Our Services</button>
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
            <img src="/images/birthday.jpg" alt="Birthday" />
            <h3>Birthday Parties</h3>
            <p>Delicious sweets to make your celebrations extra special.</p>
          </div>

          <div className="catering-card-c">
            <img src="/images/family.jpg" alt="Family Function" />
            <h3>Family Functions</h3>
            <p>Adding sweetness to your family gatherings and festivities.</p>
          </div>

          <div className="catering-card-c">
            <img src="/images/corporate.jpg" alt="Corporate" />
            <h3>Corporate & Events</h3>
            <p>Elegant sweet boxes for corporate events and meetings.</p>
          </div>

        </div>
      </section>

      {/* BULK SECTION */}
      <section className="catering-bulk-c">
        <h2>Bulk Orders Up to 200 Boxes</h2>
        <p>
          From weddings to festivals, we handle large orders
          with care, hygiene, and consistent quality.
        </p>
        <button className="catering-bulk-btn-c">
          Order Now for Up to 200 Sweet Boxes
        </button>
      </section>

      {/* CTA */}
      <section className="catering-cta-c">
        <h2>Plan Your Event With Us</h2>
        <p>Contact us today to customize your sweet box catering</p>
        <button className="catering-cta-btn-c">Get a Quote</button>
      </section>

    </div>
  );
};

export default Catering;
