import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { sampleItems } from '../data/sampleData';
import './MyListings.css';

function MyListings() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    // Load user's items
    const savedItems = localStorage.getItem('marketplace_items');
    const items = savedItems ? JSON.parse(savedItems) : sampleItems;
    const userItems = items.filter(item => item.sellerId === user.email);
    setMyItems(userItems);
  }, [user.email]);

  const handleDelete = (itemId) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) {
      return;
    }

    const savedItems = localStorage.getItem('marketplace_items');
    const items = savedItems ? JSON.parse(savedItems) : sampleItems;
    const updatedItems = items.filter(item => item.id !== itemId);
    localStorage.setItem('marketplace_items', JSON.stringify(updatedItems));
    
    setMyItems(myItems.filter(item => item.id !== itemId));
    alert('Listing deleted successfully!');
  };

  return (
    <div className="my-listings">
      <div className="container">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Marketplace
        </button>

        <div className="listings-header">
          <h1>My Listings</h1>
          <button onClick={() => navigate('/post')} className="add-btn">
            + Post New Item
          </button>
        </div>

        {myItems.length === 0 ? (
          <div className="no-listings">
            <p>You haven't posted any items yet.</p>
            <button onClick={() => navigate('/post')} className="post-first-btn">
              Post Your First Item
            </button>
          </div>
        ) : (
          <div className="listings-grid">
            {myItems.map(item => (
              <div key={item.id} className="listing-card">
                <img src={item.images[0]} alt={item.title} />
                <div className="listing-info">
                  <h3>{item.title}</h3>
                  <p className="listing-price">£{item.price}</p>
                  <p className="listing-date">
                    Posted: {new Date(item.postedDate).toLocaleDateString()}
                  </p>
                  <div className="listing-actions">
                    <button 
                      onClick={() => navigate(`/item/${item.id}`)}
                      className="view-btn"
                    >
                      View
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyListings;



