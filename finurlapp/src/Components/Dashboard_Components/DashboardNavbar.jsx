import { Badge, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import styles from "./../../CSS/dashboard.module.css";
import { DasboardContext } from "../../Context/DashboardContext";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { persistor } from "../../Redux/store";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const { activeTab } = useContext(DasboardContext);
  const [userAnchorEl, setAnchorEl] = useState(null);

  const handleUserMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    handleClose(); // Close the menu when a menu item is clicked
  };

  const openUserMenu = Boolean(userAnchorEl);

  const navigate = useNavigate()

  const handleLogout = () => {
    persistor.purge();
    localStorage.removeItem("persist:root");
    navigate("/authentication");
    window.location.reload();
    setAnchorEl(null);
  };


  return (
    <Box className={styles.dashboard_navbar}>
      <Box>
        <Typography textTransform={"uppercase"} fontWeight={600} variant="h6">
          {activeTab}
        </Typography>
      </Box>
      <Box className={styles.dashboard_sub_menu}>
        <Typography variant="body2">
          <Badge badgeContent={2} color="secondary">
            <NotificationsNoneRoundedIcon />
          </Badge>
        </Typography>
        <Typography variant="body2">
          <DarkModeOutlinedIcon />
        </Typography>
        <Typography onClick={handleUserMenu} variant="body2">
          <AccountCircleRoundedIcon />
        </Typography>
        <Menu open={openUserMenu} onClose={handleClose} anchorEl={userAnchorEl}>
          <MenuItem onClick={handleMenuItemClick}>
            <EditRoundedIcon fontSize="small" sx={{ marginRight: "10px" }} />
            Edit Profile
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <LogoutRoundedIcon fontSize="small" sx={{ marginRight: "10px" }} />
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default DashboardNavbar;
