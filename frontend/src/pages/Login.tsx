import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { FaArrowRight, FaEnvelope, FaLock } from 'react-icons/fa';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: connect to backend auth
    alert(`Login attempted for: ${email}`);
  };

  return (
    <div>
      <NavigationBar />
      <div className="auth-page">
        <div className="auth-overlay" />
        <div className="auth-card">
          <div className="auth-badge">
            <span className="subtitle-badge">Member Login</span>
          </div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to your mySALA account</p>

          <div className="auth-form">
            <div className="auth-input-group">
              <FaEnvelope className="auth-input-icon" />
              <input
                type="email"
                placeholder="Email address"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-input-group">
              <FaLock className="auth-input-icon" />
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="auth-options">
              <label className="auth-remember">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#forgot" className="auth-forgot">Forgot password?</a>
            </div>

            <button className="btn-primary auth-submit" onClick={handleSubmit}>
              Sign In <FaArrowRight />
            </button>

            <p className="auth-footer">
              Don't have an account?{' '}
              <a href="#register" className="auth-link">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;