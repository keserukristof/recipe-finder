import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

import { Box, Toolbar, CssBaseline, Container } from "@mui/material";

import { Navbar } from "./navbar.component";
import { DrawerContainer } from "./Drawer/drawer-container.component";
import { Recipe } from "../pages/recipes/recipe.component";
import { HomePage } from "../pages/home/home-page.component";
import { AboutPage } from "../pages/about/about-page.component";
import { RecipesPage } from "../pages/recipes/recipes-page.component"
import { NavigationContextProvider } from "./../../providers/navigation.context.provider"



export const Layout: FunctionComponent = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavigationContextProvider>
                <Navbar />
                <DrawerContainer />
            </NavigationContextProvider>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Container>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/recipes" element={<RecipesPage />} />
                        <Route path="/recipes/:id" element={<Recipe />} />
                    </Routes>
                </Container>
            </Box>
        </Box>
    );
};