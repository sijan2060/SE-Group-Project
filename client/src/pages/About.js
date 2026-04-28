import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <p className="hero-kicker">About Food भोक</p>
          <h1 className="reveal-text">Turning Surplus Food Into <span>Shared Hope</span></h1>
          <p className="hero-subtitle">
            We connect donors, volunteers, and communities to reduce food waste
            and serve warm meals where they are needed most.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">200K+</span>
              <span className="stat-label">Meals Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Community Partners</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Supporters</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="about-grid about-grid-top">
          <article className="grid-item glass who-we-are">
            <div className="item-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h2>Who We Are</h2>
            <p>
              Food भोक is a local, mission-driven initiative based in Kathmandu.
              We bridge extra food and urgent need through a network of donors,
              kitchens, and volunteers.
            </p>
          </article>

          <article className="grid-item glass our-mission">
            <div className="item-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2>Our Mission</h2>
            <p>
              We build a zero-waste food ecosystem where no one sleeps hungry.
              By using simple technology and trusted field partners, we make
              every donation fast, transparent, and meaningful.
            </p>
          </article>

          <article className="grid-item glass our-vision">
            <div className="item-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h2>Our Vision</h2>
            <p>
              A Nepal where every neighborhood can quickly support families
              facing food insecurity through community-led action and shared
              responsibility.
            </p>
          </article>
        </section>

        <div className="about-row-gap" aria-hidden="true"></div>

        <section className="about-grid about-grid-trust">
          <article className="grid-item glass features-list trust-horizontal">
            <h2>Why People Trust Us</h2>
            <ul className="modern-list">
              <li>
                <span className="list-icon">
                  <i className="fas fa-bolt"></i>
                </span>
                <div>
                  <strong>Quick Response</strong>
                  <p>Fast coordination ensures food reaches people while it is still fresh.</p>
                </div>
              </li>
              <li>
                <span className="list-icon">
                  <i className="fas fa-user-check"></i>
                </span>
                <div>
                  <strong>Verified Network</strong>
                  <p>We collaborate with trusted NGOs, kitchens, and local volunteers.</p>
                </div>
              </li>
              <li>
                <span className="list-icon">
                  <i className="fas fa-chart-line"></i>
                </span>
                <div>
                  <strong>Visible Impact</strong>
                  <p>Clear records and outcomes show where your contribution goes.</p>
                </div>
              </li>
            </ul>
          </article>
        </section>

        <section className="impact-strip glass">
          <div className="impact-item">
            <span className="impact-value">1,000+</span>
            <span className="impact-name">Families Reached</span>
          </div>
          <div className="impact-item">
            <span className="impact-value">7</span>
            <span className="impact-name">Provinces Covered</span>
          </div>
          <div className="impact-item">
            <span className="impact-value">24/7</span>
            <span className="impact-name">Support Coordination</span>
          </div>
        </section>

        <section className="about-grid bottom-grid">
          <article className="grid-item glass contact-card">
            <h2>Get In Touch</h2>
            <p>Have questions, partnership ideas, or want to volunteer?</p>
            <div className="contact-links">
              <a href="mailto:info@foodbhook.com" className="contact-btn">
                <i className="fas fa-envelope"></i> info@foodbhook.com
              </a>
              <a href="tel:1-800-FOOD-BHK" className="contact-btn">
                <i className="fas fa-phone"></i> 01-4333333
              </a>
            </div>
          </article>

          <article className="grid-item glass volunteer-card">
            <h2>Be Part of the Mission</h2>
            <p>
              Whether you donate food, contribute funds, or volunteer your time,
              every action helps us serve another family.
            </p>
            <div className="quick-actions">
              <Link to="/#donate" className="secondary-cta">Donate Now</Link>
              <Link to="/#contact" className="secondary-cta ghost">Become a Volunteer</Link>
            </div>
          </article>
        </section>

        <section className="cta-section">
          <h2>Your Small Step Can Fill Someone's Plate Today</h2>
          <p>Join us in building a hunger-free and waste-free community.</p>
          <Link to="/#donate" className="main-cta">Make a Donation</Link>
        </section>
      </div>
    </div>
  );
};

export default About;
