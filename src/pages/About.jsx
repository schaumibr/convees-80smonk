import { Link } from 'react-router-dom'
import './About.css'
import founderImage from '../assets/team/founder.jpeg'
import communityImage from '../assets/team/community.jpeg'

const teamColors = [
  'linear-gradient(135deg, #3385fc, #1d66f0)',
  'linear-gradient(135deg, #10b981, #059669)',
  // 'linear-gradient(135deg, #f59e0b, #d97706)',
  // 'linear-gradient(135deg, #ef4444, #dc2626)',
]

const team = [
  {
    name: 'Shami Sneha',
    role: 'Founder & Product Owner',
    bio: 'Building CONVEES to help people discover events, connect through shared interests, and build communities.',
    image: founderImage,
  },
  {
    name: 'Vysakh Jayaprakash',
    role: 'Community & Operations',
    bio: 'Supporting meaningful connections and creating better community experiences.',
    image: communityImage,
  },
]
function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <h1>About Communitas</h1>
          <p>
            We are on a mission to rebuild the social fabric of neighborhoods,
            one connection at a time. Technology should bring us closer, not
            push us apart.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-img animate-fade-up">
              <img
                src="https://images.pexels.com/photos/5256819/pexels-photo-5256819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Team placing hands together in unity"
                loading="lazy"
              />
            </div>
            <div className="about-story-text animate-fade-up delay-2">
              <h2>Our Story</h2>
              <p>
                Communitas started in 2021 when our founder, Sarah, noticed
                something troubling: she had lived in her apartment building
                for three years and did not know a single neighbor by name.
                She wondered how many others felt the same isolation.
              </p>
              <p>
                What began as a small neighborhood group chat grew into
                organized events, a shared tool library, and eventually a
                full platform. Today, Communitas serves over 12,000 members
                across 80 neighborhoods, helping people rediscover the joy
                of knowing their community.
              </p>
              <p>
                We believe that strong communities make safer, happier, and
                more resilient neighborhoods. Our platform is designed to
                facilitate real-world connections, not replace them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <div className="section-heading">
            <h2>Our Core Values</h2>
            <p>At CONVEES, we believe meaningful connections build stronger communities. We make it easier for people to discover events, share interests, and turn everyday interactions into lasting relationships. Our goal is to create a space where everyone feels connected, included, and inspired to participate.</p>
          </div>
          {/* <div className="grid grid-3">
            <div className="card value-card animate-fade-up">
              <div className="value-icon primary">
                <svg width="180" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  <circle cx="17" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </div>
              <h3>Inclusivity</h3>
              <p>At CONVEES, we believe meaningful connections build stronger communities. We make it easier for people to discover events, share interests, and turn everyday interactions into lasting relationships. Our goal is to create a space where everyone feels connected, included, and inspired to participate..</p>
            </div>
            <div className="card value-card animate-fade-up delay-2">
              <div className="value-icon secondary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Trust</h3>
              <p>Verified membership and transparent moderation create a safe space where neighbors feel comfortable connecting.</p>
            </div>
            <div className="card value-card animate-fade-up delay-3">
              <div className="value-icon accent">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Connection</h3>
              <p>Every feature we build has one goal: creating meaningful real-world interactions between people who live near each other.</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Meet the Team</h2>
            <p>The people behind Communitas, dedicated to building stronger communities.</p>
          </div>
          <div className="grid grid-4">
            {team.map((member, i) => (
              <div key={member.name} className={`card team-card animate-fade-up delay-${i + 1}`}>
                <div className="team-avatar" style={{ background: teamColors[i] }}>
                  {member.initials}
                </div>
                <h4>{member.name}</h4>
                <div className="team-role">{member.role}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
  <section className="about-stats">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat">
           
              <div className="about-stat-label">Active Members</div>
            </div>
            <div className="about-stat">
          
              <div className="about-stat-label">Neighborhoods</div>
            </div>
            <div className="about-stat">
        
              <div className="about-stat-label">Events Organized</div>
            </div>
            <div className="about-stat">
        
              <div className="about-stat-label">Resources Shared</div>
            </div>
            <div className="about-stat">
          
              <div className="about-stat-label">Neighborhoods</div>
            </div>
            <div className="about-stat">
          
              <div className="about-stat-label">Neighborhoods</div>
            </div>
            <div className="about-stat">
          
              <div className="about-stat-label">Neighborhoods</div>
            </div>
          </div>
        </div>
      </section>s
      
<section className="section">
  <div className="container">
    <div className="section-heading">
      <h2>We are team</h2>
      <p>
        The people behind CONVEES, dedicated to building stronger communities.
      </p>
    </div>

    <div className="grid grid-4">
      {team.map((member, i) => (
        <div
          key={member.name}
          className={`card team-card animate-fade-up delay-${i + 1}`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="team-photo"
            loading="lazy"
          />

          <h4>{member.name}</h4>
          <div className="team-role">{member.role}</div>
          <p className="team-bio">{member.bio}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="about-stats">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat">
              <div className="about-stat-num">12K+</div>
              <div className="about-stat-label">Active Members</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">80</div>
              <div className="about-stat-label">Neighborhoods</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">480+</div>
              <div className="about-stat-label">Events Organized</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">3.2K</div>
              <div className="about-stat-label">Resources Shared</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-100)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
            Ready to join your community?
          </h2>
          <p className="text-muted" style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-lg)' }}>
            Explore what Communitas can do for your neighborhood.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/features" className="btn btn-primary btn-lg">See Features</Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
