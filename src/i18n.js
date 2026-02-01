// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  uz: {
    translation: {
      nav_home: 'Bosh sahifa',
      nav_about: 'Men haqimda',
      nav_skills: 'Ko‘nikmalar',
      nav_projects: 'Loyihalar',
      nav_contact: 'Aloqa',
      nav_bio: 'Bio',
      welcome: "Xush kelibsiz!",
    },
  },
  ru: {
    translation: {
      nav_home: 'Главная',
      nav_about: 'Обо мне',
      nav_skills: 'Навыки',
      nav_projects: 'Проекты',
      nav_contact: 'Контакт',
      nav_bio: 'Биография',
      welcome: "Добро пожаловать!",
    },
  },
  en: {
    translation: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_contact: 'Contact',
      nav_bio: 'Bio',
      welcome: "Welcome!",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
