import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#2196f3",
        },
        secondary: {
            main: "#7154ff",
        },
        text: {
            primary: "#000",
            secondary: "#555",
        },
        background: {
            default: "#dedede",
            paper: "#ffffff",
        },
    },
    typography: {
        fontFamily: "Open Sans, sans-serif",
    },
    shape: {
        borderRadius: 26, // increase border radius for more rounding
    },
    shadows: ["none"], // remove all drop shadows
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#2196f3",
        },
        secondary: {
            main: "#7154ff",
        },
        text: {
            primary: "#f2f2f2",
            secondary: "#bbb",
        },
        background: {
            default: "#212121",
            paper: "#000000",
        },
    },
    typography: {
        fontFamily: "Open Sans, sans-serif",
    },
    shape: {
        borderRadius: 26, // increase border radius for more rounding
    },
    shadows: ["none"], // remove all drop shadows
});


