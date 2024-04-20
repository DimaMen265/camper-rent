import React from "react";
import styles from "./FilterForm.module.css";
import icons from "../../images/sprite.svg";

export const FilterForm = () => {
    return (
        <form className={styles.filterForm}>
            <div className={styles.locationContainer}>
                <p className={styles.formText}>Location</p>
                <input type="text" name="location" placeholder="City" className={styles.locationInput} />
                <svg width={18} height={20} className={styles.iconLocation}>
                    <use href={`${icons}#icon-location`}></use>
                </svg>
            </div>
            <div className={styles.filterContainer}>
                <div className={styles.titleContainer}>
                    <p className={styles.formText}>Filters</p>
                    <h3 className={styles.formTitle}>Vehicle equipment</h3>
                </div>
                <div className={styles.checkBoxsContainer}>
                    <div className={styles.checkboxContainer}>
                        <svg width={32} height={32} className={styles.iconWrapperSecond}>
                            <use href={`${icons}#icon-wind`}></use>
                        </svg>
                        <p className={styles.textCheck}>AC</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <svg width={32} height={32} className={styles.iconWrapper}>
                            <use href={`${icons}#icon-transmission`}></use>
                        </svg>
                        <p className={styles.textCheck}>Automatic</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <svg width={32} height={32} className={styles.iconWrapper}>
                            <use href={`${icons}#icon-cutlery`}></use>
                        </svg>
                        <p className={styles.textCheck}>Kitchen</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <svg width={32} height={32} className={styles.iconWrapper}>
                            <use href={`${icons}#icon-TV`}></use>
                        </svg>
                        <p className={styles.textCheck}>TV</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <svg width={32} height={32} className={styles.iconWrapper}>
                            <use href={`${icons}#icon-shower`}></use>
                        </svg>
                        <p className={styles.textCheck}>Shower/WC</p>
                    </div>
                </div>
            </div>
            <div className={styles.filterContainer}>
                <h3 className={styles.formTitle}>Vehicle type</h3>
                <div className={styles.checkBoxsContainer}>
                    <div className={styles.checkboxContainer}>
                        <svg width={32} height={32} className={styles.iconWrapperSecond}>
                            <use href={`${icons}#icon-van`}></use>
                        </svg>
                        <p className={styles.textCheck}>Van</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <svg width={32} height={32} className={styles.iconWrapperSecond}>
                            <use href={`${icons}#icon-fully-integrated`}></use>
                        </svg>
                        <p className={styles.textCheckSub}>Fully Integrated</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <svg width={32} height={32} className={styles.iconWrapperSecond}>
                            <use href={`${icons}#icon-alcove`}></use>
                        </svg>
                        <p className={styles.textCheck}>Alcove</p>
                    </div>
                </div>
            </div>
            <button type="submit" disabled className={styles.buttonSearch}>Search</button>
        </form>
    );
};
