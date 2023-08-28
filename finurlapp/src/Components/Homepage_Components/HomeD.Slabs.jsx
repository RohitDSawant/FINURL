import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/homepage.module.css";
import imgDemo from "./../../Assets/Images/370_generated.jpg";

const HomeDSlabs = () => {
  return (
    <>
      <section id={styles.home_d_sec}>
        <Grid container gap={10}>
          <Grid item  justifyContent={"space-between"}  display={"flex"} alignItems={"center"} lg={12}>
            <Box className={styles.slab_box}>
              <Typography variant="body2" fontSize={"medium"}>
                Easily control your billing & invoicing
              </Typography>
              <Typography variant="body2" fontSize={"small"}>
                Simplify your financial processes and gain full control over
                billing and invoicing with our user-friendly solution.
              </Typography>
            </Box>
            <Box className={styles.slab_circle}>
              <img src={imgDemo} className={styles.slabs_img} alt="" />
            </Box>
          </Grid>
          <Grid item  justifyContent={"space-between"}  display={"flex"} alignItems={"center"} flexDirection={"row-reverse"} lg={12}>
            <Box className={styles.slab_box}>
              <Typography textAlign={"right"} variant="body2" fontSize={"medium"}>
                Easily control your billing & invoicing
              </Typography>
              <Typography textAlign={"right"} variant="body2" fontSize={"small"}>
                Simplify your financial processes and gain full control over
                billing and invoicing with our user-friendly solution.
              </Typography>
            </Box>
            <Box className={styles.slab_circle}>
              <img src={imgDemo} className={styles.slabs_img} alt="" />
            </Box>
          </Grid>
          <Grid item  justifyContent={"space-between"}  display={"flex"} alignItems={"center"} lg={12}>
            <Box className={styles.slab_box}>
              <Typography variant="body2" fontSize={"medium"}>
                Easily control your billing & invoicing
              </Typography>
              <Typography variant="body2" fontSize={"small"}>
                Simplify your financial processes and gain full control over
                billing and invoicing with our user-friendly solution.
              </Typography>
            </Box>
            <Box className={styles.slab_circle}>
              <img src={imgDemo} className={styles.slabs_img} alt="" />
            </Box>
          </Grid>
          <Grid item  justifyContent={"space-between"}  display={"flex"} alignItems={"center"} flexDirection={"row-reverse"} lg={12}>
            <Box className={styles.slab_box}>
              <Typography textAlign={"right"} variant="body2" fontSize={"medium"}>
                Easily control your billing & invoicing
              </Typography>
              <Typography textAlign={"right"} variant="body2" fontSize={"small"}>
                Simplify your financial processes and gain full control over
                billing and invoicing with our user-friendly solution.
              </Typography>
            </Box>
            <Box className={styles.slab_circle}>
              <img src={imgDemo} className={styles.slabs_img} alt="" />
            </Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default HomeDSlabs;
