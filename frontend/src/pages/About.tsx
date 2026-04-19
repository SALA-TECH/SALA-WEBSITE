import React from "react";
import NavigationBar from "../components/NavigationBar";
import image2 from "../../public/images/IMG-20250703-WA0040.jpg";
import image3 from "../../public/images/IMG-20250703-WA0056.jpg";

/* ─────────────────────────────
   Data (keep this separate)
───────────────────────────── */
const leadershipTeam = [
  { name: "Siviwe Maqutywa", role: "Chairperson", image: image2 },
  { name: "Phelisa Ntayiya", role: "Deputy Chairperson", image: image3 },
  { name: "Mazisi Bangani", role: "Secretary General", image: image2 },
  { name: "Azande Duna", role: "Treasury General", image: image3 },
  { name: "Bongolethu Klaas", role: "Deputy Treasury General", image: image3 },
  { name: "Gwiba Nokenge", role: "Chief Convenor", image: image3 },
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
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          To provide a platform for individuals from disadvantaged backgrounds
          through career, business, and community development.
        </p>

        <h2 className="section-title">Our Vision</h2>
        <p className="section-text">
          To create a future where everyone has equal access to opportunities,
          empowerment, and success.
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