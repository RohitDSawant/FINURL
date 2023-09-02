import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import maintheme from "./../../Assets/Images/main_theme_2.jpg";
import styles from "./../../CSS/homepage.module.css";

const HomeA = () => {
  return (
    <>
      <section id={styles.home_a_sec}>
        <Grid container spacing={5}>
          <Grid item lg={5} md={5} sm={6} xs={12} >
            <Typography mb={-1} variant="h5">
              The Next
            </Typography>
            <Typography mb={-1} variant="h4">
              Generation
            </Typography>
            <Typography mb={-1} variant="h5">
              Loan method
            </Typography>
            <br />
            <Typography lineHeight={"1.2rem"} variant="body2">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </Typography>
          </Grid>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <img className={styles.home_1_img} src={maintheme} alt="home1" />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default HomeA;
