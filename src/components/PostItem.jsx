import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { sampleItems, categories } from '../data/sampleData';
import './PostItem.css';

function PostItem() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: 'Books',
    condition: 'Good',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.price) {
      alert('Please fill in all required fields');
      return;
    }

    // Create new item
    const newItem = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      condition: formData.condition,
      images: [formData.imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'],
      sellerId: user.email,
      sellerName: user.name,
      postedDate: new Date().toISOString(),
      status: 'available'
    };

    // Save to localStorage
    const savedItems = localStorage.getItem('marketplace_items');
    const items = savedItems ? JSON.parse(savedItems) : sampleItems;
    items.unshift(newItem);
    localStorage.setItem('marketplace_items', JSON.stringify(items));

    alert('Item posted successfully!');
    navigate('/');
  };

  return (
    <div className="post-item">
      <div className="container">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Marketplace
        </button>

        <div className="post-form-container">
          <h1>Post a New Item</h1>
          <p className="subtitle">Share what you're selling with your university community</p>

          <form onSubmit={handleSubmit} className="post-form">
            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Calculus Textbook - 8th Edition"
                required
              />
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your item in detail..."
                rows="5"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Price (£) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="form-group">
                <label>Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {categories.filter(c => c !== 'All Categories').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Condition *</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                >
                  <option value="Like New">Like New</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Used">Used</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Image URL (optional)</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
              <small>Leave blank to use a default image</small>
            </div>

            <button type="submit" className="submit-btn">
              Post Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostItem;



