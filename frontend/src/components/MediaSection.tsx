import React from "react";

import image2 from '../../public/images/IMG-20250703-WA0040.jpg'
import image3 from '../../public/images/IMG-20250703-WA0056.jpg'

const MediaSection: React.FC = () => {


  return (
    
    <div>
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

export default MediaSection;
