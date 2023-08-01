import { FunctionComponent, useState } from "react";

import { Box, Toolbar, Typography, CssBaseline } from "@mui/material";

import { NavigationContext } from "../../../contexts/navigation.context";
import { Navbar } from "../Navbar/navbar.component";
import { DrawerContainer } from "../Drawer/drawer-container.component";

export const Layout: FunctionComponent = () => {
    const navItems = ['Home', 'About', 'Contact'];

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavigationContext.Provider value={{ mobileOpen, handleDrawerToggle, navItems }}>
                <Navbar />
                <DrawerContainer />
            </NavigationContext.Provider>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>
                    <p>ASD</p>
                </Typography>
            </Box>
        </Box>
    );
};