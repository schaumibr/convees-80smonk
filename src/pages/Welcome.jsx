import { Link } from 'react-router-dom'
import './Welcome.css'
import conveesLogo from '../assets/image/Convees.jpg'
function Welcome() {
  return (
    <div className="welcome">
      <main className="welcome-main">
        <div className="welcome-content">
          <div className="welcome-logo animate-float"><img
            src={conveesLogo}
            alt="Convees logo"
            className="header-logo-image"
            /></div>
          <span className="badge badge-primary welcome-badge animate-fade-up delay-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Building stronger neighborhoods together
          </span>

          <h1 className="welcome-title animate-fade-up delay-2">
            Welcome to <span className="text-gradient">Convees</span>
          </h1>

          <p className="welcome-subtitle animate-fade-up delay-3">
            The community platform that brings neighbors together through events,
            forums, shared resources, and meaningful local connections.
          </p>

          <div className="welcome-cta animate-fade-up delay-4">
            <Link to="/about" className="btn btn-primary btn-lg">
              Explore Communitas
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/features" className="btn btn-secondary btn-lg">
              See Features
            </Link>
          </div>

          {/* <div className="welcome-stats animate-scale-in delay-5">
            <div className="welcome-stat">
              <div className="welcome-stat-num">12K+</div>
              <div className="welcome-stat-label">Active Members</div>
            </div>
            <div className="welcome-divider" />
            <div className="welcome-stat">
              <div className="welcome-stat-num">480+</div>
              <div className="welcome-stat-label">Local Events</div>
            </div>
            <div className="welcome-divider" />
            <div className="welcome-stat">
              <div className="welcome-stat-num">95%</div>
              <div className="welcome-stat-label">Satisfaction Rate</div>
            </div>
          </div> */}
        </div>
      </main>

      <footer className="footer-minimal">
        <Link to="/privacy">Privacy Policy</Link> &middot;
        <Link to="/contact">Contact</Link> &middot;
        <Link to="/reset-password">Reset Password</Link>
        <div style={{ marginTop: 'var(--space-2)' }}>
          &copy; {new Date().getFullYear()} Communitas. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Welcome
