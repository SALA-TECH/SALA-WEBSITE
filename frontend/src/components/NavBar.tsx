import React, { useState } from "react";

interface NavBarProps {
  brandName: string;
  logoSrc: string;
}

const NavBar: React.FC<NavBarProps> = ({ brandName, logoSrc }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-left">
          <img src={logoSrc} alt={brandName} className="navbar-logo" />
        </div>

        {/* Desktop Menu */}
        <nav className="navbar-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#media" className="nav-link">Media</a>
          <a href="#news" className="nav-link">News</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="mobile-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#media" className="nav-link">Media</a>
          <a href="#news" className="nav-link">News</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
