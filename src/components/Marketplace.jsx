import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { sampleItems, categories } from '../data/sampleData';
import './Marketplace.css';

function Marketplace() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear localStorage to force reload of updated sample data
    localStorage.removeItem('marketplace_items');
    
    // Load items from localStorage or use sample data
    const savedItems = localStorage.getItem('marketplace_items');
    const loadedItems = savedItems ? JSON.parse(savedItems) : sampleItems;
    setItems(loadedItems);
    setFilteredItems(loadedItems);
  }, []);

  useEffect(() => {
    // Filter items based on category and search
    let filtered = items;

    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [selectedCategory, searchQuery, items]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsFilterMenuOpen(false);
  };

  return (
    <div className="marketplace">
      <nav className="navbar">
        <div className="nav-content">
          <h1>🎓 ThriftED</h1>
          <div className="nav-right">
            <span className="user-name">Hi, {user.name}!</span>
            <button onClick={() => navigate('/subscription')} className="nav-btn premium">
              🆓 Free Listings
            </button>
            <button onClick={() => navigate('/my-listings')} className="nav-btn">
              My Listings
            </button>
            <button onClick={() => navigate('/post')} className="nav-btn primary">
              + Post Item
            </button>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="marketplace-content">
        <div className="search-section">
          <input
            type="text"
            placeholder="🔍 Search for items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-section">
          <div className="filter-header">
            <button 
              className="hamburger-menu-btn"
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
            <span className="selected-category">{selectedCategory}</span>
          </div>
          
          {isFilterMenuOpen && (
            <div className="filter-dropdown">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="items-grid">
          {filteredItems.length === 0 ? (
            <div className="no-items">
              <p>No items found. Try a different search or category!</p>
            </div>
          ) : (
            filteredItems.map(item => (
              <div
                key={item.id}
                className="item-card"
                onClick={() => navigate(`/item/${item.id}`)}
              >
                <div className="item-image">
                  <img src={item.images[0]} alt={item.title} />
                  <span className="item-condition">{item.condition}</span>
                </div>
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-footer">
                    <span className="item-price">£{item.price}</span>
                    <span className="item-seller">by {item.sellerName}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Marketplace;



