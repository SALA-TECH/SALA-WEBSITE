import React from 'react';
import '../stylesheets/App.css';
import NavigationBar from '../components/NavigationBar';
import { FaBookOpen, FaChalkboardTeacher, FaLaptop, FaArrowRight, FaClock, FaGraduationCap, FaSearch, FaFlask, FaCalculator, FaLanguage, FaLandmark, FaMicroscope, FaChartLine, FaCode, FaHeartbeat } from 'react-icons/fa';

const Library: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <div className="contact-page">
        {/* Hero banner */}
        <div className="contact-hero">
          <div className="hero-overlay" />
          <div className="contact-hero-content">
            <span className="subtitle-badge">Coming Soon</span>
            <h1 className="hero-title">Online Library</h1>
            <p className="hero-text">Your academic success starts here — resources for Grade 10-12, University & College students</p>
          </div>
        </div>

        {/* Main content */}
        <section className="contact-section">
          <div className="container">
            
            {/* Announcement message */}
            <div style={{ 
              textAlign: 'center', 
              maxWidth: '800px', 
              margin: '0 auto 60px auto',
              padding: '40px',
              backgroundColor: 'var(--bg-light)',
              borderRadius: '8px',
              borderLeft: '4px solid var(--primary-orange)'
            }}>
              <FaBookOpen style={{ fontSize: '48px', color: 'var(--primary-orange)', marginBottom: '20px' }} />
              <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '16px' }}>
                Launching Soon!
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-grey)', lineHeight: '1.8', marginBottom: '0' }}>
                Your comprehensive digital academic resource center is almost ready. Access quality learning materials designed specifically for Grade 10-12 learners, university students, and college students across all disciplines.
              </p>
            </div>

            {/* Academic Levels */}
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
              Resources For Every Academic Level
            </h2>
            <div className="programmes-grid" style={{ marginBottom: '60px' }}>
              <div className="programme-card">
                <FaGraduationCap className="programme-icon" />
                <h3 className="programme-title">Grade 10-12</h3>
                <p className="programme-desc">
                  Past exam papers, study guides, and revision materials for CAPS curriculum. Master your matric subjects with confidence.
                </p>
              </div>
              
              <div className="programme-card">
                <FaChalkboardTeacher className="programme-icon" />
                <h3 className="programme-title">University Students</h3>
                <p className="programme-desc">
                  Lecture notes, tutorial solutions, and module-specific resources across various faculties and departments.
                </p>
              </div>
              
              <div className="programme-card">
                <FaLaptop className="programme-icon" />
                <h3 className="programme-title">College & TVET</h3>
                <p className="programme-desc">
                  NATED and NC(V) resources, practical guides, and industry-focused learning materials for technical and vocational education.
                </p>
              </div>
            </div>

            {/* Subjects & Modules Grid */}
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
              Subjects & Modules Available
            </h2>
            
            {/* High School Subjects */}
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary-orange)', marginBottom: '24px', textAlign: 'center' }}>
                Grade 10-12 Subjects
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '16px',
                marginBottom: '32px'
              }}>
                {[
                  { icon: FaCalculator, name: 'Mathematics' },
                  { icon: FaFlask, name: 'Physical Sciences' },
                  { icon: FaLanguage, name: 'English (HL & FAL)' },
                  { icon: FaLanguage, name: 'Afrikaans / IsiXhosa' },
                  { icon: FaChartLine, name: 'Mathematical Literacy' },
                  { icon: FaMicroscope, name: 'Life Sciences' },
                  { icon: FaLandmark, name: 'History' },
                  { icon: FaLandmark, name: 'Geography' },
                  { icon: FaHeartbeat, name: 'Life Orientation' },
                  { icon: FaCode, name: 'Computer Applications' }
                ].map((subject, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    padding: '12px 16px',
                    backgroundColor: 'var(--bg-light)',
                    borderRadius: '8px',
                    transition: 'all 0.3s'
                  }}>
                    <subject.icon style={{ color: 'var(--primary-orange)', fontSize: '18px' }} />
                    <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-dark)' }}>{subject.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* University & College Modules */}
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary-orange)', marginBottom: '24px', textAlign: 'center' }}>
                University & College Modules
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                gap: '20px'
              }}>
                <div style={{ 
                  padding: '20px', 
                  backgroundColor: '#fff', 
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0'
                }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-dark)' }}>Commerce</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Accounting', 'Economics', 'Business Management', 'Marketing', 'Financial Management'].map((item, i) => (
                      <li key={i} style={{ fontSize: '13px', color: 'var(--text-grey)', padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ 
                  padding: '20px', 
                  backgroundColor: '#fff', 
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0'
                }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-dark)' }}>Science & Technology</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Calculus', 'Linear Algebra', 'Physics', 'Chemistry', 'Computer Science', 'Biology'].map((item, i) => (
                      <li key={i} style={{ fontSize: '13px', color: 'var(--text-grey)', padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ 
                  padding: '20px', 
                  backgroundColor: '#fff', 
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0'
                }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-dark)' }}>Humanities & Social Sciences</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Psychology', 'Sociology', 'Political Science', 'Anthropology', 'English Literature'].map((item, i) => (
                      <li key={i} style={{ fontSize: '13px', color: 'var(--text-grey)', padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ 
                  padding: '20px', 
                  backgroundColor: '#fff', 
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0'
                }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-dark)' }}>Engineering & IT</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Programming', 'Database Systems', 'Networks', 'Mechanical Engineering', 'Electrical Engineering'].map((item, i) => (
                      <li key={i} style={{ fontSize: '13px', color: 'var(--text-grey)', padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* What makes it special */}
            <div style={{ 
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '48px',
              marginBottom: '40px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                <div>
                  <span className="subtitle-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>What You'll Get</span>
                  <h3 className="section-title" style={{ fontSize: '28px', marginBottom: '20px' }}>
                    Everything You Need to Succeed
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'Past exam papers with detailed solutions',
                      'Comprehensive study guides and summaries',
                      'Video tutorials for difficult concepts',
                      'Practice exercises and quizzes',
                      'Module-specific lecture notes',
                      'Downloadable resources for offline access'
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: 'var(--text-grey)' }}>
                        <FaArrowRight style={{ color: 'var(--primary-orange)', fontSize: '12px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ 
                  backgroundColor: 'var(--bg-light)', 
                  padding: '32px', 
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <FaBookOpen style={{ fontSize: '64px', color: 'var(--primary-orange)', marginBottom: '20px' }} />
                  <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-dark)' }}>
                    Coming in 2025
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <FaClock style={{ color: 'var(--primary-orange)', fontSize: '24px', marginBottom: '8px' }} />
                      <p style={{ fontSize: '12px', color: 'var(--text-grey)' }}>24/7 Access</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <FaSearch style={{ color: 'var(--primary-orange)', fontSize: '24px', marginBottom: '8px' }} />
                      <p style={{ fontSize: '12px', color: 'var(--text-grey)' }}>Easy Search</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <FaLaptop style={{ color: 'var(--primary-orange)', fontSize: '24px', marginBottom: '8px' }} />
                      <p style={{ fontSize: '12px', color: 'var(--text-grey)' }}>Mobile Friendly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <p style={{ color: 'var(--text-grey)', marginBottom: '24px', fontSize: '16px' }}>
                Be the first to know when we launch. Get notified about new resources and updates.
              </p>
              <a href="/contact" className="btn-primary">
                Get Notified <FaArrowRight />
              </a>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Library;
