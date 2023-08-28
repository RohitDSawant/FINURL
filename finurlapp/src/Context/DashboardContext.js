import { createContext, useState } from "react";

export const DasboardContext = createContext(null);

export const DashboardTabsContext = ({ children }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <DasboardContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </DasboardContext.Provider>
  );
};
