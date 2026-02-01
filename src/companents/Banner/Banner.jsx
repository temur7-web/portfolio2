import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import { IoLogoHtml5 } from 'react-icons/io5';
import { FaCss3Alt, FaJsSquare, FaNode, FaGithub } from 'react-icons/fa';
import { SiReact, SiMongodb, SiPostgresql, SiPostman, SiSwagger } from 'react-icons/si';

function Banner() {
  return (
    <div className="r">
      <div className="banner-container">
        

        <div className="banner-content-two-columns glass-box">
          <div className="profile-container">
            <img src="/7.jpg" alt="Temur" className="profile-img" />
          </div>

          <div className="text-info">
            <h1>Salom, meni ismim <span>Temur</span></h1>
            <p>
              Men <span>veb-dasturchiman</span> va zamonaviy{' '}
              <span>veb-saytlar</span> yarataman.
            </p>
            <p>
              <strong>Yoshim:</strong> 17 yosh
            </p>
            <p>
              <strong>Ta'lim:</strong> ALGARITIM Full Stack Dasturchi kursi (2024)
            </p>
            <div className="home-tech-icons">
              <div className="home-tech-icons-container">
                <div className="home-tech-icon">
                  <IoLogoHtml5 className="home-html-icon" />
                  <p>HTML5</p>
                </div>
                <div className="home-tech-icon">
                  <FaCss3Alt className="home-css-icon" />
                  <p>CSS3</p>
                </div>
                <div className="home-tech-icon">
                  <FaJsSquare className="home-js-icon" />
                  <p>JavaScript</p>
                </div>
                <div className="home-tech-icon">
                  <SiReact className="home-react-icon" />
                  <p>React</p>
                </div>
                <div className="home-tech-icon">
                  <FaNode className="home-node-icon" />
                  <p>Node.js</p>
                </div>
                <div className="home-tech-icon">
                  <SiMongodb className="home-mongodb-icon" />
                  <p>MongoDB</p>
                </div>
                <div className="home-tech-icon">
                  <FaGithub className="home-github-icon" />
                  <p>Github</p>
                </div>
                <div className="home-tech-icon">
                  <SiPostgresql className="home-postgres-icon" />
                  <p>Postgresql</p>
                </div>
                <div className="home-tech-icon">
                  <SiPostman className="home-postman-icon" />
                  <p>Postman</p>
                </div>
                <div className="home-tech-icon">
                  <SiSwagger className="home-swagger-icon" />
                  <p>Swagger</p>
                </div>
              </div>
            </div>
            <p>
              <strong>Tajriba:</strong> 1 yil
            </p>
            <div className="cta-buttons">
              <Link to="/about" className="btn">
                Men haqimda
              </Link>
              <Link to="/projects" className="btn">
                Loyihalarim
              </Link>
            </div>
          </div>
        </div>

        {/* Loyiha Cardlari */}
        <div className="card-section">
          <div className="card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JS, React</p>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB</p>
          </div>
        
        </div>

        {/* Sertifikatlar bo'limi */}
        <div className="certificate-section">
          <h2>Sertifikatlarim</h2>
          <div className="certificate-cards">
            <div className="certificate-card">
              <img
                src="/nodepng.png"
                alt="Node.js Certificate"
                className="certificate-img"
              />
              <div className="certificate-content">
                <h3>Node.js Sertifikati</h3>
                <div className="certificate-info">
                  <p>
                    <strong>Kurs:</strong> Full Stack Development
                  </p>
                  <p>
                    <strong>Platforma:</strong> Udemy
                  </p>
                  <p>
                    <strong>Sana:</strong> 2024
                  </p>
                </div>
                <div className="certificate-learned">
                  <p>
                    <strong>Nimalarni o‘rgandim:</strong> Node.js va Express.js
                    yordamida REST API’lar yaratish, MongoDB bilan ishlash va real
                    vaqtda backend tizimlarini qurish.
                  </p>
                </div>
              </div>
            </div>

            <div className="certificate-card">
              <img
                src="/png.png"
                alt="React Certificate"
                className="certificate-img"
              />
              <div className="certificate-content">
                <h3>React Sertifikati</h3>
                <div className="certificate-info">
                  <p>
                    <strong>Kurs:</strong> React Basics
                  </p>
                  <p>
                    <strong>Platforma:</strong> Coursera
                  </p>
                  <p>
                    <strong>Sana:</strong> 2024
                  </p>
                </div>
                <div className="certificate-learned">
                  <p>
                    <strong>Nimalarni o‘rgandim:</strong> React komponentlari,
                    state va props bilan ishlash, React Router yordamida
                    navigatsiya qilish va zamonaviy frontend ilovalar yaratish.
                  </p>
                </div>
              </div>
            </div>

            <div className="certificate-card">
              <img
                src="/hacaton.jpg"
                alt="Hackathon Certificate"
                className="certificate-img"
              />
              <div className="certificate-content">
                <h3>Hackathon 1-o‘rin</h3>
                <div className="certificate-info">
                  <p>
                    <strong>Tadbir:</strong> Web Dev Hackathon
                  </p>
                  <p>
                    <strong>Texnologiyalar:</strong> HTML, CSS, JS
                  </p>
                  <p>
                    <strong>Sana:</strong> 2025
                  </p>
                </div>
                <div className="certificate-learned">
                  <p>
                    <strong>Nimalarni o‘rgandim:</strong> Vaqt cheklovlari ichida
                    samarali ishlash, jamoaviy loyiha boshqarish va frontend
                    texnologiyalarini qo‘llash orqali muammolarni hal qilish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

     {/* Qilgan saytlarim bo‘limi */}
<div className="projects-section">
  <h2>Qilgan saytlarim</h2>
  <div className="project-cards">
    <div className="card project-card">
      <img src="/olcha.png" alt="Olcha.uz" className="project-img" />
      <h3>Olcha.uz klon</h3>
      <p>E-commerce dizayni va funksional kart tizimi.</p>
      <a
        href="https://olcha.uz"
        className="card-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ko‘rish
      </a>
    </div>

    <div className="card project-card">
      <img src="/uzum.png" alt="UZM Market" className="project-img" />
      <h3>UZM Market</h3>
      <p>Mahsulotlar katalogi va foydalanuvchi interfeysi.</p>
      <a
        href="https://uzum.uz"
        className="card-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ko‘rish
      </a>
    </div>

    <div className="card project-card">
      <img src="/asaxiy.jpg" alt="Asaxiy" className="project-img" />
      <h3>Asaxiy Klon</h3>
      <p>Sayt dizayni, search filter va responsive layout.</p>
      <a
        href="https://asaxiy.uz"
        className="card-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ko‘rish
      </a>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Banner;