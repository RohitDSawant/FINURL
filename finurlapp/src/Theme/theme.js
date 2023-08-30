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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#121b28", // Customize the label color
          },
          "&:after": {
            borderColor: "#121b28", // Customize the label color when selected
          },
          "& .MuiInputLabel-root": {
            color: "#121b28", // Customize the label color
          },
          "& .MuiInputLabel-shrink": {
            color: "#121b28", // Customize the label color when it's shrunk
          },
          "& .MuiInputBase-input": {
            color: "#121b28", // Customize the input text color
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#ccc", // Customize the placeholder color
          },
          "& .MuiInputBase-select": {
            color: "#121b28", // Customize the input text color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#121b28", // Customize the label color
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#121b28", // Customize the label color
          },
          "&:after": {
            borderColor: "#121b28", // Customize the label color when selected
          },
          "& .MuiSvgIcon-root": {
            color: "#121b28", // Customize the arrow icon color
          },
          "& option": {
            color: "#121b28", // Customize the option text color
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "121b28", // Remove the focus background color
          },
          "& .MuiSelect-select::placeholder": {
            color: "#121b28", // Customize the placeholder color
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          color: "#121b28",
        },
        columnHeader: {
          color: "#fff",
          backgroundColor: "#121b28",
          fontSize: "medium"
        },
        cell: {
          color: "#121b28",
          backgroundColor: "#fff",
          fontSize: "medium"
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff", // Background color for pagination section
          color: "#121b28",
          fontWeight: 600,
          fontSize: "large" // Text color for pagination controls
        },
      },
    },
  },
});

// Make the theme's typography responsive
theme = responsiveFontSizes(theme);

export default theme;
