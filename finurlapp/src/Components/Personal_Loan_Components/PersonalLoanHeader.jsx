import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/instantLoan.module.css";
import personal_loan from "./../../Assets/Images/personal_loan.png";

const PersonalLoanHeader = () => {
  return (
    <>
      <section id={styles.inst_loan_a}>
        <Grid
          width={"85vw"}
          margin={"auto"}
          height={"90vh"}
          container
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Grid
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            item
            lg={4}
          >
            <img
              className={styles.instant_loan_pic}
              src={personal_loan}
              alt=""
            />
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            item
            lg={5}
          >
            <Typography mb={5} variant="h5">
              Personal Loan
            </Typography>
            <Typography className="para" variant="body2">
              An unsecured form of credit called a personal loan is available
              for any type of monetary need. A fast personal loan can provide
              you with the best relief, whether you need it for paying for your
              upcoming international trip, house renovations, or unanticipated
              medical expenditures. In today's world, those in need of loans can
              quickly apply online at FinURL and receive the best Personal Loan
              offers in India.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default PersonalLoanHeader;
