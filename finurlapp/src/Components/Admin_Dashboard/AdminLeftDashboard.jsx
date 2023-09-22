import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
// import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
// import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
// import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
// import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import styles from "./../../CSS/dashboard.module.css";
import { DasboardContext } from "../../Context/DashboardContext";
import circle_logo from "./../../Assets/Images/circle_log.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { persistor } from "../../Redux/store";
import { Link, useNavigate } from "react-router-dom";

const AdminLeftDashboard = () => {
  // const { setActiveTab } = useContext(DasboardContext);
  const { toggle } = useContext(DasboardContext);
  const theme = useTheme();

  // const handleDashboardSec = () => {
  //   setActiveTab("dashboard");
  // };

  // const handleRecordsSec = () => {
  //   setActiveTab("records");
  // };

  // const handleBankWiseSec = () => {
  //   setActiveTab("bank offers");
  // };

  const navigate = useNavigate();

  const handleLogout = () => {
    persistor.purge();
    localStorage.removeItem("persist:root");
    navigate("/authentication");
    window.location.reload();
  };

  return (
    <>
      <Sidebar
        backgroundColor={theme.palette.secondary.dark}
        id={styles.sidebar}
        collapsedWidth="80px"
        collapsed={toggle}
      >
        <Box
          // border={"1px solid #ccc" }
          width={"80%"}
          m={"auto"}
          mt={2}
          mb={5}
          display={"flex"}
          gap={"10px"}
          // alignItems={"center"}
          justifyContent={"center"}
        >
          {toggle ? (
            <>
              <Link to={"/"}>
                <Box mt={2}>
                  <img
                    style={{ display: "block", margin: "auto" }}
                    height={"30vh"}
                    src={circle_logo}
                    alt=""
                  />
                </Box>
              </Link>
            </>
          ) : (
            <>
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <Box mt={2} display={"flex"} alignItems={"center"} gap={"15px"}>
                  <img height={"30vh"} src={circle_logo} alt="logo" />
                  <Typography mt={0.5} variant="h6">
                    FinURL
                  </Typography>
                </Box>
              </Link>
            </>
          )}
        </Box>
        <Menu>
          <MenuItem
            id={styles.menu_item}
            icon={
              <HomeRoundedIcon sx={{ color: theme.palette.primary.main }} />
            }
            // onClick={handleDashboardSec}
          >
            <Typography variant="body1"> Dashboard</Typography>
          </MenuItem>
          {/* <MenuItem
            id={styles.menu_item}
            icon={
              <CompareArrowsRoundedIcon
                sx={{ color: theme.palette.primary.main }}
              />
            }
            onClick={handleRecordsSec}
          >
            <Typography variant="body1"> Loans Records</Typography>
          </MenuItem>
          <MenuItem
            id={styles.menu_item}
            icon={
              <CreditScoreRoundedIcon
                sx={{ color: theme.palette.primary.main }}
              />
            }
            onClick={handleBankWiseSec}
          >
            <Typography variant="body1"> Bank Offers</Typography>
          </MenuItem>
          <MenuItem
            id={styles.menu_item}
            icon={
              <PaymentRoundedIcon sx={{ color: theme.palette.primary.main }} />
            }
          >
            <Typography variant="body1"> Cards</Typography>
          </MenuItem>
          <MenuItem
            id={styles.menu_item}
            icon={
              <LeaderboardRoundedIcon
                sx={{ color: theme.palette.primary.main }}
              />
            }
          >
            <Typography variant="body1">Insights</Typography>
          </MenuItem>
          <MenuItem
            id={styles.menu_item}
            icon={
              <SettingsRoundedIcon sx={{ color: theme.palette.primary.main }} />
            }
          >
            <Typography variant="body1">Settings</Typography>
          </MenuItem> */}
          <MenuItem
            onClick={handleLogout}
            style={{ marginTop: "70%" }}
            id={styles.menu_item}
            icon={<LogoutIcon sx={{ color: theme.palette.primary.main }} />}
          >
            <Typography variant="body1">Logout</Typography>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default AdminLeftDashboard;
