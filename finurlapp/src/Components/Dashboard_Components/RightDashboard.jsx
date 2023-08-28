import React, { useContext, useEffect, useState } from "react";
import { DasboardContext } from "../../Context/DashboardContext";
import Transaction from "./Dashboard_Menu/Transaction";
import Footer from "../Common/Footer";

const RightDashboard = () => {
  const { activeTab } = useContext(DasboardContext);
  const [renderTab, setRenderedTab] = useState(<Footer/>);

  useEffect(() => {
    if (activeTab === "transaction") {
      setRenderedTab(<Transaction />);
    }
  }, [activeTab]);

  

  return <>
    {renderTab }
  </>;
};

export default RightDashboard;
