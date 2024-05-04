import React, { useState } from 'react';

function LanguageSwitch({ changeLang }) {
  const [currentLang, setCurrentLang] = useState('en');


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
    </div>
  );
}

export default LanguageSwitch;
