import React, { useEffect } from "react";
import styles from "./../../CSS/homepage.module.css";
import { Box, Grid, Typography } from "@mui/material";
import year from "./../../Assets/Images/calender.svg";
import happy_customer from "./../../Assets/Images/happy_customer.svg";
import active_partners from "./../../Assets/Images/active_partners.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeB = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id={styles.home_b_sec}>
        <Grid
          margin={"auto"}
          container
          justifyContent={"space-evenly"}
          width={"85vw"}
          spacing={1}
          gap={2}
        >
          <Grid
            data-aos="fade-right"
            data-aos-duration="1500"
            justifyContent={"center"}
            item
            px={4}
            py={2}
            lg={3}
            md={3}
            sm={5}
            xs={10}
            sx={{
              "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <img
              className={styles.home_b_img}
              src={year}
              alt="happy_customer"
            />

            <Typography
              mt={2}
              fontSize={"small"}
              textAlign={"center"}
              variant="h6"
            >
              ₹940M+
            </Typography>
            <Typography fontSize={"small"} textAlign={"center"} variant="body2">
              Disbursed (FY 2022-23)
            </Typography>
          </Grid>
          <Grid
            data-aos="fade-down"
            data-aos-duration="1500"
            alignItems={"center"}
            justifyContent={"center"}
            item
            sx={{
              "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
            px={4}
            py={2}
            lg={3}
            md={3}
            sm={5}
            xs={10}
          >
            <Box>
              <img
                className={styles.home_b_img}
                src={active_partners}
                alt="active_partners"
              />
              <Box mt={2}>
                <Typography
                  fontSize={"small"}
                  textAlign={"center"}
                  variant="h6"
                >
                  2800+
                </Typography>
                <Typography
                  fontSize={"small"}
                  textAlign={"center"}
                  variant="body2"
                >
                  Active Partners
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
           px={4}
           py={2}
           sx={{
            "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
            data-aos="fade-left"
            data-aos-duration="1500"
            alignItems={"center"}
            justifyContent={"center"}
            item
            lg={3}
            md={3}
            sm={5}
            xs={10}
          >
            <Box>
              <img
                className={styles.home_b_img}
                src={happy_customer}
                alt="2022_year"
              />
              <Box mt={2}>
                <Typography
                  fontSize={"small"}
                  textAlign={"center"}
                  variant="h6"
                >
                  10000+
                </Typography>
                <Typography
                  fontSize={"small"}
                  textAlign={"center"}
                  variant="body2"
                >
                  Happy Customers
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default HomeB;
