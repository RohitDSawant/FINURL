import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import maintheme from "./../../Assets/Images/landing.png";
import styles from "./../../CSS/homepage.module.css";
import { Link } from "react-router-dom";

const HomeA = () => {
  const isSmallScreen = useMediaQuery("(min-width:600px)");

  return (
    <>
      <section id={styles.home_a_sec}>
        <Grid container flexDirection={ !isSmallScreen ? "column-reverse": "row"} spacing={5}>
          <Grid
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            item
            lg={5}
            md={5}
            sm={6}
            xs={12}
          >
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
            <Typography
              lineHeight={"1.4rem"}
              fontWeight={500}
              mb={3}
              variant="body2"
            >
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </Typography>
            <Link to={"/get-started"}>
              <Button id={styles.get_started_btn}>Get Started</Button>
            </Link>
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
