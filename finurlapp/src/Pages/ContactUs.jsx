import {
  Box,
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import styles from "./../CSS/contactus.module.css";
import Navbar from "../Components/Common/Navbar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const theme = useTheme();

  return (
    <>
      <section id={styles.contact_us}>
        <Navbar />
        <Box>
          <Typography pt={10} mt={5} textAlign={"center"} variant="h6">
            Contact Us:
          </Typography>
          <Grid
            alignItems={"center"}
            justifyContent={"space-around"}
            container
            height={"max-content"}
            m={"auto"}
            mt={5}
            pr={2}
            pl={2}
            pt={4}
            pb={4}
            width={"80vw"}
            bgcolor={theme.palette.primary.main}
            borderRadius={"10px"}
          >
          
            <Grid item lg={4} md={4} sm={4} xs={6}>
              <Link to={"tel: +919153555550"}>
                {" "}
                <Box
                  alignItems={"center"}
                  justifyContent={"center"}
                  mb={2}
                  display={"flex"}
                  gap={"15px"}
                >
                  <Typography
                    mt={1}
                    sx={{
                      lineBreak: "anywhere",
                      color: theme.palette.secondary.main,
                    }}
                    variant="subtitle1"
                    fontWeight={600}
                  >
                    <CallRoundedIcon />
                  </Typography>

                  <Box>
                    <Typography
                      sx={{ color: theme.palette.secondary.main }}
                      variant="body1 "
                    >
                      Phone:{" "}
                    </Typography>
                    <Typography
                      mt={1}
                      sx={{
                        lineBreak: "anywhere",
                        color: theme.palette.secondary.main,
                      }}
                      variant="subtitle1"
                      fontWeight={600}
                    >
                      +91 91535 55550
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
            <Grid lg={4} md={4} sm={3.5} xs={11} mb={2} gap={"15px"}>
              <Link to={"mailto: infor@finurl.in"}>
                <Box
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                  gap={"15px"}
                >
                  <Typography
                    mt={1}
                    sx={{
                      lineBreak: "anywhere",
                      color: theme.palette.secondary.main,
                    }}
                    variant="subtitle1"
                    fontWeight={600}
                  >
                    <MailOutlineRoundedIcon />
                  </Typography>

                  <Box>
                    <Typography
                      sx={{ color: theme.palette.secondary.main }}
                      variant="body1"
                    >
                      Email:
                    </Typography>
                    <Typography
                      mt={1}
                      sx={{
                        lineBreak: "anywhere",
                        color: theme.palette.secondary.main,
                      }}
                      variant="subtitle1"
                      fontWeight={600}
                    >
                      info@finurl.in
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          </Grid>
          <Typography textAlign={"center"} mt={2} variant="body1">
            Just click to mail or make a call
          </Typography>
        </Box>
      </section>
    </>
  );
};

export default ContactUs;
