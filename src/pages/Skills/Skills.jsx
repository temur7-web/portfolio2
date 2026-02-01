import React from 'react';
import './Skills.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaJsSquare, FaNode } from "react-icons/fa";
import { SiReact, SiMongodb, SiPostgresql, SiPostman, SiSwagger } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Skills() {
  return (
    <div className='r'>
    <div className="skills-container">
      <div className="skills-content">
        <h2 className="section-title">Ko‘nikmalar</h2>

        <div className="skills-section">
          <h3 className="sub-title">Texnik ko‘nikmalar</h3>
          <div className="tech-skills">
            <div className="skill-item">
              <IoLogoHtml5 className="skill-icon html" />
              <span>HTML</span>
              <div className="progress-bar"><div className="progress" style={{ width: '95%' }}><span className="progress-label">95%</span></div></div>
            </div>

            <div className="skill-item">
              <FaCss3Alt className="skill-icon css" />
              <span>CSS</span>
              <div className="progress-bar"><div className="progress" style={{ width: '90%' }}><span className="progress-label">90%</span></div></div>
            </div>

            <div className="skill-item">
              <FaJsSquare className="skill-icon javascript" />
              <span>JavaScript</span>
              <div className="progress-bar"><div className="progress" style={{ width: '85%' }}><span className="progress-label">85%</span></div></div>
            </div>

            <div className="skill-item">
              <SiReact className="skill-icon react" />
              <span>React</span>
              <div className="progress-bar"><div className="progress" style={{ width: '80%' }}><span className="progress-label">80%</span></div></div>
            </div>

            <div className="skill-item">
              <FaNode className="skill-icon node" />
              <span>Node.js</span>
              <div className="progress-bar"><div className="progress" style={{ width: '75%' }}><span className="progress-label">75%</span></div></div>
            </div>

            <div className="skill-item">
              <SiMongodb className="skill-icon mongodb" />
              <span>MongoDB</span>
              <div className="progress-bar"><div className="progress" style={{ width: '70%' }}><span className="progress-label">80%</span></div></div>
            </div>

            <div className="skill-item">
              <SiPostgresql className="skill-icon postgresql" />
              <span>PostgreSQL</span>
              <div className="progress-bar"><div className="progress" style={{ width: '85%' }}><span className="progress-label">85%</span></div></div>
            </div>

            <div className="skill-item">
              <FaGithub className="skill-icon github" />
              <span>GitHub</span>
              <div className="progress-bar"><div className="progress" style={{ width: '85%' }}><span className="progress-label">85%</span></div></div>
            </div>

            <div className="skill-item">
              <SiPostman className="skill-icon postman" />
              <span>Postman</span>
              <div className="progress-bar"><div className="progress" style={{ width: '80%' }}><span className="progress-label">80%</span></div></div>
            </div>

            <div className="skill-item">
              <SiSwagger className="skill-icon swagger" />
              <span>Swagger</span>
              <div className="progress-bar"><div className="progress" style={{ width: '70%' }}><span className="progress-label">85%</span></div></div>
            </div>
          </div>
        </div>

        {/* Yumshoq ko‘nikmalar */}
        <div className="skills-section">
          <h3 className="sub-title">Yumshoq ko‘nikmalar</h3>
          <ul className="soft-skills-list">
            <li>Jamoada ishlash va hamkorlik qilish qobiliyati</li>
            <li>Muammolarni tez va samarali hal qilish</li>
            <li>Vaqtni boshqarish va loyiha muddatlariga rioya qilish</li>
            <li>Doimiy o‘rganishga intilish va yangi texnologiyalarni o‘zlashtirish</li>
            <li>Mijozlar bilan muloqot qilish va ularning ehtiyojlarini tushunish</li>
          </ul>
        </div>

        <div className="skills-section">
          <h3 className="sub-title">Qo‘shimcha ma'lumot</h3>
          <p className="skills-text">
            Men bir yillik tajribaga ega Full-Stack dasturchiman. Hackathonlarda qatnashib, bir nechta loyihalarda muvaffaqiyatli natijalarga erishganman. Mening maqsadim — har kuni yangi texnologiyalarni o‘rganish va o‘z ko‘nikmalarimni yanada rivojlantirish.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Skills;



