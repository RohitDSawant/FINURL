import React from "react";
import Navbar from "../Components/Common/Navbar";
import styles from "./../CSS/aboutus.module.css";
import { Box, Grid, Typography } from "@mui/material";
import about_us_img from "./../Assets/Images/about_us.svg";
import vision from "./../Assets/Images/our_vision.png";
import mission from "./../Assets/Images/our_mission.svg";
import motto from "./../Assets/Images/our_motto.svg";
import avatar from "./../Assets/Images/avatar.svg";
import Footer from "../Components/Common/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section id={styles.about_us}>
        <Grid
          className={styles.about_us_intro}
          container
          alignItems={"center"}
          width={"85vw"}
          margin={"auto"}
        >
          <Grid item lg={7} md={7} sm={7} xs={11 }>
            <Box mt={7}>
              <Typography fontWeight={600} variant="h4">
                Who are we ?
              </Typography>
              <Box data-aos="zoom-in" data-aos-duration="1200">
                <Typography mt={5} ml={2} variant="subtitle2">
                  Fintech Platform incepted in December 2021 headquartered in
                  Kolkata, India finurl.com is formed to sell financial service
                  primarily focusing on Indian internet users, starting with the
                  financial vertical. Enhancing its financial hands to all major
                  locations of the country. FinURL is an online focused digital
                  and instant loan aggregator platform with a vision to solve
                  India's underserved credit needs.Finurl.com is an online portal of Finwurl
                  Enterprises Private Limited which helps make finance available
                  at the fingertips for every earning individual of India.
                </Typography>
                <Typography mt={2} ml={2} variant="subtitle2">
                  We started with the aim of making the complete loan process as
                  easy as possible so that every individual can have access to
                  credit easily. Finwurl Enterprises Private Limited is one of
                  the major digital lending platforms in the country which uses
                  technology and analytics tools for analyzing and processing
                  customers' loan applications so that we can help our customers
                  get money with minimum documents in their account in as little
                  as 48 hours.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} sm={5} xs={10}>
            <img className={styles.about_us_img} src={about_us_img} alt="" />
          </Grid>
        </Grid>
       <Box>
       <Grid
          justifyContent={"space-between"}
          width={"90vw"}
          margin={"auto"}
          container
          mt={5}
        >
          <Grid
            lg={3.8}
            pb={2}
            md={3.8}
            sm={4}
            xs={12}
            data-aos="fade-up"
            data-aos-duration="900"
            item
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            borderRadius={"10px"}
          >
            <Box pt={2} sx={{ background: "#fff", borderRadius: "10px" }}>
              <img className={styles.goals} src={vision} alt="" />
            </Box>
            <Typography
              mt={2}
              textAlign={"center"}
              fontWeight={600}
              variant="h6"
            >
              Vision
            </Typography>
            <Typography
              pl={2}
              pr={2}
              mt={2}
              textAlign={"center"}
              variant="subtitle2"
            >
              The only vision of FinURL Enterprises Private Limited is to
              provide the loan to every customer approaching it, either through
              our lending or from other financial institutions wherever they are
              eligible.
            </Typography>
          </Grid>
          <Grid
            lg={3.8}
            pb={2}
            md={3.8}
            sm={4}
            xs={12}
            data-aos="fade-up"
            data-aos-duration="900"
            item
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            borderRadius={"10px"}
          >
            <Box pt={2} sx={{ background: "#fff", borderRadius: "10px" }}>
              <img className={styles.goals} src={mission} alt="" />
            </Box>
            <Typography
              mt={2}
              textAlign={"center"}
              fontWeight={600}
              variant="h6"
            >
              Mission
            </Typography>
            <Typography
              pl={2}
              pr={2}
              variant="subtitle2"
              mt={2}
              textAlign={"center"}
            >
              Help fulfil the dreams and aspirations of fellow Indians, no
              matter how much they earn, what occupation they have, or where
              they live.
            </Typography>
          </Grid>
          <Grid
            lg={3.8}
            pb={2}
            md={3.8}
            sm={4}
            xs={12}
            data-aos="fade-up"
            data-aos-duration="900"
            item
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            borderRadius={"10px"}
          >
            <Box pt={2} sx={{ background: "#fff", borderRadius: "10px" }}>
              <img className={styles.goals} src={motto} alt="" />
            </Box>
            <Typography
              mt={2}
              textAlign={"center"}
              fontWeight={600}
              variant="h6"
            >
              Motto
            </Typography>
            <Typography
              pl={2}
              pr={2}
              variant="subtitle2"
              mt={2}
              textAlign={"center"}
            >
              We want to impact the maximum number of lives by providing them
              with wider access to financial services, through the use of
              technology and by putting trust in our customers. We aspire to
              serve thousands of customers by 2021 and many more customers by
              2024.
            </Typography>
          </Grid>
        </Grid>
       </Box>
        <Typography
          textAlign={"center"}
          variant="h5"
          fontWeight={600}
          mb={7}
          mt={10}
        >
          Meet Our Founders
        </Typography>
        <Grid
          pb={10}
          justifyContent={"space-around"}
          margin={"auto"}
          container
          width={"40vw"}
          gap={"20px"}
        >
          <Grid data-aos="fade-right" data-aos-duration="1200">
            <img className={styles.avatar} src={avatar} alt="avatart" />
            <Typography
              textAlign={"center"}
              mt={2}
              variant="body1"
              fontWeight={600}
            >
              Ayush Singh
            </Typography>
            <Typography
              textAlign={"center"}
              variant="subtitle2"
              fontWeight={400}
            >
              Co-Founder
            </Typography>
          </Grid>
          <Grid data-aos="fade-left" data-aos-duration="1200">
            <img className={styles.avatar} src={avatar} alt="avatart" />
            <Typography
              textAlign={"center"}
              mt={2}
              variant="body1"
              fontWeight={600}
            >
              Apurba Pal
            </Typography>
            <Typography
              textAlign={"center"}
              variant="subtitle2"
              fontWeight={400}
            >
              Co-Founder
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Footer />
      </section>
    </>
  );
};

export default AboutUs;
