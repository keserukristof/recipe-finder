import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom';

import { AppBar, Box, IconButton, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useNavitionContext } from '../../contexts/navigation.context';

export const Navbar: FunctionComponent = () => {
    const { handleDrawerToggle, navItems } = useNavitionContext();

    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Recipe Finder
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Link to={item.path}>
                            <Button key={item.name} sx={{ color: '#fff' }}>
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}