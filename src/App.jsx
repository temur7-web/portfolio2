import { Routes, Route } from 'react-router-dom';
import Header from './companents/Header/Header';
import SkyBar from './companents/SkyBar/SkyBar';
import Banner from './companents/Banner/Banner';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Bio from './pages/Bio/Bio';
import Futer from './companents/Futer/Futer';
import './App.css'; // Universal stillar uchun

function App() {
  return (
    <>
     <div className="app-main-container">
      {/* 1. Video har doim shu yerda bo'lsin */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="background-video"
      >
        <source src="/blue-abstract-hexagon.1920x1080.mp4" type="video/mp4" />
      </video>
      
      {/* 2. Overlay alohida divda */}
      <div className="universal-overlay"></div>

      {/* 3. Kontent qismi */}
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
    </>
  );
}

export default App;