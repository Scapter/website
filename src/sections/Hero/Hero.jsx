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
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

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

        <h2>Full-Stack Developer</h2>
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

        <p className={styles.description}>
          Hi! <br /> A first-year Software Engineering student at Manisa Celal
          Bayar University. I've been passionate about software since my
          childhood. Currently, I am channeling this passion into Game Art. I am
          the lead designer and frontend developer for 'Let's Cook', a 2D mobile
          restaurant management game
        </p>
        <a href={CV} download>
          <button className="hover">resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
