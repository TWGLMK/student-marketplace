import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Demo university email domains
const ALLOWED_DOMAINS = ['rgu.ac.uk'];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('unimarket_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Demo login validation
    if (!email || !password) {
      throw new Error('Please provide email and password');
    }

    // Check if email is from allowed university domain
    const emailDomain = email.split('@')[1];
    if (!ALLOWED_DOMAINS.includes(emailDomain)) {
      throw new Error('Please use your university email address');
    }

    // Demo password check (in production, this would be server-side)
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    // Create user object
    const userName = email.split('@')[0].split('.').map(
      name => name.charAt(0).toUpperCase() + name.slice(1)
    ).join(' ');

    const newUser = {
      email,
      name: userName,
      university: emailDomain,
      joinedDate: new Date().toISOString()
    };

    // Save to localStorage (demo persistence)
    localStorage.setItem('unimarket_user', JSON.stringify(newUser));
    setUser(newUser);

    return newUser;
  };

  const register = (email, password, confirmPassword) => {
    // Demo registration validation
    if (!email || !password || !confirmPassword) {
      throw new Error('Please fill in all fields');
    }

    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    // Use same login logic for demo
    return login(email, password);
  };

  const logout = () => {
    localStorage.removeItem('unimarket_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};



