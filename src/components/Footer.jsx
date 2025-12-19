import React from "react";
import "./Footer.css";
import { FaBan, FaTint, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container reveal reveal-up">

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

          <div className="footer-subscribe">
            <input type="email" placeholder="Email" />
            <button>
              <span>Subscribe</span>
            </button>
          </div>

          <p className="footer-note">
            We won’t flood your inbox, just sweet updates and offers!
          </p>
        </div>

        
        <div className="footer-links">

          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Our Menu</a>
            <a href="#">Restaurant</a>
            <a href="#">Testimonials</a>
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
                <p>
                  No Artificial <br />
                  Colors Added
                </p>
              </div>

              <div className="badge">
                <FaTint className="badge-icon" />
                <p>
                  No Chemicals <br />
                  In Our Bakes
                </p>
              </div>

              <div className="badge">
                <FaLeaf className="badge-icon" />
                <p>
                  No Artificial <br />
                  Flavours Used
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      
      <div className="footer-bottom">
        <div className="footer-bottom-left reveal reveal-up">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>

        <div className="footer-bottom-center reveal reveal-up">
          Chanchal Sweets © 2025. All Rights Reserved.
        </div>

        <div className="footer-bottom-right reveal reveal-up">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
