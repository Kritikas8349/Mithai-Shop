import React from "react";
import "./Footer.css";
import { FaBan, FaTint, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">

        {/* LEFT CONTENT */}
        <div className="footer-left">
          <div className="footer-logo">
            <img
              src="newlogo.png"
              alt="Chanchal Sweets Logo"
              className="footer-logo-img"
            />
          </div>

          <h2>
            WHERE EVERY <br />
            TREAT IS A LITTLE <br />
            <span>SLICE OF HEAVEN</span>
          </h2>

          <div className="footer-follow">

            <a
              href="https://www.instagram.com/chanchalsweets/reels/?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-follow-btn"
            >
              <span>Follow on Instagram</span>
            </a>
          </div>

{/* KEEP THIS AS IT IS */}
<p className="footer-note">
  We won’t flood your inbox, just sweet updates and offers!
</p>

        </div>

        {/* RIGHT CONTENT */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/menu">Our Menu</Link>
            <Link to="/restaurant">Restaurant</Link>
            <Link to="/catering">Catering</Link>

          </div>

          <div className="footer-column">
            <h4>Customer Support</h4>
            <a href="#">Contact Us</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#location">Location</a>
          </div>

          <div className="footer-badges">
            <h4>There is nothing to hide!</h4>

            <div className="badges">
              <div className="badge">
                <FaBan className="badge-icon" />
                <p>No Artificial<br />Colors Added</p>
              </div>

              <div className="badge">
                <FaTint className="badge-icon" />
                <p>No Chemicals<br />In Our Bakes</p>
              </div>

              <div className="badge">
                <FaLeaf className="badge-icon" />
                <p>No Artificial<br />Flavours Used</p>
              </div>
            </div>
          </div>

          {/* 👇 ADD GALLERY HERE (RIGHT SIDE, BELOW LINKS) */}
          <div className="footer-gallery">
            <img src="/shop8.jpeg" alt="Fresh Indian Sweets" />
            <img src="/shop4.jpg" alt="Traditional Mithai" />
            <img src="/shop3.jpg" alt="Chanchal Sweets Store" />
          </div>

        </div>


      </div>

      {/* BOTTOM */}
      <div className="footer-bottom1">
        <div className="footer-bottom-left1">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>

        <div className="footer-bottom-center1">
          Chanchal Sweets © 2026. All Rights Reserved.
        </div>

        <div className="footer-bottom-right1">
          <a href="https://www.facebook.com/chanchalsweetsandrestaurant/?utm_source=chatgpt.com">Facebook</a>
          <a href="https://www.instagram.com/chanchalsweets/reels/?utm_source=chatgpt.com">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
