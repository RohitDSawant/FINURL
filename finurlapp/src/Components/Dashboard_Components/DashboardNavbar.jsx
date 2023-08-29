import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import styles from "./../../CSS/dashboard.module.css";
import { DasboardContext } from "../../Context/DashboardContext";

const DashboardNavbar = () => {

  const {activeTab} = useContext(DasboardContext)


  return (
    <>
      <Box className={styles.dashboard_navbar}>
        <Box>
          <Typography textTransform={"uppercase"} fontWeight={600} variant="h6">
            {activeTab}
          </Typography>
        </Box>
        <Box>
          <Button>
            <NotificationsNoneRoundedIcon />
          </Button>
          <Button>
            <DarkModeOutlinedIcon />
          </Button>
          <Button>
            <AccountCircleRoundedIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DashboardNavbar;
