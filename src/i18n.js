import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esTranslation from "./locales/es/es.json";
import enTranslation from "./locales/en/en.json";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: esTranslation },
    en: { translation: enTranslation },
  },
  lng: "es", // idioma inicial
  fallbackLng: "es", // idioma por defecto si falta traducción
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
