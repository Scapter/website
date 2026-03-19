import React, { useState } from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [status, setStatus] = useState(""); // Gönderim durumunu tutmak için

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
      <h1 className="sectionTitle">Contact</h1>

      <form onSubmit={handleSubmit}>
        {/* Spam Koruması: Botlar bunu doldurur, insanlar görmez */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <input
          className="hover btn"
          type="submit"
          value="Submit"
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
