import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";

import { RecipePage } from "./pages/recipe-pages/recipe/recipe-page.component";
import { HomePage } from "./pages/home/home-page.component";
import { AboutPage } from "./pages/about/about-page.component";
import { RecipesPage } from "./pages/recipe-pages/recipes/recipes-page.component"

export const AppRoutes: FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipes/:id" element={<RecipePage />} />
        </Routes>
    );
}