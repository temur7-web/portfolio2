import React from 'react';
import './About.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaJsSquare, FaNode } from "react-icons/fa";
import { SiReact, SiMongodb, SiPostgresql, SiPostman, SiSwagger } from "react-icons/si";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function About() {
  return (
    <div className='r'>
    <div className="about-container">
      <div className="about-content">
        <img src="7.jpg" alt="Temur" className="profile-img" />
        <div className="about-text">
          <h1>Men haqimda</h1>
          <p className="intro">
            Salom! Menim ismim <span className="highlight">Temur Sotvoldiyev</span>. 17 yoshdaman va men Namangan viloyatidanman. Men veb-dasturchiman va zamonaviy, interaktiv veb-saytlar yaratishga qiziqaman.
          </p>
          <p>
            <strong className="label">Ta'lim:</strong> Hozirda Namangan shahridagi 7-maktabda o'qiyman va o'z-o'zini o'qitish orqali veb-dasturlashni o'rganyapman. <br />
            <strong className="label">Manzil:</strong> Namangan viloyati, O'zbekiston <br />
            <strong className="label">Yoshim:</strong> 17 yosh <br />
            <strong className="label">Texnologiyalar:</strong>
          </p>
          <div className="about-tech-icons">
            <div className="about-tech-icons-container">
              <IoLogoHtml5 title="HTML5" className="about-tech-icon about-html-icon" />
              <FaCss3Alt title="CSS3" className="about-tech-icon about-css-icon" />
              <FaJsSquare title="JavaScript" className="about-tech-icon about-js-icon" />
              <SiReact title="React.js" className="about-tech-icon about-react-icon" />
              <FaNode title="Node.js" className="about-tech-icon about-node-icon" />
              <FaGithub title="GitHub" className="about-tech-icon about-github-icon" />
              <SiMongodb title="MongoDB" className="about-tech-icon about-mongodb-icon" />
              <SiPostgresql title="PostgreSQL" className="about-tech-icon about-postgres-icon" />
              <SiPostman title="Postman" className="about-tech-icon about-postman-icon" />
              <SiSwagger title="Swagger" className="about-tech-icon about-swagger-icon" />
            </div>
          </div>
          <p>
            <strong className="label">Tajriba:</strong> 1 yil <br />
            <strong className="label">Web sayt:</strong> <a href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">www.temurportfolio.com</a>
          </p>
          {/* Modified text */}
          <div className="about-section">
            <h2 className="section-title">Men haqimda</h2>
            <p className="about-text">
              Salom, mening ismim Temur. Men uchun dasturlash — bu shunchaki kasb emas, bu hayotimning ma’nosi. 
              Har bir kod satri orqasida mening orzularim, mehnatim va sabr-bardoshim yashiringan.
            </p>
            <p className="about-text">
              Men <span className="highlight">Full-Stack dasturchi</span> sifatida o‘sishda davom etyapman. 
              Maqsadim — <span className="highlight">Senior darajaga</span> erishish va kelajakda 
              <span className="highlight">Yaponiyadagi yirik IT kompaniyalarda</span> ishlash.
            </p>
            <p className="about-text">
              Bu yo‘l oson emas, lekin men har kuni yangi narsalarni o‘rganaman, o‘z ustimda ishlayman va doim oldinga intilaman. 
              Texnologiyalar olamida o‘zimning izimni qoldirish — bu mening hayotiy maqsadim.
            </p>
            <p className="about-text">
              Yonimda menga har doim kuch, ilhom va motivatsiya beruvchi inson bor — bu <span className="highlight">Firdavz</span>. 
              Biz birga orzularimiz sari intilamiz, va birgalikda katta natijalarga erishamiz.
            </p>
            <p className="about-text">
              Hackathon g‘olibligi, o‘quvdagi yutuqlarim va loyihalarim — bularning barchasi mening bu yo‘lda to‘xtamay harakat qilayotganimdan dalolat.
            </p>
            <p className="about-text final-text">
              Men ishonamanki, harakat hech qachon zoye ketmaydi. Men o‘z maqsadim sari qat’iyat bilan yuraman va bu yo‘lning har bir bosqichidan zavq olaman.
            </p>
          </div>

          <p className="description">
            Men hozirda Namangan shahrida yashayman va dunyodagi eng zamonaviy va foydalanuvchilarga qulay veb-saytlarni yaratishni orzu qilaman.
          </p>
          <p className="additional-info">
            <strong className="label">Qiziqishlarim:</strong> Veb-dizayn, mobil ilovalar yaratish, kitab o'qish va sayohat qilish. <br />
            <strong className="label">Loyihalarim:</strong> 
            <ul>
              <li>"Online Do'kon" - React.js va Node.js yordamida yaratilgan e-commerce platformasi.</li>
              <li>"Portfolio Sayt" - O'zimning shaxsiy portfolio saytim (hozirda ko'ryapsiz!).</li>
            </ul>
          </p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;