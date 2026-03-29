import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: connect to backend
    alert(`Message sent by ${formData.name}!`);
  };

  return (
    <div>
      <NavigationBar />
      <div className="contact-page">

        {/* Hero banner */}
        <div className="contact-hero">
          <div className="hero-overlay" />
          <div className="contact-hero-content">
            <span className="subtitle-badge">Contact Us</span>
            <h1 className="hero-title">Get In Touch</h1>
            <p className="hero-text">We'd love to hear from you. Reach out to us anytime.</p>
          </div>
        </div>

        {/* Contact body */}
        <section className="contact-section">
          <div className="container contact-grid">

            {/* Info cards */}
            <div className="contact-info">
              <div className="contact-info-card">
                <FaMapMarkerAlt className="contact-info-icon" />
                <div>
                  <h4 className="contact-info-title">Our Location</h4>
                  <p className="contact-info-text">Pondoland, Eastern Cape, South Africa</p>
                </div>
              </div>
              <div className="contact-info-card">
                <FaEnvelope className="contact-info-icon" />
                <div>
                  <h4 className="contact-info-title">Email Us</h4>
                  <p className="contact-info-text">info@sala.org.za</p>
                </div>
              </div>
              <div className="contact-info-card">
                <FaPhone className="contact-info-icon" />
                <div>
                  <h4 className="contact-info-title">Call Us</h4>
                  <p className="contact-info-text">+27 63 686 0596 </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrapper">
              <h2 className="section-title">Send a Message</h2>
              <div className="contact-form">
                <div className="auth-input-group">
                  <FaUser className="auth-input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="auth-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="auth-input-group">
                  <FaEnvelope className="auth-input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="auth-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="auth-input-group">
                  <FaPaperPlane className="auth-input-icon" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="auth-input"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  className="contact-textarea"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
                <button className="btn-primary" onClick={handleSubmit}>
                  Send Message <FaArrowRight />
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;