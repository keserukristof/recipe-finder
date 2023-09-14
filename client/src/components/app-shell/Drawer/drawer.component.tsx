import { FunctionComponent } from "react";

import { Link } from "react-router-dom";

import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

import { useNavitionContext } from "../../../contexts/navigation.context";


export const Drawer: FunctionComponent = () => {
    const { handleDrawerToggle, navItems } = useNavitionContext();

    return (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Recipe Finder
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, key) => (
                    <Link to={item.path} key={key}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))};
            </List>
        </Box>
    );
};
