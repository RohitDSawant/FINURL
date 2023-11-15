import React, { useContext, useEffect, useState } from "react";
import { DasboardContext } from "../../Context/DashboardContext";
import Transaction from "./Loans_Records/LoanRecords";
import ActualBankWise from "./Bank_Wise_Offers/ActualBankWise";
import LoanRecords from "./Loans_Records/LoanRecords";

const RightDashboard = () => {
  const { activeTab } = useContext(DasboardContext);
  const [renderTab, setRenderedTab] = useState(<LoanRecords />);

  useEffect(() => {
    if (activeTab === "records") {
      setRenderedTab(<Transaction />);
    } else if (activeTab === "bank offers") {
      setRenderedTab(<ActualBankWise />);
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
