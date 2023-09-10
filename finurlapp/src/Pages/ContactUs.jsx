import {
  Box,
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./../CSS/contactus.module.css";
import Navbar from "../Components/Common/Navbar";
import theme from "../Theme/theme";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <section id="contact_us">
        <Navbar />
        <Box
          sx={{ backgroundColor: theme.palette.primary.main }}
          className={styles.contact_us_left_sec}
        >
          <Typography
            sx={{ color: theme.palette.primary.dark }}
            textAlign={"center"}
            variant="h6"
          >
            Contact Us:
          </Typography>
          <Grid
            alignItems={"center"}
            justifyContent={"center"}
            container
            ml={3}
            mt={5}
          >
            <Grid lg={11} md={11} sm={11} xs={11} item>
              <Box mb={5} display={"flex"} gap={"15px"}>
                <Typography
                  color={"#fff"}
                  mt={1}
                  sx={{
                    lineBreak: "anywhere",
                    color: theme.palette.primary.dark,
                  }}
                  variant="body2"
                >
                  <LocationOnIcon />
                </Typography>
                <Box>
                  <Typography
                    sx={{ color: theme.palette.primary.dark }}
                    variant="subtitle2"
                  >
                    Address:{" "}
                  </Typography>
                  <Typography
                    mt={1}
                    sx={{
                      lineBreak: "anywhere",
                      color: theme.palette.primary.dark,
                    }}
                    variant="body2"
                  >
                    Mumbai, Maharashtra, India
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={11} md={11} sm={11} xs={11}>
              <Link to={"tel: +919153555550"}>
                {" "}
                <Box mb={5} display={"flex"} gap={"15px"}>
                  <Typography color={"#fff"} variant="h6">
                    <CallRoundedIcon />
                  </Typography>
                  <Box>
                    <Typography
                      sx={{ color: theme.palette.primary.dark }}
                      variant="subtitle2 "
                      fontSize={"small"}
                    >
                      Phone:{" "}
                    </Typography>
                    <Typography
                      mt={1}
                      sx={{
                        lineBreak: "anywhere",
                        color: theme.palette.primary.dark,
                      }}
                      variant="body2"
                    >
                      +91 91535 55550
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
            <Grid lg={11} md={11} sm={11} xs={11} mb={5} gap={"15px"}>
              <Link to={"mailto: infor@finurl.in"}>
                <Box mb={5} display={"flex"} gap={"15px"}>
                  <Typography variant color={"#fff"} t="h6">
                    <MailOutlineRoundedIcon />
                  </Typography>
                  <Box>
                    <Typography
                      sx={{ color: theme.palette.primary.dark }}
                      variant="subtitle2"
                    >
                      Email:
                    </Typography>
                    <Typography
                      mt={1}
                      sx={{
                        lineBreak: "anywhere",
                        color: theme.palette.primary.dark,
                      }}
                      variant="body2"
                    >
                      info@finurl.in
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          </Grid>
          <Typography variant="body2">Just click to mail or make a call</Typography>
        </Box>
      </section>
    </>
  );
};

export default ContactUs;
