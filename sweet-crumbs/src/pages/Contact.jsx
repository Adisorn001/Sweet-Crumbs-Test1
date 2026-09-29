import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page page-contact fade-in">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">We'd love to hear from you</p>
        
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon">📍</span>
              <div className="contact__info-text">
                <h4>Address</h4>
                <p>123 Angthong 14000</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📞</span>
              <div className="contact__info-text">
                <h4>Phone</h4>
                <p>+66 093 221 0367</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">✉️</span>
              <div className="contact__info-text">
                <h4>Email</h4>
                <p>adisorndankeawwork@gmail.com</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">💬</span>
              <div className="contact__info-text">
                <h4>Line</h4>
                <p>0932210367</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📘</span>
              <div className="contact__info-text">
                <h4>Facebook</h4>
                <a href="https://www.facebook.com/xdisr.dan.k.w/?locale=th_TH" target="_blank" rel="noopener noreferrer">Adisorn Dankeaw</a>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📸</span>
              <div className="contact__info-text">
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/adisorn_dankeaw/" target="_blank" rel="noopener noreferrer">@AdisornDankeaw</a>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">🕐</span>
              <div className="contact__info-text">
                <h4>Hours</h4>
                <p>Mon–Sat 7:00 AM – 8:00 PM, Sun 8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className="contact__map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d100.56!3d13.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzI0LjAiTiAxMDDCsDMzJzM2LjAiRQ!5e0!3m2!1sen!2sth!4v1" 
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        <div className="contact__form-section">
          <div className="contact__form-overlay">
            <span className="contact__coming-soon">Coming Soon</span>
          </div>
          <h3>Send Us a Message</h3>
          <p>Our contact form is coming soon! In the meantime, please reach out via phone or social media.</p>
          <form className="contact__form">
            <input type="text" placeholder="Name" disabled />
            <input type="email" placeholder="Email" disabled />
            <textarea placeholder="Message" rows="5" disabled></textarea>
            <button type="button" className="btn" disabled>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}