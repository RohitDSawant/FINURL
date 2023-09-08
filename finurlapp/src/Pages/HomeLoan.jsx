import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import home_loan_img from "./../Assets/Images/personal_loan.jpg";
import Navbar from "../Components/Common/Navbar";
import styles from "./../CSS/instantLoan.module.css";

const HomeLoan = () => {
  return (
    <>
      <Navbar />
      <Grid
        width={"80%"}
        margin={"auto"}
        mt={12}
        alignItems={"center"}
        container
        height={"85vh"}
      >
        <Grid item lg={6}>
          <img
            className={styles.instant_loan_pic}
            src={home_loan_img}
            alt="home_loan"
          />
        </Grid>
        <Grid item lg={5}>
          <Box>
            <Typography mb={5} variant="h4">
              Home Loan
            </Typography>
            <Typography variant="body2">
              Home loans up to 15 crores can be obtained for a reasonable
              interest rate starting at 8.50% annually. Not only that. With a
              payback period of up to 30 years, you can tailor your repayment to
              your financial situation. Continue reading to find out more about
              home loans and how to apply for one.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography mb={5} textAlign={"center"} variant="h5">
        Home loan Details
      </Typography>
      <Typography textAlign={"center"} variant="body2">
        On FinURL, you may locate some of the greatest housing loan companies in
        India. To choose which offer best suits you, examine the home loan
        interest rates and offers from lending partners.
      </Typography>
      <Grid container>
        <Grid>
            
        </Grid>
        <Grid>
            
        </Grid>

      </Grid>
    </>
  );
};

export default HomeLoan;
