import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#445069",
      light: "#0004e",
      dark: "#fff",
    },
    secondary: {
      main: "#6a1b9a",
      dark: "#000f00",
      light: "#4a148c",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "6rem",
    },
    h2: {
      fontSize: "5rem",
    },
    h3: {
      fontSize: "4rem",
    },
    h4: {
      fontSize: "3rem",
    },
    h5: {
      fontSize: "2rem",
    },
    h6: {
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.8rem",
    },
    subtitle1: {
      fontSize: "1.25rem",
    },
    subtitle2: {
      fontSize: "0.75rem",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:before": {
            border: "1px solid #000", // Customize the label color
          },
          "&:after": {
            border: "1px solid #000", // Customize the label color
          },
          "& .MuiInputLabel-root": {
            color: "#000", // Customize the label color
          },
          "& .MuiInputLabel-shrink": {
            color: "#000", // Customize the label color when it's shrunk
          },
          "& .MuiInputBase-input": {
            color: "#000",
            borderBottom: "2px solid #000", // Customize the label color
            // Customize the input text color
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#ccc", // Customize the placeholder color
          },
          "& .MuiInputBase-select": {
            color: "#ccc", // Customize the input text color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000", // Customize the label color
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#000", // Customize the label color
            color: "#000", // Customize the option text color
          },
          "&:after": {
            borderColor: "#000",
            color: "#000", // Customize the option text color
            // Customize the label color when selected
          },
          "& .MuiSvgIcon-root": {
            color: "#000", // Customize the arrow icon color
          },
          "& option": {
            color: "#000", // Customize the option text color
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "#ccc",
            color: "#000", // Remove the focus background color
          },
          "& .MuiSelect-select::placeholder": {
            color: "#ccc", // Customize the placeholder color
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          color: "#000",
        },
        columnHeader: {
          color: "#fff",
          backgroundColor: "#445069",
          fontSize: "small",
        },
        cell: {
          color: "#000",
          backgroundColor: "#fff",
          fontSize: "medium",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: "#445069", // Background color for pagination section
          color: "#fff",
          fontWeight: 600,
          fontSize: "small",
        },
      },
    },
  },
});

// Make the theme's typography responsive
theme = responsiveFontSizes(theme);

export default theme;
