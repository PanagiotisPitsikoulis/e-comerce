import "./App.css";
import Navbar from "./scenes/global/Navbar.jsx";
import {ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {lightTheme, darkTheme} from "./assets/theme.js";
import Home from "./scenes/home/Home.jsx";
import Footer from "./scenes/global/Footer.jsx";

function App() {
    const darkMode = useSelector((state) => state.theme.mode);
    const theme = darkMode ? darkTheme : lightTheme;

    return (<>
        <ThemeProvider theme={theme}>
            <Navbar/>
            <Home/>
            <Footer/>
        </ThemeProvider>
    </>);
}

export default App;
