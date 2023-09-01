import React, { useContext, useEffect, useState } from "react";
import { DasboardContext } from "../../Context/DashboardContext";
import Transaction from "./Transactions/LoanRecords";
import ActualDashboardSection from "./Dashboard/ActualDashboardSection";
import ActualBankWise from "./Bank_Wise_Offers/ActualBankWise";

const RightDashboard = () => {
  const { activeTab } = useContext(DasboardContext);
  const [renderTab, setRenderedTab] = useState(<ActualDashboardSection />);

  useEffect(() => {
    if (activeTab === "records") {
      setRenderedTab(<Transaction />);
    } else if (activeTab === "bank offers") {
      setRenderedTab(<ActualBankWise />);
    } else if (activeTab === "dashboard") {
      setRenderedTab(<ActualDashboardSection />);
    }
  }, [activeTab]);

  return (
    <>
      {/* <section style={{ border: "1px solid", width: "100%" }}> */}
      {renderTab}
      {/* </section> */}
    </>
  );
};

export default RightDashboard;
