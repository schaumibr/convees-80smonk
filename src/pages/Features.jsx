import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Features.css'
import discover from '../assets/features/discover.jpg'
import landingpage from '../assets/features/landingpage.jpg'
import home from '../assets/features/home.jpg'
import groups from '../assets/features/groups.jpg'
import profile from '../assets/features/profile.jpg'
import city from '../assets/features/city.jpg'
import signup from '../assets/features/signup.jpg'

const features = [
  {
    icon: 'primary',
    title: 'Event Discovery',
    desc: 'Browse public and organization events by category, city and date, and see who is going.',
    svg: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  },
  {
    icon: 'secondary',
    title: 'Interest Groups',
    desc: 'Create or join groups for Tech, AI & ML, Startups, Career, Study Groups and more.',
    svg: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    icon: 'accent',
    title: 'Save & Host',
    desc: 'Save events you love and host your own, free or paid, with a live attendee count.',
    svg: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></>,
  },
  {
    icon: 'success',
    title: 'City Selection',
    desc: 'Pick a popular city, search worldwide or use your current location.',
    svg: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    icon: 'warning',
    title: 'Member Profiles',
    desc: 'Share your bio and interests so others can start a conversation with you.',
    svg: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  },
  {
    icon: 'error',
    title: 'Verified Access',
    desc: 'Sign-up with an official organization email keeps communities real and safe.',
    svg: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></>,
  },
]

const deep = [
  {
    img: landingpage,
    alt: 'Convees discover feed with public and organization events',
    title: 'Discover events in your city',
    text: 'Filter by Tech, Music, Travel or Art and see public and organization events with date, place and attendee count.',
    points: ['Public and Organization event labels', 'Filter by category and city', 'Save events with a single tap'],
  },
  {
    img: home,
    alt: 'Convees home feed with topic tabs',
    title: 'A home feed that feels personal',
    text: 'Upcoming events from your groups and city in one scroll, with quick access to chats, notifications and settings.',
    points: ['Topic tabs: AI & ML, Startups, Career, Study Groups', 'Free and paid events clearly marked', 'Host info and live attendee count'],
  },
  {
    img: groups,
    alt: 'Convees groups and saved events',
    title: 'Build groups. Keep what you love.',
    text: 'Create a group for your interest or study circle, host events for it, and find upcoming, past and saved events in one place.',
    points: ['Create a new group in one tap', 'Upcoming, Past and Saved tabs', 'Host your own events'],
  },
  {
    img: profile,
    alt: 'Convees member profile',
    title: 'Show who you are',
    text: 'Add a bio and interests, and show the groups you run or have joined, so it is easy to connect.',
    points: ['Bio and interest tags', 'My Group, Joined and Events counters', 'Open to collaborations'],
  },
  {
    img: city,
    alt: 'Convees city selection',
    title: 'Any city, anywhere',
    text: 'Pick from popular cities, search all countries or use your current location to see what is relevant near you.',
    points: ['Popular city shortcuts', 'Search across all countries', 'Use my current location'],
  },
  {
    img: signup,
    alt: 'Convees sign-up with organization email',
    title: 'Trusted by design',
    text: 'Only official organization emails can join, and age confirmation follows Art. 8 GDPR.',
    points: ['Verified organization membership', 'Clear 16+ age confirmation', 'Terms and Privacy Policy up front'],
  },
]

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
)

function Features() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.features-page .reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="features-page">
      <section className="features-hero">
        <div className="container features-hero-grid">
          <div className="features-hero-text">
            <span className="features-pill">Events &amp; communities, verified</span>
            <h1>Explore same interests people around you.</h1>
            <p>
              Convees brings public events, organization meetups and interest
              groups into one app, so you always know what is happening near you.
            </p>
            <div className="features-hero-cta">
              <Link to="/contact" className="btn btn-cv btn-lg">Join the waitlist</Link>
              <a href="#all-features" className="btn btn-outline-light btn-lg">See the app</a>
            </div>
          </div>
          <div className="phone-duo">
            <div className="phone phone-a"><img src={discover} alt="Convees discover feed" /></div>
            <div className="phone phone-b"><img src={home} alt="Convees home feed" /></div>
          </div>
        </div>
      </section>

      <section className="section" id="all-features">
        <div className="container">
          <div className="section-heading">
            <h2>Everything Your Community Needs</h2>
            <p>Six tools working together, in one app.</p>
          </div>
          <div className="grid grid-3">
            {features.map((feat, i) => (
              <div key={feat.title} className={`card card-hover feature-card animate-fade-up delay-${i + 1}`}>
                <div className={`feature-card-icon ${feat.icon}`}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {feat.svg}
                  </svg>
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-100)' }}>
        <div className="container">
          <div className="section-heading">
            <h2>See Convees in Action</h2>
            <p>A look at the screens your members will use every day.</p>
          </div>
          {deep.map((d, i) => (
            <div key={d.title} className={`feature-deep reveal${i % 2 ? ' reverse' : ''}`}>
              <div className="feature-deep-img">
                <div className="phone"><img src={d.img} alt={d.alt} loading="lazy" /></div>
              </div>
              <div className="feature-deep-content">
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <ul className="feature-checklist">
                  {d.points.map((p) => <li key={p}><Check />{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
            Ready to meet your crowd?
          </h2>
          <p className="text-muted" style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-lg)' }}>
            Get early access to Convees and be first to discover what is happening around you.
          </p>
          <Link to="/contact" className="btn btn-cv btn-lg">Request early access</Link>
        </div>
      </section>
    </div>
  )
}

export default Features
