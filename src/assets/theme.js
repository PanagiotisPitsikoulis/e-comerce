import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#000",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#f2f2f2",
      secondary: "#bbb",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

export default { lightTheme, darkTheme };
