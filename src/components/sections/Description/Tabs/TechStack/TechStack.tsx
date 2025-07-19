import React from "react";
import styles from "./TechStack.module.css";
import { skills } from "../../../../../data/TechStack/techStackData";

const TechStack = () => {
    return(
        <div className={styles.techGrid}>
            {skills.map((skill) => (
                <div key={skill.name} className={styles.techCard}>
                <img src={skill.iconUrl} alt={skill.name} className={styles.techIcon} />
                <span>{skill.name}</span>
                </div>
            ))}
        </div>
    );
};
export default TechStack;