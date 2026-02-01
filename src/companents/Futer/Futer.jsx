import React from 'react';
import './Futer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFolderOpen, FaUser, FaEnvelopeOpen, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Futer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        {/* Shaxsiy ma'lumotlar */}
        <div className="footer-info">
          <img src="7.jpg" alt="Temur" className="profile-im" />
          <h4>Temur Sotvoldiyev</h4>
          <p className="title">Front-end Developer</p>
          <p><FaPhone className="info-icon" /> <strong>Phone:</strong> +998 77 506 63 43 </p>
          <p><FaEnvelope className="info-icon" /> <strong>Email:</strong> <a href="mailto:temur@example.com">qowinov@gmail.com</a></p>
          <p><FaMapMarkerAlt className="info-icon" /> <strong>Location:</strong>Uzbekistan, Namangan </p>
        </div>
        {/* Ijtimoiy tarmoqlar */}                                       
        <div className="footer-links">                                                                                                                                                                                                                                                                          
          <h5>Follow Me</h5>
          <a href="https://github.com/temur" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/temur" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/qowinov7" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" /> Instagram
          </a>
          <a href="https://twitter.com/temur" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" /> Twitter
          </a>
        </div>

        {/* Qo'shimcha ma'lumotlar */}
        <div className="footer-extra">
          <h5>Quick Links</h5>
          <a href="/projects"><FaFolderOpen className="link-icon" /> Portfolio</a>
          <Link to="/about"><FaUser className="link-icon" /> About Me</Link>
          <a href="/contact"><FaEnvelopeOpen className="link-icon" /> Contact</a>
        </div>
      </div>

      {/* Copyright and Back to Top */}
      <div className="footer-copy">
        <p>© 2025 Temur. Barcha huquqlar himoyalangan.</p>
        <a href="#top" className="back-to-top">
          <FaArrowUp /> Back to Top
        </a>
      </div>
    </div>
  );
}

export default Futer;