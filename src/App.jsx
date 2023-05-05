import "./App.css";
import Navbar from "./scenes/global/Navbar.jsx";
import {ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {lightTheme, darkTheme} from "./assets/theme.js";
import Home from "./scenes/home/Home.jsx";
import Footer from "./scenes/global/Footer.jsx";
import HomeLayout from "./scenes/home/HomeLayout.jsx";
import Sidebar from "./scenes/global/Sidebar.jsx";
import * as React from "react";

function App() {
    const darkMode = useSelector((state) => state.theme.mode);
    const theme = darkMode ? darkTheme : lightTheme;

    return (<>
        <ThemeProvider theme={theme}>
            <Navbar/>
            <Sidebar/>
            <HomeLayout/>
            <Footer/>
        </ThemeProvider>
    </>);
}

export default App;
