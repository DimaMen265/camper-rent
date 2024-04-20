import React from "react"
import { CatalogList } from "../../components/CatalogList/CatalogList";
import { FilterForm } from "../../components/FilterForm/FilterForm";
import styles from "./Catalog.module.css";

const Catalog = () => {
    return (
        <div className={styles.catalogContainer}>
            <FilterForm />
            <CatalogList />
        </div>
    );
};

export default Catalog;
