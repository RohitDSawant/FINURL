import React from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import styles from "./../../CSS/navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "./../../Assets/Images/finurl1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box className={styles.navbar}>
        <Box>
          <Link to={"/"}>
            <img className={styles.nav_logo} src={logo} alt="logo" />
          </Link>
        </Box>
        <Box className={styles.navbar_menu}>
          <Box>
            <Button>Products</Button>
            <Button>Resources</Button>
            <Button>About Us</Button>
          </Box>
          <Box className={styles.user_section}>
            <Button>
              <AccountCircleIcon fontSize="large" />
            </Button>
            <Menu>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Theme : Dark</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
            <Button>SignUp</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
