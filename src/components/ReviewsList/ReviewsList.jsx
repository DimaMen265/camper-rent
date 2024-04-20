import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedAdvert } from "../../redux/selectors";

import styles from "./ReviewsList.module.css";
import clsx from "clsx";
import icons from "../../images/sprite.svg";

export const ReviewsList = () => {
    const advert = useSelector(selectSelectedAdvert);

    const renderStars = (rating) => {
        const maxStars = 5;
        const starIcons = [];

        for (let i = 0; i < rating; i += 1) {
            starIcons.push(
                <svg key={i} width={16} height={16} className={styles.iconStar}>
                    <use href={`${icons}#icon-star`}></use>
                </svg>
            );
        };

        for (let i = rating; i < maxStars; i += 1) {
            starIcons.push(
                <svg key={i} width={16} height={16} className={clsx(styles.iconStar, styles.iconStarDefault)}>
                    <use href={`${icons}#icon-star`}></use>
                </svg>
            );
        };

        return starIcons;
    };

    return (
        <ul className={styles.reviewsList}>
            {advert?.reviews.map((review, index) => (
                <li key={index} className={styles.itemReview}>
                    <div className={styles.reviewerContainer}>
                        <div className={styles.avatar}>
                            <p className={styles.initials}>{review.reviewer_name.charAt(0).toUpperCase()}</p>
                        </div>
                        <div className={styles.nameContainer}>
                            <p className={styles.name}>{review.reviewer_name}</p>
                            <div className={styles.starsContainer}>
                                {renderStars(review.reviewer_rating)}
                            </div>
                        </div>
                    </div>
                    <p className={styles.textReview}>{review.comment}</p>
                </li>
            ))}
        </ul>
    );
};
