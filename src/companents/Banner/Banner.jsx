import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import { IoLogoHtml5 } from 'react-icons/io5';
import { FaCss3Alt, FaJsSquare, FaNode, FaGithub } from 'react-icons/fa';
import { SiReact, SiMongodb, SiPostgresql, SiPostman, SiSwagger } from 'react-icons/si';
import { TbSettingsUp } from "react-icons/tb";
import { BsCake2 } from "react-icons/bs";
import { PiLightning, PiStudentBold } from "react-icons/pi";

/* ── Typed text hook ── */
function useTyped(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wIdx];
    let timeout;
    if (!deleting && cIdx <= word.length) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, cIdx));
        setCIdx(c => c + 1);
      }, speed);
    } else if (!deleting && cIdx > word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && cIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, cIdx));
        setCIdx(c => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWIdx(i => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [cIdx, deleting, wIdx, words, speed, pause]);

  return display;
}

/* ── Counter animation hook ── */
function useCounter(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

/* ── Intersection observer hook ── */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const TECH = [
  { Icon: IoLogoHtml5, label: 'HTML5', cls: 'html' },
  { Icon: FaCss3Alt, label: 'CSS3', cls: 'css' },
  { Icon: FaJsSquare, label: 'JavaScript', cls: 'js' },
  { Icon: SiReact, label: 'React', cls: 'react' },
  { Icon: FaNode, label: 'Node.js', cls: 'node' },
  { Icon: SiMongodb, label: 'MongoDB', cls: 'mongo' },
  { Icon: FaGithub, label: 'Github', cls: 'github' },
  { Icon: SiPostgresql, label: 'PostgreSQL', cls: 'postgres' },
  { Icon: SiPostman, label: 'Postman', cls: 'postman' },
  { Icon: SiSwagger, label: 'Swagger', cls: 'swagger' },
];

const CERTS = [
  {
    img: '/img.png', alt: 'Node.js',
    title: 'Node.js Sertifikati',
    kurs: 'Full Stack Dev', platforma: 'Udemy', sana: '2024',
    desc: 'REST API, Express.js, MongoDB va Backend arxitekturasi.',
  },
  {
    img: '/png.png', alt: 'React',
    title: 'React Sertifikati',
    kurs: 'React Basics', platforma: 'Coursera', sana: '2024',
    desc: 'Hooks, State Management, Router va UI komponentlar.',
  },
  {
    img: '/Gemini_Generated_Image_jl51hmjl51hmjl51.png', alt: 'Hackathon',
    title: 'Hackathon 1-o\'rin',
    tadbir: 'Web Dev Hackathon', sana: '2025',
    desc: 'Teamwork, Fast Coding va Frontend yechimlar.',
  },
];

const PROJECTS = [
  { img: '/olcha.png', alt: 'Olcha.uz', title: 'Olcha.uz klon', desc: 'E-commerce dizayni va funksional kart tizimi.', href: 'https://olcha.uz' },
  { img: '/uzum.png', alt: 'UZM', title: 'UZM Market', desc: 'Mahsulotlar katalogi va foydalanuvchi interfeysi.', href: 'https://uzum.uz' },
  { img: '/asaxiy.jpg', alt: 'Asaxiy', title: 'Asaxiy Klon', desc: 'Sayt dizayni, search filter va responsive layout.', href: 'https://asaxiy.uz' },
];

const STORY = [
  { cls: 'story', title: 'Qanday Boshlaganman', type: 'p',
    body: 'Dasturlashni oddiy HTML sahifalar yaratishdan boshladim. Bugun esa React va Node.js orqali real loyihalar ustida ishlayapman. Har kuni yangi texnologiya o\'rganish mening asosiy maqsadim.' },
  { cls: 'work', title: 'Ishlash Usulim', type: 'ul',
    items: ['Clean Code yozish.', 'UX va Performance birinchi o\'rinda.', 'API-first Backend.', 'Team bilan tez ishlash.'] },
  { cls: 'lang', title: 'Tillar', type: 'ul',
    items: ["O'zbek — Native", 'English — Intermediate', 'Japanese — Learning 🇯🇵'] },
];

function StatCard({ label, target, suffix = '+', inView }) {
  const val = useCounter(target, 1600, inView);
  return (
    <div className="stat-card">
      <span className="stat-num">{val}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Banner() {
  const typed = useTyped(['Veb-dasturchi', 'Frontend Dev', 'Backend Dev', 'Full Stack Dev']);
  const [statsRef, statsInView] = useInView(0.3);
  const [certsRef, certsInView] = useInView(0.1);
  const [projRef, projInView] = useInView(0.1);
  const [extraRef, extraInView] = useInView(0.1);
  const [heroRef, heroInView] = useInView(0.1);

  return (
    <div className="page-root">
      <video autoPlay muted loop playsInline className="bg-video" aria-hidden="true">
        <source src="blue-abstract-hexagon.1920x1080.mp4" type="video/mp4" />
      </video>
      <div className="bg-overlay" aria-hidden="true" />

      <main className="banner-container">
        
        {/* ══════════ HERO ══════════ */}
        <section className={`hero-section ${heroInView ? 'in-view' : ''}`} ref={heroRef} aria-label="Hero">
          <div className="hero-profile">
            <div className="profile-ring">
              <div className="profile-ring__inner">
                <img src="ttem.jpg" alt="Temur" className="profile-img" />
              </div>
              <div className="profile-ring__orbit" aria-hidden="true" />
              <div className="profile-ring__orbit profile-ring__orbit--2" aria-hidden="true" />
            </div>

            <div className="hero-stats" ref={statsRef}>
              <StatCard label="Tajriba (yil)" target={1} suffix="+" inView={statsInView} />
              <StatCard label="Loyihalar" target={12} suffix="+" inView={statsInView} />
              <StatCard label="Texnologiya" target={10} suffix="+" inView={statsInView} />
            </div>
          </div>

          <div className="hero-text">
            <p className="hero-greeting">👋 Salom, men</p>
            <h1 className="hero-name">
              <span className="hero-name__temur">Temur</span>
            </h1>
            <h2 className="hero-role">
              <span className="typed-text" aria-live="polite">{typed}</span>
              <span className="typed-cursor" aria-hidden="true">|</span>
            </h2>
            <p className="hero-desc">
              Zamonaviy <span className="accent">veb-saytlar</span> yarataman —
              chiroyli dizayn va kuchli <span className="accent">backend</span> bilan.
            </p>

            {/* Tozalangan Meta qismi */}
            <div className="hero-meta">
              <span className="meta-badge"><BsCake2 /> 17 yosh</span>
              <span className="meta-badge"><PiStudentBold /> ALGORITM Full Stack 2024</span>
              <span className="meta-badge"><PiLightning /> 1 yil tajriba</span>
            </div>

            <div className="tech-grid" role="list" aria-label="Texnologiyalar">
              {TECH.map(({ Icon, label, cls }, i) => (
                <div
                  key={cls}
                  className="tech-item"
                  role="listitem"
                  style={{ '--ti': i }}
                  title={label}
                >
                  <Icon className={`tech-icon tech-icon--${cls}`} aria-hidden="true" />
                  <span className="tech-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="cta-buttons">
              <Link to="/about" className="btn btn--primary">Men haqimda</Link>
              <Link to="/projects" className="btn btn--outline">Loyihalarim</Link>
            </div>
          </div>
        </section>

        {/* ══════════ SKILLS CARDS (Emojilar qo'shildi) ══════════ */}
        <section className="skill-cards-section" aria-label="Ko'nikmalar">
          {[
            { emoji: '', title: 'Frontend', sub: 'HTML · CSS · JS · React' },
            { emoji: '', title: 'Backend', sub: 'Node.js · Express · MongoDB' },
          ].map((c, i) => (
            <div className="skill-card" key={c.title} style={{ '--si': i }}>
              <span className="skill-card__emoji">{c.emoji}</span>
              <h3 className="skill-card__title">{c.title}</h3>
              <p className="skill-card__sub">{c.sub}</p>
              <div className="skill-card__glow" aria-hidden="true" />
            </div>
          ))}
        </section>

        {/* ══════════ SERTIFIKATLAR ══════════ */}
        <section className={`section certs-section ${certsInView ? 'in-view' : ''}`} ref={certsRef} aria-label="Sertifikatlar">
          <h2 className="section-title">
            <span>Sertifikatlarim</span>
            <span className="section-title__line" aria-hidden="true" />
          </h2>
          <div className="cert-grid">
            {CERTS.map((c, i) => (
              <article className="cert-card" key={c.title} style={{ '--ci': i }} aria-label={c.title}>
                <div className="cert-card__img-wrap">
                  <img src={c.img} alt={c.alt} className="cert-card__img" loading="lazy" />
                </div>
                <div className="cert-card__overlay">
                  <h3 className="cert-card__title">{c.title}</h3>
                  <div className="cert-card__details">
                    {c.kurs && <p><strong>Kurs:</strong> {c.kurs}</p>}
                    {c.tadbir && <p><strong>Tadbir:</strong> {c.tadbir}</p>}
                    {c.platforma && <p><strong>Platforma:</strong> {c.platforma}</p>}
                    <p><strong>Sana:</strong> {c.sana}</p>
                  </div>
                  <div className="cert-card__skills">
                    <h4>O'rgandim:</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ LOYIHALAR ══════════ */}
        <section className={`section projects-section ${projInView ? 'in-view' : ''}`} ref={projRef} aria-label="Loyihalar">
          <h2 className="section-title">
            <span>Qilgan saytlarim</span>
            <span className="section-title__line" aria-hidden="true" />
          </h2>
          <div className="project-grid">
            {PROJECTS.map((p, i) => (
              <article className="project-card" key={p.title} style={{ '--pi': i }}>
                <div className="project-card__img-wrap">
                  <img src={p.img} alt={p.alt} className="project-card__img" loading="lazy" />
                  <div className="project-card__img-overlay" aria-hidden="true" />
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.desc}</p>
                  <a href={p.href} className="project-card__btn" target="_blank" rel="noopener noreferrer">
                    Ko'rish →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ HIKOYA ══════════ */}
        <section className={`section extra-section ${extraInView ? 'in-view' : ''}`} ref={extraRef} aria-label="Developer hikoyam">
          <h2 className="section-title">
            <span>Developer Hikoyam</span>
            <span className="section-title__line" aria-hidden="true" />
          </h2>
          <div className="extra-grid">
            {STORY.map((s, i) => (
              <div className={`extra-card extra-card--${s.cls}`} key={s.title} style={{ '--ei': i }}>
                <h3>{s.title}</h3>
                {s.type === 'p'
                  ? <p>{s.body}</p>
                  : <ul>{s.items.map(it => <li key={it}>{it}</li>)}</ul>
                }
                <div className="extra-card__glow" aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}