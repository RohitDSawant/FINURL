import { createTheme, responsiveFontSizes } from "@mui/material/styles";


let lightTheme = createTheme({

  palette: {
    mode: "light",
    primary: {
      main: "#FEFFAC",
      light: "#FFFAD7",
      dark: "#FBF0B2",
    },
    secondary: {
      main: "#053B50",
      dark: "#64CCC5",
      light: "#176B87",
    },
    background:{
      default: "#fff",
    }
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "6rem",
      color: "#053B50",
    },
    h2: {
      fontSize: "5rem",
      color: "#053B50",
    },
    h3: {
      fontSize: "4rem",
      color: "#053B50",
    },
    h4: {
      fontSize: "3rem",
      color: "#053B50",
    },
    h5: {
      fontSize: "2rem",
      color: "#053B50",
    },
    h6: {
      fontSize: "1.5rem",
      color: "#053B50",
    },
    body1: {
      fontSize: "1rem",
      color: "#053B50",
    },
    body2: {
      fontSize: "0.8rem",
      color: "#053B50",
    },
    subtitle1: {
      fontSize: "1.25rem",
      color: "#053B50",
    },
    subtitle2: {
      fontSize: "0.75rem",
      color: "#053B50",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:before": {
            border: "1px solid #053B50", // Customize the label color
          },
          "&:after": {
            border: "1px solid #053B50", // Customize the label color
          },
          "& .MuiInputLabel-root": {
            color: "#000", // Customize the label color
          },
          "& .MuiInputLabel-shrink": {
            color: "#053B50", // Customize the label color when it's shrunk
          },
          "& .MuiInputBase-input": {
            color: "#053B50",
            borderBottom: "2px solid #053B50", // Customize the label color
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
          color: "#053B50", // Customize the label color
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#053B50", // Customize the label color
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#053B50", // Customize the label color
            color: "#053B50", // Customize the option text color
          },
          "&:after": {
            borderColor: "#053B50",
            color: "#053B50", // Customize the option text color
            // Customize the label color when selected
          },
          "& .MuiSvgIcon-root": {
            color: "#053B50", // Customize the arrow icon color
          },
          "& option": {
            color: "#053B50", // Customize the option text color
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "#ccc",
            color: "#053B50", // Remove the focus background color
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
          color: "#053B50",
        },
        columnHeader: {
          color: "#053B50",
          backgroundColor: "#FEFFAC",
          fontSize: "small",
        },
        cell: {
          color: "#053B50",
          backgroundColor: "#FEFFAC",
          fontSize: "medium",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: "#FEFFAC", // Background color for pagination section
          color: "#053B50",
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
      main: "#053B50",
      dark: "#64CCC5",
      light: "#176B87",
    },
    secondary: {
      main: "#FEFFAC",
      light: "#FFFAD7",
      dark: "#FBF0B2",
    },
    background:{
      default: "#040D12",
    }
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "6rem",
      color: "#FEFFAC",
    },
    h2: {
      fontSize: "5rem",
      color: "#FEFFAC",
    },
    h3: {
      fontSize: "4rem",
      color: "#FEFFAC",
    },
    h4: {
      fontSize: "3rem",
      color: "#FEFFAC",
    },
    h5: {
      fontSize: "2rem",
      color: "#FEFFAC",
    },
    h6: {
      fontSize: "1.5rem",
      color: "#FEFFAC",
    },
    body1: {
      fontSize: "1rem",
      color: "#FEFFAC",
    },
    body2: {
      fontSize: "0.8rem",
      color: "#FEFFAC",
    },
    subtitle1: {
      fontSize: "1.25rem",
      color: "#FEFFAC",
    },
    subtitle2: {
      fontSize: "0.75rem",
      color: "#FEFFAC",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:before": {
            border: "1px solid #FEFFAC", // Customize the label color
          },
          "&:after": {
            border: "1px solid #FEFFAC", // Customize the label color
          },
          "& .MuiInputLabel-root": {
            color: "#FEFFAC", // Customize the label color
          },
          "& .MuiInputLabel-shrink": {
            color: "#FEFFAC", // Customize the label color when it's shrunk
          },
          "& .MuiInputBase-input": {
            color: "#fff",
            borderBottom: "2px solid #FEFFAC", // Customize the label color
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
          color: "#FEFFAC", // Customize the label color
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#FEFFAC", // Customize the label color
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#FEFFAC", // Customize the label color
            color: "#FEFFAC", // Customize the option text color
          },
          "&:after": {
            borderColor: "#FEFFAC",
            color: "#FEFFAC", // Customize the option text color
            // Customize the label color when selected
          },
          "& .MuiSvgIcon-root": {
            color: "#FEFFAC", // Customize the arrow icon color
          },
          "& option": {
            color: "#FEFFAC", // Customize the option text color
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "#ccc",
            color: "#FEFFAC", // Remove the focus background color
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
          color: "#FEFFAC",
        },
        columnHeader: {
          color: "#FEFFAC",
          backgroundColor: "#053B50",
          fontSize: "small",
        },
        cell: {
          color: "#FEFFAC",
          backgroundColor: "#053B50",
          fontSize: "medium",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: "#053B50", // Background color for pagination section
          color: "#FEFFAC",
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
