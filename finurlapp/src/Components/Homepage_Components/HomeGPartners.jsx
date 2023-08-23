import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/homepage.module.css";
import { partners_img } from "../../Assets/Images/Partners_data/partners";

const HomeGPartners = () => {
  return (
    <>
      <section id={styles.home_g_sec}>
        <Typography textAlign={"center"} mb={7} variant="h5">
          Our Partners
        </Typography>
        {/* <Box className={styles.partner_grid}>
          {partners_img &&
            partners_img.map((ele, id) => (
              <Box key={id}>
                <img height={"5vh"} src={ele.url} alt="partners_logo" />
              </Box>
            ))} */}
         {/* </Box> */}
      </section>
    </>
  );
};

export default HomeGPartners;
