import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/photo2.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "/cv.pdf";
import CV2 from "/cv-tr.pdf";
import { useTheme } from "../../common/ThemeContext";
import { useTranslation, Trans } from "react-i18next";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const { t, i18n } = useTranslation();
  const isTR = i18n.language === "tr";
  const cvPath = isTR ? CV2 : CV;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Emirhan Yerlikaya"
        />
      </div>

      <div className={styles.info}>
        <h1>
          Emirhan <br /> Yerlikaya{" "}
        </h1>

        <h2>{t("hero.title")}</h2>
        <span>
          <a
            href="https://x.com/Emirhan82015720"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            href="https://github.com/Scapter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/emirhan-yerlikaya-4342b61b5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>

        <Trans
          i18nKey="hero.description"
          parent="p" // Çeviriyi bir <p> etiketi içine koyar
          className={styles.description} // Senin CSS sınıfını buraya ekler
        />

        <a href={cvPath} download>
          <button className="hover">{isTR ? "Özgeçmiş" : "resume"}</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
