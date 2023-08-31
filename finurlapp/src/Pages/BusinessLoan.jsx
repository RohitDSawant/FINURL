import React from "react";
import BusinessLoanBody from "../Components/Business_Loans_Components/BusinessLoanBody";
import BusinessLoanHeader from "../Components/Business_Loans_Components/BusinessLoanHeader";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const BusinessLoan = () => {
  return (
    <>
      <Navbar />
      <BusinessLoanHeader />
      <BusinessLoanBody />
      <Footer/>
    </>
  );
};

export default BusinessLoan;
