import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/"><img src="temur.png" alt="Logo" /></Link>
        </div>

        {/* Desktop Navigatsiya - Katta ekranda ko'rinadi */}
        <nav className="nav-desktop">
          <ul className="nav-links">
            <li><Link to="/about">Men haqimda</Link></li>
            <li><Link to="/skills">Qobiliyatlarim</Link></li>
            <li><Link to="/projects">Loyihalar</Link></li>
            <li><Link to="/contact">Bog‘lanish</Link></li>
          </ul>
        </nav>

        {/* Gamburger Icon - Faqat mobil (media) payti chiqadi */}
        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Mobil Dropdown Menyu - Faqat kichik ekranda va bosilganda chiqadi */}
        <div className={`mobile-dropdown ${isOpen ? 'active' : ''}`}>
          <ul>
            <li onClick={() => setIsOpen(false)}><Link to="/about"><span></span> Men haqimda</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/skills"><span></span> Qobiliyatlarim</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/projects"><span></span> Loyihalar</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/contact"><span></span> Bog‘lanish</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;