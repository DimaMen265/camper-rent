import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";

import { Header } from "./Header/Header";

const Welcome = lazy(() => import("../pages/Welcome/Welcome"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));

// import { Welcome } from "../pages/Welcome/Welcome";
// import { Catalog } from "../pages/Catalog/Catalog";
// import { Favorites } from "../pages/Favorites/Favorites";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Welcome />} /> 
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
};
