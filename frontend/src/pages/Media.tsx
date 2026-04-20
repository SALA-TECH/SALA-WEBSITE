import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { FaPlay } from 'react-icons/fa';

import image1 from '../../public/images/Outreach/IMG-20250702-WA0031.jpg';
import image2 from '../../public/images/Outreach/IMG-20250703-WA0040.jpg';
import image3 from '../../public/images/Outreach/IMG-20250703-WA0056.jpg';
import image4 from '../../public/images/Events/IMG-20250703-WA0113.jpg';
import image5 from '../../public/images/Graduation/IMG-20250715-WA0002.jpg';
import image6 from '../../public/images/Events/IMG-20250829-WA0112.jpg';
import image7 from '../../public/images/Events/IMG-20251230-WA0005.jpg';

// ── Photo data ──
const photos = [
  { id: 1, src: image1, alt: "SALA community event",       category: "Outreach"    },
  { id: 2, src: image2, alt: "SALA outreach visit",        category: "Outreach"    },
  { id: 3, src: image3, alt: "SALA volunteers group",      category: "Outreach"    },
  { id: 4, src: image4, alt: "Graduation celebration",     category: "Events"      },
  { id: 5, src: image5, alt: "Youth workshop session",     category: "Graduations" },
  { id: 6, src: image6, alt: "School visit Pondoland",     category: "Events"      },
  { id: 7, src: image7, alt: "Annual SALA gathering",      category: "Events"      }
  
];

// ── Video data (YouTube embed IDs — replace with real ones) ──
const videos = [
  {
    id: 1,
    embedId: "dQw4w9WgXcQ",
    title: "SALA Annual Gathering 2025 Highlights",
    category: "Events",
    duration: "4:32",
  },
  {
    id: 2,
    embedId: "dQw4w9WgXcQ",
    title: "High School Outreach — Flagstaff & Lusikisiki",
    category: "Outreach",
    duration: "6:15",
  },
  {
    id: 3,
    embedId: "dQw4w9WgXcQ",
    title: "SALA Members Graduation Ceremony 2025",
    category: "Graduations",
    duration: "8:47",
  },
];

const photoCategories = ["All", "Events", "Outreach", "Graduations"];

const Media: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const filteredPhotos =
    activeFilter === "All"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  return (
    <div>
      <NavigationBar />

      {/* ── Hero Banner ── */}
      <div className="contact-hero">
        <div className="hero-overlay" />
        <div className="contact-hero-content">
          <span className="subtitle-badge">Media</span>
          <h1 className="hero-title">Photos & Videos</h1>
          <p className="hero-text">
            A look at our events, outreach programmes, and community milestones.
          </p>
        </div>
      </div>

      {/* ── Photo Gallery ── */}
      <section className="media-page-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle-badge">Gallery</span>
            <h2 className="section-title">Photo Gallery</h2>
          </div>

          {/* Filter tabs */}
          <div className="media-filter-tabs">
            {photoCategories.map((cat) => (
              <button
                key={cat}
                className={`media-filter-btn ${activeFilter === cat ? 'filter-active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="media-photo-grid">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="media-photo-item"
                onClick={() => setLightboxSrc(photo.src)}
              >
                <img src={photo.src} alt={photo.alt} className="media-photo-img" />
                <div className="media-photo-overlay">
                  <span className="media-photo-category">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Videos ── */}
      <section className="media-page-section media-videos-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle-badge">Videos</span>
            <h2 className="section-title">Watch Our Story</h2>
            <p className="section-intro">
              Catch up on highlights from our events, outreach visits, and graduation celebrations.
            </p>
          </div>

          <div className="media-video-grid">
            {videos.map((video) => (
              <div key={video.id} className="media-video-card">
                {activeVideo === video.id ? (
                  <iframe
                    className="media-video-iframe"
                    src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="media-video-thumb"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg`}
                      alt={video.title}
                      className="media-video-thumb-img"
                    />
                    <div className="media-video-thumb-overlay">
                      <div className="media-play-btn">
                        <FaPlay />
                      </div>
                      <span className="media-video-duration">{video.duration}</span>
                    </div>
                  </div>
                )}
                <div className="media-video-info">
                  <span className="news-date">{video.category}</span>
                  <h4 className="media-video-title">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>
            &times;
          </button>
          <img
            src={lightboxSrc}
            alt="Enlarged view"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Media;