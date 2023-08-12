import React from "react";
import styles from "./../../CSS/homepage.module.css";
import { Grid, Typography } from "@mui/material";

const HomeFReviews = () => {
  return (
    <>
      <section id={styles.home_f_sec}>
        <Typography variant="h5">What People are saying about us</Typography>
        <Grid container>
          <Grid item lg={3}>
            <Typography>
              I had a business registered for 2 years but was unable to get a
              loan from anywhere. Thanks to Finurl, because of whose timely
              service I was able to get a loan.
            </Typography>
            <Typography>
                Pratik Verma
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography>
              Finurls online platform is so easy to use. I was able to get
              multiple offers for a loan online from their platform and got the
              best interest rates.
            </Typography>
            <Typography>
                Santosh Joshi
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography>
              Because of Finurl and their tie-ups with multiple banks and NBCs,
              I was able to get a loan within 48 hours.
            </Typography>
            <Typography>
                Vijay Kumar
            </Typography>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default HomeFReviews;
