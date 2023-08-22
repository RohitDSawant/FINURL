import React from "react";
import styles from "./../../CSS/instantLoan.module.css";
import { Box, Grid, Typography } from "@mui/material";
import instant_loan_pic from "./../../Assets/Images/instant_loan.jpg";

const InstantLoanHeader = () => {
  return (
    <>
      <section id={styles.inst_loan_a}>
        <Box width={"85%"} margin={"auto"}>
          <Grid container spacing={1} alignItems={"center"}>
            <Grid item lg={8}>
              <img
                className={styles.instant_loan_pic}
                src={instant_loan_pic}
                alt=""
              />
            </Grid>
            <Grid item lg={4}>
              <Typography mb={5} variant="h3">
                Instant Loan
              </Typography>
              <Typography className="para" variant="body2">
                An Instant Loan is an unsecured form of credit that one can
                avail to meet any financial requirement. Be it funding your next
                foreign trip, renovating your home, or meeting unforeseen
                medical expenses, an instant Instant Loan can be your ultimate
                respite. Those who need loans in this day and age can easily
                apply online at FinURl and can get the best Instant Loan offers
                in India.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default InstantLoanHeader;
