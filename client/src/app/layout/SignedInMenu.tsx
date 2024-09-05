import { Button, Menu, Fade, MenuItem, Typography, Divider } from "@mui/material";
import { useState } from "react";
import { signOut } from "../../features/account/accountSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { clearBasket } from '../../features/basket/basketSlice';
import { Link } from 'react-router-dom';

export default function SignedInMenu() {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.account);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                color='inherit'
                onClick={handleClick}
                sx={{ typography: 'h6', textTransform: 'none', bgcolor: 'background.paper', borderRadius: 1, padding: '8px 16px', '&:hover': { bgcolor: 'background.default' } }}
            >
                <Typography variant="body1" color="text.primary">
                    {user?.email}
                </Typography>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                PaperProps={{
                    sx: {
                        bgcolor: 'background.paper', 
                        borderRadius: 2, 
                        boxShadow: 3,
                        color: 'text.primary'
                    }
                }}
            >
                <MenuItem component={Link} to='/profile' onClick={handleClose}>
                    Profile
                </MenuItem>
                <MenuItem component={Link} to='/orders' onClick={handleClose}>
                    My Orders
                </MenuItem>
                <Divider />
                <MenuItem 
                    onClick={() => {
                        dispatch(signOut());
                        dispatch(clearBasket());
                    }} 
                    sx={{ color: 'error.main' }}
                >
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}
