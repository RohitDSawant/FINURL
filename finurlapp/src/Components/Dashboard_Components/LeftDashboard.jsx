import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import styles from "./../../CSS/dashboard.module.css";
import { DasboardContext } from "../../Context/DashboardContext";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

import circle_logo from "./../../Assets/Images/circle_log.png";
import theme from "./../../Theme/theme";
import LogoutIcon from "@mui/icons-material/Logout";
import { persistor } from "../../Redux/store";
import { useNavigate } from "react-router-dom";

const LeftDashboard = () => {
  const { setActiveTab } = useContext(DasboardContext);
  const { toggle } = useContext(DasboardContext);


  const handleDashboardSec = () => {
    setActiveTab("dashboard");
  };

  const handleTransactionSec = () => {
    setActiveTab("transaction");
  };

  const handleBankWiseSec = () => {
    setActiveTab("bank offers");
  };

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
        backgroundColor={theme.palette.primary.main}
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
              <Box mt={2}>
                <img
                  style={{ display: "block", margin: "auto" }}
                  height={"30vh"}
                  src={circle_logo}
                  alt=""
                />
              </Box>
            </>
          ) : (
            <>
              <Box mt={2} display={"flex"} alignItems={"center"} gap={"15px"}>
                <img height={"30vh"} src={circle_logo} alt="logo" />
                <Typography color={"#fff"} variant="h6">
                  FinURL
                </Typography>
              </Box>
            </>
          )}
        </Box>
        <Menu>
          <MenuItem
            id={styles.menu_item}
            icon={<HomeRoundedIcon />}
            onClick={handleDashboardSec}
          >
            <Typography variant="body1"> Dashboard</Typography>
          </MenuItem>
          <MenuItem
            id={styles.menu_item}
            icon={<CompareArrowsRoundedIcon />}
            onClick={handleTransactionSec}
          >
            Transaction
          </MenuItem>
          <MenuItem
            id={styles.menu_item}
            icon={<CreditScoreRoundedIcon />}
            onClick={handleBankWiseSec}
          >
            Bank Offers
          </MenuItem>
          <MenuItem id={styles.menu_item} icon={<PaymentRoundedIcon />}>
            Cards
          </MenuItem>
          <MenuItem id={styles.menu_item} icon={<LeaderboardRoundedIcon />}>
            Insights
          </MenuItem>
          <MenuItem id={styles.menu_item} icon={<SettingsRoundedIcon />}>
            Settings
          </MenuItem>
          <MenuItem
            onClick={handleLogout}
            style={{ marginTop: "70%" }}
            id={styles.menu_item}
            icon={<LogoutIcon />}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default LeftDashboard;
