import {
  Box,
  Button,
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

const ContactUs = () => {
  return (
    <>
      <section id="contact_us">
        <Navbar />
        <Box className={styles.contact_us_frame}>
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
            <Box ml={3} mt={5}>
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
              <Box mb={5} display={"flex"} gap={"15px"}>
                <Typography color={"#fff"} variant="h6">
                  <CallRoundedIcon />
                </Typography>
                <Box>
                  <Typography
                    sx={{ color: theme.palette.primary.dark }}
                    variant="subtitle2 "
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
              <Box mb={5} display={"flex"} gap={"15px"}>
                <Typography varian color={"#fff"} t="h6">
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
                    infor@finurl.in
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* <<<<<<<<<<<<<<<<< Right Section >>>>>>>>>>>>>>>>>>>> */}

          <Box bgcolor={"lavender"} className={styles.contact_us_right_sec}>
            <Typography color={"#000"} ml={10} variant="h6">
              Or Write Us
            </Typography>
            <Box mt={5} ml={12}>
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="body2" color={"#000"}>
                  <MailOutlineRoundedIcon />
                </Typography>
                <TextField
                  type="email"
                  size="small"
                  sx={{ margin: "15px" }}
                  label={"Email"}
                  variant="outlined"
                />
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="body2" color={"#000"}>
                  <CallRoundedIcon />
                </Typography>{" "}
                <TextField
                  type="text"
                  size="small"
                  sx={{ margin: "15px", color: "black" }}
                  label={"Phone"}
                  variant="outlined"
                />
              </Box>
              <br />
              <TextareaAutosize
                maxRows={5}
                style={{
                  height: "15vh",
                  width: "75%",
                  borderRadius: "7px",
                  padding: "10px",
                  marginLeft: "15px",
                  marginTop: "5px",
                  fontSize: "large",
                }}
                placeholder="Enter Your Message..."
              ></TextareaAutosize>
              <Button
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "#fff",
                  padding: "10px 25px",
                  marginLeft: "15px",
                  marginTop: "10px",
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default ContactUs;
