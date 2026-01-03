import { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);
  const qualityRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const options = { threshold: 0.25 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (qualityRef.current) observer.observe(qualityRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">

      {/* OUR STORY */}
      <section className="about-story" ref={aboutRef}>
        <img src="/abus.png" className="section-bg" alt="print background" />

        <div className="story-container">

          {/* LEFT IMAGES */}
         {/* LEFT IMAGES */}
<div className="story-images">
  <img src="/chanchal.jpg" alt="Sweet making" className="img-tall" />
  <img src="/certificate.png" alt="Mithai preparation" className="img-top" />
  <img src="/chi.jpg" alt="Traditional sweets" className="img-bottom" />
</div>


          {/* RIGHT CONTENT */}
          <div className="story-content">

            <div className="section-title">
              <img src="/left.png" alt="left border" />
              <span>OUR STORY</span>
              <img src="/right.png" alt="right border" />
            </div>

            <h2>
              Rooted in Tradition,<br />Built on Trust
            </h2>

            <p>
  The journey of <strong>Chanchal Sweets</strong> began in <strong>1950</strong>,
  when our grandfather started a small food stall built on honesty, hard work,
  and a love for serving people.
</p>

<p>
  In the early days, simple favorites like
  <strong> pakodi and dal pakwan</strong> won the hearts of customers, inspiring a
  dream that soon grew beyond a humble beginning.
</p>

<p>
  With dedication and no shortcuts, fresh khoya was brought daily on a
  <strong> bicycle</strong> to prepare authentic mithai laying the foundation
  of quality and trust.
</p>

<p>
  Over time, the stall transformed into a
  <strong> proper mithai shop</strong>, and today proudly includes a
  <strong> pure vegetarian family restaurant</strong>.
</p>

<p>
  What began decades ago continues as a legacy of taste, tradition, and trust
  cherished for over <strong>seven decades</strong>.
</p>

{/* BOTTOM BORDER */}
<img
  src="/aboutbottom.png"
  alt="decorative border"
  className="story-bottom-border"
/>


          </div>
        </div>
      </section>

      {/* HOUSE OF QUALITY */}
      <section className="quality-section" ref={qualityRef}>
  <img src="/aboutbgc.jpg" className="section-bg1" alt="print background" />

  <h3 className="section-heading">HOUSE OF QUALITY</h3>

  <div className="quality-cards">

    <div className="quality-card">
      <div className="icon-wrap">
        <img src="/leaf1.png" alt="" />
      </div>
      <h4>Pure Ingredients</h4>
      <p>Only the finest milk, dry fruits & ghee</p>
    </div>

    <div className="quality-card">
      <div className="icon-wrap">
        <img src="/chef.png" alt="" />
      </div>
      <h4>Expert Halwais</h4>
      <p>Crafted by skilled sweet makers</p>
    </div>

    <div className="quality-card">
      <div className="icon-wrap">
        <img src="/quality.png" alt="" />
      </div>
      <h4>Hygiene Assured</h4>
      <p>Clean kitchens & fresh batches</p>
    </div>

    <div className="quality-card">
      <div className="icon-wrap">
        <img src="/chef1.png" alt="" />
      </div>
      <h4>100% Vegetarian</h4>
      <p>Authentic family-friendly dining</p>
    </div>

  </div>
</section>


      {/* MORE THAN MITHAI */}
      <section className="experience-section" ref={experienceRef}>
  <div className="experience-text">
    <h2>More Than Just Mithai</h2>
    <p>
      From festive sweets to comforting vegetarian meals,
      our restaurant offers a complete family dining experience
      crafted with care.
    </p>
  </div>
</section>


    </div>
  );
};

export default About;
