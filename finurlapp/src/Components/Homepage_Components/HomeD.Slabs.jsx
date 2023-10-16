import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/homepage.module.css";
import we_handle from "./../../Assets/Images/we_handle.svg";
import card_deal from "./../../Assets/Images/card_deal.svg";
import easy_billing from "./../../Assets/Images/billing.svg";

const HomeDSlabs = () => {
  return (
    <>
      <section id={styles.home_d_sec}>
        <Box >
          <Grid
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
            justifyContent={"space-between"}
            container
            flexDirection={"row-reverse"}
            mt={10}
            alignItems={"center"}
          >
            <Grid item lg={7} md={7} sm={7} xs={8.5}>
              <Box id={styles.right_slab} className={styles.slab_box}>
                <Typography variant="h6" fontSize={"medium"}>
                  Easily control your billing & invoicing
                </Typography>
                <Typography variant="body2" fontSize={"small"}>
                  Simplify your financial processes and gain full control over
                  billing and invoicing with our user-friendly solution.
                </Typography>
              </Box>
            </Grid>
            <Grid lg={4} md={4} sm={4} xs={3.5}>
              <Box className={styles.slab_circle}>
                <img src={easy_billing} id={styles.slabs_img} alt="" />
              </Box>
            </Grid>
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
            container
            mt={10}
            alignItems={"center"}
          >
            <Grid item lg={8.5} md={8.5} sm={8.5} xs={8.5}>
              <Box className={styles.slab_box}>
                <Typography
                  textAlign={"right"}
                  variant="h6"
                  fontSize={"medium"}
                >
                  You do the business, we’ll handle the money.{" "}
                </Typography>
                <Typography
                  textAlign={"right"}
                  variant="body2"
                  fontSize={"small"}
                >
                  Focus on growing your business while we take care of all your
                  financial needs, providing seamless money management
                  solutions.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3.5} md={3.5} sm={3.5} xs={3.5}>
              <Box className={styles.slab_circle}>
                <img src={we_handle} id={styles.slabs_img} alt="" />
              </Box>
            </Grid>
          </Grid>
          <Grid
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
            container
            mt={10}
            flexDirection={"row-reverse"}
            alignItems={"center"}
          >
            <Grid item lg={8.5} md={8.5} sm={8.5} xs={8.5}>
              <Box id={styles.right_slab} className={styles.slab_box}>
                <Typography variant="h6" fontSize={"medium"}>
                  Find a better card deal in few easy steps.{" "}
                </Typography>
                <Typography variant="body2" fontSize={"small"}>
                  Discover your ideal credit card offer effortlessly by
                  following our simple steps to find the best deal tailored to
                  your needs.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3.5} md={3.5} sm={3.5} xs={3.5}>
              <Box className={styles.slab_circle}>
                <img src={card_deal} id={styles.slabs_img} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default HomeDSlabs;
