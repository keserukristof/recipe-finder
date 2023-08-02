import { FunctionComponent, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Box, Toolbar, Typography, CssBaseline } from "@mui/material";

import { NavigationContext } from "../../../contexts/navigation.context";
import { Navbar } from "../Navbar/navbar.component";
import { DrawerContainer } from "../Drawer/drawer-container.component";
import { HomePage } from "../../pages/home/HomePage/home-page.component";
import { AboutPage } from "../../pages/about/AboutPage/about-page.component";

export const Layout: FunctionComponent = () => {
    const navItems = [{ name: 'Home', path: "/" }, { name: 'About', path: "/about" }];

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <NavigationContext.Provider value={{ mobileOpen, handleDrawerToggle, navItems }}>
                    <Navbar />
                    <DrawerContainer />
                </NavigationContext.Provider>
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />
                    <Typography>

                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                    </Typography>
                </Box>
            </Box>
        </BrowserRouter>
    );
};