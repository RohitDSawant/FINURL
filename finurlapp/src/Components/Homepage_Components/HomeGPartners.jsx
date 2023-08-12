import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/homepage.module.css";
import kreditbee from "./../../Assets/Images/kred.jpeg";
import nira from "./../../Assets/Images/nira2.png";
import faircent2 from "./../../Assets/Images/faircent2.png";
import LNT from "./../../Assets/Images/l&t.jpg";
import tata2 from "./../../Assets/Images/tata2.png";
import binance from "./../../Assets/Images/binance.png";

const HomeGPartners = () => {
  return (
    <>
      <section id={styles.home_g_sec}>
        <Typography textAlign={"center"} mb={5} variant="h5"> Our Partners</Typography>
        <Box>
          <Box>
            <img src={tata2} alt="" />
          </Box>
          <Box>
            <img src={binance} alt="" />
          </Box>
          <Box>
            <img src={kreditbee} alt="" />
          </Box>
          <Box>
            <img src={faircent2} alt="" />
          </Box>
          <Box>
            <img src={nira} alt="" />
          </Box>
          <Box>
            <img src={LNT} alt="" />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default HomeGPartners;
