import React from 'react';
import './Skills.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaJsSquare, FaNode, FaGithub } from "react-icons/fa";
import { SiReact, SiMongodb, SiPostgresql, SiPostman, SiSwagger } from "react-icons/si";

function Skills() {
  return (
    <div className='skills-page-wrapper'>
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

      {/* Video ustidagi qorong'u va neonli qatlam */}
      <div className="skills-overlay animate-pulse-slow"></div>

      {/* Asosiy Glass Container */}
      <div className="skills-container fade-in-up">
        
        <h2 className="section-title">Ko‘nikmalar</h2>

        {/* --- TEXNIK KO'NIKMALAR --- */}
        <div className="skills-section">
          <h3 className="sub-title">Texnik ko‘nikmalar</h3>
          <div className="tech-skills-grid">
            
            <div className="skill-item fade-in-up delay-1">
              <div className="skill-info">
                <IoLogoHtml5 className="skill-icon html" />
                <span>HTML5</span>
              </div>
              <div className="progress-bar">
                <div className="progress html-progress" style={{ width: '95%' }}>
                  <span className="progress-label">95%</span>
                </div>
              </div>
            </div>

            <div className="skill-item fade-in-up delay-1">
              <div className="skill-info">
                <FaCss3Alt className="skill-icon css" />
                <span>CSS3</span>
              </div>
              <div className="progress-bar">
                <div className="progress css-progress" style={{ width: '90%' }}>
                  <span className="progress-label">90%</span>
                </div>
              </div>
            </div>

            <div className="skill-item fade-in-up delay-2">
              <div className="skill-info">
                <FaJsSquare className="skill-icon javascript" />
                <span>JavaScript</span>
              </div>
              <div className="progress-bar">
                <div className="progress js-progress" style={{ width: '85%' }}>
                  <span className="progress-label">85%</span>
                </div>
              </div>
            </div>

            <div className="skill-item fade-in-up delay-2">
              <div className="skill-info">
                <SiReact className="skill-icon react" />
                <span>React.js</span>
              </div>
              <div className="progress-bar">
                <div className="progress react-progress" style={{ width: '80%' }}>
                  <span className="progress-label">80%</span>
                </div>
              </div>
            </div>

            <div className="skill-item fade-in-up delay-3">
              <div className="skill-info">
                <FaNode className="skill-icon node" />
                <span>Node.js</span>
              </div>
              <div className="progress-bar">
                <div className="progress node-progress" style={{ width: '75%' }}>
                  <span className="progress-label">75%</span>
                </div>
              </div>
            </div>

            <div className="skill-item fade-in-up delay-3">
              <div className="skill-info">
                <SiMongodb className="skill-icon mongodb" />
                <span>MongoDB</span>
              </div>
              <div className="progress-bar">
                <div className="progress mongo-progress" style={{ width: '70%' }}>
                  <span className="progress-label">70%</span>
                </div>
              </div>
            </div>

            <div className="skill-item fade-in-up delay-4">
              <div className="skill-info">
                <SiPostgresql className="skill-icon postgresql" />
                <span>PostgreSQL</span>
              </div>
              <div className="progress-bar">
                <div className="progress postgres-progress" style={{ width: '85%' }}>
                  <span className="progress-label">85%</span>
                </div>
              </div>
            </div>

            <div className="skill-item fade-in-up delay-4">
              <div className="skill-info">
                <FaGithub className="skill-icon github" />
                <span>GitHub</span>
              </div>
              <div className="progress-bar">
                <div className="progress github-progress" style={{ width: '85%' }}>
                  <span className="progress-label">85%</span>
                </div>
              </div>
            </div>

            <div className="skill-item fade-in-up delay-5">
              <div className="skill-info">
                <SiPostman className="skill-icon postman" />
                <span>Postman</span>
              </div>
              <div className="progress-bar">
                <div className="progress postman-progress" style={{ width: '80%' }}>
                  <span className="progress-label">80%</span>
                </div>
              </div>
            </div>

            <div className="skill-item fade-in-up delay-5">
              <div className="skill-info">
                <SiSwagger className="skill-icon swagger" />
                <span>Swagger</span>
              </div>
              <div className="progress-bar">
                <div className="progress swagger-progress" style={{ width: '75%' }}>
                  <span className="progress-label">75%</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --- PASTKI QISM: SOFT SKILLS & BIO GRID --- */}
        <div className="skills-bottom-grid">
          
          {/* Yumshoq ko‘nikmalar */}
          <div className="skills-section fade-in-up delay-6">
            <h3 className="sub-title">Yumshoq ko‘nikmalar</h3>
            <ul className="soft-skills-list">
              <li>
                <span className="bullet-glow"></span>
                <p>Jamoada ishlash va o'zaro professional hamkorlik qobiliyati</p>
              </li>
              <li>
                <span className="bullet-glow"></span>
                <p>Murakkab muammolarni qisqa muddatda optimal hal qilish</p>
              </li>
              <li>
                <span className="bullet-glow"></span>
                <p>Agile/Scrum metodologiyalari asosida vaqtni samarali boshqarish</p>
              </li>
              <li>
                <span className="bullet-glow"></span>
                <p>Doimiy o‘rganishga bo'lgan yuqori intilish va adaptivlik</p>
              </li>
              <li>
                <span className="bullet-glow"></span>
                <p>Mijozlar ehtiyojlarini to'g'ri tahlil qilish va samarali muloqot</p>
              </li>
            </ul>
          </div>

          {/* Qo'shimcha ma'lumot */}
          <div className="skills-section fade-in-up delay-7">
            <h3 className="sub-title">Qo‘shimcha tajriba</h3>
            <div className="skills-text-box">
              <p>
                Men amaliy tajribaga ega <b>Full-Stack</b> dasturchiman. Respublika va mahalliy darajadagi Hackathonlarda qatnashib, qisqa vaqt ichida yuqori yuklamalarga chidamli (scalable) MVP loyihalarni noldan muvaffaqiyatli ishlab chiqish ko'nikmasini shakllantirdim.
              </p>
              <p>
                Asosiy maqsadim — arxitekturaviy jihatdan to'g'ri, xavfsiz va foydalanuvchi interfeysi (UI/UX) mukammal bo'lgan raqamli yechimlar yaratish orqali biznes va insonlar hayotini osonlashtirishdir.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Skills;