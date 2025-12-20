import "./Hero.css";

export default function Hero() {
  return (
    <section className="chanchal-hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <span className="hero-tag">Since 1998</span>

          <h1 id="color">
            The <br />
            <span>Chanchal</span> <br />
            Restaurant
          </h1>

          <p>
            Authentic Indian flavours crafted with tradition, love
            and a royal touch to delight every bite.
          </p>

          <button className="hero-btn">Explore Menu</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <div className="image-ring">
            <img src="jalebi.jpg" alt="Indian Food" />
          </div>
        </div>
      </div>
    </section>
  );
}
