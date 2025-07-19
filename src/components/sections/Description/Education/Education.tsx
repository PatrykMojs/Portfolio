import { useEffect, useRef, useState } from "react";
import styles from "./Education.module.css";
import { educationData } from "../../../../data/Education/educationData";
import { useLanguage } from "../../../../context/LanguageContext";

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const {language} = useLanguage();
  const data = educationData[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (    
    <div className={styles.timeline} ref={containerRef}>
        {data.map((edu, index) => (
            <div key={index} className={styles.item}>
            <div className={styles.dot}></div>
            <div className={`${styles.content} ${isVisible ? styles.show : ""}`}>
                <div className={styles.header}>
                <h3>{edu.title}</h3>
                <span className={styles.period}>{edu.period}</span>
                </div>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.description}>{edu.description}</p>
            </div>
            </div>
        ))}
        </div>
    );
};
export default Education;