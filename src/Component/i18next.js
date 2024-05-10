import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../Component/en.json';
import hiTranslation from '../Component/hi.json';
import puTranslation from '../Component/pu.json';
import arTranslation from '../Component/ar.json';
import frTranslation from '../Component/fr.json';
import rsTranslation from '../Component/rs.json';
import tlTranslation from '../Component/tl.json'
import tmTranslation from '../Component/tm.json'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      pu: { translation: puTranslation },
      ar: { translation: arTranslation },
      fr: { translation: frTranslation },
      rs: { translation: rsTranslation },
      tl: { translation: tlTranslation },
      tm: { translation: tmTranslation }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;