import {AppBar, Avatar, Box, Button, Checkbox, IconButton, Toolbar, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import {toggleTheme} from "../../state/slices/themeSlice.js";
import {useNavigate} from "react-router-dom";
import {openSidebar} from "../../state/slices/sidebarSlice.js";

const Navbar = () => {
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate("/signin");
    }

    const handleDrawerOpen = () => {
        dispatch(openSidebar());
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="background">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Prototype
                    </Typography>
                    <Checkbox
                        onChange={handleToggleTheme}
                        icon={<DarkModeOutlinedIcon/>}
                        checkedIcon={<DarkModeOutlinedIcon/>}
                    />
                    {loggedIn ? (
                        <Avatar sx={{width: 30, height: 30}}>H</Avatar>
                    ) : (
                        <Button color="inherit" onClick={handleSignIn}>Login</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
