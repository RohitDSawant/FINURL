import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/homepage.module.css";

const HomeCLoans = () => {
  return (
    <>
      <section id={styles.home_c_sec}>
        <Typography textAlign={"center"} mb={2} variant="h6">
          Loans
        </Typography>
        <Typography textAlign={"center"} variant="body2">
          A wide range of loans offered by lending partners to fulfill your
          dreams.
        </Typography>
        <Box  mt={5} className={styles.loans_sec}>
          <Grid container>
            <Grid item lg={2}>
              <Box> Instant Loan</Box>
            </Grid>
            <Grid item lg={2}>
              <Box> Personal Loan</Box>
            </Grid>
            <Grid item lg={2}>
              <Box> Business Loan</Box>
            </Grid>
            <Grid item lg={2}>
              <Box> Professional Loan</Box>
            </Grid>
            <Grid item lg={2}>
              <Box> Home Loan</Box>
            </Grid>
            <Grid item lg={2}>
              <Box> Loan against property</Box>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default HomeCLoans;
