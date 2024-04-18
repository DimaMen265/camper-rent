import React from "react";
import styles from "./Welcome.module.css";
import camper from "../../images/camper.png";

const Welcome = () => {
    return (
        <div className={styles.layoutContainer}>
            <img src={camper} alt="Camper" />
            <h1 className={styles.layoutTitle}>Welcome!</h1>
        </div>
    );
};

export default Welcome;
