import React, { useState } from "react";
import styles from "./ContactStyles.module.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const [status, setStatus] = useState(""); // Gönderim durumunu tutmak için
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqeynaln", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // Formu temizle
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">{t("contact.Contact")} </h1>

      <form onSubmit={handleSubmit}>
        {/* Spam Koruması: Botlar bunu doldurur, insanlar görmez */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <div className="formGroup">
          <label htmlFor="name" hidden>
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t("contact.name")}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("contact.email")}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={t("contact.message")}
            required
          ></textarea>
        </div>

        <input
          className="hover btn"
          type="submit"
          value={t("contact.submit")}
          disabled={status === "Sending..."}
        />

        {/* Kullanıcıya geri bildirim mesajları */}
        {status === "SUCCESS" && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Your message was sent successfully!
          </p>
        )}
        {status === "ERROR" && (
          <p style={{ color: "red", marginTop: "10px" }}>
            An error occurred, please try again.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
