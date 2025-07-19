import React from 'react';
import Menu from "../../layout/Menu.tsx";
import "./Banner.module.css";
import styles from "./Banner.module.css";
import PortfolioPhoto from "../../../assets/images/ProfilePhoto.png";
import DecorativeSquare from "./DecorativeSquare.tsx";

const Banner = () => {

    return(
        <div className={styles.banner}>
            <Menu/>

            <div className={styles.content}>
                <div className={styles.left}>
                    <img src={PortfolioPhoto} alt="Portfolio_image" className={styles.photo}/>
                </div>

                <DecorativeSquare/>
            </div>
        </div>
    );
}
export default Banner;