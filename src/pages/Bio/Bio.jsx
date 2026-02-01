import { useTranslation } from 'react-i18next';

const Bio = () => {
  const { t } = useTranslation();

  return (
    <section className="bio-page">
      <h1>{t('bio_title')}</h1>
      <p>{t('bio_text')}</p>
    </section>
  );
};

export default Bio;
