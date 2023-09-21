import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
  useTheme,
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
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { persistor } from "./../../Redux/store";
import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productsVisible, setProductsVisible] = useState(false);
  const [resourceVisible, setResourceVisible] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const theme = useTheme();
  const navigate = useNavigate();
  const { setCurrentTheme, currentTheme } = useContext(ThemeContext);

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

  const handleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const HomeCall = () => {
    navigate("/");
  };

  const NavToDash = () => {
    navigate("/dashboard");
  };

  const handleShowProducts = () => {
    if (productsOpen) {
      setProductsOpen(false);
    } else if (resourceOpen) {
      setResourceOpen(false);
      setProductsOpen(true);
    } else {
      setProductsOpen(true);
    }
  };

  const handleShowResources = () => {
    if (resourceOpen) {
      setResourceOpen(false);
    } else if (productsOpen) {
      setProductsOpen(false);
      setResourceOpen(true);
    } else {
      setResourceOpen(true);
    }
  };

  const handleTheme = () => {
    console.log(currentTheme);
    if (currentTheme === "lightTheme") setCurrentTheme("darkTheme");
    else setCurrentTheme("lightTheme");
  };

  return (
    <>
      <Box bgcolor={theme.palette.background.default} className={styles.navbar}>
        <Box
          onClick={HomeCall}
          display={"flex"}
          gap={"15px"}
          alignItems={"center"}
        >
          <img className={styles.nav_logo} src={logo} alt="logo" />
          <Typography mt={0.5} variant="h6">
            FinURL
          </Typography>
        </Box>
        {/* web menu */}
        <Box className={styles.navbar_menu}>
          <Box>
            {/* Products */}
            <Box onClick={handleShowProducts} id={styles.products_btn}>
              <Typography mr={2} variant="subtitle2">
                Products
              </Typography>
              {!productsOpen ? (
                <ExpandMoreIcon
                  sx={{ color: `${theme.palette.primary.main}` }}
                  fontSize="small"
                />
              ) : (
                <ExpandLessIcon
                  sx={{ color: `${theme.palette.primary.main}` }}
                  fontSize="small"
                />
              )}
            </Box>

            {productsOpen ? (
              <Box
                className={styles.products_menu}
                sx={{ background: theme.palette.background.default }}
              >
                <Box>
                  <Typography variant="body1" mb={2}>
                    Loans:
                  </Typography>
                  <Link to={"/personal-loan"}>
                    <Typography variant="subtitle2" m={1}>
                      🔹 Personal Loan
                    </Typography>
                  </Link>
                  <Link to={"/instant-loan"}>
                    <Typography variant="subtitle2" m={1}>
                      🔹 Instant Loan
                    </Typography>
                  </Link>
                  <Link to={"/home-loan"}>
                    <Typography variant="subtitle2" m={1}>
                      🔹 Home Loan
                    </Typography>
                  </Link>
                  <Link to={"/business-loan"}>
                    <Typography variant="subtitle2" m={1}>
                      🔹 Business Loan
                    </Typography>
                  </Link>
                  <Link to={"/comingsoon"}>
                    <Typography variant="subtitle2" m={1}>
                      🔹 Professional Loan
                    </Typography>
                  </Link>
                  <Link to={"/comingsoon"}>
                    <Typography variant="subtitle2" m={1}>
                      🔹 Loan against property
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Typography variant="body1" mb={2}>
                    Card:
                  </Typography>
                  <Typography variant="subtitle2" m={1}>
                    🔹 My Card
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" mb={2}>
                    Investment:
                  </Typography>
                  <Typography variant="subtitle2" m={1}>
                    🔹 My Investment
                  </Typography>
                </Box>
              </Box>
            ) : (
              ""
            )}

            {/* <---- Resources ----> */}
            <Box onClick={handleShowResources} id={styles.resource_btn}>
              <Typography variant="subtitle2" mr={2}>
                Resources
              </Typography>
              {!resourceOpen ? (
                <ExpandMoreIcon
                  sx={{ color: `${theme.palette.primary.main}` }}
                  fontSize="small"
                />
              ) : (
                <ExpandLessIcon
                  sx={{ color: `${theme.palette.primary.main}` }}
                  fontSize="small"
                />
              )}
            </Box>

            <Box
              style={{ display: resourceOpen ? "flex" : "none" }}
              className={styles.resource_menu}
              sx={{ background: theme.palette.background.default }}
            >
              <Box>
                <Typography variant="body1" mb={2}>
                  Calculator:
                </Typography>
                <Typography variant="subtitle2" m={1}>
                  🔹 Calculator
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" mb={2}>
                  Financial Literacy
                </Typography>
                <Typography variant="subtitle2" m={1}>
                  🔹 Financial Literacy
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" mb={2}>
                  Credit Management
                </Typography>
                <Typography variant="subtitle2" m={1}>
                  🔹 Credit Management
                </Typography>
              </Box>
            </Box>

            <Typography variant="subtitle2">About Us</Typography>
            <Link style={{ textDecoration: "none" }} to={"/contactus"}>
              <Typography
                textTransform={"capitalize"}
                mt={0.2}
                variant="subtitle2"
              >
                Contact Us
              </Typography>
            </Link>
          </Box>
          <Typography
            mt={1}
            mr={2}
            onClick={handleTheme}
            sx={{ color: theme.palette.primary.main }}
          >
            {theme.palette.mode !== "dark" ? (
              <DarkModeIcon />
            ) : (
              <LightModeRoundedIcon />
            )}
          </Typography>
          <Box className={styles.user_section}>
            {isAuth ? (
              <>
                <Typography
                  onClick={handleClick}
                  sx={{ display: "flex", gap: "10px" }}
                >
                  <AccountCircleIcon
                    sx={{ color: `${theme.palette.primary.main}` }}
                    fontSize="large"
                  />
                </Typography>
                <Menu onClose={handleClose} open={openMenu} anchorEl={anchorEl}>
                  {/* <MenuItem>Profile</MenuItem>*/}
                  <MenuItem onClick={NavToDash}>
                    <DashboardCustomizeRoundedIcon
                      sx={{ marginRight: "10px " }}
                    />{" "}
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ marginRight: "10px" }} /> Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Link to={"/authentication"}>
                  <Button>
                    <LoginIcon
                      sx={{ color: `${theme.palette.primary.main}` }}
                    />
                    <Typography
                      sx={{ color: `${theme.palette.primary.main}` }}
                      ml={2}
                      textTransform={"capitalize"}
                      variant="subtitle2"
                    >
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
          <MenuIcon sx={{ color: `${theme.palette.primary.main}` }} />
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
                // border={"1px solid "}
                // justifyContent={"space-evenly"}
              >
                <img className={styles.drawer_icon} src={logo} alt="logo" />
                <Typography
                  color={theme.palette.primary.main}
                  mt={0.5}
                  variant="h6"
                >
                  FinURL
                </Typography>
                <Typography
                  mt={1}
                  ml={5}
                  onClick={handleTheme}
                  sx={{ color: theme.palette.primary.light }}
                >
                  {theme.palette.mode !== "dark" ? (
                    <DarkModeIcon />
                  ) : (
                    <LightModeRoundedIcon />
                  )}
                </Typography>{" "}
              </Box>
              <Box className={styles.products_menu_mob} ml={2} mt={2}>
                <Typography
                  color={theme.palette.primary.main}
                  variant="body2"
                  mb={1}
                >
                  Loans :
                </Typography>
                <Link to={"/instant-loan"}>
                  <Typography variant={"subtitle2"}>🔹 Instant Loan</Typography>
                </Link>
                <Link to={"/business-loan"}>
                  <Typography variant={"subtitle2"}>
                    🔹 Business Loan
                  </Typography>
                </Link>
                <Link to={"/personal-loan"}>
                  <Typography variant={"subtitle2"}>
                    🔹 Personal Loan
                  </Typography>
                </Link>
                <Link to={"/comingsoon"}>
                  <Typography variant={"subtitle2"}> 🔹 Home Loan</Typography>
                </Link>
                <Link to={"/comingsoon"}>
                  <Typography variant={"subtitle2"}>
                    🔹 Professional Loan
                  </Typography>
                </Link>
                <Link to={"/comingsoon"}>
                  <Typography variant={"subtitle2"}>
                    🔹 Loan against property
                  </Typography>
                </Link>
              </Box>
              <Box ml={2} mt={3}>
                <Typography
                  color={theme.palette.primary.main}
                  variant="body2"
                  mb={1}
                >
                  Investments
                </Typography>
                <Typography variant={"subtitle2"}>🔹 My Investments</Typography>
              </Box>
              <Box ml={2} mt={3}>
                <Typography
                  mb={1}
                  color={theme.palette.primary.main}
                  variant="body2"
                >
                  Cards
                </Typography>
                <Typography variant={"subtitle2"}> 🔹 My Card</Typography>
              </Box>
            </Box>
            <Box ml={1} mt={2}>
              <Link to={"/contactus"}>
                <Typography variant={"subtitle2"}> 🔹 Contact Us</Typography>
              </Link>
            </Box>
            <Box ml={1} mt={1}>
              <Link to={"/dashboard"}>
                <Typography variant={"subtitle2"}> 🔹 Dashboard</Typography>
              </Link>
            </Box>
            <Box ml={1} mt={2}>
              {!isAuth ? (
                <>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/authentication"}
                  >
                    <LoginIcon sx={{ marginRight: "10px" }} />
                    <Typography
                      textTransform={"capitalize"}
                      fontWeight={500}
                      variant="subtitle2"
                    >
                      Login
                    </Typography>
                  </Link>
                </>
              ) : (
                <Box display={"flex"} gap={"10px"} ml={1}>
                  <Typography onClick={handleLogout}>
                    <LogoutIcon fontSize="small" />
                  </Typography>
                  <Typography
                    textTransform={"capitalize"}
                    fontWeight={500}
                    variant="subtitle2"
                  >
                    Logout
                  </Typography>
                </Box>
              )}
            </Box>

            <Box textAlign={"center"} mt={3} width={"95%"}>
              <Box>
                <Typography variant={"subtitle2"}>Follow us on:</Typography>
                <Box
                  display={"flex"}
                  margin={"auto"}
                  width={"max-content"}
                  mt={2}
                  mb={2}
                  gap={"30px"}
                >
                  <Box>
                    <FacebookIcon sx={{ color: theme.palette.primary.main }} />
                  </Box>
                  <Box>
                    <InstagramIcon sx={{ color: theme.palette.primary.main }} />
                  </Box>
                  <Box>
                    <TwitterIcon sx={{ color: theme.palette.primary.main }} />
                  </Box>
                  <Box>
                    <LinkedinIcon sx={{ color: theme.palette.primary.main }} />
                  </Box>
                </Box>
              </Box>
              <Typography variant="subtitle2">
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
