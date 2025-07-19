import React from "react";
import Header from "../../ui/Header";
import SkillsMarquee from "../../ui/SkillsMarquee";
import Experience from "./Experience/Experience";
import Tabs from "./Tabs/Tabs";
import Education from "./Education/Education";
import style from "./Description.module.css"
import Footer from "../Footer/Footer";
import { useLanguage } from "../../../context/LanguageContext";

const Description = () => {
    const { language } = useLanguage();

    return(
        <div className={style.background}>
            <Header title={language === "pl" ? "Doświadczenie" : "Experience"}/>
            <Experience/>
            <Header title={language === "pl" ? "Projekty" : "Projects"}/>
            <Tabs/>
            <Header title={language === "pl" ? "Wykształcenie" : "Education"}/>
            <Education/>
            {/* <Footer/> */}
        </div>
    );
};
export default Description;