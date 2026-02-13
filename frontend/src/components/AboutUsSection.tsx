import React from "react";

import image2 from '../../public/images/IMG-20250703-WA0040.jpg'
import image3 from '../../public/images/IMG-20250703-WA0056.jpg'

const MediaSection: React.FC = () => {


  return (
    <div>
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

    </div>
  );
};

export default MediaSection;
