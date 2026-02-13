import React, { useState} from "react";

import { 
  FaArrowRight, 
  FaChevronDown 
} from 'react-icons/fa';

import Logo from '../../public/images/logo.png'

const MediaSection: React.FC = () => {

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Helper to toggle the dropdown
  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor link behavior
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    
    <div>
        <nav className="navbar">
          <div className="container nav-container">
            <a className="logo">
              <img src={Logo} alt="SALA" className="navbar-logo" />
              SA<span>LA</span>
            </a>

            <ul className="nav-links">
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#media">Media</a></li>
              <li><a href="#contact">Contact</a></li>
              <li className="dropdown-wrapper">
                <a href="#pages" onClick={toggleDropdown} className={isDropdownOpen ? "active" : ""}>Pages <FaChevronDown className="dropdown-indicator"/></a>

                {/* 5. Conditional rendering: Only show if isDropdownOpen is true */}
                {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#service">Online Library</a></li>
                  <li><a href="#donate">News</a></li>
                  {/* <li><a href="#team">Our Team</a></li>
                  <li><a href="#testimonial">Testimonial</a></li>
                  <li><a href="#404">404 Page</a></li> */}
                </ul>
              )}

              </li>
            </ul>
            <button className="btn-donate">
              Login <FaArrowRight />
            </button>
          </div>
        </nav>
    </div>
  );
};

export default MediaSection;