import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscription.css';

const Subscription = () => {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    alert('In a real app, this would redirect to payment processing (Stripe, PayPal, etc.)');
  };

  const handleBackToMarketplace = () => {
    navigate('/marketplace');
  };

  return (
    <div className="subscription-container">
      <div className="subscription-content">
        <div className="subscription-header">
          <h1>🎓 ThriftED Free Listings</h1>
          <p className="subscription-subtitle">Access Free Products & Giveaways</p>
        </div>

        <div className="subscription-card">
          <div className="subscription-icon">
            <span className="free-icon">🆓</span>
          </div>
          
          <h2>Access Free Products</h2>
          <p className="subscription-description">
            To see free products and giveaways that have been listed, upgrade to ThriftED Free Listings
          </p>

          <div className="pricing-section">
            <div className="price-display">
              <span className="currency">£</span>
              <span className="amount">1.99</span>
              <span className="period">/month</span>
            </div>
            <p className="price-note">Cancel anytime • No commitment</p>
          </div>

          <div className="features-list">
            <h3>Free Listings Benefits:</h3>
            <ul>
              <li>🆓 Access to free product listings</li>
              <li>🎁 Browse giveaways and freebies</li>
              <li>📱 Get notified of new free items</li>
              <li>🔍 Advanced search for free products</li>
              <li>💬 Contact sellers of free items</li>
              <li>📊 Track your free item requests</li>
            </ul>
          </div>

          <div className="subscription-actions">
            <button 
              className="upgrade-btn"
              onClick={handleUpgrade}
            >
              Access Free Listings - £1.99/month
            </button>
            
            <button 
              className="back-btn"
              onClick={handleBackToMarketplace}
            >
              Back to Free Listings
            </button>
          </div>

          <div className="subscription-footer">
            <p className="disclaimer">
              * This is a demo subscription page. In a real application, this would integrate with payment processors like Stripe or PayPal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
