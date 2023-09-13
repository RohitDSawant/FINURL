import React from "react";
import styles from "./../../CSS/instantLoan.module.css";
import { Box, Grid, Typography } from "@mui/material";
import instant_loan_pic from "./../../Assets/Images/instant_loan.jpg";

const InstantLoanHeader = () => {
  return (
    <>
      <section id={styles.inst_loan_a}>
        <Grid
          height={"90vh"}
          width={"90vw"}
          margin={"auto"}
          container
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Grid
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            item
            xs={12}
            sm={10}
            md={6}
            lg={5}
          >
            <img
              className={styles.instant_loan_pic}
              src={instant_loan_pic}
              alt=""
              style={{ display: "block", margin: "auto" }}
            />
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            item
            xs={12}
            sm={11}
            md={5}
            lg={5}
          >
            <Typography mt={2} mb={3} variant="h4">
              Instant Loan
            </Typography>
            <Typography className="para" variant="body2">
              An Instant Loan is an unsecured form of credit that one can avail
              to meet any financial requirement. Be it funding your next foreign
              trip, renovating your home, or meeting unforeseen medical
              expenses, an instant Instant Loan can be your ultimate respite.
              Those who need loans in this day and age can easily apply online
              at FinURl and can get the best Instant Loan offers in India.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default InstantLoanHeader;
