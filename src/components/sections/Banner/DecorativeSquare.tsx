import React from 'react';
import styles from './DecorativeSquare.module.css';
import { useLanguage } from '../../../context/LanguageContext';

const DecorativeSquare = () => {
  const { language } = useLanguage();
  return (
    <div className={styles.right}>
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circle3}`}></div>

      <div className={`${styles.line} ${styles.line1}`}></div>
      <div className={`${styles.line} ${styles.line2}`}></div>

      <div className={styles.text}>
        <p>{language === 'pl' ? 'Cześć, nazywam się' : 'Hi, my name is'}</p>
        <h1>Patryk Meus</h1>
        <h2>Full-stack Developer</h2>
      </div>
    </div>
  );
};

export default DecorativeSquare;
