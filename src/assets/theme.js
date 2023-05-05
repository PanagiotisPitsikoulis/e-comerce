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
            primary: "#1f1f1f",
            secondary: "#494949",
        },
        background: {
            default: "#e8e8e8",
            paper: "#ffffff",
        },
    },
    typography: {
        fontFamily: "Open Sans, sans-serif",
    },
    shape: {
        borderRadius: 18, // increase border radius for more rounding
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
        borderRadius: 18, // increase border radius for more rounding
    },
    shadows: ["none"], // remove all drop shadows
});


