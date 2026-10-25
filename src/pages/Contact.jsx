import { useState } from 'react'
import './Contact.css'

const contactInfo = [
  {
    icon: 'primary',
    label: 'Email',
    value: 'hello@communitas.app',
    svg: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
  },
  {
    icon: 'secondary',
    label: 'Phone',
    value: '(555) 123-4567',
    svg: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></>,
  },
  {
    icon: 'accent',
    label: 'Office',
    value: '123 Community Lane, Portland, OR 97201',
    svg: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  },
]

const faqs = [
  {
    q: 'How do I join my neighborhood on Communitas?',
    a: 'Sign up with your email, verify your address, and we will automatically connect you to your neighborhood group. If your area does not have a group yet, you can start one yourself.',
  },
  {
    q: 'Is Communitas free to use?',
    a: 'Yes, the core platform is completely free for all members. We offer optional premium features for neighborhood organizers who want advanced event management tools.',
  },
  {
    q: 'How do you verify members?',
    a: 'We use address verification to ensure members actually live in the neighborhoods they join. This keeps our communities authentic and safe for everyone.',
  },
  {
    q: 'Can I control my privacy settings?',
    a: 'Absolutely. You choose what information is visible to neighbors, who can contact you, and what notifications you receive. Review our Privacy Policy for full details.',
  },
  {
    q: 'What if I have a problem with another member?',
    a: 'Our community moderation team is available to help. You can report inappropriate behavior directly through the platform, and we respond within 24 hours.',
  },
]

function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required'
    if (!form.email.trim()) {
      errs.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!form.message.trim()) {
      errs.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) {
      setStatus({ type: 'error', msg: 'Please fix the errors below and try again.' })
      return
    }
    setStatus({ type: 'success', msg: 'Thank you! Your message has been sent. We will get back to you within 24 hours.' })
    setForm({ firstName: '', lastName: '', email: '', subject: 'general', message: '' })
  }

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have a question, idea, or want to bring Communitas to your
            neighborhood? We would love to hear from you.
          </p>
          <p>
            support@convees.com
          </p>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-info-item animate-fade-up">
                  <div className={`contact-info-icon feature-card-icon ${item.icon}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.svg}
                    </svg>
                  </div>
                  <div>
                    <h4>{item.label}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 'var(--space-2)' }}>
                <h4 style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', marginBottom: 'var(--space-2)' }}>
                  Follow Us
                </h4>
                <div className="contact-social-row">
                  <a href="#" aria-label="Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-card animate-fade-up delay-2">
              {status && (
                <div className={`form-alert ${status.type}`}>
                  {status.type === 'success' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  )}
                  {status.msg}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name <span className="required">*</span></label>
                    <input
                      type="text"
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      value={form.firstName}
                      onChange={update('firstName')}
                      placeholder="Jane"
                    />
                    {errors.firstName && <p className="form-error-text">{errors.firstName}</p>}
                  </div>
                  <div className="form-group">
                    <label>Last Name <span className="required">*</span></label>
                    <input
                      type="text"
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                      value={form.lastName}
                      onChange={update('lastName')}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="form-error-text">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label>Email <span className="required">*</span></label>
                  <input
                    type="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    value={form.email}
                    onChange={update('email')}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="form-error-text">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <select className="form-select" value={form.subject} onChange={update('subject')}>
                    <option value="general">General Inquiry</option>
                    <option value="organizer">Neighborhood Organizer</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message <span className="required">*</span></label>
                  <textarea
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="form-error-text">{errors.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to the most common questions about Communitas.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  {faq.q}
                  <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
