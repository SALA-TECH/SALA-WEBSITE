import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import Logo from '../../public/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">

          {/* Column 1 — Brand */}
          <div className="footer-col">
            <Link className="logo footer-logo" to="/">
              <img src={Logo} alt="SALA" className="navbar-logo" />
              SA<span>LA</span>
            </Link>
            <p className="footer-about">
              A registered non-profit organization empowering communities through
              education, mentorship, and professional development in the Eastern Cape.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/media">Media</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 — Pages */}
          <div className="footer-col">
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-links">
              <li><Link to="/library">Online Library</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/login">Member Login</Link></li>
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>Pondoland, Eastern Cape, South Africa</li>
              <li>info@sala.org.za</li>
              <li>+27 63 686 0596 </li>
            </ul>
            <Link to="/contact" className="btn-primary footer-cta">
              Get In Touch <FaArrowRight />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} SALA — South African Legacy Association. All rights reserved.</p>
          <p>Registered Non-Profit Organisation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;