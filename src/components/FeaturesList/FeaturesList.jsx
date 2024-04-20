import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedAdvert } from "../../redux/selectors";

import styles from "./FeaturesList.module.css";
import clsx from "clsx";
import icons from "../../images/sprite.svg";

export const FeaturesList = () => {
    const advert = useSelector(selectSelectedAdvert);

    return (
        <div className={styles.features}>
            <div className={styles.details}>
                <div className={clsx(
                    advert?.adults !== 0 && styles.detail,
                    advert?.adults === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapperSecond}>
                        <use href={`${icons}#icon-users`}></use>
                    </svg>
                    <p className={styles.detailText}>{advert?.adults} adults</p>
                </div>
                <div className={clsx(
                    advert?.children !== 0 && styles.detail,
                    advert?.children === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapperSecond}>
                        <use href={`${icons}#icon-users`}></use>
                    </svg>
                    <p className={styles.detailText}>{advert?.children} children</p>
                </div>
                <div className={clsx(
                    advert?.transmission !== "" && styles.detail,
                    advert?.transmission === "" && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-transmission`}></use>
                    </svg>
                    <p className={styles.detailText}>{advert?.transmission}</p>
                </div>
                <div className={styles.detail}>
                    <svg width={20} height={20} className={styles.iconWrapperSecond}>
                        <use href={`${icons}#icon-wind`}></use>
                    </svg>
                    <p className={styles.detailText}>AC</p>
                </div>
                <div className={clsx(
                    advert?.engine !== "" && styles.detail,
                    advert?.engine === "" && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapperSecond}>
                        <use href={`${icons}#icon-gas-station`}></use>
                    </svg>
                    <p className={styles.detailText}>{advert?.engine}</p>
                </div>
                <div className={clsx(
                    advert?.details.gas !== "" && styles.detail,
                    advert?.details.gas === "" && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapperSecond}>
                        <use href={`${icons}#icon-gas`}></use>
                    </svg>
                    <p className={styles.detailText}>{advert?.details.gas} gas</p>
                </div>
                <div className={clsx(
                    advert?.details.water !== "" && styles.detail,
                    advert?.details.water === "" && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-water`}></use>
                    </svg>
                    <p className={styles.detailText}>{advert?.details.water} water</p>
                </div>
                <div className={clsx(
                    advert?.details.kitchen !== 0 && styles.detail,
                    advert?.details.kitchen === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-cutlery`}></use>
                    </svg>
                    <p className={styles.detailText}>Kitchen</p>
                </div>
                <div className={clsx(
                    advert?.details.freezer !== 0 && styles.detail,
                    advert?.details.freezer === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-freezer`}></use>
                    </svg>
                    <p className={styles.detailText}>Freezer</p>
                </div>
                <div className={clsx(
                    advert?.details.microwave !== 0 && styles.detail,
                    advert?.details.microwave === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-microwave`}></use>
                    </svg>
                    <p className={styles.detailText}>Microwave</p>
                </div>
                <div className={clsx(
                    advert?.details.bathroom !== 0 && styles.detail,
                    advert?.details.bathroom === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-shower`}></use>
                    </svg>
                    <p className={styles.detailText}>Bathroom</p>
                </div>
                <div className={clsx(
                    advert?.details.shower !== 0 && styles.detail,
                    advert?.details.shower === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-shower`}></use>
                    </svg>
                    <p className={styles.detailText}>Shower</p>
                </div>
                <div className={clsx(
                    advert?.details.toilet !== 0 && styles.detail,
                    advert?.details.toilet === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapperSecond}>
                        <use href={`${icons}#icon-toilet`}></use>
                    </svg>
                    <p className={styles.detailText}>Toilet</p>
                </div>
                <div className={clsx(
                    advert?.details.TV !== 0 && styles.detail,
                    advert?.details.TV === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-TV`}></use>
                    </svg>
                    <p className={styles.detailText}>TV</p>
                </div>
                <div className={clsx(
                    advert?.details.CD !== 0 && styles.detail,
                    advert?.details.CD === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-CD`}></use>
                    </svg>
                    <p className={styles.detailText}>CD</p>
                </div>
                <div className={clsx(
                    advert?.details.radio !== 0 && styles.detail,
                    advert?.details.radio === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-radio`}></use>
                    </svg>
                    <p className={styles.detailText}>Radio</p>
                </div>
                <div className={clsx(
                    advert?.details.beds !== 0 && styles.detail,
                    advert?.details.beds === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-bed`}></use>
                    </svg>
                    <p className={styles.detailText}>{advert?.details.beds} beds</p>
                </div>
                <div className={clsx(
                    advert?.details.airConditioner !== 0 && styles.detail,
                    advert?.details.airConditioner === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-conditioner`}></use>
                    </svg>
                    <p className={styles.detailText}>{advert?.details.airConditioner} air conditioner</p>
                </div>
                <div className={clsx(
                    advert?.details.hob !== 0 && styles.detail,
                    advert?.details.hob === 0 && styles.detailHidden
                )}>
                    <svg width={20} height={20} className={styles.iconWrapper}>
                        <use href={`${icons}#icon-hob`}></use>
                    </svg>
                    <p className={styles.detailText}>{advert?.details.hob} hob</p>
                </div>
            </div>
            <div className={styles.vehicleDetails}>
                <h3 className={styles.titleVehicleDetails}>Vehicle details</h3>
                <ul className={styles.listVehicleDeatils}>
                    <li className={styles.listItem}>
                        <p className={styles.itemText}>Form</p>
                        <p className={styles.itemText}>{advert?.form}</p>
                    </li>
                    <li className={styles.listItem}>
                        <p className={styles.itemText}>Length</p>
                        <p className={styles.itemText}>{advert?.length}</p>
                    </li>
                    <li className={styles.listItem}>
                        <p className={styles.itemText}>Width</p>
                        <p className={styles.itemText}>{advert?.width}</p>
                    </li>
                    <li className={styles.listItem}>
                        <p className={styles.itemText}>Height</p>
                        <p className={styles.itemText}>{advert?.height}</p>
                    </li>
                    <li className={styles.listItem}>
                        <p className={styles.itemText}>Tank</p>
                        <p className={styles.itemText}>{advert?.tank}</p>
                    </li>
                    <li className={styles.listItem}>
                        <p className={styles.itemText}>Consumption</p>
                        <p className={styles.itemText}>{advert?.consumption}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
