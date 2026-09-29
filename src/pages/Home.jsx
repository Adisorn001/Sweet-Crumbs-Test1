import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Home.css';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bestsellers = products.filter(p => p.featured).slice(0, 3);

  const slides = [
    {
      bg: '#D4A574',
      title: 'Welcome to Sweet Crumbs',
      subtitle: 'Where every bite tells a story of passion and tradition',
      color: 'var(--text)'
    },
    {
      bg: '#8B5E3C',
      title: 'Artisan Pastries',
      subtitle: 'Handcrafted daily with the finest ingredients',
      color: '#fff'
    },
    {
      bg: '#C85A7C',
      title: 'Sweet Moments',
      subtitle: "Celebrate life's sweetest moments with us",
      color: '#fff'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="page home fade-in">
      <section className="home__banner">
        <div 
          className="home__slides-track" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="home__slide"
              style={{ backgroundColor: slide.bg, color: slide.color }}
            >
              <div className="home__slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                {index === 0 && (
                  <Link to="/products" className="btn btn-accent">Shop Now</Link>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button className="home__arrow home__arrow--prev" onClick={prevSlide}>‹</button>
        <button className="home__arrow home__arrow--next" onClick={nextSlide}>›</button>
        
        <div className="home__dots">
          {slides.map((_, index) => (
            <div 
              key={index} 
              className={`home__dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="home__features">
        <div className="container">
          <div className="home__features-grid">
            <div className="home__feature-card">
              <div className="home__feature-icon">🌅</div>
              <h3>Fresh Daily</h3>
              <p>อบสดใหม่ทุกเช้าก่อนพระอาทิตย์ขึ้น</p>
            </div>
            <div className="home__feature-card">
              <div className="home__feature-icon">✨</div>
              <h3>Premium Ingredients</h3>
              <p>เฉพาะ ingredient คุณภาพสูงจากซัพพลายเออร์ท้องถิ่น</p>
            </div>
            <div className="home__feature-card">
              <div className="home__feature-icon">❤️</div>
              <h3>Made with Love</h3>
              <p>ทุกชิ้นถูกสร้างขึ้นด้วยความรักและใส่ใจ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home__bestsellers">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Our Bestsellers</h2>
          <div className="home__bestsellers-grid">
            {bestsellers.map(product => (
              <div key={product.id} className="home__bestseller-card">
                <img src={product.image} alt={product.name} className="home__bestseller-image" />
                <div className="home__bestseller-info">
                  <h3>{product.name}</h3>
                  <div className="price">฿{product.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/products" className="btn btn-outline">View All</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
