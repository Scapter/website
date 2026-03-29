import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Çeviri dosyalarını yüklemek için
  .use(LanguageDetector) // Tarayıcı dilini algılamak için
  .use(initReactI18next) // react-i18next'e bağlamak için
  .init({
    fallbackLng: "tr", // Dil bulunamazsa varsayılan dil
    debug: true, // Konsolda hataları görmek için (canlıda false yapabilirsin)
    interpolation: {
      escapeValue: false, // React zaten XSS koruması yaptığı için false
    },
  });

export default i18n;
