import React, { Suspense } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import clsx from "clsx";

export const Header = () => {
    const location = useLocation();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <Link to="/catalog" className={clsx(
                        styles.link,
                        { [styles.linkActive]: location.pathname === "/catalog" }
                    )}>
                        Catalog
                    </Link>
                    <Link to="/favorites" className={clsx(
                        styles.link,
                        { [styles.linkActive]: location.pathname === "/favorites" }
                    )}>
                        Favorites
                    </Link>
                </nav>
            </header>
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    );
};
