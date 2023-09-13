import React from "react";
import styles from "./../../CSS/homepage.module.css";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import quote_right from "./../../Assets/Images/quote-right.svg";

const HomeFReviews = () => {

  const theme = useTheme()

  return (
    <>
      <section id={styles.home_f_sec}>
        <Typography textAlign={"center"} mb={10} mt={5} variant="h5">
          What Our Clients Say
        </Typography>
        <Grid
          width={"95%"}
          gap={"20px"}
          justifyContent={"space-around"}
          margin={"auto"}
          container
        >
          <Grid
            className={styles.testimonials}
            item
            lg={3}
            md={5}
            sm={5}
            xs={10}
            data-aos="fade-up"
            data-aos-duration="1700"
            data-aos-easing="ease-in-sine"
          >
            <Box bgcolor={theme.palette.primary.main} className={styles.circle_quote}>
              <img src={quote_right} alt="" />
              <Box>
                <Typography variant="body2">
                  I had a business registered for 2 years but was unable to get
                  a loan from anywhere. Thanks to Finurl, because of whose
                  timely service I was able to get a loan.
                </Typography>
                <Typography variant="body1" mt={3} fontWeight={600}>
                  Pratik Verma
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            className={styles.testimonials}
            item
            lg={3}
            md={5}
            sm={5}
            xs={10}
            data-aos="fade-up"
            data-aos-duration="1700"
            data-aos-easing="ease-in-sine"
          >
            <Box bgcolor={theme.palette.primary.main} className={styles.circle_quote}>
              <img src={quote_right} alt="" />
              <Box>
                <Typography variant="body2">
                  Finurls online platform is so easy to use. I was able to get
                  multiple offers for a loan online from their platform and got
                  the best interest rates.
                </Typography>
                <Typography variant="body1" mt={3} fontWeight={600}>
                  Santosh Joshi
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            className={styles.testimonials}
            item
            lg={3}
            md={5}
            sm={5}
            xs={10}
            data-aos="fade-up"
            data-aos-duration="1700"
            data-aos-easing="ease-in-sine"
          >
            <Box bgcolor={theme.palette.primary.main} className={styles.circle_quote}>
              <img src={quote_right} alt="" />
              <Box  >
                <Typography variant="body2">
                  Because of Finurl and their tie-ups with multiple banks and
                  NBCs, I was able to get a loan within 48 hours.
                </Typography>
                <Typography variant="body1" mt={3} fontWeight={600}>
                  Vijay Kumar
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default HomeFReviews;
