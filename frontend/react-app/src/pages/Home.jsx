import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">Verimail</div>
        <div className="nav-links">
          <button className="nav-btn primary" onClick={() => navigate('/predict')}>Start Detection</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge">
             <span className="dot"></span> Your personal AI security guard
          </div>
          <h1 className="hero-title">
            Detect phishing emails <span className="highlight-text">instantly</span> using AI
          </h1>
        </div>
        
        <div className="hero-visual">
          <div className="hero-right-content">
            <p className="hero-subtitle">
              Protect yourself from scams, fake emails, and malicious links with our advanced Machine Learning detection system.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate('/predict')}>
                Start Detection &rarr;
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="features-section">
        <h2 className="section-title">Powerful Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>AI-Powered Detection</h3>
            <p>ML + TF-IDF model trained on vast phishing data for superior accuracy.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Analysis</h3>
            <p>Instant email classification within seconds, saving your valuable time.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Smart Explanations</h3>
            <p>AI breaks down precisely why an email was flagged as a potential risk.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure System</h3>
            <p>Zero-trust privacy. Your personal email data is never stored on our servers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>High Accuracy</h3>
            <p>Continually optimized model specifically tuned for the latest phishing patterns.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Real-time Protection</h3>
            <p>Catch emerging threats instantly before they ever compromise your system.</p>
          </div>
        </div>
      </section>

      {/* Why This Tool Section */}
      <section className="why-section">
        <h2 className="section-title">Why Verimail?</h2>
        <div className="why-grid">
          <div className="why-item">
            <div className="check-icon">✓</div>
            <p>Helps prevent devastating phishing attacks and modern scams.</p>
          </div>
          <div className="why-item">
            <div className="check-icon">✓</div>
            <p>Detects fake login pages and credential theft emails instantly.</p>
          </div>
          <div className="why-item">
            <div className="check-icon">✓</div>
            <p>Identifies malicious payload links before you ever click them.</p>
          </div>
          <div className="why-item">
            <div className="check-icon">✓</div>
            <p>Protects highly sensitive personal and financial information.</p>
          </div>
          <div className="why-item">
            <div className="check-icon">✓</div>
            <p>Improves baseline cybersecurity awareness for your entire team.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Built with AI + Machine Learning for cybersecurity safety</p>
      </footer>
    </div>
  );
};

export default Home;
