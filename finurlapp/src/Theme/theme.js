import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Segoe UI", 
    h1: {
      fontSize: "large",
    },
    h2: {
      fontSize: 60,
    },
    h3: {
      fontSize: 60,
    },
    h4: {
      fontSize: 40,
    },
    h5: {
      fontSize: 30,
    },
    h6: {
      fontSize: 20,
    },
    p:{
        fontSize: 10,
    }
  },
});

// Make the theme's typography responsive
theme = responsiveFontSizes(theme);

export default theme;
