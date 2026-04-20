import React from "react";
import NavigationBar from "../components/NavigationBar";
import image2 from "../../public/images/IMG-20250703-WA0040.jpg";
import image3 from "../../public/images/IMG-20250703-WA0056.jpg";
import Azande from "../../public/images/Leadership/Azande 2026-04-20 at 10.14.05.jpeg";
import Bongo from "../../public/images/Leadership/Bongo 2026-04-19 at 23.14.46.jpeg";
import Gwiba from "../../public/images/Leadership/Gwiba 2026-04-19 at 22.57.03.jpeg";
import Mazisi from "../../public/images/Leadership/Mazisi 2026-04-19 at 22.48.58.jpeg";
import Nosihle from "../../public/images/Leadership/Nosihle Image 2026-04-20 at 11.59.27.jpeg";
import Siviwe from "../../public/images/Leadership/Siviwe 2026-04-21 at 00.16.07.jpeg"

/* ─────────────────────────────
   Data (keep this separate)
───────────────────────────── */
const leadershipTeam = [
  { name: "Siviwe Maqutywa", role: "Chairperson", image: Siviwe },
  { name: "Mazisi Bangani", role: "Secretary General", image: Mazisi },
  { name: "Nosihle Lalemini", role: "Deputy Secretary General", image: Nosihle },
  { name: "Azande Duna", role: "Treasury General", image: Azande },
  { name: "Bongolethu Klaas", role: "Deputy Treasury General", image: Bongo },
  { name: "Gwiba Nokenge", role: "Chief Convenor", image: Gwiba },
];

const subCommittees = [
  {
    name: "Education & Mentorship",
    description:
      "Focuses on academic support, bursary access, and mentorship programmes.",
  },
  {
    name: "Career & Professional Development",
    description:
      "Connects young professionals with industry opportunities and guidance.",
  },
  {
    name: "Community Development",
    description:
      "Drives outreach and socio-economic upliftment in communities.",
  },
  {
    name: "Business & Entrepreneurship",
    description:
      "Supports entrepreneurs with skills training and funding access.",
  },
];

/* ─────────────────────────────
   Reusable Components
───────────────────────────── */

const SectionHeader: React.FC<{
  badge: string;
  title: string;
  description: string;
}> = ({ badge, title, description }) => (
  <div className="section-header">
    <span className="subtitle-badge">{badge}</span>
    <h2 className="section-title">{title}</h2>
    <p className="section-intro">{description}</p>
  </div>
);

const Hero: React.FC = () => (
  <header className="contact-hero">
    <div className="hero-overlay" />
    <div className="contact-hero-content">
      <span className="subtitle-badge">About Us</span>
      <h1 className="hero-title">Who We Are</h1>
      <p className="hero-text">
        A non-profit organisation with over 700 members, empowering communities
        across the Eastern Cape.
      </p>
    </div>
  </header>
);

const MissionVision: React.FC = () => (
  <section className="about-section">
    <div className="container about-grid">
      <div className="about-img-wrapper">
        <img src={image3} alt="Volunteers" className="img-main" />
        <img src={image2} alt="Community work" className="img-secondary" />
      </div>

      <div className="about-content">
        <h2 className="section-title">Our Mission and Objectives</h2>
        <p className="section-text">
          SALA was established to provide a platform for its members including high school learners, university students,
           professionals and entrepreneurs to organise themselves to fight many socio-economic ills bedevilling their hometowns. 
           This would be achieved through many programs centred around three main objectives <strong>Career Development, Business Development, & Community Development</strong>.
        </p>
      </div>
    </div>
  </section>
);

const LeadershipCard: React.FC<{
  name: string;
  role: string;
  image: string;
}> = ({ name, role, image }) => (
  <article className="leadership-card">
    <div className="leadership-img-wrapper">
      <img src={image} alt={name} className="leadership-img" />
    </div>
    <div className="leadership-info">
      <h4 className="leadership-name">{name}</h4>
      <p className="leadership-role">{role}</p>
    </div>
  </article>
);

const LeadershipSection: React.FC = () => (
  <section className="leadership-section">
    <div className="container">
      <SectionHeader
        badge="Our Team"
        title="Leadership"
        description="A dedicated team driving meaningful change."
      />

      <div className="leadership-grid">
        {leadershipTeam.map((member) => (
          <LeadershipCard key={member.role} {...member} />
        ))}
      </div>
    </div>
  </section>
);

const SubCommitteeCard: React.FC<{
  name: string;
  description: string;
}> = ({ name, description }) => (
  <article className="subcommittee-card">
    <div className="subcommittee-accent" />
    <h4 className="subcommittee-name">{name}</h4>
    <p className="subcommittee-desc">{description}</p>
  </article>
);

const SubCommitteeSection: React.FC = () => (
  <section className="subcommittee-section">
    <div className="container">
      <SectionHeader
        badge="Structure"
        title="Sub Committees"
        description="Focused initiatives across development areas."
      />

      <div className="subcommittee-grid">
        {subCommittees.map((committee) => (
          <SubCommitteeCard key={committee.name} {...committee} />
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────
   Main Page Component
───────────────────────────── */

const About: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <MissionVision />
      <LeadershipSection />
      <SubCommitteeSection />
    </>
  );
};

export default About;