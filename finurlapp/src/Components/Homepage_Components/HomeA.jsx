import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import maintheme from "./../../Assets/Images/landing.png";
import styles from "./../../CSS/homepage.module.css";
import { Link } from "react-router-dom";

const HomeA = () => {
  return (
    <>
      <section id={styles.home_a_sec}>
        <Grid container spacing={5}>
          <Grid  data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine" item lg={5} md={5} sm={6} xs={12} >
            <Typography mb={-1} fontWeight={500} variant="h5">
              The Next
            </Typography>
            <Typography mb={-1} fontWeight={500} variant="h4">
              Generation
            </Typography>
            <Typography mb={-1} fontWeight={500} variant="h5">
              Loan method
            </Typography>
            <br />
            <Typography lineHeight={"1.4rem"} fontWeight={500} variant="body2">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </Typography>
          </Grid>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <img  className={styles.home_1_img} src={maintheme} alt="home1" />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default HomeA;