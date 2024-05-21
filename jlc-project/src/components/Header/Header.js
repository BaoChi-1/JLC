import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './LanguageSwitch';
import { Link, useLocation } from 'react-router-dom';
function Header() {
  const {i18n} = useTranslation();
  const location = useLocation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  const isHomePage = location.pathname === '/';
  return (
    <div>
    <LanguageSwitch changeLang={changeLang} />
    {isHomePage ? (
      <Link to="/calculator">Go to Calculator</Link>
    ) : (
      <Link to="/">Back</Link>
    )}
    {isHomePage && (
      <div className="flex justify-center min-w-max">
        <div>
          <img className="h-64 static" src={`${process.env.PUBLIC_URL}/other_images/dostavka.jpg`} alt="Dostavka" />
        </div>
      </div>
    )}
  </div>
  );
}

export default Header;
