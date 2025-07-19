import React, { useRef, useEffect, useState } from "react";
import styles from "./AboutMe.module.css";
import { aboutMeData } from "../../../data/AboutMe/aboutMeData";
import { useLanguage } from "../../../context/LanguageContext";

const AboutMe = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const {language} = useLanguage();
  const data = aboutMeData[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={styles.background}>
      <div className={styles.card}>
        <p className={`${styles.paragraph} ${isVisible ? styles.visible : ""}`}>
          {data.split("\n").map((line, index) =>
            line.trim() !== "" ? (
              <span key={index}>
                {line.trim()}
              </span>
          ) : null
          )}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
