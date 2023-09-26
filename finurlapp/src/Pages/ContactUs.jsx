import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  TextField,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
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

        <Grid
          pb={5}
          width={"95vw"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          mt={8}
          container
        >
          <Grid
            box-shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            pt={5}
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            lg={6}
            md={6}
            sm={7}
            xs={12}
          >
            <Typography variant="h6" fontWeight={600}>
              Contact us:
            </Typography>
            <Typography sx={{"textDecoration": "underline"}} mb={3} variant="subtitle2" fontSize={"x-small"}>
              You can click on icons to Call or Mail{" "}
            </Typography>
            <Box
              display={"flex"}
              width={"80%"}
              gap={"20px"}
              alignItems={"center"}
              justifyContent={"center"}
              mb={2}
            >
              <Box>
                <Link to={"tel: +919153555550"}>
                  <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}
                    gap={"10px"}
                  >
                    <CallRoundedIcon />
                    <Typography variant="subtitle2" fontWeight={500} mt={0.5}>
                      +91 91535 55550
                    </Typography>
                  </Box>
                </Link>
              </Box>
              <Box>
                <Link to={"mailto: infor@finurl.in"}>
                  <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}
                    gap={"10px"}
                  >
                    <MailOutlineRoundedIcon />
                    <Typography variant="subtitle2" fontWeight={500} mt={0.5}>
                      info@finurl.in
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Box>
            <FormControl sx={{ width: "60%" }} component={"form"}>
              <TextField
                variant="standard"
                size="small"
                sx={{ marginTop: "10px" }}
                fullWidth
                label="Full Name"
                name="email"
                required={true}
              />
              <TextField
                variant="standard"
                size="small"
                sx={{ marginTop: "10px" }}
                fullWidth
                label="Email"
                name="email"
                required={true}
              />
              <TextareaAutosize
               
                style={{
                  marginTop: "15px",
                  padding: "10px",
                  fontSize: "large",
                  resize: false,
                  background: "none",
                  borderRadius: "4px"
                }}
                placeholder="Enter your message..."
                minRows={3}
                name="message"
                required={true}
              />
              <Button sx={{"marginTop":"15px", width: "max-content", "padding": "5px 30px"}} type="submit">
                Send Message
              </Button>
            </FormControl>
          </Grid>
          <Grid item lg={5} md={5} sm={5} xs={5}>
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
