import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* 1. Brand & Socials Section (Left Side) */}
        <div className="footer-brand-section">
          <div className="brand-wrapper">
            <Link to="/">
              <img src={logo} alt="Chip Valley Foods" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              Connecting world-class food producers with consumers through reliable distribution.
            </p>
          </div>
          
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>

        {/* 2. Links Section (Right Side) */}
        <div className="footer-links-wrapper">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/brands">Our Brands</Link></li>
              <li><Link to="/contact">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/legal">Shipping Policy</Link></li>
              <li><Link to="/legal">Returns</Link></li>
              <li><Link to="/legal">FAQ</Link></li>
            </ul>
          </div>
        </div>

      </div>

      {/* 3. Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Chip Valley Foods Pvt Ltd. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/legal">Privacy Policy</Link>
            <Link to="/legal">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;