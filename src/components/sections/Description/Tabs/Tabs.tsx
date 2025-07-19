import React, { useState, useRef, useEffect } from "react";
import styles from "./Tabs.module.css";
import Projects from "./Projects/Projects";
import Certificates from "./Certificates/Certificates";
import TechStack from "./TechStack/TechStack";
import { useLanguage } from "../../../../context/LanguageContext";

const Tabs = () => {
  const { language } = useLanguage();
  const tabLabels = {
    pl: ["Projekty", "Certyfikaty", "Umiejętności"],
    en: ["Projects", "Certificates", "Skills"],
  };
  const [activeTab, setActiveTab] = useState(tabLabels[language][0]);

  const tabRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isTabVisible, setIsTabVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // resetuj zakładkę jeśli zmieniono język
    setActiveTab(tabLabels[language][0]);
  }, [language]);

  useEffect(() => {
    const observerTab = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTabVisible(true);
          observerTab.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const observerContent = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
          observerContent.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (tabRef.current) observerTab.observe(tabRef.current);
    if (contentRef.current) observerContent.observe(contentRef.current);

    return () => {
      if (tabRef.current) observerTab.unobserve(tabRef.current);
      if (contentRef.current) observerContent.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={tabRef}
        className={`${styles.tabList} ${isTabVisible ? styles.visible : ""}`}
      >
        {tabLabels[language].map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        ref={contentRef}
        className={`${styles.content} ${isContentVisible ? styles.contentVisible : ""}`}
      >
        {(activeTab === "Projekty" || activeTab === "Projects") && <Projects />}
        {(activeTab === "Certyfikaty" || activeTab === "Certificates") && <Certificates />}
        {(activeTab === "Umiejętności" || activeTab === "Skills") && <TechStack />}
      </div>
    </div>
  );
};

export default Tabs;
