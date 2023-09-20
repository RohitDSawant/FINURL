import React from "react";
import HomeA from "../Components/Homepage_Components/HomeA";
import HomeB from "../Components/Homepage_Components/HomeB";
import HomeCLoans from "../Components/Homepage_Components/HomeC.(Loans)";
import HomeDSlabs from "../Components/Homepage_Components/HomeD.Slabs";
import HomeEScore from "../Components/Homepage_Components/HomeEScore";
import HomeFReviews from "../Components/Homepage_Components/HomeFReviews";
import HomeGPartners from "../Components/Homepage_Components/HomeGPartners";
import LoanCalculator from "../Components/Homepage_Components/LoanCalculator";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import { Box } from "@mui/material";
import styles from  "./../CSS/homepage.module.css";
  

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Box className={styles.Home} >
        <HomeA />
        <HomeB />
        <HomeCLoans />
        <HomeDSlabs />
        <LoanCalculator />
        <HomeEScore />
        <HomeFReviews />
        <HomeGPartners />
        <Footer />
      </Box>
    </>
  );
};

export default Homepage;
