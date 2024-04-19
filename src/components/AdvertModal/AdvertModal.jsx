import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedAdvert } from "../../redux/selectors";
import { getAdvert } from "../../redux/operations";

import styles from "./AdvertModal.module.css";
import clsx from "clsx";
import icons from "../../images/sprite.svg";

export const AdvertModal = ({ advertId, onClose }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdvert({ _id: advertId }));
    }, [advertId, dispatch]);

    const advert = useSelector(selectSelectedAdvert);

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = useCallback(() => {
        setIsOpen(false);
        setTimeout(onClose, 500)
    }, [onClose]);

    const handleBackdropClick = (event) => {
        if (event.currentTarget === event.target) {
            handleClose();
        }
    };

    useEffect(() => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        const close = (e) => {
            if (e.code === 'Escape') {
                handleClose();
            }
        };
    
        document.addEventListener('keydown', close);
    
        return () => {
            document.removeEventListener('keydown', close);
        };
    }, [onClose, handleClose]);

    return (
        <div onClick={handleBackdropClick} className={clsx(
            isOpen && styles.backdrop,
            !isOpen && styles.backdropHidden,
        )}>
            <div className={clsx(
                isOpen && styles.modal,
                !isOpen && styles.modalHidden,
            )}>
                <div className={styles.content}>
                    <div className={styles.headerModal}>
                        <div className={styles.subHeader}>
                            <div className={styles.titleContainer}>
                                <h2 className={styles.titleModal}>{advert?.name}</h2>
                                <button type="click" onClick={handleClose} className={styles.buttonClose}>
                                    <svg width={32} height={32} className={styles.iconClose}>
                                        <use href={`${icons}#icon-close`}></use>
                                    </svg>
                                </button>
                            </div>
                            <div className={styles.infoContainer}>
                                <div className={styles.subContainer}>
                                    <svg width={16} height={16} className={styles.iconStar}>
                                        <use href={`${icons}#icon-star`}></use>
                                    </svg>
                                    <p className={styles.textRating}>{`${advert?.rating}(${advert?.reviews.length} Reviews)`}</p>
                                </div>
                                <div className={styles.subContainer}>
                                    <svg width={16} height={16} className={styles.iconWrapper}>
                                        <use href={`${icons}#icon-location`}></use>
                                    </svg>
                                    <p className={styles.textLocation}>{advert?.location}</p>
                                </div>
                            </div>
                        </div>
                        <h2 className={styles.titleModal}>€{advert?.price}.00</h2>
                    </div>
                    <ul className={styles.gallery}>
                        {advert?.gallery.map((image, index) => (
                            <li key={index}>
                                <img src={image} alt="Advert" width={290} height={310} className={styles.advertImage} />
                            </li>
                        ))}
                    </ul>
                    <div className={styles.descriptionContainer}>
                        <p className={styles.description}>{advert?.description}</p>
                        <div className={styles.additionalLinkContainer}>
                            <p className={styles.additionalLink}>Features</p>
                            <p className={styles.additionalLink}>Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
