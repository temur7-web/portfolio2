import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Hamma router funksiyalari bitta joyda

// Komponentlar
import Header from './companents/Header/Header';
import SkyBar from './companents/SkyBar/SkyBar';
import Banner from './companents/Banner/Banner';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Bio from './pages/Bio/Bio';
import Futer from './companents/Futer/Futer';

// Stilla
import './App.css'; 

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sahifa o'zgarganda eng tepaga chiqish (Beton usul)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Sekin emas, srazu tepaga chiqadi
    });
    
    // Divlar ichida scroll qolib ketgan bo'lsa tozalash
    const scrollableDivs = document.querySelectorAll('.content-layer, .app-main-container, .about-page, .skills-page-wrapper');
    scrollableDivs.forEach(div => {
      div.scrollTop = 0;
    });
  }, [pathname]); 

  return (
    <div className="app-main-container">
      {/* 1. Video Fon */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="background-video"
      >
        <source src="/blue-abstract-hexagon.1920x1080.mp4" type="video/mp4" />
      </video>
      
      {/* 2. Overlay */}
      <div className="universal-overlay"></div>

      {/* 3. Kontent */}
      <div className="content-layer">
        <Header />
        <SkyBar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
        <Futer />
      </div>
    </div>
  );
}

export default App;