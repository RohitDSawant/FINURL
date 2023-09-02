import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/instantLoan.module.css";
import personal_loan from "./../../Assets/Images/personal_loan.jpg";

const PersonalLoanHeader = () => {
  return (
    <>
      <section id={styles.inst_loan_a}>
        <Box width={"85%"} margin={"auto"}>
          <Grid container spacing={1} alignItems={"center"}>
            <Grid item lg={8}>
              <img className={styles.instant_loan_pic} src={personal_loan} alt="" />
            </Grid>
            <Grid item lg={4}>
              <Typography mb={5} variant="h5">
                Personal Loan
              </Typography>
              <Typography className="para" variant="body2">
                An unsecured form of credit called a personal loan is available
                for any type of monetary need. A fast personal loan can provide
                you with the best relief, whether you need it for paying for
                your upcoming international trip, house renovations, or
                unanticipated medical expenditures. In today's world, those in
                need of loans can quickly apply online at FinURL and receive the
                best Personal Loan offers in India.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default PersonalLoanHeader;