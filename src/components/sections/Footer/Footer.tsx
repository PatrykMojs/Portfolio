import { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageContext";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const footerDetails = {
    title: language === "pl" ? "Podaj tytuł wiadomości" : "Enter message title",
    email: language === "pl" ? "Podaj adres e-mail" : "Enter e-mail address",
    message: language === "pl" ? "Treść wiadomości" : "Message content",
    send: language === "pl" ? "Wyślij" : "Send",
    social: language === "pl" ? "Social Media" : "Social Media",
    copyright:
      language === "pl"
        ? "Wszelkie prawa zastrzeżone."
        : "All rights reserved.",
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!formRef.current) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current!,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSent(true);
      formRef.current?.reset();

    })
    .catch((err) => {
      console.error("Error sending message:", err);
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <footer ref={containerRef} className={`${styles.container} ${isVisible ? styles.show : ""}`}>
      <div className={styles.column}>
        <h3 className={styles.formHeading}>
          {language === "pl" ? "Napisz do mnie" : "Contact Me"}
        </h3>
        <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
          <input type="text" name="title" placeholder={footerDetails.title} required />
          <input type="email" name="email" placeholder={footerDetails.email} required />
          <textarea placeholder={footerDetails.message}  name="message" required></textarea>
          <button type="submit">{footerDetails.send}</button>
        </form>
      </div>

      <div className={`${styles.column} ${styles.socialColumn}`}>
        <h3 className={styles.heading}>Social Media</h3>
        <div className={styles.decorativeLine}></div>
        <div className={styles.socialIcons}>
          <a href="mailto:patrykmeus@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/patryk-meus-493882280/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/PatrykMojs" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        &copy; {new Date().getFullYear()} {footerDetails.copyright}
      </div>
    </footer>
  );
};

export default Footer;
