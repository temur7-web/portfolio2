// Hero.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t('welcome')}</h1>
      <p>{t('subtitle')}</p>
    </section>
  );
};

export default Hero;
