import React from "react";
import styles from "./../../CSS/homepage.module.css";
import { Box, Grid, Typography } from "@mui/material";
import year from "./../../Assets/Images/2022_year.jpg"
import happy_customer from "./../../Assets/Images/happy_customer.svg"
import active_partners from "./../../Assets/Images/active_partners.svg"

const HomeB = () => {
  return (
    <>
      <section id={styles.home_b_sec}>
        <Grid margin={"auto"} container justifyContent={"space-around"} spacing={1}>
          <Grid alignItems={"center"} justifyContent={"center"} item lg={3} md={3} sm={4} xs={6} >
            <Box>
              <img className={styles.home_b_img} src={happy_customer} alt="happy_customer" />
              <Box  mt={2}>
                 <Typography fontSize={"small"} variant="h6">₹940M+</Typography>
                 <Typography fontSize={"small"} variant="body2">Disbursed (FY 2022-23)</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid  alignItems={"center"} justifyContent={"center"} item lg={3} md={3} sm={4} xs={6} >
           <Box>
           <img className={styles.home_b_img}  src={active_partners} alt="active_partners" />
            <Box mt={2}>
              <Typography fontSize={"small"} variant="h6">2800+</Typography>
              <Typography fontSize={"small"} variant="body2">Active Partners</Typography>
            </Box>
           </Box>
          </Grid>
          <Grid  alignItems={"center"} justifyContent={"center"} item lg={3} md={3} sm={4} xs={6} >
           <Box>
           <img className={styles.home_b_img} src={year} alt="2022_year" />
            <Box  mt={2}>
              <Typography fontSize={"small"} variant="h6">10000+</Typography>
              <Typography fontSize={"small"} variant="body2">Happy Customers</Typography>
            </Box>
           </Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default HomeB;
