import "./App.css";
import Navbar from "./scenes/global/Navbar.jsx";
import {Box, Container, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {lightTheme, darkTheme} from "./assets/theme.js";
import Login from "./scenes/login/Login.jsx";

function App() {
    const darkMode = useSelector((state) => state.theme.mode);
    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <Box height="92.9vh" bgcolor="background.default" color="text.primary">
                        <Login></Login>
                </Box>
            </ThemeProvider>
        </>
    );
}

export default App;
