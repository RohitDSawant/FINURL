import React from "react";
import HomeA from "../Components/Homepage_Components/HomeA";
import HomeB from "../Components/Homepage_Components/HomeB";
import HomeCLoans from "../Components/Homepage_Components/HomeC.(Loans)";
import HomeDSlabs from "../Components/Homepage_Components/HomeD.Slabs";
import HomeEScore from "../Components/Homepage_Components/HomeEScore";
import HomeFReviews from "../Components/Homepage_Components/HomeFReviews";
import HomeGPartners from "../Components/Homepage_Components/HomeGPartners";
import LoanCalculator from "../Components/Homepage_Components/LoanCalculator";

const Homepage = () => {
  return (
    <>
      <HomeA />
      <HomeB />
      <HomeDSlabs />
      <HomeCLoans />
      <LoanCalculator />
      <HomeEScore />
      <HomeFReviews />
      <HomeGPartners />
    </>
  );
};

export default Homepage;
