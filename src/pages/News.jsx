import React from 'react';
import './News.css';

const newsLinks = [
  { icon: '🎬', name: 'YouTube', desc: 'Watch amazing baking tutorials and recipe videos', url: 'https://www.youtube.com' },
  { icon: '🔍', name: 'Google', desc: 'Search for any recipe or baking technique', url: 'https://www.google.com' },
  { icon: '🍳', name: 'Tasty', desc: 'Discover trendy recipes and creative cooking hacks', url: 'https://tasty.co' },
  { icon: '👨‍🍳', name: 'King Arthur Baking', desc: 'Professional tips, premium recipes & expert resources', url: 'https://www.kingarthurbaking.com' },
  { icon: '📰', name: 'BBC Good Food', desc: 'Trusted recipes and cooking tips from BBC experts', url: 'https://www.bbcgoodfood.com' }
];

export default function News() {
  return (
    <div className="page page-news fade-in">
      <div className="container">
        <h1 className="section-title">News & Resources</h1>
        <p className="section-subtitle">Stay updated with the baking world</p>
        <div className="news__grid">
          {newsLinks.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="news__card">
              <div className="news__card-icon">{link.icon}</div>
              <h3 className="news__card-name">{link.name}</h3>
              <p className="news__card-desc">{link.desc}</p>
              <span className="news__card-link">Visit →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
