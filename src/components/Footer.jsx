import React from "react";
import "./Footer.css";
import { FaBan, FaTint, FaLeaf } from "react-icons/fa";

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
              href="https://www.instagram.com/your_instagram_handle"
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
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/menu">Our Menu</a>
            <a href="/restaurant">Restaurant</a>
            <a href="/catering">Catering</a>
          </div>

          <div className="footer-column">
            <h4>Customer Support</h4>
            <a href="#">Contact Us</a>
            <a href="#">FAQs</a>
            <a href="#">Location</a>
            <a href="#">Returns & Refunds</a>
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
            <img src="/red sauce pasta.JPG" alt="Fresh Indian Sweets" />
            <img src="/rasmalai.png" alt="Traditional Mithai" />
            <img src="/chole tikki (1).JPG" alt="Chanchal Sweets Store" />
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
          Chanchal Sweets © 2025. All Rights Reserved.
        </div>

        <div className="footer-bottom-right1">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
