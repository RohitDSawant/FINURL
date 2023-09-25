import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import styles from "./../CSS/contactus.module.css";
import Navbar from "../Components/Common/Navbar";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Link } from "react-router-dom";
import contact_us from "./../Assets/Images/contact_us.svg";
import Footer from "../Components/Common/Footer";

const ContactUs = () => {
  const theme = useTheme();

  return (
    <>
      <section id={styles.contact_us}>
        <Navbar />
        <Grid pb={5} pt={10} width={"90vw"} alignItems={"center"} justifyContent={"center"} margin={"auto"} mt={8} container>
          <Grid
            box-shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            // pt={15}
            justifyContent={"center"}
            lg={5} sm={5} xs={10}
            alignItems={"flex-start"}
          >
            <Typography  textAlign={"center"} variant="h6">
              Contact us :
            </Typography>
            <Typography
              textAlign={"center"}
              mb={2}
              fontSize={"x-small"}
              variant={"body2"}
            >
              Disclaimer: One click call and email{" "}
            </Typography>

            <Link to={"tel: +919153555550"}>
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                gap={"15px"}
              >
                <Typography variant="subtitle1" mt={1} fontWeight={600}>
                  <CallRoundedIcon />
                </Typography>

                <Typography variant="subtitle1" fontWeight={600}>
                  +91 91535 55550
                </Typography>
              </Box>
            </Link>
            <Link to={"mailto: infor@finurl.in"}>
              <Box
                justifyContent={"center"}
                mt={2}
                alignItems={"center"}
                display={"flex"}
                gap={"15px"}
              >
                <Typography variant="subtitle1" fontWeight={600} mt={1}>
                  <MailOutlineRoundedIcon />
                </Typography>

                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    info@finurl.in
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid item lg={7} sm={5} xs={10}>
            <img
              className={styles.contact_us_img}
              src={contact_us}
              alt="contact_us"
            />
          </Grid>
        </Grid>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
