import React, { useState, useEffect } from "react";

import { ButtonLoadMore } from "../ButtonLoadMore/ButtonLoadMore";
import clsx from "clsx";
import styles from "./FavoriteList.module.css";
import icons from "../../images/sprite.svg";
import camper from "../../images/camper.png";

export const FavoriteList = () => {
    const [favorites, setFavorites] = useState([]);
    const [limit, setLimit] = useState(4);
    const favoritesPag = favorites.slice(0, limit);
    const currentCount = favoritesPag.length;
    const totalCount = favorites.length;

    const handleLoadMore = () => {
        setLimit(limit + 4);
    };

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    const handleAddFavorite = (advert) => {
        const index = favorites.findIndex(item => item._id === advert._id);
        let updatedFavorites = [];

        if (index === -1) {
            updatedFavorites = [...favorites, advert];
        } else {
            updatedFavorites = favorites.filter(item => item._id !== advert._id);
        };

        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const isFavorite = (advertId) => {
        return favorites.some((item) => item._id === advertId);
    };

    return (
        <>
            {totalCount !== 0 ?
                (
                    <div>
                        <ul className={styles.favoriteList}>
                            {favorites.map(advert => (
                                <li key={advert._id} className={styles.favoriteItem}>
                                    <img src={advert.gallery[0]} alt="Advert" width={290} height={310} className={styles.advertImage} />
                                    <div className={styles.advertContent}>
                                        <div className={styles.advertHeader}>
                                            <div className={styles.headerFirst}>
                                                <h2 className={styles.advertTitle}>{advert.name}</h2>
                                                <div className={styles.priceContainer}>
                                                    <h2 className={styles.advertTitle}>€{advert.price}.00</h2>
                                                    <button type="click" onClick={() => handleAddFavorite(advert)} className={styles.buttonFavorite}>
                                                        <svg width={24} height={24} className={clsx(
                                                            styles.iconFavorite,
                                                            { [styles.iconFavoriteActive]: isFavorite(advert._id) }
                                                        )}>
                                                            <use href={`${icons}#icon-heart`}></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={styles.headerSecond}>
                                                <div className={styles.subContainer}>
                                                    <svg width={16} height={16} className={styles.iconStar}>
                                                        <use href={`${icons}#icon-star`}></use>
                                                    </svg>
                                                    <p className={styles.textRating}>{`${advert.rating}(${advert.reviews.length} Reviews)`}</p>
                                                </div>
                                                <div className={styles.subContainer}>
                                                    <svg width={16} height={16} className={styles.iconWrapper}>
                                                        <use href={`${icons}#icon-location`}></use>
                                                    </svg>
                                                    <p className={styles.textLocation}>{advert.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className={styles.description}>{advert.description.split(" ").slice(0, 10).join(" ")}...</p>
                                        <div className={styles.detailsContainer}>
                                            <div className={styles.detail}>
                                                <svg width={20} height={20} className={styles.iconWrapperSecond}>
                                                    <use href={`${icons}#icon-users`}></use>
                                                </svg>
                                                <p className={styles.detailText}>{advert.adults} adults</p>
                                            </div>
                                            <div className={styles.detail}>
                                                <svg width={20} height={20} className={styles.iconWrapper}>
                                                    <use href={`${icons}#icon-transmission`}></use>
                                                </svg>
                                                <p className={styles.detailText}>{advert.transmission}</p>
                                            </div>
                                            <div className={styles.detail}>
                                                <svg width={20} height={20} className={styles.iconWrapperSecond}>
                                                    <use href={`${icons}#icon-gas-station`}></use>
                                                </svg>
                                                <p className={styles.detailText}>{advert.engine}</p>
                                            </div>
                                            <div className={styles.detail}>
                                                <svg width={20} height={20} className={styles.iconWrapper}>
                                                    <use href={`${icons}#icon-cutlery`}></use>
                                                </svg>
                                                <p className={styles.detailText}>Kitchen</p>
                                            </div>
                                            <div className={styles.detail}>
                                                <svg width={20} height={20} className={styles.iconWrapper}>
                                                    <use href={`${icons}#icon-bed`}></use>
                                                </svg>
                                                <p className={styles.detailText}>{advert.details.beds} beds</p>
                                            </div>

                                            <div className={styles.detail}>
                                                <svg width={20} height={20} className={styles.iconWrapperSecond}>
                                                    <use href={`${icons}#icon-wind`}></use>
                                                </svg>
                                                <p className={styles.detailText}>AC</p>
                                            </div>
                                        </div>
                                        <button type="click" className={styles.buttonShowMore}>Show more</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {
                            totalCount !== 0 &&
                            totalCount >= currentCount &&
                            totalCount !== currentCount &&
                            <ButtonLoadMore onClick={handleLoadMore} />
                        }
                    </div>
                ) : (
                    <div className={styles.noContainer}>
                        <img src={camper} alt="Camper" />
                        <h1 className={styles.noTitle}>No favorites adverts...</h1>
                    </div>
                )
            }
        </>
    );
};