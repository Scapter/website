import React, { useState } from "react"; // useState ekledik
import styles from "./HeaderStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import { useTranslation } from "react-i18next"; // i18next ekledik

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation(); // t ve i18n objelerini aldık
  const [isLangOpen, setIsLangOpen] = useState(false); // Dropdown kontrolü

  const isTR = i18n.language === "tr";
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false); // Dil seçilince kapat
  };

  return (
    <nav className={`${styles.headerWrapper} ${isTR ? styles.tr : ""}`}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          {/* Metinleri t() içine aldık */}
          <li>
            <a href="#hero">{t("nav.home")}</a>
          </li>
          <li>
            <a href="#projects">{t("nav.projects")}</a>
          </li>
          <li>
            <a href="#skills">{t("nav.skills")}</a>
          </li>
          <li>
            <a href="#contact">{t("nav.contact")}</a>
          </li>
        </ul>

        <div className={styles.controls}>
          {" "}
          {/* Sosyal ikonlar yerine kontrol alanı */}
          {/* DİL DROPDOWN BAŞLANGIÇ */}
          <div className={styles.langDropdown}>
            <button
              className={styles.langBtn}
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              {i18n.language.toUpperCase()} ▾
            </button>

            {isLangOpen && (
              <ul className={styles.langList}>
                <li onClick={() => changeLanguage("tr")}>TR</li>
                <li onClick={() => changeLanguage("en")}>EN</li>
              </ul>
            )}
          </div>
          {/* DİL DROPDOWN BİTİŞ */}
          <div className={styles.colorMode}>
            <img
              src={themeIcon}
              alt="Color mode icon"
              className={theme === "light" ? styles.sun : styles.moon}
              onClick={toggleTheme}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
