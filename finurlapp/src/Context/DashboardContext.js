import { createContext, useState } from "react";

export const DasboardContext = createContext(null);

export const DashboardTabsContext = ({ children }) => {
  const [activeTab, setActiveTab] = useState("records");
  const [toggle, setToggle] = useState(false)

  

  return (
    <DasboardContext.Provider value={{ activeTab, setActiveTab , toggle, setToggle}}>
      {children}
    </DasboardContext.Provider>
  );
};
