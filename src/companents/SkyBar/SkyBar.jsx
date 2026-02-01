// src/companents/SkyBar/SkyBar.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './SkyBar.css';

const SkyBar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang-switcher-container">
      <button onClick={() => changeLanguage('uz')}>🇺🇿 Uzb</button>
      <button onClick={() => changeLanguage('en')}>🇺🇸 Eng</button>
      <button onClick={() => changeLanguage('ru')}>🇷🇺 Rus</button>
    </div>
  );
};

export default SkyBar;
