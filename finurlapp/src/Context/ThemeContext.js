import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeForApp = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState("lightTheme");

  return <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>{children}</ThemeContext.Provider>;
};

export default ThemeForApp;
