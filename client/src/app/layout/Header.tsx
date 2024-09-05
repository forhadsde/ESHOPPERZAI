import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector } from '../store/configureStore';
import SignedInMenu from './SignedInMenu';

// Navigation link data
const midLinks = [
    { title: 'home', path: '/home' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
];

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
];

// Styles for navigation links
const navLinkStyles = {
    color: 'text.primary', // Ensures text color is visible
    textDecoration: 'none',
    typography: 'h6',
    padding: '8px 16px',
    borderRadius: '4px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle hover effect
        color: 'primary.main' // Change color on hover
    },
    '&.active': {
        color: 'primary.main', // Change color for active link
        fontWeight: 'bold',
        borderBottom: '2px solid',  // Underline active link
        borderColor: 'primary.main'
    }
};

// Header component props interface
interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({ handleThemeChange, darkMode }: Props) {
    const { basket } = useAppSelector(state => state.basket);
    const { user } = useAppSelector(state => state.account);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <AppBar position='static' sx={{ boxShadow: 3, bgcolor: 'background.default' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3 }}>
                {/* Logo and theme switch */}
                <Box display='flex' alignItems='center'>
                    <Typography
                        variant='h6'
                        component={NavLink}
                        to='/'
                        sx={{ ...navLinkStyles, fontWeight: 'bold', color: 'primary.main' }} // Logo styling with primary color
                    >
                        Eshopperz
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={handleThemeChange}
                        color='default'
                        sx={{ ml: 2 }} // Margin left for spacing
                    />
                </Box>

                {/* Navigation links */}
                <Box display='flex' alignItems='center' gap={2}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navLinkStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                    {user && user.roles?.includes('Admin') &&
                    <ListItem
                        component={NavLink}
                        to={'/inventory'}
                        sx={navLinkStyles}
                    >
                        INVENTORY
                    </ListItem>}
                </Box>

                {/* Right section with cart and user menu */}
                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size='large' color='inherit' sx={{ mr: 2 }}>
                        <Badge badgeContent={itemCount} color='secondary'>
                            <ShoppingCart sx={{ color: 'text.primary' }} /> {/* Ensure icon color is visible */}
                        </Badge>
                    </IconButton>
                    {user ? (
                        <SignedInMenu />
                    ) : (
                        <Box display='flex' alignItems='center' gap={2}>
                            {rightLinks.map(({ title, path }) => (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navLinkStyles}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </Box>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
