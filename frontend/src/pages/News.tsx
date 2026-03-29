import React, { useState } from 'react';
import '../stylesheets/App.css';
import NavigationBar from '../components/NavigationBar';
import { FaCalendarAlt, FaUser, FaArrowRight, FaNewspaper, FaGraduationCap, FaUsers, FaAward, FaHandsHelping, FaBookOpen, FaChartLine } from 'react-icons/fa';

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      category: 'education',
      date: 'March 15, 2025',
      title: 'SALA Launches After-School Tutoring Programme in Lusikisiki',
      summary: 'A new initiative providing free mathematics and science tutoring to 200 Grade 12 learners across 5 schools in the Lusikisiki district.',
      author: 'Education Department',
      icon: FaGraduationCap,
      readTime: '4 min read'
    },
    {
      id: 2,
      category: 'community',
      date: 'March 10, 2025',
      title: 'Community Outreach: Winter School Programme Reaches 500+ Students',
      summary: 'Our annual winter school programme provided intensive revision sessions for matriculants, with a 95% attendance rate across all participating schools.',
      author: 'Community Engagement Team',
      icon: FaUsers,
      readTime: '5 min read'
    },
    {
      id: 3,
      category: 'achievement',
      date: 'March 5, 2025',
      title: 'SALA Volunteers Recognised at Provincial Education Awards',
      summary: 'Three of our dedicated volunteers received awards for outstanding contribution to education in the Eastern Cape, recognised by the Department of Basic Education.',
      author: 'Communications Office',
      icon: FaAward,
      readTime: '3 min read'
    },
    {
      id: 4,
      category: 'library',
      date: 'February 28, 2025',
      title: 'New Digital Library Platform to Launch This Year',
      summary: 'We\'re building a comprehensive online resource centre featuring past papers, study guides, and video lessons for Grade 10-12 and tertiary students.',
      author: 'Digital Learning Team',
      icon: FaBookOpen,
      readTime: '4 min read'
    },
    {
      id: 5,
      category: 'education',
      date: 'February 20, 2025',
      title: 'Career Guidance Workshops Connect Students with Universities',
      summary: 'Over 300 students attended career expos featuring representatives from UCT, Wits, and local TVET colleges to explore post-matric opportunities.',
      author: 'Career Development Unit',
      icon: FaChartLine,
      readTime: '5 min read'
    },
    {
      id: 6,
      category: 'community',
      date: 'February 15, 2025',
      title: 'Parent-Teacher Collaboration Initiative Launched',
      summary: 'A new programme aimed at strengthening communication between parents and educators to improve student outcomes across partner schools.',
      author: 'Family Engagement Coordinator',
      icon: FaHandsHelping,
      readTime: '3 min read'
    }
  ];

  const categories = [
    { id: 'all', label: 'All News', icon: FaNewspaper },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'community', label: 'Community', icon: FaUsers },
    { id: 'achievement', label: 'Achievements', icon: FaAward },
    { id: 'library', label: 'Library Updates', icon: FaBookOpen }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div>
      <NavigationBar />
      <div className="contact-page">
        {/* Hero banner */}
        <div className="contact-hero">
          <div className="hero-overlay" />
          <div className="contact-hero-content">
            <span className="subtitle-badge">Stay Informed</span>
            <h1 className="hero-title">Latest News</h1>
            <p className="hero-text">Updates, announcements, and stories from our community</p>
          </div>
        </div>

        {/* Main content */}
        <section className="contact-section">
          <div className="container">

            {/* Category filters */}
            <div className="media-filter-tabs" style={{ marginBottom: '48px' }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`media-filter-btn ${activeCategory === category.id ? 'filter-active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <category.icon style={{ fontSize: '14px' }} />
                  {category.label}
                </button>
              ))}
            </div>

            {/* News grid */}
            <div className="news-grid-full" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', 
              gap: '30px',
              marginBottom: '60px'
            }}>
              {filteredNews.map(item => (
                <div key={item.id} className="news-card-full" style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
                }}>
                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                      <span style={{
                        backgroundColor: 'rgba(253,126,20,0.1)',
                        color: 'var(--primary-orange)',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {item.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-grey)', fontSize: '13px' }}>
                        <FaCalendarAlt style={{ fontSize: '12px' }} />
                        <span>{item.date}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-grey)', fontSize: '13px' }}>
                        <FaUser style={{ fontSize: '12px' }} />
                        <span>{item.author}</span>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                      <item.icon style={{ fontSize: '32px', color: 'var(--primary-orange)' }} />
                      <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', margin: 0, lineHeight: '1.4' }}>
                        {item.title}
                      </h3>
                    </div>
                    
                    <p style={{ color: 'var(--text-grey)', lineHeight: '1.7', fontSize: '14px', marginBottom: '20px' }}>
                      {item.summary}
                    </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0f0f0', paddingTop: '16px' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-grey)' }}>{item.readTime}</span>
                      <button style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary-orange)',
                        fontWeight: '600',
                        fontSize: '13px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'gap 0.3s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                      onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}>
                        Read More <FaArrowRight style={{ fontSize: '11px' }} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter signup */}
            <div style={{
              backgroundColor: 'var(--bg-light)',
              borderRadius: '8px',
              padding: '48px',
              textAlign: 'center',
              marginTop: '40px'
            }}>
              <FaNewspaper style={{ fontSize: '48px', color: 'var(--primary-orange)', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px' }}>
                Never Miss an Update
              </h3>
              <p style={{ color: 'var(--text-grey)', marginBottom: '24px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                Subscribe to our newsletter to receive the latest news and announcements directly in your inbox.
              </p>
              <div style={{ display: 'flex', gap: '12px', maxWidth: '450px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'var(--font-main)',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-orange)'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
                <button className="btn-primary" style={{ padding: '12px 24px' }}>
                  Subscribe <FaArrowRight />
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default News;