// import React from "react";
import "./Catering.css";
import React, { useState, useEffect } from "react";



const Catering = () => {

  const images = [
    "/cathome3.webp",
    "/cathome4.webp",
    "/catHome2.webp",

  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setIndex(index === 0 ? images.length - 1 : index - 1);

  const nextSlide = () =>
    setIndex((index + 1) % images.length);

  return (
    <div className="catering-page-c">

      {/* HERO SECTION */}
      <section className="c-hero-slider">
        {images.map((img, i) => (
          <div
            key={i}
            className={`c-slide ${i === index ? "c-active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="c-hero-overlay">
          <h1>
            "Crafting Memorable Events <br />
            with Exquisite Catering."
          </h1>

          <button className="catering-bulk-btn-c">
            <a
              href="tel:+917554057404"
              className="catering-bulk-btn"
            >
              Enquire Now
            </a>
          </button>

        </div>

        <button className="c-arrow c-left" onClick={prevSlide}>❮</button>
        <button className="c-arrow c-right" onClick={nextSlide}>❯</button>

        <div className="c-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`c-dot ${i === index ? "c-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
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
            <img src="/wedding1.webp" alt="Birthday" />
            <h3>Grand Wedding</h3>
            <p>Delicious sweets to make your Wedding extra special.</p>
          </div>

          <div className="catering-card-c">
            <img src="/family1.webp" alt="Family Function" />
            <h3>Family Functions</h3>
            <p>Adding sweetness to your family gatherings and festivities.</p>
          </div>

          <div className="catering-card-c">
            <img src="/corporate.webp" alt="Corporate" />
            <h3>Corporate & Events</h3>
            <p>Elegant sweet boxes for corporate events and meetings.</p>
          </div>

        </div>
      </section>

      {/* BULK SECTION */}
      <section className="catering-bulk-c">
        <div className="catering-bulk">
          <h2>Bulk Orders Up to 300 Boxes</h2>
          <p>
            From weddings to festivals, we handle large orders
            with care, hygiene, and consistent quality.
          </p>
          <button className="catering-bulk-btn-c">
            <a
              href="tel:+917554057404"
              className="catering-bulk-btn"
            >
              Contact Now
            </a>
          </button>
        </div>
      </section>

      {/* CTA */}

    </div>
  );
};

export default Catering;
