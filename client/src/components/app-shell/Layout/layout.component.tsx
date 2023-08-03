import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

import { Box, Toolbar, Typography, CssBaseline, Container } from "@mui/material";

import { Navbar } from "../Navbar/navbar.component";
import { DrawerContainer } from "../Drawer/drawer-container.component";
import { HomePage } from "../../pages/home/HomePage/home-page.component";
import { AboutPage } from "../../pages/about/AboutPage/about-page.component";

import { NavigationContextProvider } from "../../../providers/navigation.context.provider"


export const Layout: FunctionComponent = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavigationContextProvider>
                <Navbar />
                <DrawerContainer />
            </NavigationContextProvider>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>
                <Container maxWidth="sm">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </Container>
                </Typography>
            </Box>
        </Box>
    );
};