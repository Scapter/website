import styles from "./FooterStyles.module.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2026 Emirhan Yerlikaya <br />
        {t("footer.cpy")} <br />
        Icons by{" "}
        <a
          href="https://icons8.com"
          className={styles.iconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Icons8
        </a>
      </p>
    </section>
  );
}

export default Footer;
