// src/companents/LanguageSwitcher/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // (agar styling qilgan bo‘lsang)
import './LanguageSwitcher.css'
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang-buttons">
      <button onClick={() => changeLanguage('uz')}>UZ</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;
