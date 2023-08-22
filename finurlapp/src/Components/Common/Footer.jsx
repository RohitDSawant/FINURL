import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/footer.module.css";
import logo from "./../../Assets/Images/finurl1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <footer id={styles.footer}>
        <Box>
          <Grid container justifyContent={"space-around"} spacing={1}>
            <Grid lg={4}>
              <img className={styles.footer_logo} src={logo} alt="logo" />
              <Box display={"flex"} mt={5} ml={5} gap={"10px"}>
                <Box>
                  <FacebookIcon />
                </Box>
                <Box>
                  <InstagramIcon />
                </Box>
                <Box>
                  <TwitterIcon />
                </Box>
                <Box>
                  <LinkedinIcon />
                </Box>
              </Box>
              <Box>
                <Typography
                  fontSize={"x-small"}
                  variant="body2"
                >
                  Copyright Ⓒ 2023 FinURL. All Rights Reserved.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={2}>
              <Typography variant="h6" mb={2}>
                Products
              </Typography>
              <Box>
                <Typography variant="body2" mb={1}>
                  Cards
                </Typography>
                <Typography variant="body2" mb={1}>
                  Invenstments
                </Typography>
                <Typography variant="body2" mb={1}>
                  Loans
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={2}>
              <Typography variant="h6" mb={2}>
                Resources
              </Typography>
              <Box>
                <Typography variant="body2" mb={1}>
                  Calculator
                </Typography>
                <Typography variant="body2" mb={1}>
                  Credit Score
                </Typography>
                <Typography variant="body2" mb={1}>
                  Financial Library
                </Typography>
                <Typography variant="body2" mb={1}>
                  Credit Management
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={2}>
              <Typography variant="h6" mb={2}>
                Partner
              </Typography>
              <Box>
                <Typography variant="body2" mb={1}>
                  Our Partner's
                </Typography>
                <Typography variant="body2" mb={1}>
                  Become a Partner
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
