import { FunctionComponent } from "react";

import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

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
                {navItems.map((item) => (
                    <Link to={item.path}>
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    )
}
