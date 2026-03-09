import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2026 Emirhan Yerlikaya <br />
        All rights reserved <br />
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
