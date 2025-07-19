import React from "react";
import styles from "./Certificates.module.css";
import { certificates } from "../../../../../data/Certificates/certificateData";

const Certificates = () =>{
    return(
        <div className={styles.certificatesGrid}>
            {certificates.map((certificate) => (
                <div key={certificate.title} className={styles.certificateCard}>
                    <img src={certificate.image} alt={certificate.title} className={styles.certificateImage} />
                    <h4>{certificate.title}</h4>
                    <p>{certificate.description}</p>
                </div>
            ))}
            </div>
    );
}
export default Certificates;