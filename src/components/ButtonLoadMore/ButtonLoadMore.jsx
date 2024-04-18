import React from "react";
import styles from "./ButtonLoadMore.module.css"

export const ButtonLoadMore = ( { onClick }) => {
    return (
        <>
            <button type="click" onClick={onClick} className={styles.buttonLoadMore}>Load more</button>
        </>
    )
}