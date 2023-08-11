import { FunctionComponent } from "react";

import Box from '@mui/material/Box';
import MuDrawer from '@mui/material/Drawer';

import { Drawer } from './drawer.component'
import { useNavitionContext } from "../../../contexts/navigation.context";


export const DrawerContainer: FunctionComponent = () => {
    const drawerWidth = 240;

    const { mobileOpen, handleDrawerToggle } = useNavitionContext();

    return (
        <Box component="nav">
            <MuDrawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Drawer/>
            </MuDrawer>
        </Box>
    );
}

