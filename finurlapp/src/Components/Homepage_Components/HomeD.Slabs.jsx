import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/homepage.module.css";
import imgDemo from "./../../Assets/Images/370_generated.jpg";

const HomeDSlabs = () => {
  return (
    <>
      <section id={styles.home_d_sec}>
        <Box>
          <Box className={styles.slab_box}>
            <Typography variant="h5">
              Easily control your billing & invoicing
            </Typography>
            <Typography variant="body2">
              Simplify your financial processes and gain full control over
              billing and invoicing with our user-friendly solution.
            </Typography>
          </Box>
          <Box className={styles.slab_circle}>
            <img src={imgDemo} className={styles.slabs_img} alt="" />
          </Box>
        </Box>
        <Box>
          <Box className={styles.slab_box}>
            <Typography variant="h5">
              Easily control your billing & invoicing
            </Typography>
            <Typography variant="body2">
              Simplify your financial processes and gain full control over
              billing and invoicing with our user-friendly solution.
            </Typography>
          </Box>
          <Box className={styles.slab_circle}>
            <img src={imgDemo} className={styles.slabs_img} alt="" />
          </Box>
        </Box>
        <Box>
          <Box className={styles.slab_box}>
            <Typography variant="h5">
              Easily control your billing & invoicing
            </Typography>
            <Typography variant="body2">
              Simplify your financial processes and gain full control over
              billing and invoicing with our user-friendly solution.
            </Typography>
          </Box>
          <Box className={styles.slab_circle}>
            <img src={imgDemo} className={styles.slabs_img} alt="" />
          </Box>
        </Box>
        <Box>
          <Box className={styles.slab_box}>
            <Typography variant="h5">
              Easily control your billing & invoicing
            </Typography>
            <Typography variant="body2">
              Simplify your financial processes and gain full control over
              billing and invoicing with our user-friendly solution.
            </Typography>
          </Box>
          <Box className={styles.slab_circle}>
            <img src={imgDemo} className={styles.slabs_img} alt="" />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default HomeDSlabs;
