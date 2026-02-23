import React from 'react';
import './Futer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFolderOpen, FaUser, FaEnvelopeOpen, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Futer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-elite">
      <div className="footer-gradient-line"></div>
      <div className="footer-main-grid">
        
        {/* Shaxsiy Brending */}
        <div className="footer-brand">
          <div className="brand-header">
            <img src="ttem.jpg" alt="Temur" className="mini-avatar" />
            <div>
              <h4>Temur Sotvoldiyev</h4>
              <p className="footer-subtitle">Full-Stack Developer</p>
            </div>
          </div>
          <p className="brand-text">
            Sifatli kod va zamonaviy dizayn orqali raqamli kelajakni quramiz.
          </p>
          <div className="footer-contact-info">
             <p><FaPhone className="f-icon" /> +998 77 506 63 43</p>
             <p><FaEnvelope className="f-icon" /> qowinov@gmail.com</p>
             <p><FaMapMarkerAlt className="f-icon" /> Namangan, Uzbekistan</p>
          </div>
        </div>

        {/* Tezkor Havolalar */}
        <div className="footer-nav">
          <h5>Menu</h5>
          <ul>
            <li><Link to="/"><FaUser className="l-icon" /> Asosiy</Link></li>
            <li><Link to="/about"><FaUser className="l-icon" /> Men haqimda</Link></li>
            <li><a href="/projects"><FaFolderOpen className="l-icon" /> Portfolio</a></li>
            <li><a href="/contact"><FaEnvelopeOpen className="l-icon" /> Bog'lanish</a></li>
          </ul>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div className="footer-socials">
          <h5>Social Networks</h5>
          <div className="social-grid">
            <a href="https://github.com/temur" className="s-link"><FaGithub /></a>
            <a href="https://linkedin.com" className="s-link"><FaLinkedin /></a>
            <a href="https://instagram.com/qowinov7" className="s-link"><FaInstagram /></a>
            <a href="https://twitter.com" className="s-link"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>© 2026 Temur. All rights reserved.</p>
        <button onClick={scrollToTop} className="scroll-btn">
          <FaArrowUp /> Top
        </button>
      </div>
    </footer>
  );
}

export default Futer;