import { FunctionComponent } from "react";

import { Box, Toolbar, CssBaseline, Container } from "@mui/material";

import { Navbar } from "./navbar.component";
import { DrawerContainer } from "./Drawer/drawer-container.component";
import { NavigationContextProvider } from "./../../providers/navigation.context.provider"
import { AppRoutes } from '../app-routes.component'


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
                    <AppRoutes />
                </Container>
            </Box>
        </Box>
    );
};