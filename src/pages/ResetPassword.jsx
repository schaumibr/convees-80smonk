import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ResetPassword.css'

function calculateStrength(password) {
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return Math.min(score, 4)
}

const strengthMap = ['weak', 'fair', 'good', 'strong']
const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong']

function ResetPassword() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')

  const strength = password ? calculateStrength(password) : -1

  const hints = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'Upper and lowercase letters', met: /[A-Z]/.test(password) && /[a-z]/.test(password) },
    { label: 'At least one number', met: /\d/.test(password) },
    { label: 'A special character', met: /[^A-Za-z0-9]/.test(password) },
  ]

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    setError('')
    setEmailSent(true)
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }
    if (strength < 2) {
      setError('Please choose a stronger password')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setError('')
    setStep(3)
  }

  return (
    <div className="reset-page">
      <div className="reset-card animate-scale-in">
        <div className="reset-logo">C</div>
        <h2 className="reset-title">Reset Your Password</h2>
        <p className="reset-subtitle">
          {step === 1 && 'Enter your email to receive a reset code'}
          {step === 2 && 'Create a new secure password'}
          {step === 3 && 'Your password has been updated'}
        </p>

        {/* Step indicator */}
        <div className="reset-steps">
          <div className="reset-step">
            <div className={`reset-step-dot ${step >= 1 ? (step > 1 ? 'completed' : 'active') : 'inactive'}`}>
              {step > 1 ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              ) : '1'}
            </div>
          </div>
          <div className={`reset-step-line ${step > 1 ? 'completed' : ''}`} />
          <div className="reset-step">
            <div className={`reset-step-dot ${step >= 2 ? (step > 2 ? 'completed' : 'active') : 'inactive'}`}>
              {step > 2 ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              ) : '2'}
            </div>
          </div>
          <div className={`reset-step-line ${step > 2 ? 'completed' : ''}`} />
          <div className="reset-step">
            <div className={`reset-step-dot ${step >= 3 ? 'completed' : 'inactive'}`}>
              {step > 3 ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              ) : '3'}
            </div>
          </div>
        </div>

        {/* Step 1: Email */}
        {step === 1 && !emailSent && (
          <form onSubmit={handleEmailSubmit} noValidate>
            <div className="form-group">
              <label>Email Address <span className="required">*</span></label>
              <input
                type="email"
                className={`form-input ${error ? 'error' : ''}`}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError('') }}
                placeholder="you@example.com"
                autoFocus
              />
              {error && <p className="form-error-text">{error}</p>}
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Send Reset Code
            </button>
          </form>
        )}

        {/* Step 1: Email sent confirmation */}
        {step === 1 && emailSent && (
          <div className="reset-success">
            <div className="reset-success-icon" style={{ background: 'var(--primary-50)', color: 'var(--primary-600)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 style={{ fontSize: 'var(--text-xl)' }}>Check Your Email</h3>
            <p>
              We have sent a reset code to <strong>{email}</strong>.
              Click the link in the email to continue.
            </p>
            <button
              className="btn btn-primary btn-block btn-lg"
              onClick={() => setStep(2)}
            >
              I Have Verified - Continue
            </button>
            <p className="reset-back-link">
              Did not receive an email?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setEmailSent(false) }}>
                Try again
              </a>
            </p>
          </div>
        )}

        {/* Step 2: New password */}
        {step === 2 && (
          <form onSubmit={handlePasswordSubmit} noValidate>
            <div className="form-group">
              <label>New Password <span className="required">*</span></label>
              <div className="password-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-input ${error && password.length < 8 ? 'error' : ''}`}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError('') }}
                  placeholder="Enter new password"
                  autoFocus
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  )}
                </button>
              </div>

              {password && (
                <div className="strength-meter">
                  <div className="strength-bars">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`strength-bar ${i <= strength ? strengthMap[strength] : ''}`}
                      />
                    ))}
                  </div>
                  <span className={`strength-label ${strength >= 0 ? strengthMap[strength] : ''}`}>
                    {strength >= 0 ? strengthLabels[strength] : ''}
                  </span>
                  <div className="strength-hints">
                    {hints.map((h) => (
                      <div key={h.label} className={`strength-hint ${h.met ? 'met' : ''}`}>
                        {h.met ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /></svg>
                        )}
                        {h.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Confirm Password <span className="required">*</span></label>
              <div className="password-field">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  className={`form-input ${error && error.includes('match') ? 'error' : ''}`}
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setError('') }}
                  placeholder="Re-enter new password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label="Toggle password visibility"
                >
                  {showConfirm ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  )}
                </button>
              </div>
            </div>

            {error && <p className="form-error-text" style={{ marginBottom: 'var(--space-2)' }}>{error}</p>}

            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Reset Password
            </button>
          </form>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="reset-success">
            <div className="reset-success-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3>Password Reset Complete</h3>
            <p>
              Your password has been successfully updated. You can now sign in
              with your new password.
            </p>
            <Link to="/" className="btn btn-primary btn-block btn-lg">
              Back to Home
            </Link>
            <p className="reset-back-link">
              Need help?{' '}
              <Link to="/contact">Contact support</Link>
            </p>
          </div>
        )}

        {step < 3 && !emailSent && (
          <p className="reset-back-link">
            Remembered your password?{' '}
            <Link to="/">Back to home</Link>
          </p>
        )}
      </div>
    </div>
  )
}

export default ResetPassword
