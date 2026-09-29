import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const { isLoggedIn, login, register } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  if (isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const result = activeTab === 'login' ? login(username) : register(username);
    if (result.success) {
      navigate('/profile');
    } else {
      setError(result.error || 'An error occurred');
    }
  };

  return (
    <div className="page page-login fade-in">
      <div className="container">
        <div className="login">
          <div className="login__card">
            <div className="login__header">
              <div className="login__header-icon">🥐</div>
              <h2>Sweet Crumbs</h2>
            </div>
            <div className="login__tabs">
              <button 
                className={`login__tab ${activeTab === 'login' ? 'login__tab--active' : ''}`}
                onClick={() => { setActiveTab('login'); setError(''); setUsername(''); }}
              >
                Login
              </button>
              <button 
                className={`login__tab ${activeTab === 'register' ? 'login__tab--active' : ''}`}
                onClick={() => { setActiveTab('register'); setError(''); setUsername(''); }}
              >
                Register
              </button>
            </div>
            <div className="login__body">
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  className="login__input" 
                  placeholder="Username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {error && <div className="login__error">{error}</div>}
                <button type="submit" className="btn login__submit">
                  {activeTab === 'login' ? 'Login' : 'Create Account'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
