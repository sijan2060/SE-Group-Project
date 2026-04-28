import React, { useState, useEffect } from 'react';

// Image Imports
import bankImg from '../assets/images/Bank.png';
import esewaImg from '../assets/images/Esewa.jpg';
import imeImg from '../assets/images/IME.jpg';
import khaltiImg from '../assets/images/Khalti.jpg';

const Donate = () => {
  const [selectedMethod, setSelectedMethod] = useState('esewa');
  const [amount, setAmount] = useState(1000);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate goal progress loading
    const timer = setTimeout(() => setProgress(74), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="donation-page">
      {/* Dynamic Background Elements */}
      <div className="mesh-gradient"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <main className="donate-container">
        <section className="donate-hero-section">
          <div className="impact-badge animate-float">❤️ Join 10,240+ Hero Donors</div>
          <h1 className="reveal-text">Transform Lives With <span>Every Bite</span></h1>
          <p className="hero-description">
            Your contribution is more than just money; it's a hot meal, a smile, and a hopeful tomorrow 
            for someone in Kathmandu. Join our mission to end hunger.
          </p>

          {/* Goal Section */}
          <div className="goal-container glass">
            <div className="goal-header">
              <span>Monthly Goal: <strong>NRS 500,000</strong></span>
              <span><strong>74%</strong> Raised</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}>
                <div className="progress-glow"></div>
              </div>
            </div>
            <p className="goal-footer">NRS 130,000 more to reach our goal!</p>
          </div>
          
          <div className="impact-cards">
            <div
              className={`impact-card glass ${Number(amount) === 500 ? 'selected' : ''}`}
              onClick={() => setAmount(500)}
            >
              <div className="card-badge">Basic</div>
              <span className="card-icon">🍲</span>
              <h3>NRS 500</h3>
              <p>Provides 5 hot meals to children</p>
            </div>
            <div
              className={`impact-card glass highlight ${Number(amount) === 2000 ? 'selected' : ''}`}
              onClick={() => setAmount(2000)}
            >
              <div className="card-badge popular">Popular</div>
              <span className="card-icon">🎒</span>
              <h3>NRS 2000</h3>
              <p>Feeds a family for an entire week</p>
            </div>
            <div
              className={`impact-card glass ${Number(amount) === 5000 ? 'selected' : ''}`}
              onClick={() => setAmount(5000)}
            >
              <div className="card-badge">Hero</div>
              <span className="card-icon">🤝</span>
              <h3>NRS 5000</h3>
              <p>Supports a community kitchen for a month</p>
            </div>
          </div>
        </section>

        <div className="donation-content-grid">
          {/* Left: Testimonial/Info */}
          <div className="info-column">
            <div className="testimonial-card glass animate-slide-in">
              <div className="quote-icon">“</div>
              <p>“Thanks to Food-भोक, we don't have to worry about our next meal. The community support has been life-changing.”</p>
              <div className="author">
                <div className="author-info">
                  <strong>Anjali Sharma</strong>
                  <span>Community Recipient</span>
                </div>
              </div>
            </div>

            <div className="trust-badges">
              <div className="trust-item">
                <i className="fas fa-shield-alt"></i>
                <span>Secure Payments</span>
              </div>
              <div className="trust-item">
                <i className="fas fa-history"></i>
                <span>Transparent History</span>
              </div>
              <div className="trust-item">
                <i className="fas fa-certificate"></i>
                <span>Tax Deductible</span>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <section className="donation-form-wrapper glass">
            <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
              <h2 className="section-title">Complete Your Donation</h2>
              
              <div className="input-group">
                <label>Full Name</label>
                <div className="input-with-icon">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="John Doe" required />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Email</label>
                  <div className="input-with-icon">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="input-group">
                  <label>Amount (NRS)</label>
                  <div className="input-with-icon amount-input">
                    <span className="currency">NRS</span>
                    <input 
                      type="number" 
                      value={amount} 
                      onChange={(e) => setAmount(Number(e.target.value))}
                      min="100"
                      step="100"
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="payment-method-section">
                <label className="section-label">Select Payment Method</label>
                <div className="payment-grid-compact">
                  <div 
                    className={`pay-opt ${selectedMethod === 'esewa' ? 'active' : ''}`}
                    onClick={() => setSelectedMethod('esewa')}
                  >
                    <img src={esewaImg} alt="eSewa" />
                  </div>
                  <div 
                    className={`pay-opt ${selectedMethod === 'khalti' ? 'active' : ''}`}
                    onClick={() => setSelectedMethod('khalti')}
                  >
                    <img src={khaltiImg} alt="Khalti" />
                  </div>
                  <div 
                    className={`pay-opt ${selectedMethod === 'ime' ? 'active' : ''}`}
                    onClick={() => setSelectedMethod('ime')}
                  >
                    <img src={imeImg} alt="IME Pay" />
                  </div>
                  <div 
                    className={`pay-opt ${selectedMethod === 'bank' ? 'active' : ''}`}
                    onClick={() => setSelectedMethod('bank')}
                  >
                    <img src={bankImg} alt="Bank" />
                  </div>
                </div>
              </div>

              <div className="method-details-pane">
                <p>Payment will be processed via <strong>{selectedMethod.toUpperCase()}</strong> secure gateway.</p>
              </div>

              <button type="submit" className="donate-submit-btn">
                <span>Confirm Donation</span>
                <i className="fas fa-heart"></i>
              </button>
              
              <p className="privacy-note">By donating, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</p>
            </form>
          </section>
        </div>
      </main>

    </div>
  );
};

export default Donate;
