import React from "react";
import Navbar from "../Components/Common/Navbar";
import PersonalLoanHeader from "../Components/Personal_Loan_Components/PersonalLoanHeader";
import PersonalLoanBody from "../Components/Personal_Loan_Components/PersonalLoanBody";
import Footer from "../Components/Common/Footer";

const PersonalLoan = () => {
  return (
    <>
      <Navbar />
      <PersonalLoanHeader />
      <PersonalLoanBody />
      <Footer />
    </>
  );
};

export default PersonalLoan;
