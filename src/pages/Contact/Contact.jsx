import React, { useState } from 'react';
import './Contact.css';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneVolume, FaInstagram, FaLinkedin, FaTelegramPlane, FaFacebook } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageText = `Ism: ${name}\nEmail: ${email}\nMavzu: ${subject}\nXabar: ${message}`;
    const telegramLink = `https://t.me/qowinov7?text=${encodeURIComponent(messageText)}`;
    window.open(telegramLink, '_blank');
  };

  return (
    <div className="contact-section-wrapper">
      <div className="contact-glow-overlay"></div>
      <div className="contact-main-container">
        <h2 className="contact-title">Muloqot Nuqtasi</h2>
        <p className="contact-subtitle">
          G'oyalaringizni haqiqatga aylantirish vaqti keldi. Men bilan bog'laning!
        </p>

        <div className="contact-grid-layout">
          {/* Chap taraf: Ma'lumotlar */}
          <div className="info-glass-card">
            <h3>Aloqa Ma'lumotlari</h3>
            <p>Siz bilan hamkorlik qilishdan doim mamnunman.</p>
            
            <div className="detail-list">
              <div className="detail-item">
                <span className="detail-icon"><MdOutlineAlternateEmail/></span>
                <div>
                  <strong>Email</strong>
                  <span>temurqowinov@gmail.com</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon"><FaPhoneVolume /></span>
                <div>
                  <strong>Telefon</strong>
                  <span>+998 77 506 63 43</span>
                </div>
              </div>
            </div>

            <div className="social-neo-links">
              <a href="https://t.me/qowinov7" target="_blank" rel="noreferrer"><FaTelegramPlane /></a>
              <a href="https://www.instagram.com/qowinov7" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="#" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="#" target="_blank" rel="noreferrer"><FaFacebook /></a>
            </div>
          </div>

          {/* O'ng taraf: Forma */}
          <div className="form-glass-card">
            <form onSubmit={handleSubmit} className="neo-form">
              <div className="input-group">
                <input type="text" placeholder="Ismingiz" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Emailingiz" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Mavzu" value={subject} onChange={(e) => setSubject(e.target.value)} required />
              </div>
              <div className="input-group">
                <textarea placeholder="Xabaringizni shu yerda qoldiring..." value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>
              <button type="submit" className="neo-submit-btn">
                Xabarni Yuborish <FaTelegramPlane style={{marginLeft: '10px'}}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;