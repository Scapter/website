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

function Header() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <nav className={styles.headerWrapper}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className={styles.colorMode}>
          <img
            src={themeIcon}
            alt="Color mode icon"
            className={theme === "light" ? styles.sun : styles.moon}
            onClick={toggleTheme}
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
