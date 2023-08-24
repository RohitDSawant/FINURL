import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import styles from "./../../CSS/navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "./../../Assets/Images/finurl1.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsVisible, setProductsVisible] = useState(false);
  const [resourceVisible, setResourceVisible] = useState(false);

  const user = useSelector(
    (state) => state.authReducer.loggedInUser.name
  );

  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const showProductsMenu = () => {
    setProductsVisible(true);
  };

  const collapseProductsMenu = () => {
    setProductsVisible(false);
  };

  const collapseResourceMenu = () => {
    setResourceVisible(false);
  };

  const showResourceMenu = () => {
    setResourceVisible(true);
  };

  const handleUserMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <Box className={styles.navbar}>
        <Box>
          <Link to={"/"}>
            <img className={styles.nav_logo} src={logo} alt="logo" />
          </Link>
        </Box>
        {/* web menu */}
        <Box className={styles.navbar_menu}>
          <Box>
            {/* Products */}
            <Button
              onMouseLeave={collapseProductsMenu}
              onMouseEnter={showProductsMenu}
              id={styles.products_btn}
            >
              <Typography mr={2} variant="body2">
                Products
              </Typography>
              {!productsVisible ? (
                <ExpandMoreIcon fontSize="small" />
              ) : (
                <ExpandLessIcon fontSize="small" />
              )}
            </Button>

            <Box
              onMouseLeave={collapseProductsMenu}
              onMouseEnter={showProductsMenu}
              style={{ display: productsVisible ? "flex" : "none" }}
              className={styles.products_menu}
            >
              <Box>
                <Typography variant="body1" mb={2}>
                  Loans:
                </Typography>
                <Typography variant="body2" m={1}>
                  🔹 Personal Loan
                </Typography>
                <Typography variant="body2" m={1}>
                  🔹 Instant Loan
                </Typography>
                <Typography variant="body2" m={1}>
                  🔹 Home Loan
                </Typography>
                <Typography variant="body2" m={1}>
                  🔹 Business Loan
                </Typography>
                <Typography variant="body2" m={1}>
                  🔹 Professional Loan
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" mb={2}>
                  Card:
                </Typography>
                <Typography variant="body2" m={1}>
                  🔹 My Card
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" mb={2}>
                  Investment:
                </Typography>
                <Typography variant="body2" m={1}>
                  🔹 My Investment
                </Typography>
              </Box>
            </Box>

            {/* <---- Resources ----> */}
            <Button
              onMouseLeave={collapseResourceMenu}
              onMouseEnter={showResourceMenu}
              id={styles.resource_btn}
            >
              <Typography variant="body2" mr={2}>
                Resources{" "}
              </Typography>
              {!resourceVisible ? (
                <ExpandMoreIcon fontSize="small" />
              ) : (
                <ExpandLessIcon fontSize="small" />
              )}
            </Button>

            <Box
              style={{ display: resourceVisible ? "flex" : "none" }}
              onMouseLeave={collapseResourceMenu}
              onMouseEnter={showResourceMenu}
              className={styles.resource_menu}
            >
              <Box>
                <Typography variant="body1" mb={2}>
                  Calculator:
                </Typography>
                <Typography variant="body2" m={1}>
                  🔹 Calculator
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" mb={2}>
                  Financial Literacy
                </Typography>
                <Typography variant="body2" m={1}>
                  🔹 Financial Literacy
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" mb={2}>
                  Credit Management
                </Typography>
                <Typography variant="body2" m={1}>
                  🔹 Credit Management
                </Typography>
              </Box>
            </Box>

            <Button id={styles.about_btn}>
              <Typography variant="body2"> About Us </Typography>
            </Button>
          </Box>
          <Box className={styles.user_section}>
            {isAuth ? (
              <>
                <Button onClick={handleUserMenu} sx={{display: "flex", "gap": "10px"}}>
                  <AccountCircleIcon fontSize="large" />
                  <Typography textTransform={"capitalize"} variant="body1">{user}</Typography>
                </Button>
                {/* <Menu  open={menuOpen}>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Theme : Dark</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu> */}
              </>
            ) : (
              <>
                <Link to={"/authentication"}>
                  <Button>
                    <LoginIcon />
                    SignUp
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Box>
        {/*<--------------- hamburger-menu -------------------> */}
        <Button onClick={handleDrawer} id={styles.hamburger_menu}>
          <MenuIcon />
        </Button>
        <Drawer
          open={drawerOpen}
          anchor="left"
          onClose={() => setDrawerOpen(false)}
        >
          <Box>
            <Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <img className={styles.drawer_icon} src={logo} alt="logo" />
                <DarkModeIcon sx={{ marginRight: "10px" }} />
              </Box>
              <Box ml={2} mt={2}>
                <Typography variant="h6" mb={1}>
                  Loans :
                </Typography>
                <Typography> 🔹 Business Loan</Typography>
                <Typography> 🔹 Home Loan</Typography>
                <Typography> 🔹 Instant Loan</Typography>
                <Typography> 🔹 Loan against property</Typography>
                <Typography> 🔹 Personal Loan</Typography>
              </Box>
              <Box ml={2} mt={3}>
                <Typography variant="h6" mb={1}>
                  Investments
                </Typography>
                <Typography> 🔹 My Investments</Typography>
              </Box>
              <Box ml={2} mt={3}>
                <Typography mb={1} variant="h6">
                  Cards
                </Typography>
                <Typography> 🔹 My Card</Typography>
              </Box>
            </Box>
            <Box mt={3}>
              <List>
                <ListItem>
                  <LoginIcon sx={{ marginRight: "10px" }} />
                  Login
                </ListItem>
                <ListItem>
                  <LogoutIcon sx={{ marginRight: "10px" }} />
                  Logout
                </ListItem>
              </List>
            </Box>

            <Box textAlign={"center"} mt={15} width={"95%"}>
              <Box>
                <Typography>Follow us on:</Typography>
                <Box
                  display={"flex"}
                  margin={"auto"}
                  width={"max-content"}
                  mt={2}
                  mb={2}
                  gap={"30px"}
                >
                  <Box>
                    <FacebookIcon />
                  </Box>
                  <Box>
                    <InstagramIcon />
                  </Box>
                  <Box>
                    <TwitterIcon />
                  </Box>
                  <Box>
                    <LinkedinIcon />
                  </Box>
                </Box>
              </Box>
              <Typography variant="body2">
                Copyright Ⓒ 2023 FinURL. All Rights Reserved.
              </Typography>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
