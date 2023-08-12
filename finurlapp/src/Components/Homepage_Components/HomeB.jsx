import React from "react";
import styles from "./../../CSS/homepage.module.css";
import { Box, Grid, Typography } from "@mui/material";

const HomeB = () => {
  return (
    <>
      <section id={styles.home_b_sec}>
        <Grid container spacing={1}>
          <Grid alignItems={"center"} justifyContent={"center"} item lg={3} md={3} sm={12} xs={12} >
            <Typography fontSize={"large"}>₹940M+</Typography>
            <Typography fontSize={"medium"}>DISBURSED (FY 2022-23)</Typography>
          </Grid>
          <Grid  alignItems={"center"} justifyContent={"center"} item lg={3} md={3} sm={12} xs={12} >
            <Typography fontSize={"large"}>2800+</Typography>
            <Typography fontSize={"medium"}>ACTIVE PARTNERS</Typography>
          </Grid>
          <Grid  alignItems={"center"} justifyContent={"center"} item lg={3} md={3} sm={12} xs={12} >
            <Typography fontSize={"large"}>10000+</Typography>
            <Typography fontSize={"medium"}>HAPPY COUSTOMERS</Typography>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default HomeB;
