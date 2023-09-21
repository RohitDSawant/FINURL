import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0F2C59",
      light: "#0F2C59",
      dark: "#1B262C",
    },
    secondary: {
      main: "#CFF1EF",
      dark: "#C6CFFF",
      light: "#F3F8FF",
    },
    background: {
      default: "#fff",
      
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "6rem",
      color: "#0F2C59",
    },
    h2: {
      fontSize: "5rem",
      color: "#0F2C59",
    },
    h3: {
      fontSize: "4rem",
      color: "#0F2C59",
    },
    h4: {
      fontSize: "3rem",
      color: "#0F2C59",
    },
    h5: {
      fontSize: "2rem",
      color: "#0F2C59",
    },
    h6: {
      fontSize: "1.5rem",
      color: "#0F2C59",
    },
    body1: {
      fontSize: "1rem",
      color: "#0F2C59",
    },
    body2: {
      fontSize: "0.8rem",
      color: "#0F2C59",
    },
    subtitle1: {
      fontSize: "1.25rem",
      color: "#0F2C59",
    },
    subtitle2: {
      fontSize: "0.75rem",
      color: "#0F2C59",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1B262C",
          color:"#CFF1EF",
          "&:hover": {
            border: "1px solid #CFF1EF", // Customize the border color
            backgroundColor: "#0F2C59", // Customize the background color on hover
          },
        },
      },
    },
    
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:before": {
            border: "1px solid #0F2C59", // Customize the label color
          },
          "&:after": {
            border: "1px solid #0F2C59", // Customize the label color
          },
          "& .MuiInputLabel-root": {
            color: "#0F2C59", // Customize the label color
          },
          "& .MuiInputLabel-shrink": {
            color: "#0F2C59", // Customize the label color when it's shrunk
          },
          "& .MuiInputBase-input": {
            color: "#0F2C59",
            borderBottom: "2px solid #0F2C59", // Customize the label color
            // Customize the input text color
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#0F2C59", // Customize the placeholder color
          },
          "& .MuiInputBase-select": {
            color: "#0F2C59", // Customize the input text color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#0F2C59", // Customize the label color
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#0F2C59", // Customize the label color
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#0F2C59", // Customize the label color
            color: "#0F2C59", // Customize the option text color
          },
          "&:after": {
            borderColor: "#0F2C59",
            color: "#0F2C59", // Customize the option text color
            // Customize the label color when selected
          },
          "& .MuiSvgIcon-root": {
            color: "#0F2C59", // Customize the arrow icon color
          },
          "& option": {
            color: "#0F2C59", // Customize the option text color
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "#fff",
            color: "#0F2C59", // Remove the focus background color
          },
          "& .MuiSelect-select::placeholder": {
            color: "#0F2C59", // Customize the placeholder color
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          color: "#0F2C59",
        },
        columnHeader: {
          color: "#0F2C59",
          backgroundColor: "#CFF1EF",
          fontSize: "small",
        },
        cell: {
          color: "#0F2C59",
          backgroundColor: "#CFF1EF",
          fontSize: "medium",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: "#CFF1EF", // Background color for pagination section
          color: "#0F2C59",
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
      main: "#CFF1EF",
      dark: "#C6CFFF",
      light: "#F3F8FF",
    },
    secondary: {
      main: "#3F72AF",
      light: "#0F2C59",
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
      color: "#CFF1EF",
    },
    h2: {
      fontSize: "5rem",
      color: "#CFF1EF",
    },
    h3: {
      fontSize: "4rem",
      color: "#CFF1EF",
    },
    h4: {
      fontSize: "3rem",
      color: "#CFF1EF",
    },
    h5: {
      fontSize: "2rem",
      color: "#CFF1EF",
    },
    h6: {
      fontSize: "1.5rem",
      color: "#CFF1EF",
    },
    body1: {
      fontSize: "1rem",
      color: "#CFF1EF",
    },
    body2: {
      fontSize: "0.8rem",
      color: "#CFF1EF",
    },
    subtitle1: {
      fontSize: "1.25rem",
      color: "#CFF1EF",
    },
    subtitle2: {
      fontSize: "0.75rem",
      color: "#CFF1EF",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:before": {
            border: "1px solid #CFF1EF", // Customize the label color
          },
          "&:after": {
            border: "1px solid #CFF1EF", // Customize the label color
          },
          "& .MuiInputLabel-root": {
            color: "#CFF1EF", // Customize the label color
          },
          "& .MuiInputLabel-shrink": {
            color: "#CFF1EF", // Customize the label color when it's shrunk
          },
          "& .MuiInputBase-input": {
            color: "#fff",
            borderBottom: "2px solid #CFF1EF", // Customize the label color
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
            borderColor: "#CFF1EF", // Customize the label color
            color: "#CFF1EF", // Customize the option text color
          },
          "&:after": {
            borderColor: "#CFF1EF",
            color: "#CFF1EF", // Customize the option text color
            // Customize the label color when selected
          },
        },
        "&:hover": {
          backgroundColor: "#CFF1EF",
          color: "red",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#CFF1EF", // Customize the label color
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#CFF1EF", // Customize the label color
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#CFF1EF", // Customize the label color
            color: "#CFF1EF", // Customize the option text color
          },
          "&:after": {
            borderColor: "#CFF1EF",
            color: "#CFF1EF", // Customize the option text color
            // Customize the label color when selected
          },
          "& .MuiSvgIcon-root": {
            color: "#CFF1EF", // Customize the arrow icon color
          },
          "& option": {
            color: "#CFF1EF", // Customize the option text color
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "#ccc",
            color: "#CFF1EF", // Remove the focus background color
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
          color: "#CFF1EF",
        },
        columnHeader: {
          color: "#CFF1EF",
          backgroundColor: "#0F2C59",
          fontSize: "small",
        },
        cell: {
          color: "#CFF1EF",
          backgroundColor: "#0F2C59",
          fontSize: "medium",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: "#0F2C59", // Background color for pagination section
          color: "#CFF1EF",
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
