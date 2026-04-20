import React, { useState, useEffect, useRef } from 'react';
import '../stylesheets/App.css';
import { FaArrowRight, FaBookOpen, FaUsers, FaChartLine, FaHandsHelping, FaGraduationCap, FaSchool, FaUserTie, FaCalendarAlt } from 'react-icons/fa';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

// ── Slides ──
const slides = [
  {
    title: "South African Legacy Association",
    text: "SALA is a registered NPO established in 2022 by a diverse group of professionals and university students from various fields, including law, accounting, medicine, science and engineering. Currently, we are a strategic collective of over 670 dedicated professionals, entrepreneurs and university students all from the Mpondo heartlands Lusikisiki, Ntabankulu, Ngqeleni, Bizana, Libode, Flagstaff, and Port St. Johns. The leading profession in our organization being health science (120+ members), humanities (100+ members), engineering (80+ members) and accounting (60+ members). Our culture and identity are wrapped in the values of Upliftment, Collaboration and Innovation. ",
  },
  {
    title: "Empowering Communities",
    text: "We believe in empowering communities through education, mentorship, and skill development. Join us in making a difference and creating a brighter future for everyone.",
  },
  {
    title: "Our Objective",
    text: "To provide a platform for mentoring, networking, community development, and influencing the country's socio-economic landscape — combating unemployment and skills deficits.",
  },
];

const SLIDE_DURATION = 5000;

// ── Stats ──
const stats = [
  { value: 1200, suffix: "+", label: "Youth Empowered" },
  { value: 50,  suffix: "+", label: "Workshops Delivered" },
  { value: 250,  suffix: "+", label: "Mentors Active" },
  { value: 35,  suffix: "",  label: "Schools Supported" },
];

// ── Programmes ──
const programmes = [
  {
    icon: <FaBookOpen />,
    title: "Education Support",
    desc: "Bursaries, tutoring, and academic access for learners from disadvantaged backgrounds.",
  },
  {
    icon: <FaUsers />,
    title: "Mentorship",
    desc: "Connecting students and young professionals with experienced mentors across industries.",
  },
  {
    icon: <FaChartLine />,
    title: "Professional Development",
    desc: "Workshops, networking events, and career guidance to build workplace-ready skills.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Upliftment",
    desc: "Outreach drives and community projects that create lasting impact in Pondoland.",
  },
];

// ── News ──
const news = [
  {
    icon: <FaGraduationCap />,
    date: "March 2026",
    title: "SALA Members Graduate Across the Country",
    summary:
      "Dozens of SALA-supported students received their degrees this month, with members graduating in Law, Medicine, Engineering, and Education at universities nationwide.",
  },
  {
    icon: <FaSchool />,
    date: "February 2026",
    title: "High School Outreach Visit — Flagstaff & Lusikisiki",
    summary:
      "SALA volunteers visited six high schools in the Pondoland region, hosting career talks and distributing study materials to over 400 Grade 11 and 12 learners.",
  },
  {
    icon: <FaUserTie />,
    date: "January 2026",
    title: "Applications Drive for 2026 Mentorship Programme",
    summary:
      "The 2026 Youth Mentorship Programme is now open for applications. Prospective mentees from high school through to early career are encouraged to apply before 31 March.",
  },
  {
    icon: <FaCalendarAlt />,
    date: "December 2025",
    title: "Online Library Officially Launched",
    summary:
      "SALA's digital library is now live, giving members free access to study resources, bursary guides, CV templates, and professional development content.",
  },
];

// ── Animated counter hook ──
function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

// ── Stat card with individual counter ──
const StatCard: React.FC<{ value: number; suffix: string; label: string; trigger: boolean }> = ({ value, suffix, label, trigger }) => {
  const count = useCountUp(value, 1200, trigger);
  return (
    <div className="stat-card">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

// ── Home page ──
const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  // Progress bar + auto-advance
  useEffect(() => {
    progressRef.current = 0;
    setProgress(0);
    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      progressRef.current = pct;
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [currentSlide]);

  // Intersection observer for stats
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <NavigationBar />

      {/* ── Hero ── */}
      <header id="home" className="hero">
        <div className="hero-overlay" />

        {/* Progress bar */}
        <div className="slide-progress-track">
          <div className="slide-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        {/* Slide dots */}
        <div className="slide-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slide-dot ${i === currentSlide ? 'dot-active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hero-content">
          <h1 className="hero-title">{slides[currentSlide].title}</h1>
          <p className="hero-text">{slides[currentSlide].text}</p>
          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
            Get in Touch <FaArrowRight />
          </Link>
        </div>
      </header>

      {/* ── Stats ── */}
      <section className="stats-section" ref={statsRef}>
        <div className="container stats-grid">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} trigger={statsVisible} />
          ))}
        </div>
      </section>

      {/* ── Programmes ── */}
      <section className="programmes-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle-badge">What We Do</span>
            <h2 className="section-title">Our Programmes</h2>
            <p className="section-intro">
              Our work is built around four core pillars that address the most pressing
              needs of young South Africans from disadvantaged communities.
            </p>
          </div>
          <div className="programmes-grid">
            {programmes.map((p) => (
              <div key={p.title} className="programme-card">
                <div className="programme-icon">{p.icon}</div>
                <h4 className="programme-title">{p.title}</h4>
                <p className="programme-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* ── News ── */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle-badge">Latest</span>
            <h2 className="section-title">News & Updates</h2>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <div key={item.title} className="news-card">
                <div className="news-icon">{item.icon}</div>
                <div className="news-body">
                  <span className="news-date">{item.date}</span>
                  <h4 className="news-title">{item.title}</h4>
                  <p className="news-summary">{item.summary}</p>
                  <a href="#" className="news-read-more">Read more <FaArrowRight className="news-arrow" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;