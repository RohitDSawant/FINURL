import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import styles from "./../../CSS/homepage.module.css";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import InstantLoansCarousel from "../Carousel_Components/InstantLoansCarousel";
import BusinessLoansCarousel from "../Carousel_Components/BusinesssCarousel";
import PersonalLoansCarousel from "../Carousel_Components/PersonalLoanCarousel";
import CoomingSoon from "../Carousel_Components/ComingSoon";

const HomeCLoans = () => {
  const [tab, setCurrentTab] = useState("instant");
  const theme = useTheme()

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };



  return (
    <>
      <section id={styles.home_c_sec}>
        <Typography textAlign={"center"} mb={2} variant="h5">
          Loans
        </Typography>
        <Typography textAlign={"center"} variant="body2">
          A wide range of loans offered by lending partners to fulfill your
          dreams.
        </Typography>
        <Box mt={10} className={styles.loans_sec}>
          <TabContext value={tab}>
            <Box mb={2} sx={{ borderBottom: 1, borderColor: "divider", color: theme.palette.primary.main }}>
              <TabList textColor= {theme.palette.primary.main}
                variant={"scrollable"}
                scrollButtons={"auto"}
                onChange={handleChange}
                sx={{ "width":"60vw", "margin":"auto"}}
              >
                <Tab label="Instant Loan" value="instant" />
                <Tab label="Personal Loan" value="personal" />
                <Tab label="Business Loan" value="business" />
                <Tab label="Home Loan" value="home" />
                <Tab label="Professional Loan" value="professional" />
                <Tab label="Loan against property" value="property" />
              </TabList>
            </Box>
            <TabPanel value="instant">
              <InstantLoansCarousel />
            </TabPanel>
            <TabPanel value="business">
              <BusinessLoansCarousel />
            </TabPanel>

            <TabPanel value="personal">
              <PersonalLoansCarousel />
            </TabPanel>
            <TabPanel value="professional">
              <CoomingSoon />
            </TabPanel>
            <TabPanel value="home">
              <CoomingSoon />
            </TabPanel>
            <TabPanel value="property">
              <CoomingSoon />
            </TabPanel>
          </TabContext>
        </Box>
      </section>
    </>
  );
};

export default HomeCLoans;
