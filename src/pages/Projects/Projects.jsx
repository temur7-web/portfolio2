import React from 'react';
import './Projects.css';
import { FaExternalLinkAlt, FaGithub, FaRocket } from "react-icons/fa";

function Projects() {
  const eliteProjects = [
    {
      id: 1,
      title: "Uzum Market Clone",
      category: "E-Commerce / Marketplace",
      desc: "O'zbekistondagi eng yirik marketplace analogi. To'liq savat tizimi va to'lov turlari integratsiyasi.",
      img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
      link: "https://uzum.uz",
      tech: ["React", "Redux Toolkit", "Node.js"]
    },{
  id: 6,
  title: "YouTube Video Platform",
  category: "Video Streaming / Entertainment",
  desc: "Google API orqali ishlovchi video platforma. Qidiruv, kanal ko'rish va yuqori sifatli video pleyer tizimi.",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJZ6JJuArjMdC5YO29TCAQKN8fEvuPuH7bw&s",
  link: "https://youtube.com", // Bu yerga o'z loyihangiz linkini qo'ying
  tech: ["React", "RapidAPI", "Material UI"]
},
    {
      id: 2,
      title: "Olcha.uz Redesign",
      category: "E-Store / Tech",
      desc: "Elektronika do'koni uchun yuqori tezlikdagi interfeys va filterlash tizimi.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      link: "https://olcha.uz",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Temu Global Dashboard",
      category: "Logistics / Global Trade",
      desc: "Xalqaro savdo va logistika ma'lumotlarini kuzatish uchun murakkab dashboard.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      link: "https://temu.com",
      tech: ["React", "Chart.js", "Firebase"]
    },
    {
      id: 4,
      title: "Naman.uz Portal",
      category: "News / Media",
      desc: "Namangan viloyati uchun maxsus yangiliklar va interaktiv xizmatlar portali.",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
      link: "https://naman.uz",
      tech: ["React", "REST API", "Styled Components"]
    },
    {
      id: 5,
      title: "Tababo Health",
      category: "Medical / Health-Tech",
      desc: "Online tibbiy maslahat va shifokorlar qabuliga yozilish platformasi.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      link: "https://tababo.uz",
      tech: ["React Native", "Socket.io", "MongoDB"]
    }
  ];

  return (
    <div className='r'>
      <div className="portfolio-premium-wrapper">
        <div className="header-content">
          <h2 className="main-title">Tanlangan Loyihalar</h2>
          <p className="subtitle">40 dan ortiq muvaffaqiyatli loyihalar orasidan saralab olinganlari</p>
        </div>

        <div className="elite-projects-grid">
          {eliteProjects.map((pro) => (
            <div className="elite-card" key={pro.id}>
              <div className="elite-img-container">
                <img src={pro.img} alt={pro.title} />
                <div className="elite-overlay">
                  <a href={pro.link} target="_blank" rel="noopener noreferrer" className="visit-link">
                    Saytni ko'rish <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              
              <div className="elite-details">
                <span className="pro-category">{pro.category}</span>
                <h3>{pro.title}</h3>
                <p>{pro.desc}</p>
                
                <div className="tech-stack">
                  {pro.tech.map((t, i) => <span key={i} className="tech-badge">{t}</span>)}
                </div>

                <div className="card-footer">
                   <a href={pro.link} target="_blank" rel="noopener noreferrer" className="footer-btn live">
                     <FaRocket /> Live Demo
                   </a>
                   <button className="footer-btn code">
                     <FaGithub /> Code
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;