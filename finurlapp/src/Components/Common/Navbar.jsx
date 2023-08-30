import React, { useEffect, useRef, useState } from "react";
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
import logo from "./../../Assets/Images/circle_log.png";
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
import { useNavigate } from "react-router-dom";
import { persistor } from "./../../Redux/store";
import theme from "../../Theme/theme";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productsVisible, setProductsVisible] = useState(false);
  const [resourceVisible, setResourceVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const navigate = useNavigate();
  const handleLogout = () => {
    persistor.purge();
    localStorage.removeItem("persist:root");
    navigate("/authentication");
    window.location.reload();
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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

  const handleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const HomeCall = () => {
    navigate("/");
  };

  return (
    <>
      <Box bgcolor={theme.palette.primary.main} className={styles.navbar}>
        <Box
          onClick={HomeCall}
          display={"flex"}
          gap={"15px"}
          alignItems={"center"}
        >
          <img className={styles.nav_logo} src={logo} alt="logo" />
          <Typography mt={0.5} variant="h6" color={theme.palette.primary.dark}>
            FinURL
          </Typography>
        </Box>
        {/* web menu */}
        <Box className={styles.navbar_menu}>
          <Box>
            {/* Products */}
            <Box
              onMouseLeave={collapseProductsMenu}
              onMouseEnter={showProductsMenu}
              id={styles.products_btn}
            >
              <Typography
                color={theme.palette.primary.dark}
                mr={2}
                variant="body2"
              >
                Products
              </Typography>
              {!productsVisible ? (
                <ExpandMoreIcon
                  sx={{ color: `${theme.palette.primary.dark}` }}
                  fontSize="small"
                />
              ) : (
                <ExpandLessIcon
                  sx={{ color: `${theme.palette.primary.dark}` }}
                  fontSize="small"
                />
              )}
            </Box>

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
            <Box
              onMouseLeave={collapseResourceMenu}
              onMouseEnter={showResourceMenu}
              id={styles.resource_btn}
            >
              <Typography
                color={theme.palette.primary.dark}
                variant="body2"
                mr={2}
              >
                Resources
              </Typography>
              {!resourceVisible ? (
                <ExpandMoreIcon
                  sx={{ color: `${theme.palette.primary.dark}` }}
                  fontSize="small"
                />
              ) : (
                <ExpandLessIcon
                  sx={{ color: `${theme.palette.primary.dark}` }}
                  fontSize="small"
                />
              )}
            </Box>

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
              <Typography color={theme.palette.primary.dark} variant="body2">
                About Us
              </Typography>
            </Button>
          </Box>
          <Box className={styles.user_section}>
            {isAuth ? (
              <>
                <Button
                  onClick={handleClick}
                  sx={{ display: "flex", gap: "10px" }}
                >
                  <AccountCircleIcon
                    sx={{ color: `${theme.palette.primary.dark}` }}
                    fontSize="large"
                  />
                </Button>
                <Menu onClose={handleClose} open={openMenu} anchorEl={anchorEl}>
                  {/* <MenuItem>Profile</MenuItem>
                  <MenuItem>Theme : Dark</MenuItem> */}
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Link to={"/authentication"}>
                  <Button>
                    <LoginIcon
                      sx={{ color: `${theme.palette.primary.dark}` }}
                    />
                    <Typography
                      sx={{ color: `${theme.palette.primary.dark}` }}
                      ml={2}
                      textTransform={"capitalize"}
                      variant="body2"
                    >
                      {" "}
                      Login
                    </Typography>
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Box>
        {/*<--------------- hamburger-menu -------------------> */}
        <Box onClick={handleDrawer} id={styles.hamburger_menu}>
          <MenuIcon sx={{ color: `${theme.palette.primary.dark}` }} />
        </Box>
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
                marginLeft={"10%"}
                gap={"20px"}
                // justifyContent={"space-evenly"}
              >
                <img className={styles.drawer_icon} src={logo} alt="logo" />
                <Typography>FinURL</Typography>

                {/* <DarkModeIcon sx={{ marginRight: "10px" }} /> */}
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
                {!isAuth ? (
                  <>
                    <Link
                      style={{ textDecoration: "none", color: "#fff" }}
                      to={"/authentication"}
                    >
                      <ListItem>
                        <LoginIcon sx={{ marginRight: "10px" }} />
                        Login
                      </ListItem>
                    </Link>
                  </>
                ) : (
                  <ListItem>
                    <Button sx={{ color: "#fff" }} onClick={handleLogout}>
                      <LogoutIcon sx={{ marginRight: "10px", color: "#fff" }} />
                      Logout
                    </Button>
                  </ListItem>
                )}
              </List>
            </Box>

            <Box textAlign={"center"} mt={10} width={"95%"}>
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
