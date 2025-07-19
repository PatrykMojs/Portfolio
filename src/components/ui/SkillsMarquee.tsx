import React from "react";
import styles from "./SkillsMarquee.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiDotnet, SiNodedotjs, SiPostman } from "react-icons/si";

const SkillsMarquee = () => {
    return(
        <div className={styles.marquee}>
            <div className={styles.track}>
                <FaHtml5/>
                <FaCss3Alt/>
                <FaReact/>
                <SiTypescript/>
                <SiDotnet/>
                <FaJs/>
                <SiNodedotjs/>
                <SiPostman/>
            </div>
        </div>
    );
};
export default SkillsMarquee;