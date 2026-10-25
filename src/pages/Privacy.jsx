import React, { useState } from 'react';
import './Privacy.css'; // Aapki purani CSS file

// ================= DATA =================

const privacySections = [
  {
    id: 'intro',
    title: 'Information We Collect',
    body: (
      <>
        <p>
          CONVEES respects your privacy and is committed to protecting the personal information you provide when using our website, mobile application, and related services. This Privacy Policy explains what information we collect, why we collect it, how we use and protect it, and the choices available to you.
        </p>
        <p>
          When you create an account or use CONVEES, we may collect information such as your name, email address, phone number, profile information, profile photograph, interests, community memberships, event registrations, RSVPs, reviews, ratings, comments, photographs, videos, and other information that you voluntarily provide.
        </p>
      </>
    ),
  },
  {
    id: 'usage',
    title: 'How We Use Your Information',
    body: (
      <>
        <p>CONVEES uses the information we collect to create and manage your account, provide access to communities and events, process registrations and payments, communicate with you about your account and activities, provide relevant notifications, improve the functionality and security of the platform, prevent fraud and misuse, provide customer support, and develop and improve CONVEES.</p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Sharing of Information',
    body: (
      <>
        <p>CONVEES may share information with third-party service providers where reasonably necessary to operate the platform. These providers may include hosting and database providers, authentication services, payment processors, email or communication providers, analytics and security services.</p>
        <p>CONVEES does not intend to sell your personal information as a standalone commercial product.</p>
      </>
    ),
  },
  {
    id: 'payments',
    title: 'Payments & Security',
    body: (
      <>
        <p>Payments made through CONVEES may be processed by third-party payment service providers. CONVEES may receive transaction-related information such as the transaction reference, payment status, amount, order information, and other information necessary to confirm and manage the transaction. Payment credentials are generally processed by the applicable payment provider rather than stored directly by CONVEES.</p>
        <p>We take reasonable technical and organizational measures designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.</p>
      </>
    ),
  },
  {
    id: 'contact-privacy',
    title: 'Contact Us',
    body: (
      <>
        <p>If you have questions, concerns, or requests relating to this Privacy Policy or the way CONVEES handles your personal information, you may contact us at <strong>support@convees.com</strong>.</p>
      </>
    ),
  }
];

const termsSections = [
  {
    id: 'about-terms',
    title: 'About CONVEES',
    body: (
      <>
        <p>CONVEES is a platform that helps people discover events, join communities, create and manage events, communicate with other community members, and participate in activities. CONVEES primarily provides the technology and platform through which these activities can take place.</p>
        <p>Unless expressly stated otherwise, CONVEES is not the organizer, host, owner, or operator of events created by third-party organizers.</p>
      </>
    ),
  },
  {
    id: 'eligibility',
    title: 'Eligibility & Accounts',
    body: (
      <>
        <p>You must provide accurate and current information when creating and using a CONVEES account. You are responsible for maintaining the accuracy of your account information and for keeping your login credentials secure.</p>
        <p>You must be legally capable of entering into a binding agreement under applicable law to use CONVEES. Certain events or services may have additional age requirements.</p>
      </>
    ),
  },
  {
    id: 'responsibilities',
    title: 'Communities & Events',
    body: (
      <>
        <p>CONVEES allows users and authorized organizers to create, join, and participate in communities or groups. Each community may have its own rules, membership requirements, and participation conditions.</p>
        <p>The organizer is responsible for ensuring that the information provided for an event is accurate and lawful and for conducting the event as described. CONVEES does not guarantee that an event will take place exactly as described.</p>
      </>
    ),
  },
  {
    id: 'payments-terms',
    title: 'Tickets, Payments, and Fees',
    body: (
      <>
        <p>Where CONVEES provides ticketing or payment functionality, payments may be processed through third-party payment service providers. The price displayed at the time of purchase, together with any applicable taxes, platform fees, payment processing fees, or other charges, will be presented to you before completion of the transaction.</p>
        <p>CONVEES may not be responsible for payment failures caused by a bank, payment gateway, card issuer, UPI provider, or other third-party payment service.</p>
      </>
    ),
  },
  {
    id: 'refunds',
    title: 'Refunds and Cancellations',
    body: (
      <>
        <p>Refunds and cancellations may depend on the terms specified for the relevant event and the applicable payment provider. Unless otherwise stated, the event organizer is responsible for determining and fulfilling refunds relating to an event that the organizer has cancelled, materially changed, or failed to provide.</p>
      </>
    ),
  }
];

const legalSections = [
  {
    id: 'operator',
    title: 'Operator Information',
    body: (
      <>
        <p><strong>Legal/Business Name:</strong> 80smonk Tech Solution</p>
        <p><strong>Brand Name:</strong> CONVEES</p>
        <p><strong>Business Address:</strong> Sector 137, Expressway, Noida (U.P.), Country: India</p>
        <p><strong>Email:</strong> info@convees.com</p>
        <p><strong>Website:</strong> https://convees.com</p>
      </>
    ),
  },
  {
    id: 'nature',
    title: 'Nature of the Platform',
    body: (
      <>
        <p>CONVEES is a technology platform that enables users to discover and participate in communities and events and, where available, create and manage communities and events. The platform may also provide functionality for event registration, ticketing, payments, communication, reviews, ratings, and other community-related activities.</p>
      </>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    body: (
      <>
        <p>The CONVEES name, logo, branding, website, application interface, software, and other materials owned or licensed by CONVEES are protected by applicable intellectual property laws. No part of the CONVEES Platform may be reproduced, copied, modified, distributed, or commercially used without appropriate authorization.</p>
      </>
    ),
  }
];

const aboutSections = [
  {
    id: 'vision',
    title: 'Bringing People Together',
    body: (
      <>
        <p>CONVEES is a community and events platform created to make it easier for people to discover, connect, participate, and build meaningful communities. Today, people often discover events through scattered WhatsApp groups, social media posts, university portals, and different event platforms. CONVEES is built to bring these experiences together in one place.</p>
      </>
    ),
  },
  {
    id: 'what-we-do',
    title: 'What CONVEES Does',
    body: (
      <>
        <p>CONVEES helps users discover communities and events that match their interests and gives organizers and communities tools to create and manage activities. CONVEES is designed to support different types of communities, including university communities, professional groups, clubs, organizations, local communities, and interest-based groups.</p>
      </>
    ),
  },
  {
    id: 'future',
    title: 'Our Future',
    body: (
      <>
        <p>CONVEES is starting with communities and events and aims to grow into a broader platform for discovering activities, connecting people, and supporting community-led experiences. Our goal is not simply to help people find an event. Our goal is to help people find their community.</p>
      </>
    ),
  }
];

const faqs = [
  { q: "What is CONVEES?", a: "CONVEES is a community and events platform that helps people discover communities, find events, connect with others, and participate in activities that match their interests." },
  { q: "Is CONVEES free to use?", a: "Many CONVEES features may be available free of charge. Some events, tickets, organizer services, or premium features may involve charges." },
  { q: "How do I create a CONVEES account?", a: "You can create an account using the registration options available in the CONVEES application or website. You may be required to verify your email address or phone number." },
  { q: "How do I register for an event?", a: "Open the event you are interested in and follow the registration or RSVP instructions provided on the event page. Some events may be free, while others may require payment." },
  { q: "Is my card or banking information stored by CONVEES?", a: "Payment information may be processed by third-party payment providers. Sensitive payment credentials may be handled directly by the payment provider rather than stored by CONVEES." },
  { q: "Can I report an event or user?", a: "Yes. Where reporting functionality is available, you can report content, events, or users that you believe violate CONVEES rules or create a safety concern." }
];

// ================= COMPONENT =================

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState('privacy');

  // Data mapping based on active tab
  const getSections = () => {
    switch (activeTab) {
      case 'privacy': return privacySections;
      case 'terms': return termsSections;
      case 'legal': return legalSections;
      case 'about': return aboutSections;
      default: return privacySections;
    }
  };

  return (
    <div className="legal-page-wrapper" style={{ minHeight: '100vh', background: 'var(--neutral-50, #f9f9f9)', paddingBottom: '50px' }}>
      
      {/* Hero Section */}
      <section className="privacy-hero" style={{ background: 'var(--primary, #6833c4)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Legal & Policies</h1>
          <p style={{ opacity: 0.8 }}>Last updated: October 15, 2026</p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="container" style={{ marginTop: '-30px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', background: 'white', padding: '10px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '0 auto' }}>
          {['Privacy', 'Terms', 'Legal Notice', 'About', 'FAQs'].map((tab) => {
            const tabId = tab.toLowerCase().replace(' ', '-');
            const isActive = activeTab === tabId || (tab === 'Legal Notice' && activeTab === 'legal');
            
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tabId === 'legal-notice' ? 'legal' : tabId)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: isActive ? 'bold' : 'normal',
                  background: isActive ? 'var(--primary, #6833c4)' : 'transparent',
                  color: isActive ? 'white' : '#6833c4',
                  transition: 'all 0.3s'
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="privacy-layout container" style={{ marginTop: '40px', display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        
        {/* Sidebar Navigation (Table of Contents) */}
        {activeTab !== 'faqs' && (
          <nav className="privacy-toc" style={{ flex: '1 1 250px', maxWidth: '300px' }}>
            <div style={{ position: 'sticky', top: '20px', background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h4 style={{ marginBottom: '15px', color: '#111827' }}>Contents</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {getSections().map((s) => (
                  <li key={s.id} style={{ marginBottom: '10px' }}>
                    <a href={`#${s.id}`} style={{ textDecoration: 'none', color: '#4F46E5', fontSize: '14px', display: 'block' }}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}

        {/* Content Body */}
        <div className="privacy-content" style={{ flex: '1 1 500px' }}>
          
          {/* Render Sections for Privacy, Terms, Legal, About */}
          {activeTab !== 'faqs' && getSections().map((section) => (
            <section 
              key={section.id} 
              id={section.id} 
              className="privacy-card"
              style={{ background: 'white', padding: '30px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
            >
              <h3 style={{ marginBottom: '15px', color: '#111827', fontSize: '20px' }}>{section.title}</h3>
              <div style={{ color: '#4b5563', lineHeight: '1.6' }}>{section.body}</div>
            </section>
          ))}

          {/* Render FAQs Accordion */}
          {activeTab === 'faqs' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {faqs.map((faq, index) => (
                <details 
                  key={index} 
                  style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', cursor: 'pointer' }}
                >
                  <summary style={{ fontWeight: 'bold', color: '#111827', fontSize: '16px' }}>
                    {faq.q}
                  </summary>
                  <p style={{ marginTop: '15px', color: '#4b5563', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}