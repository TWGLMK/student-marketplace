import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { sampleItems } from '../data/sampleData';
import './ItemDetails.css';

function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [item, setItem] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load item from localStorage or sample data
    const savedItems = localStorage.getItem('marketplace_items');
    const items = savedItems ? JSON.parse(savedItems) : sampleItems;
    const foundItem = items.find(i => i.id === id);
    setItem(foundItem);
  }, [id]);

  const handleContact = () => {
    setMessage(`Hi! I'm interested in your ${item.title}. Is it still available?`);
  };

  const sendMessage = () => {
    if (!message.trim()) {
      alert('Please enter a message');
      return;
    }
    alert(`Message sent to ${item.sellerName}!\n\nIn a real app, this would send an email or in-app message.`);
    setMessage('');
  };

  if (!item) {
    return (
      <div className="item-details">
        <div className="container">
          <p>Item not found</p>
          <button onClick={() => navigate('/')} className="back-btn">
            ← Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const isOwnListing = item.sellerId === user.email;

  return (
    <div className="item-details">
      <div className="container">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Marketplace
        </button>

        <div className="details-grid">
          <div className="details-left">
            <img src={item.images[0]} alt={item.title} className="details-image" />
          </div>

          <div className="details-right">
            <div className="details-header">
              <span className="details-category">{item.category}</span>
              <span className="details-condition">{item.condition}</span>
            </div>

            <h1 className="details-title">{item.title}</h1>
            <p className="details-price">${item.price}</p>

            <div className="details-description">
              <h3>Description</h3>
              <p>{item.description}</p>
            </div>

            <div className="seller-info">
              <h3>Seller Information</h3>
              <p><strong>Name:</strong> {item.sellerName}</p>
              <p><strong>Email:</strong> {item.sellerId}</p>
              <p><strong>Posted:</strong> {new Date(item.postedDate).toLocaleDateString()}</p>
            </div>

            {!isOwnListing && (
              <div className="contact-section">
                <h3>Contact Seller</h3>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows="4"
                />
                <button onClick={sendMessage} className="send-btn">
                  Send Message
                </button>
                {!message && (
                  <button onClick={handleContact} className="quick-msg-btn">
                    Quick Message: "Is this still available?"
                  </button>
                )}
              </div>
            )}

            {isOwnListing && (
              <div className="own-listing-note">
                <p>This is your listing</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;



