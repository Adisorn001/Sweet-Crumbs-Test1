import React, { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

export default function Profile() {
  const { isLoggedIn, user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [toastMessage, setToastMessage] = useState('');

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({ displayName, bio, phone });
    setToastMessage('Profile updated successfully!');
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formattedDate = user?.joinDate 
    ? new Date(user.joinDate).toLocaleDateString() 
    : 'Unknown';

  const avatarLetter = (user.displayName || user.username || '?').charAt(0).toUpperCase();

  return (
    <div className="page page-profile fade-in">
      <div className="container">
        <div className="profile__card">
          <div className="profile__header">
            <div className="profile__avatar">
              {avatarLetter}
            </div>
            <h2 className="profile__name">{user.displayName || user.username}</h2>
            <p className="profile__since">Member since {formattedDate}</p>
          </div>
          
          <div className="profile__body">
            <form onSubmit={handleSave}>
              <div className="profile__field">
                <label>Display Name</label>
                <input 
                  type="text" 
                  value={displayName} 
                  onChange={e => setDisplayName(e.target.value)} 
                />
              </div>
              <div className="profile__field">
                <label>Bio</label>
                <textarea 
                  value={bio} 
                  onChange={e => setBio(e.target.value)} 
                  rows="3"
                ></textarea>
              </div>
              <div className="profile__field">
                <label>Phone</label>
                <input 
                  type="text" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)} 
                />
              </div>
              
              <div className="profile__actions">
                <button type="submit" className="btn btn-accent">Save Changes</button>
                <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </div>
            </form>

            <div className="profile__links">
              <Link to="/orders" className="profile__link">
                <span>📋</span> Order History
              </Link>
              <Link to="/products" className="profile__link">
                <span>🛒</span> Browse Products
              </Link>
            </div>
          </div>
        </div>

        {toastMessage && (
          <div className="toast toast--success fade-in" style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000}}>
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
}