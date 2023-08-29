import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#121b28",
      light: "#121b284e",
      dark: "#fff",
    },
    secondary: {
      main: "#6a1b9a",
      dark: "#ffff00",
      light: "#4a148c",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "5rem",
    },
    h2: {
      fontSize: "4rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2.5rem",
    },
    h5: {
      fontSize: "1.75rem",
    },
    h6: {
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.75rem",
    },
    subtitle1: {
      fontSize: "1.25rem",
    },
    subtitle2: {
      fontSize: "0.85rem",
    },
  },
  textField: {
    backgroundColor: "#ccc",
  },
});

// Make the theme's typography responsive
theme = responsiveFontSizes(theme);

export default theme;
