import React from "react"
import { FavoriteList } from "../../components/FavoriteList/FavoriteList";
import { FilterForm } from "../../components/FilterForm/FilterForm";
import styles from "./Favorites.module.css";

const Favorites = () => {
    return (
        <div className={styles.favoritesContainer}>
            <FilterForm />
            <FavoriteList />
        </div>
    )
};

export default Favorites;
