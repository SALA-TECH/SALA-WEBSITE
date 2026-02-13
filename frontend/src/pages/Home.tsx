import React, { useState } from 'react';
import '../stylesheets/App.css';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import Logo from '../../public/images/logo.png'
// import image1 from '../../public/images/IMG-20250702-WA0031.jpg'
import image2 from '../../public/images/IMG-20250703-WA0040.jpg'
import image3 from '../../public/images/IMG-20250703-WA0056.jpg'
// import image4 from '../../public/images/IMG-20250702-WA0013.jpg'
// import image5 from '../../public/images/IMG-20250702-WA0002.jpg'
// import image6 from '../../public/images/IMG-20250702-WA0012.jpg'

const App: React.FC = () => {


  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Helper to toggle the dropdown
  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor link behavior
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Array of slides with different content
  const slides = [
    {
      title: "South African Legacy Association",
      text: "A non-profit organization with over 700 members, including young professionals, students, and entrepreneurs from diverse backgrounds like Law, Medicine, and Engineering.",
      buttonText: "Get in Touch",
    },
    {
      title: "Empowering Communities",
      text: "We believe in empowering communities through education, mentorship, and skill development. Join us in making a difference and creating a brighter future for everyone.",
      buttonText: "Get in Touch",
    },
    {
      title: "Objective",
      text: "It aims to provide a platform for mentoring, networking, community development, and influencing the country's socio-economic landscape. The organization was founded to combat social issues such as unemployment and skills deficits.",
      buttonText: "Get in Touch",
    },
  ];

  // Function to handle the next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to handle the previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* --- Navbar --- */}
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

      {/* --- Hero Section --- */}
      <header id="home" className="hero">
        <div className="hero-overlay"></div>
        
        {/* Navigation Arrows */}
        <div className="nav-arrow prev" onClick={handlePrev}><FaChevronLeft /></div>
        <div className="nav-arrow next" onClick={handleNext}><FaChevronRight /></div>

        <div className="hero-content">
          <h1 className="hero-title">{slides[currentSlide].title}</h1>
          <p className="hero-text">{slides[currentSlide].text}</p>
          <button className="btn-primary">
            {slides[currentSlide].buttonText} <FaArrowRight />
          </button>
        </div>
      </header>

      {/* --- About Section --- */}
      <section id="about" className="about-section">
        <span className="subtitle-badge">About Us</span>
        <div className="container about-grid">
          
          {/* Left: Image Collage */}
          <div className="about-img-wrapper">
            {/* Main Image (Bottom Left - Group) */}
            <img 
              src={image3}
              alt="Volunteers Group" 
              className="img-main" 
            />
            {/* Secondary Image (Top Right - Hands) */}
            <img 
              src={image2}
              alt="Hands holding coins" 
              className="img-secondary" 
            />
          </div>

          {/* Right: Content */}
          <div className="about-content">
            
            <h2 className="section-title">
              Our Mission
            </h2>
            <div className="section-text">
              <p>
                To provide a platform for individuals from disadvantaged backgrounds – 
                <br />
                including high school learners, university students, and young professionals for career, business and community development.
              </p>
            </div>

            <h2 className="section-title">
              Our Vission
            </h2>
            <div className="section-text">
              <p>
                To cultivate a future where every individual, regardless of background, has equal access to opportunities, empowerment, and success through education, mentorship, and professional development.
              </p>
            </div>

            {/* <button className="btn-primary">
              Read More <FaArrowRight />
            </button> */}
          </div>

        </div>
      </section>


      {/* --- Media Section --- */}
      <section id="media" className="media-section">
        <span className="subtitle-badge">Media</span>
        <div className="container media-grid">
          <div className="media-item">
            <img src={image2} alt="Media 1" className="media-img" />
          </div>
          <div className="media-item">
            <img src={image3} alt="Media 2" className="media-img" />
          </div>
          <div className="media-item">
            <img src={image2} alt="Media 3" className="media-img" />
          </div>
          <div className="media-item">
            <img src={image3} alt="Media 4" className="media-img" />
          </div>
          <div className="media-item">
            <img src={image2} alt="Media 5" className="media-img" />
          </div>
          <div className="media-item">
            <img src={image2} alt="Media 5" className="media-img" />
          </div>
          <div className="media-item">
            <img src={image2} alt="Media 5" className="media-img" />
          </div>
          <div className="media-item">
            <img src={image3} alt="Media 6" className="media-img" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;