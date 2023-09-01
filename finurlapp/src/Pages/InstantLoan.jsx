import React from "react";
import InstantLoanHeader from "../Components/Instant_Loan_Components/InstantLoanHeader";
import InstantLoanMid from "../Components/Instant_Loan_Components/InstantLoanMid";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const InstantLoan = () => {
  return (
    <>
      <Navbar />
      <InstantLoanHeader />
      <InstantLoanMid />
      <Footer/>
    </>
  );
};

export default InstantLoan;
