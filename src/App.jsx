import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Marketplace from './components/Marketplace';
import ItemDetails from './components/ItemDetails';
import PostItem from './components/PostItem';
import MyListings from './components/MyListings';
import Subscription from './components/Subscription';
import './App.css';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  
  return user ? children : <Navigate to="/login" />;
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route 
        path="/login" 
        element={user ? <Navigate to="/" /> : <Login />} 
      />
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Marketplace />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/item/:id" 
        element={
          <PrivateRoute>
            <ItemDetails />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/post" 
        element={
          <PrivateRoute>
            <PostItem />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/my-listings" 
        element={
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/subscription" 
        element={
          <PrivateRoute>
            <Subscription />
          </PrivateRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;



