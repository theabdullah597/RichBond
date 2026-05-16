import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info-col">
            <img src="/logo.png" alt="Richbondlimited Logo" />
            <p>Your trusted UK wholesale partner for premium vapes, electronics, and mobile accessories. Delivering quality and value across the United Kingdom.</p>
            <div className="footer-socials" style={{ display: 'none' }}>
              {/* Removed Social Links */}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/about">About Us</Link>
              <Link to="/faq">FAQs</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <div className="footer-links">
              <Link to="/products?category=Disposable Vapes">Disposable Vapes</Link>
              <Link to="/products?category=TPD Big Puffs">TPD Big Puffs</Link>
              <Link to="/products?category=Pre-filled Pods">Pre-filled Pods</Link>
              <Link to="/products?category=E-Liquids">E-Liquids</Link>
              <Link to="/products?category=Electronics">Electronics</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>5 Brayford Square, London, United Kingdom, E1 0SG</span>
              </div>
              <div className="contact-item">
                <FaPhoneAlt />
                <a href="tel:02080587336" style={{ color: 'inherit', textDecoration: 'none' }}>0208 058 7336</a>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <a href="mailto:info@richbondlimited.uk" style={{ color: 'inherit', textDecoration: 'none' }}>info@richbondlimited.uk</a>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Richbondlimited. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/terms">Terms & Conditions  </Link>
            <Link to="/privacy"> Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
