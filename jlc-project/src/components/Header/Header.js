import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './LanguageSwitch';

function Header() {
  const {i18n} = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
       <LanguageSwitch changeLang={changeLang} />
      <div className="flex justify-center min-w-max">
      <div>
        <img className="h-64 static" src="dostavka.jpg" />
      </div>
    </div>
    </div>
  );
}

export default Header;
