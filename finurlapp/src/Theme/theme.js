import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#252A34",
      light: "#3282B8",
      dark: "#1B262C",
    },
    secondary: {
      main: "#FBE8E7",
      dark: "#FFC4D0",
      light: "#FCF5EE",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "6rem",
      color: "#3282B8",
    },
    h2: {
      fontSize: "5rem",
      color: "#3282B8",
    },
    h3: {
      fontSize: "4rem",
      color: "#3282B8",
    },
    h4: {
      fontSize: "3rem",
      color: "#3282B8",
    },
    h5: {
      fontSize: "2rem",
      color: "#3282B8",
    },
    h6: {
      fontSize: "1.5rem",
      color: "#3282B8",
    },
    body1: {
      fontSize: "1rem",
      color: "#3282B8",
    },
    body2: {
      fontSize: "0.8rem",
      color: "#3282B8",
    },
    subtitle1: {
      fontSize: "1.25rem",
      color: "#3282B8",
    },
    subtitle2: {
      fontSize: "0.75rem",
      color: "#3282B8",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1B262C",
          color:"#FBE8E7",
          "&:hover": {
            border: "1px solid #FBE8E7", // Customize the border color
            backgroundColor: "#252A34", // Customize the background color on hover
          },
        },
      },
    },
    
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:before": {
            border: "1px solid #3282B8", // Customize the label color
          },
          "&:after": {
            border: "1px solid #3282B8", // Customize the label color
          },
          "& .MuiInputLabel-root": {
            color: "#3282B8", // Customize the label color
          },
          "& .MuiInputLabel-shrink": {
            color: "#3282B8", // Customize the label color when it's shrunk
          },
          "& .MuiInputBase-input": {
            color: "#3282B8",
            borderBottom: "2px solid #3282B8", // Customize the label color
            // Customize the input text color
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#3282B8", // Customize the placeholder color
          },
          "& .MuiInputBase-select": {
            color: "#3282B8", // Customize the input text color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#3282B8", // Customize the label color
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#3282B8", // Customize the label color
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#3282B8", // Customize the label color
            color: "#3282B8", // Customize the option text color
          },
          "&:after": {
            borderColor: "#3282B8",
            color: "#3282B8", // Customize the option text color
            // Customize the label color when selected
          },
          "& .MuiSvgIcon-root": {
            color: "#3282B8", // Customize the arrow icon color
          },
          "& option": {
            color: "#3282B8", // Customize the option text color
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "#fff",
            color: "#3282B8", // Remove the focus background color
          },
          "& .MuiSelect-select::placeholder": {
            color: "#3282B8", // Customize the placeholder color
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
          backgroundColor: "#FBE8E7",
          fontSize: "small",
        },
        cell: {
          color: "#252A34",
          backgroundColor: "#FBE8E7",
          fontSize: "medium",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: "#FBE8E7", // Background color for pagination section
          color: "#252A34",
          fontWeight: 600,
          fontSize: "small",
        },
      },
    },
  },
});

let darkTheme = createTheme({
  backgroundColor: "black",
  palette: {
    mode: "dark",
    primary: {
      main: "#FBE8E7",
      dark: "#FFC4D0",
      light: "#FCF5EE",
    },
    secondary: {
      main: "#3F72AF",
      light: "#3282B8",
      dark: "#1B262C",
    },
    background: {
      default: "#040D12",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "6rem",
      color: "#FBE8E7",
    },
    h2: {
      fontSize: "5rem",
      color: "#FBE8E7",
    },
    h3: {
      fontSize: "4rem",
      color: "#FBE8E7",
    },
    h4: {
      fontSize: "3rem",
      color: "#FBE8E7",
    },
    h5: {
      fontSize: "2rem",
      color: "#FBE8E7",
    },
    h6: {
      fontSize: "1.5rem",
      color: "#FBE8E7",
    },
    body1: {
      fontSize: "1rem",
      color: "#FBE8E7",
    },
    body2: {
      fontSize: "0.8rem",
      color: "#FBE8E7",
    },
    subtitle1: {
      fontSize: "1.25rem",
      color: "#FBE8E7",
    },
    subtitle2: {
      fontSize: "0.75rem",
      color: "#FBE8E7",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:before": {
            border: "1px solid #FBE8E7", // Customize the label color
          },
          "&:after": {
            border: "1px solid #FBE8E7", // Customize the label color
          },
          "& .MuiInputLabel-root": {
            color: "#FBE8E7", // Customize the label color
          },
          "& .MuiInputLabel-shrink": {
            color: "#FBE8E7", // Customize the label color when it's shrunk
          },
          "& .MuiInputBase-input": {
            color: "#fff",
            borderBottom: "2px solid #FBE8E7", // Customize the label color
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
            borderColor: "#FBE8E7", // Customize the label color
            color: "#FBE8E7", // Customize the option text color
          },
          "&:after": {
            borderColor: "#FBE8E7",
            color: "#FBE8E7", // Customize the option text color
            // Customize the label color when selected
          },
        },
        "&:hover": {
          backgroundColor: "#FBE8E7",
          color: "red",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#FBE8E7", // Customize the label color
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#FBE8E7", // Customize the label color
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#FBE8E7", // Customize the label color
            color: "#FBE8E7", // Customize the option text color
          },
          "&:after": {
            borderColor: "#FBE8E7",
            color: "#FBE8E7", // Customize the option text color
            // Customize the label color when selected
          },
          "& .MuiSvgIcon-root": {
            color: "#FBE8E7", // Customize the arrow icon color
          },
          "& option": {
            color: "#FBE8E7", // Customize the option text color
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "#ccc",
            color: "#FBE8E7", // Remove the focus background color
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
          color: "#FBE8E7",
        },
        columnHeader: {
          color: "#FBE8E7",
          backgroundColor: "#252A34",
          fontSize: "small",
        },
        cell: {
          color: "#FBE8E7",
          backgroundColor: "#252A34",
          fontSize: "medium",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: "#252A34", // Background color for pagination section
          color: "#FBE8E7",
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
