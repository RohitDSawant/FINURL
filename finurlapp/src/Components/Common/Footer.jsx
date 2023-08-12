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
      <section id={styles.footer}>
        <Box>
          <Grid container spacing={1}>
            <Grid lg={4} border={"1px solid"}>
              <img className={styles.footer_logo} src={logo} alt="" />
            </Grid>
            <Grid item lg={2.5}>
              <Typography variant="h6">Products</Typography>
              <Box>
                <Typography variant="body2">Cards</Typography>
                <Typography variant="body2">Invenstments</Typography>
                <Typography variant="body2">Loans</Typography>
              </Box>
            </Grid>
            <Grid item lg={2.5}>
              <Typography variant="h6">Resources</Typography>
              <Box>
                <Typography variant="body2">Calculator</Typography>
                <Typography variant="body2">Credit Score</Typography>
                <Typography variant="body2">Financial Library</Typography>
                <Typography variant="body2">Credit Management</Typography>
              </Box>
            </Grid>
            <Grid item lg={2}>
              <Typography variant="h6">Partner</Typography>
              <Box>
                <Typography variant="body2">Our Partner's</Typography>
                <Typography variant="body2">Become a Partner</Typography>
              </Box>
            </Grid>
            <Grid item lg={1}>
              <Box display={"flex"} gap={"10px"}>
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
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography variant="body2">
            Copyright Ⓒ 2023 FinURL. All Rights Reserved.
          </Typography>
        </Box>
      </section>
    </>
  );
};

export default Footer;
