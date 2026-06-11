import React from 'react';
import './About.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaJsSquare, FaNode, FaGithub, FaLinkedin, FaDownload, FaCode, FaUserGraduate, FaLightbulb, FaRocket } from "react-icons/fa";
import { SiReact, SiMongodb, SiPostgresql, SiPostman, SiSwagger } from "react-icons/si";

function About() {
  return (
    <div className='about-page'>
      {/* Orqa fon uchun Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="background-video"
      >
        <source src="blue-abstract-hexagon.1920x1080.mp4" type="video/mp4" />
        Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
      </video>

      {/* Rangli Neon nurlar (Vizual effekt uchun) */}
      <div className="blur-overlay animate-pulse-slow"></div>

      <div className="about-container">
        
        {/* 1. Asosiy Profil Bloqi */}
        <div className="bento-item main-profile fade-in-up delay-1">
          <div className="profile-wrapper">
            <div className="img-glow-wrapper">
              <img src="ttem.jpg" alt="Temur" className="profile-img" />
            </div>
            <div className="profile-info">
              <h1>Temur Sotvoldiyev</h1>
              <p className="subtitle">Full-Stack Developer | 17 Years Old</p>
              <p className="location-text">Namangan, O'zbekiston</p>
              <div className="social-links">
                <a href="#" title="GitHub"><FaGithub /></a>
                <a href="#" title="LinkedIn"><FaLinkedin /></a>
                <a href="#" title="Download CV" className="cv-btn"><FaDownload /> <span>CV Yuklash</span></a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Shaxsiy Falsafa va Bio */}
        <div className="bento-item bio-card fade-in-up delay-2">
          <h3><FaCode className="icon tech-icon-color" /> Shaxsiy Falsafam & Kreativlik</h3>
          <p>
            Dasturlash men uchun shunchaki qatorlardan iborat kod yozish emas — bu **hayotimning ajralmas qismi va raqamli san'at**. 
            Har bir loyihada foydalanuvchiga eng qulay, tez va xavfsiz interfeysni taqdim etishni maqsad qilganman. 
          </p>
          <p>
            Hozirda Full-Stack yo'nalishida zamonaviy va yuklamalarga chidamli (scalable) veb-ilovalarni noldan arxitekturagacha qurish bilan shug'ullanaman.
          </p>
          <div className="mentor-box">
            <p className="mentor-note">
              Mening professional dasturchi bo'lib yetishishimda hamfikrim, hamkorim va yaqin do'stim <b>Firdavz</b>ning o'rni beqiyos. 
              Biz birgalikda eng so'nggi texnologik tendensiyalarni tahlil qilib, murakkab muammolarga optimal yechimlar topamiz.
            </p>
          </div>
        </div>

        {/* 3. Texnologiyalar (Tech Stack) */}
        <div className="bento-item tech-card fade-in-up delay-3">
          <h3><FaLightbulb className="icon tech-icon-color" /> Texnologik Stack</h3>
          <p className="section-desc">Loyiha talablaridan kelib chiqib, eng samarali vositalardan foydalanaman:</p>
          <div className="tech-grid">
            <div className="tech-tag html-tag"><IoLogoHtml5 /> HTML5</div>
            <div className="tech-tag css-tag"><FaCss3Alt /> CSS3</div>
            <div className="tech-tag js-tag"><FaJsSquare /> JavaScript</div>
            <div className="tech-tag react-tag"><SiReact /> React.js</div>
            <div className="tech-tag node-tag"><FaNode /> Node.js</div>
            <div className="tech-tag mongo-tag"><SiMongodb /> MongoDB</div>
            <div className="tech-tag postgres-tag"><SiPostgresql /> PostgreSQL</div>
            <div className="tech-tag postman-tag"><SiPostman /> Postman</div>
            <div className="tech-tag swagger-tag"><SiSwagger /> Swagger</div>
          </div>
        </div>

        {/* 4. Ta'lim & Tajriba */}
        <div className="bento-item edu-card fade-in-up delay-4">
          <h3><FaUserGraduate className="icon tech-icon-color" /> Ta'lim & Tajriba tarixi</h3>
          <div className="experience-list">
            <div className="exp-item">
              <div className="exp-dot"></div>
              <div className="exp-content">
                <strong>Akademik Ta'lim:</strong>
                <p>Namangan shahridagi 7-sonli umumta'lim maktabi o'quvchisi. Aniq fanlar va ingliz tiliga ixtisoslashgan tayyorgarlik.</p>
              </div>
            </div>
            <div className="exp-item">
              <div className="exp-dot"></div>
              <div className="exp-content">
                <strong>Mustaqil Ta'lim (Self-Taught):</strong>
                <p>1 yildan ortiq chuqurlashtirilgan amaliy tajriba. Global onlayn platformalar, dokumentatsiyalar va open-source loyihalar ustida ishlash ko'nikmasi.</p>
              </div>
            </div>
            <div className="exp-item">
              <div className="exp-dot"></div>
              <div className="exp-content">
                <strong>Yutuqlar & Loyihalar:</strong>
                <p>Respublika va mahalliy Hackathonlar ishtirokchisi hamda g'olibi. Bugungi kunga qadar 30 dan ortiq muvaffaqiyatli yakunlangan veb-saytlar va Telegram platformasidagi tijoriy botlar/do'konlar muallifi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Kelajak Rejalari */}
        <div className="bento-item goals-card fade-in-up delay-5">
          <h3><FaRocket className="icon tech-icon-color" /> Kelajakdagi Strategik Rejalar</h3>
          <p className="section-desc">Mening global maqsadlarim va doimiy o'sish strategiyam:</p>
          <ul className="goals-list">
            <li>
              <div className="goal-icon">🎯</div>
              <span><b>Senior Full-Stack</b> darajasiga erishish va yirik microservice arxitekturalarini loyihalash.</span>
            </li>
            <li>
              <div className="goal-icon">🇯🇵</div>
              <span>Xalqaro tajriba almashish maqsadida Yaponiya IT ekotizimida yoki nufuzli global kompaniyalarda muhandis bo'lib ishlash.</span>
            </li>
            <li>
              <div className="goal-icon">🇺🇿</div>
              <span>O'zbekistonda yosh dasturchilarni qo'llab-quvvatlovchi va raqamlashtirishni yangi bosqichga olib chiquvchi startaplar yaratish.</span>
            </li>
            <li>
              <div className="goal-icon">📚</div>
              <span>Akademik bilimni mustahkamlash uchun Inha yoki xalqaro nufuzli universitetlarda oliy ma'lumot olish.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;