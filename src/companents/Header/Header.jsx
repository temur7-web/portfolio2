import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Header.css';

const NAV_LINKS = [
  { to: '/about',    label: 'Men haqimda',    num: '01' },
  { to: '/skills',   label: 'Qobiliyatlarim', num: '02' },
  { to: '/projects', label: 'Loyihalar',      num: '03' },
  { to: '/contact',  label: "Bog'lanish",     num: '04' },
];

/* ── Particle burst on logo click ── */
function spawnParticles(originEl) {
  const rect = originEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top  + rect.height / 2;
  const colors = ['#f5a623','#ffd166','#fff','#00f2ff','#ff6b6b'];

  for (let i = 0; i < 18; i++) {
    const dot = document.createElement('span');
    dot.className = 'logo-particle';
    const angle  = (i / 18) * 360;
    const dist   = 40 + Math.random() * 55;
    const size   = 4 + Math.random() * 5;
    const color  = colors[Math.floor(Math.random() * colors.length)];
    dot.style.cssText = `
      left:${cx}px; top:${cy}px; width:${size}px; height:${size}px;
      background:${color};
      --tx:${Math.cos((angle * Math.PI) / 180) * dist}px;
      --ty:${Math.sin((angle * Math.PI) / 180) * dist}px;
    `;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 700);
  }
}

/* ── Magnetic hover effect ── */
function useMagnet(strength = 0.35) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width  / 2);
      const dy = e.clientY - (r.top  + r.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = '';
      el.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
      setTimeout(() => { el.style.transition = ''; }, 500);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return ref;
}

function Header() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible,  setVisible]  = useState(true);
  const [lastY,    setLastY]    = useState(0);
  const [logoAnim, setLogoAnim] = useState(false);
  const location   = useLocation();
  const logoRef    = useMagnet(0.3);
  const iconRef    = useRef(null);

  /* ── Scroll behaviour ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  /* ── Route change ── */
  useEffect(() => { setIsOpen(false); }, [location]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* ── Logo click: particles + shake ── */
  const handleLogoClick = () => {
    if (iconRef.current) spawnParticles(iconRef.current);
    setLogoAnim(true);
    setTimeout(() => setLogoAnim(false), 600);
  };

  return (
    <>
      <header className={[
        'header',
        scrolled ? 'header--scrolled' : '',
        !visible ? 'header--hidden'   : '',
      ].join(' ')}>
        <div className="header__container">

          {/* ── Logo ── */}
          <Link
            to="/"
            className={`header__logo ${logoAnim ? 'header__logo--shake' : ''}`}
            aria-label="Bosh sahifa"
            ref={logoRef}
            onClick={handleLogoClick}
          >
            {/* Faqat T icon — "Temur" dagi T yo'q */}
            <div className="header__logo-icon" ref={iconRef}>
              <span className="logo-icon__letter">T</span>
              <span className="logo-icon__ring" />
              <span className="logo-icon__shine" />
            </div>

            {/* "emur" — T yo'q, icon bilan birlashib ko'rinadi */}
            <span className="header__logo-text" aria-hidden="true">
              <span className="logo-text__hidden-t">T</span>emur
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="header__nav nav-desktop" aria-label="Asosiy navigatsiya">
            <ul className="nav__list">
              {NAV_LINKS.map(({ to, label }, i) => (
                <li key={to} style={{ '--ni': i }}>
                  <Link
                    to={to}
                    className={`nav__link ${location.pathname === to ? 'nav__link--active' : ''}`}
                  >
                    <span className="nav__link-text">{label}</span>
                    <span className="nav__link-glow" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Hamburger ── */}
          <button
            className={`header__burger ${isOpen ? 'header__burger--open' : ''}`}
            onClick={() => setIsOpen(v => !v)}
            aria-label={isOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
            aria-expanded={isOpen}
          >
            <span className="burger__bar" />
            <span className="burger__bar" />
            <span className="burger__bar" />
          </button>
        </div>
      </header>

      {/* ── Overlay ── */}
      <div
        className={`mobile-overlay ${isOpen ? 'mobile-overlay--active' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`mobile-drawer ${isOpen ? 'mobile-drawer--active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        {/* Drawer header */}
        <div className="mobile-drawer__head">
          <div className="mobile-drawer__icon">T</div>
          <span className="mobile-drawer__brand">emur</span>
        </div>

        <ul className="mobile-drawer__list">
          {NAV_LINKS.map(({ to, label, num }, i) => (
            <li
              key={to}
              className="mobile-drawer__item"
              style={{ '--delay': `${i * 0.08}s` }}
            >
              <Link
                to={to}
                className={`mobile-drawer__link ${location.pathname === to ? 'mobile-drawer__link--active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mobile-drawer__num">{num}</span>
                <span className="mobile-drawer__label">{label}</span>
                <span className="mobile-drawer__arrow">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer__footer">
          <span>© 2025 Temur</span>
        </div>
      </div>
    </>
  );
}

export default Header;