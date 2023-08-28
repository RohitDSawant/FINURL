import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import finURL_logo from "./../../Assets/Images/circle_log.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import styles from "./../../CSS/dashboard.module.css";
import { DasboardContext } from "../../Context/DashboardContext";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const LeftDashboard = () => {
  const { setActiveTab } = useContext(DasboardContext);
  const [toggle, setToggle] = useState(false)

  const handleTransactionSec = () => {
    setActiveTab("transaction");
  };


  const handleToggle = () =>{
    setToggle((prev) => !prev)
  }

  return (
    <>
      <Sidebar  id={styles.sidebar} collapsedWidth="100px" collapsed={toggle}>
        <Typography onClick={handleToggle} variant="h6" id={styles.toggle_sidebar}>
          <KeyboardArrowRightRoundedIcon fontSize="medium" />
        </Typography>
        <Box
          border={"1px solid"}
          width={"80%"}
          m={"auto"}
          mt={1}
          mb={5}
          display={"flex"}
          gap={"20px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img height={"45vh"} src={finURL_logo} alt="logo" />
          <Typography variant="h6">FinURL</Typography>
        </Box>
        <Menu>
          <MenuItem icon={<HomeRoundedIcon />}>Dashboard</MenuItem>
          <MenuItem
            icon={<CompareArrowsRoundedIcon />}
            onClick={handleTransactionSec}
          >
            Transaction
          </MenuItem>
          <MenuItem icon={<CreditScoreRoundedIcon />}>Payment</MenuItem>
          <MenuItem icon={<PaymentRoundedIcon />}>Cards</MenuItem>
          <MenuItem icon={<LeaderboardRoundedIcon />}>Insights</MenuItem>
          <MenuItem icon={<SettingsRoundedIcon />}>Settings</MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default LeftDashboard;
