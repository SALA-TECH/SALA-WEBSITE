import React, { useState } from 'react';
import '../stylesheets/App.css';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


import MediaSection from "../components/MediaSection";
import AboutUsSection from "../components/AboutUsSection"
import NavigationBar from "../components/NavigationBar"

const App: React.FC = () => {

  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  

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
      <NavigationBar/>
    

      {/* --- Home Section --- */}
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
      <AboutUsSection/>


      {/* --- Media Section --- */}
      <MediaSection/>

    </div>
  );
};

export default App;