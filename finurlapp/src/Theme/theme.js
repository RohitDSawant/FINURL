import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#252A34",
      light: "#D6E6F2",
      dark: "#769FCD",
    },
    secondary: {
      main: "#AED2FF",
      dark: "#C9D6DF",
      light: "#AED2FF",
    },
    background: {
      default: "#F9F9F9",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "6rem",
      color: "#252A34",
    },
    h2: {
      fontSize: "5rem",
      color: "#252A34",
    },
    h3: {
      fontSize: "4rem",
      color: "#252A34",
    },
    h4: {
      fontSize: "3rem",
      color: "#252A34",
    },
    h5: {
      fontSize: "2rem",
      color: "#252A34",
    },
    h6: {
      fontSize: "1.5rem",
      color: "#252A34",
    },
    body1: {
      fontSize: "1rem",
      color: "#252A34",
    },
    body2: {
      fontSize: "0.8rem",
      color: "#252A34",
    },
    subtitle1: {
      fontSize: "1.25rem",
      color: "#252A34",
    },
    subtitle2: {
      fontSize: "0.75rem",
      color: "#252A34",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1B262C",
          color: "#fff",
          "&:hover": {
            border: "1px solid #AED2FF", // Customize the border color
            backgroundColor: "#252A34", // Customize the background color on hover
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:before": {
            border: "1px solid #252A34", // Customize the label color
          },
          "&:after": {
            border: "1px solid #252A34", // Customize the label color
          },
          "& .MuiInputLabel-root": {
            color: "#252A34", // Customize the label color
          },
          "& .MuiInputLabel-shrink": {
            color: "#252A34", // Customize the label color when it's shrunk
          },
          "& .MuiInputBase-input": {
            color: "#252A34",
            borderBottom: "2px solid #252A34", // Customize the label color
            // Customize the input text color
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#252A34", // Customize the placeholder color
          },
          "& .MuiInputBase-select": {
            color: "#252A34", // Customize the input text color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#252A34", // Customize the label color
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#252A34", // Customize the label color
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#252A34", // Customize the label color
            color: "#252A34", // Customize the option text color
          },
          "&:after": {
            borderColor: "#252A34",
            color: "#252A34", // Customize the option text color
            // Customize the label color when selected
          },
          "& .MuiSvgIcon-root": {
            color: "#252A34", // Customize the arrow icon color
          },
          "& option": {
            color: "#252A34", // Customize the option text color
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "#fff",
            color: "#252A34", // Remove the focus background color
          },
          "& .MuiSelect-select::placeholder": {
            color: "#252A34", // Customize the placeholder color
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          color: "#252A34",
        },
        columnHeader: {
          color: "#252A34",
          backgroundColor: "#C9D6DF",
          fontSize: "small",
        },
        cell: {
          color: "#C9D6DF",
          backgroundColor: "#C9D6DF",
          fontSize: "medium",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: "#C9D6DF", // Background color for pagination section
          color: "#252A34",
          fontWeight: 600,
          fontSize: "small",
        },
      },
    },
  },
});

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#AED2FF",
      dark: "#C9D6DF",
      light: "#F3F8FF",
    },
    secondary: {
      main: "#3F72AF",
      light: "#252A34",
      dark: "#1B262C",
    },
    background: {
      default: "#0F0E0E",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "6rem",
      color: "#AED2FF",
    },
    h2: {
      fontSize: "5rem",
      color: "#AED2FF",
    },
    h3: {
      fontSize: "4rem",
      color: "#AED2FF",
    },
    h4: {
      fontSize: "3rem",
      color: "#AED2FF",
    },
    h5: {
      fontSize: "2rem",
      color: "#AED2FF",
    },
    h6: {
      fontSize: "1.5rem",
      color: "#AED2FF",
    },
    body1: {
      fontSize: "1rem",
      color: "#AED2FF",
    },
    body2: {
      fontSize: "0.8rem",
      color: "#AED2FF",
    },
    subtitle1: {
      fontSize: "1.25rem",
      color: "#AED2FF",
    },
    subtitle2: {
      fontSize: "0.75rem",
      color: "#AED2FF",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:before": {
            border: "1px solid #AED2FF", // Customize the label color
          },
          "&:after": {
            border: "1px solid #AED2FF", // Customize the label color
          },
          "& .MuiInputLabel-root": {
            color: "#AED2FF", // Customize the label color
          },
          "& .MuiInputLabel-shrink": {
            color: "#AED2FF", // Customize the label color when it's shrunk
          },
          "& .MuiInputBase-input": {
            color: "#fff",
            borderBottom: "2px solid #AED2FF", // Customize the label color
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
    MuiButton: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#AED2FF", // Customize the label color
            color: "#AED2FF", // Customize the option text color
          },
          "&:after": {
            borderColor: "#AED2FF",
            color: "#AED2FF", // Customize the option text color
            // Customize the label color when selected
          },
        },
        "&:hover": {
          backgroundColor: "#AED2FF",
          color: "fff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#AED2FF", // Customize the label color
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#AED2FF", // Customize the label color
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#AED2FF", // Customize the label color
            color: "#AED2FF", // Customize the option text color
          },
          "&:after": {
            borderColor: "#AED2FF",
            color: "#AED2FF", // Customize the option text color
            // Customize the label color when selected
          },
          "& .MuiSvgIcon-root": {
            color: "#AED2FF", // Customize the arrow icon color
          },
          "& option": {
            color: "#AED2FF", // Customize the option text color
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "#ccc",
            color: "#AED2FF", // Remove the focus background color
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
          color: "#AED2FF",
        },
        columnHeader: {
          color: "#AED2FF",
          backgroundColor: "#1B262C",
          fontSize: "small",
          // Add styles for the three dots options here
          "& .MuiDataGrid-menuIcon": {
            color: "#fff", // Change the color to your desired color
          },
        },
        cell: {
          color: "#AED2FF",
          backgroundColor: "#1B262C",
          fontSize: "medium",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: "#1B262C", // Background color for pagination section
          color: "#AED2FF",
          fontWeight: 600,
          fontSize: "small",
        },
      },
    },
  },
});

// Make the theme's typography responsive
darkTheme = responsiveFontSizes(darkTheme);
lightTheme = responsiveFontSizes(lightTheme);

export { darkTheme, lightTheme };
