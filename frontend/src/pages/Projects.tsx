import React, { useState } from 'react';
import '../stylesheets/App.css';
import NavigationBar from '../components/NavigationBar';
import { FaGraduationCap, FaBookOpen, FaLaptop, FaHandsHelping, FaChartLine, FaUsers, FaCheckCircle, FaSpinner, FaClock, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Digital Learning Initiative",
      category: "Education Technology",
      status: "active",
      statusText: "In Progress",
      progress: 65,
      startDate: "January 2025",
      endDate: "December 2025",
      location: "Lusikisiki, Eastern Cape",
      icon: FaLaptop,
      description: "Providing tablets and digital resources to 500 Grade 10-12 learners across 8 schools, enabling access to online learning materials and past papers.",
      milestones: [
        { id: 1, title: "Needs Assessment & School Selection", completed: true, date: "February 2025" },
        { id: 2, title: "Tablet Procurement & Setup", completed: true, date: "March 2025" },
        { id: 3, title: "Teacher Training Workshops", completed: false, date: "April 2025" },
        { id: 4, title: "Student Device Distribution", completed: false, date: "May 2025" },
        { id: 5, title: "First Term Evaluation", completed: false, date: "July 2025" }
      ],
      impact: "500 learners equipped with tablets • 8 partner schools • 40 teachers trained"
    },
    {
      id: 2,
      title: "Saturday School Programme",
      category: "Academic Support",
      status: "active",
      statusText: "In Progress",
      progress: 75,
      startDate: "February 2025",
      endDate: "November 2025",
      location: "Pondoland Region",
      icon: FaGraduationCap,
      description: "Weekly intensive tutoring sessions in Mathematics, Physical Sciences, and English for 300 matriculants preparing for final examinations.",
      milestones: [
        { id: 1, title: "Student Registration & Assessment", completed: true, date: "February 2025" },
        { id: 2, title: "Tutor Recruitment & Training", completed: true, date: "February 2025" },
        { id: 3, title: "First Term Sessions (10 weeks)", completed: true, date: "April 2025" },
        { id: 4, title: "Mid-Year Exams Prep", completed: false, date: "June 2025" },
        { id: 5, title: "Third Term Intensive Revision", completed: false, date: "August 2025" },
        { id: 6, title: "Final Exam Preparation", completed: false, date: "October 2025" }
      ],
      impact: "300 matriculants supported • 85% attendance rate • 25 volunteer tutors"
    },
    {
      id: 3,
      title: "Online Library Development",
      category: "Digital Resources",
      status: "active",
      statusText: "In Development",
      progress: 45,
      startDate: "March 2025",
      endDate: "January 2026",
      location: "Digital Platform",
      icon: FaBookOpen,
      description: "Building a comprehensive digital library with past papers, study guides, video lessons, and module resources for Grade 10-12 and tertiary students.",
      milestones: [
        { id: 1, title: "Platform Architecture Design", completed: true, date: "March 2025" },
        { id: 2, title: "Content Collection & Digitization", completed: true, date: "April 2025" },
        { id: 3, title: "Platform Development Phase 1", completed: false, date: "June 2025" },
        { id: 4, title: "Beta Testing with Students", completed: false, date: "August 2025" },
        { id: 5, title: "Official Launch", completed: false, date: "January 2026" }
      ],
      impact: "2000+ resources planned • 15 subjects covered • 5000+ expected users"
    },
    {
      id: 4,
      title: "Career Guidance & Mentorship",
      category: "Youth Development",
      status: "active",
      statusText: "In Progress",
      progress: 50,
      startDate: "January 2025",
      endDate: "December 2025",
      location: "Various Schools",
      icon: FaChartLine,
      description: "Connecting students with university students and professionals for career guidance, mentorship, and post-matric pathway planning.",
      milestones: [
        { id: 1, title: "Mentor Recruitment", completed: true, date: "January 2025" },
        { id: 2, title: "School Career Fairs", completed: true, date: "February 2025" },
        { id: 3, title: "One-on-One Mentorship Program", completed: false, date: "March 2025" },
        { id: 4, title: "University Application Workshops", completed: false, date: "June 2025" },
        { id: 5, title: "Bursary Information Sessions", completed: false, date: "August 2025" }
      ],
      impact: "50 mentors • 15 partner schools • 1000+ students reached"
    },
    {
      id: 5,
      title: "STEM Enrichment Programme",
      category: "Science & Technology",
      status: "planning",
      statusText: "Upcoming",
      progress: 15,
      startDate: "July 2025",
      endDate: "June 2026",
      location: "Selected High Schools",
      icon: FaAward,
      description: "After-school STEM clubs, science fairs, and coding workshops to inspire interest in science and technology careers.",
      milestones: [
        { id: 1, title: "Curriculum Development", completed: true, date: "May 2025" },
        { id: 2, title: "School Selection", completed: false, date: "June 2025" },
        { id: 3, title: "Facilitator Training", completed: false, date: "July 2025" },
        { id: 4, title: "Programme Launch", completed: false, date: "August 2025" },
        { id: 5, title: "Mid-Year Science Fair", completed: false, date: "March 2026" }
      ],
      impact: "10 schools • 200 students • 5 STEM clubs"
    },
    {
      id: 6,
      title: "Community Learning Hubs",
      category: "Infrastructure",
      status: "planning",
      statusText: "Upcoming",
      progress: 10,
      startDate: "August 2025",
      endDate: "July 2026",
      location: "Rural Communities",
      icon: FaHandsHelping,
      description: "Establishing community-based learning centres equipped with resources, internet access, and tutoring support for students in remote areas.",
      milestones: [
        { id: 1, title: "Community Needs Assessment", completed: true, date: "April 2025" },
        { id: 2, title: "Site Selection", completed: false, date: "July 2025" },
        { id: 3, title: "Infrastructure Setup", completed: false, date: "September 2025" },
        { id: 4, title: "Resource Procurement", completed: false, date: "November 2025" },
        { id: 5, title: "Hub Launch", completed: false, date: "January 2026" }
      ],
      impact: "3 learning hubs • 500+ students served • 24/7 access"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return '#fd7e14';
      case 'planning': return '#6c757d';
      default: return '#28a745';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'active': return <FaSpinner style={{ animation: 'spin 1s linear infinite' }} />;
      case 'planning': return <FaClock />;
      default: return <FaCheckCircle />;
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="contact-page">
        {/* Hero banner */}
        <div className="contact-hero">
          <div className="hero-overlay" />
          <div className="contact-hero-content">
            <span className="subtitle-badge">Our Impact</span>
            <h1 className="hero-title">Current Projects</h1>
            <p className="hero-text">Transforming education through strategic initiatives and community collaboration</p>
          </div>
        </div>

        {/* Main content */}
        <section className="contact-section">
          <div className="container">
            
            {/* Projects stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              marginBottom: '60px'
            }}>
              <div style={{ textAlign: 'center', padding: '24px', backgroundColor: 'var(--bg-light)', borderRadius: '8px' }}>
                <FaUsers style={{ fontSize: '32px', color: 'var(--primary-orange)', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-dark)' }}>6</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-grey)' }}>Active Projects</p>
              </div>
              <div style={{ textAlign: 'center', padding: '24px', backgroundColor: 'var(--bg-light)', borderRadius: '8px' }}>
                <FaGraduationCap style={{ fontSize: '32px', color: 'var(--primary-orange)', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-dark)' }}>2,500+</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-grey)' }}>Students Impacted</p>
              </div>
              <div style={{ textAlign: 'center', padding: '24px', backgroundColor: 'var(--bg-light)', borderRadius: '8px' }}>
                <FaHandsHelping style={{ fontSize: '32px', color: 'var(--primary-orange)', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-dark)' }}>75+</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-grey)' }}>Volunteers & Tutors</p>
              </div>
              <div style={{ textAlign: 'center', padding: '24px', backgroundColor: 'var(--bg-light)', borderRadius: '8px' }}>
                <FaBookOpen style={{ fontSize: '32px', color: 'var(--primary-orange)', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-dark)' }}>23</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-grey)' }}>Partner Schools</p>
              </div>
            </div>

            {/* Projects grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '32px' }}>
              {projects.map(project => (
                <div key={project.id} style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  border: activeProject === project.id ? '2px solid var(--primary-orange)' : '1px solid #e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}>
                  {/* Project header */}
                  <div style={{ 
                    padding: '24px', 
                    background: `linear-gradient(135deg, ${getStatusColor(project.status)}15, transparent)`,
                    borderBottom: `3px solid ${getStatusColor(project.status)}`
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <project.icon style={{ fontSize: '40px', color: 'var(--primary-orange)' }} />
                      <span style={{
                        backgroundColor: getStatusColor(project.status),
                        color: '#fff',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        {getStatusIcon(project.status)}
                        {project.statusText}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-grey)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <FaMapMarkerAlt style={{ fontSize: '12px' }} />
                      {project.location}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-grey)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FaCalendarAlt style={{ fontSize: '12px' }} />
                      {project.startDate} - {project.endDate}
                    </p>
                  </div>

                  {/* Project content */}
                  <div style={{ padding: '24px' }}>
                    <p style={{ color: 'var(--text-grey)', lineHeight: '1.7', marginBottom: '20px' }}>
                      {project.description}
                    </p>

                    {/* Progress bar */}
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)' }}>Overall Progress</span>
                        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--primary-orange)' }}>{project.progress}%</span>
                      </div>
                      <div style={{
                        height: '8px',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${project.progress}%`,
                          height: '100%',
                          backgroundColor: 'var(--primary-orange)',
                          borderRadius: '4px',
                          transition: 'width 0.3s ease'
                        }} />
                      </div>
                    </div>

                    {/* Milestones section */}
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaCheckCircle style={{ fontSize: '14px', color: 'var(--primary-orange)' }} />
                        Key Milestones
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {project.milestones.map(milestone => (
                          <div key={milestone.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {milestone.completed ? (
                              <FaCheckCircle style={{ color: '#28a745', fontSize: '14px', flexShrink: 0 }} />
                            ) : (
                              <FaSpinner style={{ color: '#cbd5e0', fontSize: '14px', flexShrink: 0 }} />
                            )}
                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                                <span style={{ fontSize: '13px', fontWeight: '500', color: milestone.completed ? '#28a745' : 'var(--text-dark)' }}>
                                  {milestone.title}
                                </span>
                                <span style={{ fontSize: '11px', color: 'var(--text-grey)' }}>{milestone.date}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact statement */}
                    <div style={{
                      backgroundColor: 'var(--bg-light)',
                      padding: '12px',
                      borderRadius: '8px',
                      marginBottom: '20px'
                    }}>
                      <p style={{ fontSize: '12px', color: 'var(--text-grey)', margin: 0 }}>
                        <strong style={{ color: 'var(--primary-orange)' }}>Expected Impact:</strong> {project.impact}
                      </p>
                    </div>

                    {/* Read more button */}
                    <button 
                      onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                      className="btn-primary" 
                      style={{ 
                        width: '100%', 
                        padding: '12px',
                        background: activeProject === project.id ? 'transparent' : 'var(--primary-orange)',
                        border: activeProject === project.id ? '1px solid var(--primary-orange)' : 'none',
                        color: activeProject === project.id ? 'var(--primary-orange)' : '#fff'
                      }}
                    >
                      {activeProject === project.id ? 'Show Less' : 'View Details'} <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div style={{
              textAlign: 'center',
              marginTop: '60px',
              padding: '48px',
              backgroundColor: 'var(--bg-light)',
              borderRadius: '8px'
            }}>
              <FaHandsHelping style={{ fontSize: '48px', color: 'var(--primary-orange)', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px' }}>
                Want to Support Our Projects?
              </h3>
              <p style={{ color: 'var(--text-grey)', marginBottom: '24px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                Join us in making quality education accessible to every learner. Your support helps us expand our reach and impact.
              </p>
              <a href="/contact" className="btn-primary">
                Get Involved <FaArrowRight />
              </a>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;