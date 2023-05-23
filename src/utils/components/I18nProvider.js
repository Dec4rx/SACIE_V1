import React, { createContext, useState } from 'react';
import Translations from './Translations';

export const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(Translations.locale);

  const changeLanguage = (language) => {
    Translations.locale = language;
    setCurrentLanguage(language);
  };

  return (
    <I18nContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};
