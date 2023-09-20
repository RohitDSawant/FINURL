import {
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import styles from "./../../CSS/dashboard.module.css";
import { DasboardContext } from "../../Context/DashboardContext";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { persistor } from "../../Redux/store";
import { useNavigate } from "react-router-dom";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { ThemeContext } from "../../Context/ThemeContext";

const DashboardNavbar = () => {
  const { activeTab, toggle, setToggle } = useContext(DasboardContext);
  const [userAnchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const { setCurrentTheme, currentTheme } = useContext(ThemeContext);

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

  const navigate = useNavigate();

  const handleLogout = () => {
    persistor.purge();
    localStorage.removeItem("persist:root");
    navigate("/authentication");
    window.location.reload();
    setAnchorEl(null);
  };

  // toggle sidebar

  const handleTheme = () => {
    if (currentTheme === "lightTheme") setCurrentTheme("darkTheme");
    else setCurrentTheme("lightTheme");
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Box className={styles.dashboard_navbar}>
      <Box display={"flex"} alignItems={"center"} gap={"15px"}>
        <Typography mt={0.5} mr={2} onClick={handleToggle}>
          {!toggle ? (
            <FormatAlignLeftIcon sx={{ color: theme.palette.primary.main }} />
          ) : (
            <FormatAlignRightIcon sx={{ color: theme.palette.primary.main }} />
          )}
        </Typography>
        <Typography
          color={theme.palette.primary.main}
          textTransform={"uppercase"}
          fontWeight={600}
          variant="body1"
        >
          {activeTab}
        </Typography>
      </Box>
      <Box className={styles.dashboard_sub_menu}>
        <Typography variant="body2">
          <Badge badgeContent={2} color="primary">
            <NotificationsNoneRoundedIcon />
          </Badge>
        </Typography>
        <Box onClick={handleTheme}>
          {theme.palette.mode !== "dark" ? (
            <DarkModeIcon sx={{ color: theme.palette.primary.main }} />
          ) : (
            <LightModeRoundedIcon sx={{ color: theme.palette.primary.light }} />
          )}
        </Box>
        <Typography onClick={handleUserMenu} variant="body2">
          <AccountCircleRoundedIcon
            sx={{ color: theme.palette.primary.main }}
          />
        </Typography>
        <Menu open={openUserMenu} onClose={handleClose} anchorEl={userAnchorEl}>
          <MenuItem onClick={handleMenuItemClick}>
            <EditRoundedIcon
              fontSize="small"
              sx={{ marginRight: "10px", color: theme.palette.primary.main }}
            />
            Edit Profile
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <LogoutRoundedIcon
              fontSize="small"
              sx={{ marginRight: "10px", color: theme.palette.primary.main }}
            />
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default DashboardNavbar;
