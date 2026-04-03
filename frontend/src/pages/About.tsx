import React from 'react';
import NavigationBar from '../components/NavigationBar';
import image2 from '../../public/images/IMG-20250703-WA0040.jpg';
import image3 from '../../public/images/IMG-20250703-WA0056.jpg';

const leadershipTeam = [
  {
    name: "Full Name",
    role: "Chairperson",
    image: image2,
  },
  {
    name: "Full Name",
    role: "Vice Chairperson",
    image: image3,
  },
  {
    name: "Full Name",
    role: "Secretary General",
    image: image2,
  },
  {
    name: "Full Name",
    role: "Treasurer",
    image: image3,
  },
];

const subCommittees = [
  {
    name: "Education & Mentorship",
    description:
      "Focuses on academic support, bursary access, and mentorship programmes for high school learners and university students.",
  },
  {
    name: "Career & Professional Development",
    description:
      "Connects young professionals with industry opportunities, internships, and career guidance workshops.",
  },
  {
    name: "Community Development",
    description:
      "Drives outreach initiatives, community upliftment projects, and socio-economic development in Pondoland.",
  },
  {
    name: "Business & Entrepreneurship",
    description:
      "Supports emerging entrepreneurs through business skills training, networking, and access to funding resources.",
  },
];

const About: React.FC = () => {
  return (
    <div>
      <NavigationBar />

      {/* ── Page Hero Banner ── */}
      <div className="contact-hero">
        <div className="hero-overlay" />
        <div className="contact-hero-content">
          <span className="subtitle-badge">About Us</span>
          <h1 className="hero-title">Who We Are</h1>
          <p className="hero-text">
            A non-profit organisation with over 700 members, empowering communities across the Eastern Cape.
          </p>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <section className="about-section">
        <div className="container about-grid">

          {/* Left: Image Collage */}
          <div className="about-img-wrapper">
            <img src={image3} alt="SALA volunteers" className="img-main" />
            <img src={image2} alt="SALA community" className="img-secondary" />
          </div>

          {/* Right: Mission & Vision */}
          <div className="about-content">
            <h2 className="section-title">Our Mission</h2>
            <div className="section-text">
              <p>
                To provide a platform for individuals from disadvantaged backgrounds —
                including high school learners, university students, and young professionals
                for career, business and community development.
              </p>
            </div>

            <h2 className="section-title">Our Vision</h2>
            <div className="section-text">
              <p>
                To cultivate a future where every individual, regardless of background,
                has equal access to opportunities, empowerment, and success through
                education, mentorship, and professional development.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle-badge">Our Team</span>
            <h2 className="section-title">Leadership</h2>
            <p className="section-intro">
              SALA is guided by a dedicated leadership team committed to driving
              meaningful change in communities across the Eastern Cape.
            </p>
          </div>

          <div className="leadership-grid">
            {leadershipTeam.map((member) => (
              <div key={member.role} className="leadership-card">
                <div className="leadership-img-wrapper">
                  <img src={member.image} alt={member.name} className="leadership-img" />
                </div>
                <div className="leadership-info">
                  <h4 className="leadership-name">{member.name}</h4>
                  <p className="leadership-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sub Committees ── */}
      <section className="subcommittee-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle-badge">Structure</span>
            <h2 className="section-title">Sub Committees</h2>
            <p className="section-intro">
              Our sub committees drive focused initiatives across key areas of
              community and professional development.
            </p>
          </div>

          <div className="subcommittee-grid">
            {subCommittees.map((committee) => (
              <div key={committee.name} className="subcommittee-card">
                <div className="subcommittee-accent" />
                <h4 className="subcommittee-name">{committee.name}</h4>
                <p className="subcommittee-desc">{committee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;