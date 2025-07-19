import { useState, useRef, useEffect } from "react";
import styles from "./Experience.module.css";
import ExperienceBox from "./ExperienceBox/ExperienceBox";
import { experienceData } from "../../../../data/Experience/experienceData";
import { useLanguage } from "../../../../context/LanguageContext";

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const {language} = useLanguage();
  const data = experienceData[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSidebarVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sidebarRef.current) {
      observer.observe(sidebarRef.current);
    }

    return () => {
      if (sidebarRef.current) observer.unobserve(sidebarRef.current);
    };
  }, []);

  return (
    <div className={styles.experienceContainer}>
      <div
        ref={sidebarRef}
        className={`${styles.sidebar} ${
          isSidebarVisible ? styles.visible : ""
        }`}
      >
        {data.map((exp, index) => (
          <button
            key={index}
            className={`${styles.tab} ${
              selectedIndex === index ? styles.active : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            {exp.ShortCompany}
          </button>
        ))}
      </div>

      <div className={styles.count}>
        <ExperienceBox
          Title={data[selectedIndex].Title}
          Company={data[selectedIndex].Company}
          WorkingPeriod={data[selectedIndex].WorkingPeriod}
          Description={data[selectedIndex].Description}
        />
      </div>
    </div>
  );
};

export default Experience;
