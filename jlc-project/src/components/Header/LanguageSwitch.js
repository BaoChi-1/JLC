import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function LanguageSwitch({ changeLang }) {
  const [currentLang, setCurrentLang] = useState('en');
  const { t } = useTranslation();

  const handleClick = () => {
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    setCurrentLang(newLang);
    changeLang(newLang);
  };

  return (
    <div className="language-switch">
      <button className="language-button" onClick={handleClick}>
        {currentLang === 'en' ? 'Русский' : 'English'}
      </button>
      <Link to="/calculate" className="language-button">
        {t('calc')}
      </Link>
    </div>
  );
}

export default LanguageSwitch;
