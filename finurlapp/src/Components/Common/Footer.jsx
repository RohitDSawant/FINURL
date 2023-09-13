import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import styles from "./../../CSS/footer.module.css";
import logo from "./../../Assets/Images/circle_log.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const theme = useTheme();

  return (
    <>
      <footer
        style={{ "background-color": `${theme.palette.primary.main}` }}
        id={styles.footer}
      >
        <Box>
          <Grid container justifyContent={"space-around"} spacing={3}>
            <Grid item xs={12} sm={10} lg={4}>
              <Box className={styles.footer_logo_box}>
                <Box display={"flex"} gap={"15px"} alignItems={"center"}>
                  <img className={styles.footer_logo} src={logo} alt="logo" />
                  <Typography variant="h5">FinURL</Typography>
                </Box>
                <Box display={"flex"} mt={5} ml={5} gap={"10px"}>
                  <Box>
                    <FacebookIcon
                      sx={{ color: theme.palette.secondary.main }}
                    />
                  </Box>
                  <Box>
                    <InstagramIcon
                      sx={{ color: theme.palette.secondary.main }}
                    />
                  </Box>
                  <Box>
                    <TwitterIcon sx={{ color: theme.palette.secondary.main }} />
                  </Box>
                  <Box>
                    <LinkedinIcon
                      sx={{ color: theme.palette.secondary.main }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography fontSize={"x-small"} variant="body2">
                  Copyright Ⓒ 2023 FinURL. All Rights Reserved.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} sm={4} lg={2}>
              <Typography variant="h6" mb={2}>
                Products
              </Typography>
              <Box>
                <Typography variant="body2" fontSize={"x-small"} mb={1}>
                  Cards
                </Typography>
                <Typography variant="body2" fontSize={"x-small"} mb={1}>
                  Invenstments
                </Typography>
                <Typography variant="body2" fontSize={"x-small"} mb={1}>
                  Loans
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} sm={4} lg={2}>
              <Typography variant="h6" mb={2}>
                Resources
              </Typography>
              <Box>
                <Typography variant="body2" fontSize={"x-small"} mb={1}>
                  Calculator
                </Typography>
                <Typography variant="body2" fontSize={"x-small"} mb={1}>
                  Credit Score
                </Typography>
                <Typography variant="body2" fontSize={"x-small"} mb={1}>
                  Financial Library
                </Typography>
                <Typography variant="body2" fontSize={"x-small"} mb={1}>
                  Credit Management
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} sm={4} lg={2}>
              <Typography variant="h6" mb={2}>
                Partner
              </Typography>
              <Box>
                <Typography variant="body2" fontSize={"x-small"} mb={1}>
                  Our Partner's
                </Typography>
                <Typography variant="body2" fontSize={"x-small"} mb={1}>
                  Become a Partner
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
