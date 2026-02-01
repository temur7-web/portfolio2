// src/components/BottomNav/BottomNav.jsx
import { NavLink } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end>🏠</NavLink>
      <NavLink to="/about">👤</NavLink>
      <NavLink to="/skills">⚡</NavLink>
      <NavLink to="/projects">📁</NavLink>
      <NavLink to="/contact">✉️</NavLink>
    </nav>
  );
}
