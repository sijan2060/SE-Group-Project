import React from "react";
import { Link } from "react-router-dom";

const exploreItems = [
  {
    title: "Emergency Meal Drives",
    text: "Rapid-response food distribution for families facing immediate hunger.",
    icon: "fas fa-utensils",
  },
  {
    title: "Community Kitchens",
    text: "Local kitchen partnerships that serve healthy daily meals with dignity.",
    icon: "fas fa-store",
  },
  {
    title: "School Meal Support",
    text: "Nutrition support for children so they can learn and grow consistently.",
    icon: "fas fa-school",
  },
  {
    title: "Volunteer Network",
    text: "Mobilizing local volunteers for packing, delivery, and outreach.",
    icon: "fas fa-hands-helping",
  },
  {
    title: "Nutrition & Hygiene Kits",
    text: "Essential food and hygiene supplies for vulnerable households.",
    icon: "fas fa-box-open",
  },
  {
    title: "Partner Programs",
    text: "Collaborations with restaurants and NGOs to reduce food waste.",
    icon: "fas fa-handshake",
  },
];

const impactHighlights = [
  { value: "30 min", label: "Avg. emergency response" },
  { value: "95%", label: "Delivery completion rate" },
  { value: "100%", label: "Partner verification process" },
];

const processSteps = [
  {
    title: "Collect",
    text: "Surplus food and donation support are gathered from partner sources.",
    icon: "fas fa-hand-holding-heart",
  },
  {
    title: "Verify",
    text: "We verify quality, safety, and priority needs with local field teams.",
    icon: "fas fa-clipboard-check",
  },
  {
    title: "Deliver",
    text: "Meals and support reach families quickly through our volunteer network.",
    icon: "fas fa-shipping-fast",
  },
];

const Explore = () => (
  <div className="explore-page">
    <div className="explore-bg-glow"></div>
    <section className="explore-hero">
      <p className="explore-kicker">Explore Our Work</p>
      <h1>
        Discover How <span>Food भोक</span> Creates Real Impact
      </h1>
      <p>
        From emergency meals to long-term community partnerships, each initiative
        is designed to fight hunger with speed, transparency, and compassion.
      </p>
      <div className="explore-hero-stats">
        <div className="explore-stat">
          <strong>200K+</strong>
          <span>Meals Served</span>
        </div>
        <div className="explore-stat">
          <strong>50+</strong>
          <span>Partners</span>
        </div>
        <div className="explore-stat">
          <strong>7</strong>
          <span>Provinces</span>
        </div>
      </div>
    </section>

    <section className="explore-highlight-strip">
      {impactHighlights.map((item) => (
        <article className="highlight-item" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>

    <section className="explore-grid">
      {exploreItems.map((item) => (
        <article className="explore-card" key={item.title}>
          <div className="explore-icon">
            <i className={item.icon}></i>
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </section>

    <section className="explore-process">
      <h2>How Our System Works</h2>
      <div className="process-grid">
        {processSteps.map((step) => (
          <article className="process-step" key={step.title}>
            <div className="process-icon">
              <i className={step.icon}></i>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="explore-cta">
      <h2>Want to support one of these initiatives?</h2>
      <p>Your contribution helps us deliver meals faster and reach more families.</p>
      <div className="explore-actions">
        <Link to="/#donate" className="explore-btn primary">Donate Now</Link>
        <Link to="/#contact" className="explore-btn secondary">Contact Us</Link>
      </div>
    </section>
  </div>
);

export default Explore;
