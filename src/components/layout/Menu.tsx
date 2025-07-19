import { useState } from "react";
import logo from "../../assets/images/Logo.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Menu.module.css";
import { useLanguage } from "../../context/LanguageContext";
import "flag-icons/css/flag-icons.min.css";

const Menu = () => {
  const { language, toggleLanguage } = useLanguage();
  const flagClass = language === "pl" ? "fi fi-gb" : "fi fi-pl";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const navLinks = (
    <>
      <a href="#">{language === "pl" ? "O mnie" : "About me"}</a>
      <a href="#">{language === "pl" ? "Umiejętności" : "Skills"}</a>
      <a href="#">{language === "pl" ? "Doświadczenie" : "Experience"}</a>
      <a href="#">{language === "pl" ? "Projekty" : "Projects"}</a>
    </>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={logo} alt="logo" className={styles.logoMenu} />
      </div>

      <div className={styles.center}>
        <div className={styles.links}>{navLinks}</div>
      </div>

      <div className={styles.right}>
        <a href="mailto:patrykmeus@gmail.com"><FaEnvelope size={24} /></a>
        <a href="https://www.linkedin.com/in/patryk-meus-493882280/"><FaLinkedin size={24} /></a>
        <a href="https://github.com/PatrykMojs"><FaGithub size={24} /></a>
        <i
          className={`${flagClass} ${styles.languageIcon}`}
          onClick={toggleLanguage}
          style={{ cursor: "pointer", fontSize: "1.5rem", marginRight: "1rem" }}
          title={language === "pl" ? "English" : "Polski"}
        ></i>
        <button className={styles.menuToggle} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Menu;
