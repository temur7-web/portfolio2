import React from 'react';
import './About.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaJsSquare, FaNode, FaGithub, FaLinkedin, FaDownload, FaCode, FaUserGraduate, FaLightbulb, FaRocket } from "react-icons/fa";
import { SiReact, SiMongodb, SiPostgresql, SiPostman, SiSwagger } from "react-icons/si";

function About() {
  return (
    <div className='about-page'>
     {/* Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="background-video"
      >
        {/* Fayl nomi to'g'riligini tekshiring (public papkasida bo'lishi kerak) */}
        <source src="blue-abstract-hexagon.1920x1080.mp4" type="video/mp4" />
        Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
      </video>
      <div className="about-container">
        
        {/* 1. Header: Profile and Intro */}
        <div className="bento-item main-profile">
          <div className="profile-wrapper">
            <img src="ttem.jpg" alt="Temur" className="profile-img" />
            <div className="profile-info">
              <h1>Temur Sotvoldiyev</h1>
              <p className="subtitle">Full-Stack Developer | 17 Years Old</p>
              <div className="social-links">
                <a href="#"><FaGithub /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaDownload /></a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Personal Philosophy and Bio */}
        <div className="bento-item bio-card">
          <h3><FaCode className="icon" /> Shaxsiy Falsafam</h3>
          <p>
            Dasturlash men uchun shunchaki kod yozish emas — bu **hayotimning mazmuni**. 
            Har bir loyiha ortida katta mehnat va orzular yashiringan. Men hozirda Namangan shahrida yashayman 
            va global miqyosdagi muammolarga raqamli yechimlar yaratishni maqsad qilganman.
          </p>
          <p className="mentor-note">
            Mening rivojlanishimda hamfikrim va do'stim <b>Firdavz</b>ning o'rni beqiyos. 
            Biz birgalikda eng zamonaviy texnologiyalarni o'rganib, cho'qqilar sari intilyapmiz.
          </p>
        </div>

        {/* 3. Tech Skills (Tech Stack) */}
        <div className="bento-item tech-card">
          <h3><FaLightbulb className="icon" /> Texnologiyalar</h3>
          <div className="tech-grid">
            <div className="tech-tag"><IoLogoHtml5 /> HTML5</div>
            <div className="tech-tag"><FaCss3Alt /> CSS3</div>
            <div className="tech-tag"><FaJsSquare /> JavaScript</div>
            <div className="tech-tag"><SiReact /> React.js</div>
            <div className="tech-tag"><FaNode /> Node.js</div>
            <div className="tech-tag"><SiMongodb /> MongoDB</div>
            <div className="tech-tag"><SiPostgresql /> PostgreSQL</div>
            <div className="tech-tag"><SiPostman /> Postman</div>
            <div className="tech-tag"><SiSwagger /> Swagger</div>
          </div>
        </div>

        {/* 4. Education & Experience */}
        <div className="bento-item edu-card">
          <h3><FaUserGraduate className="icon" /> Ta'lim & Tajriba</h3>
          <div className="experience-list">
            <div className="exp-item">
              <strong>Maktab:</strong> Namangan shahri, 7-maktab o'quvchisi.
            </div>
            <div className="exp-item">
              <strong>O'z ustida ishlash:</strong> 1 yil+ mustaqil (Self-taught) o'rganish.
            </div>
            <div className="exp-item">
              <strong>Yutuqlar:</strong> Hackathon g'olibi va bir nechta real loyihalar muallifi.
            </div>
          </div>
        </div>

        {/* 5. Future Goals */}
        <div className="bento-item goals-card">
          <h3><FaRocket className="icon" /> Kelajak Rejalarim</h3>
          <ul>
            <li>Senior Full-Stack darajasiga chiqish.</li>
            <li>Yaponiyadagi nufuzli IT kompaniyalarda tajriba oshirish.</li>
            <li>O'zbekiston IT ekotizimiga ulkan hissa qo'shish.</li>
          </ul>
        </div>

      </div>
      
    </div>
  );
}

export default About;