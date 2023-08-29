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
import circle_logo from "./../../Assets/Images/circle_log.png";
import theme from "./../../Theme/theme";
import LogoutIcon from "@mui/icons-material/Logout";

const LeftDashboard = () => {
  const { setActiveTab } = useContext(DasboardContext);
  const [toggle, setToggle] = useState(false);

  const handleDashboardSec = () => {
    setActiveTab("dashboard");
  };


  const handleTransactionSec = () => {
    setActiveTab("transaction");
  };

  const handleBankWiseSec = () => {
    setActiveTab("bank offers");
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <Sidebar
        backgroundColor={theme.palette.primary.main}
        id={styles.sidebar}
        collapsedWidth="80px"
        collapsed={toggle}
      >
        <Typography
          onClick={handleToggle}
          variant="h5"
          mt={1}
          id={styles.toggle_sidebar}
        >
          <KeyboardArrowRightRoundedIcon fontSize="medium" />
        </Typography>
        <Box
          // border={"1px solid #ccc" }
          width={"80%"}
          m={"auto"}
          mt={7}
          mb={5}
          display={"flex"}
          gap={"10px"}
          // alignItems={"center"}
          justifyContent={"center"}
        >
          {toggle ? (
            <>
              <img
                style={{ display: "block", margin: "auto" }}
                height={"30vh"}
                src={circle_logo}
                alt=""
              />
            </>
          ) : (
            <>
              <img height={"30vh"} src={circle_logo} alt="logo" />
              <Typography mt={0.2} color={"#fff"} variant="h6">
                FinURL
              </Typography>
            </>
          )}
        </Box>
        <Menu>
          <MenuItem id={styles.menu_item} icon={<HomeRoundedIcon />} onClick={handleDashboardSec}>
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
          <MenuItem id={styles.menu_item} icon={<LogoutIcon />}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default LeftDashboard;
