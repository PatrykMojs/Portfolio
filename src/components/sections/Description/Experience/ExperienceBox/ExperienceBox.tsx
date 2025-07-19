import { useRef, useEffect, useState } from "react";
import styles from "./ExperienceBox.module.css";

type ExperienceBoxProps = {
  Title: string;
  Company: string;
  WorkingPeriod: string;
  Description: string[];
};

const ExperienceBox = ({
  Title,
  Company,
  WorkingPeriod,
  Description,
}: ExperienceBoxProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div
      ref={ref}
      className={`${styles.box} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.headerRow}>
        <h3 className={styles.header3}>{Title}</h3>
        <span className={styles.paragraph}>{WorkingPeriod}</span>
      </div>
      <p className={styles.paragraph}>{Company}</p>
      <ul>
        {Description.map((desc, index) => (
          <li key={index} className={styles.elementOfList}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceBox;
