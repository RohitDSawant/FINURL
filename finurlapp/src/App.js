import { useContext, useEffect } from "react";
import "./App.css";
// import Navbar from "./Components/Common/Navbar";
import Router from "./Router/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, ThemeProvider } from "@mui/material";
import { ThemeContext } from "./Context/ThemeContext";
import { darkTheme, lightTheme } from "./Theme/theme";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { currentTheme } = useContext(ThemeContext);

  const theme = currentTheme === "lightTheme" ?  lightTheme : darkTheme
    
  console.log(theme)

  return (
    <Box sx={{backgroundColor: theme.palette.background.default}} className="App">
      {/* <Navbar /> */}
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Box>
  );
}

export default App;
