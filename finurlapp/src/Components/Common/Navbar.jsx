import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Menu,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import styles from "./../../CSS/navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "./../../Assets/Images/circle_log.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import referral_img from "./../../Assets/Images/referral_img.svg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { persistor } from "./../../Redux/store";
import { ThemeContext } from "../../Context/ThemeContext";
import { PiShareNetworkFill } from "react-icons/pi";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const theme = useTheme();
  const [isCodeCopied, setIsCodeCopied] = useState(false);
  const navigate = useNavigate();
  const { setCurrentTheme, currentTheme } = useContext(ThemeContext);
  const [referralOpen, setReferralOpen] = useState(false);

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
  const User = useSelector((state) => state.authReducer.loggedInUser);

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

  const handleRefferalOpen = useCallback(() => {
    setReferralOpen(true);
  }, []);

  const handleRefferalClose = useCallback(() => {
    setReferralOpen(false);
  }, []);

  const handleCopyCode = useCallback(() => {
    const referralCode = User.referral_link ; // Replace with your actual referral code

    navigator.clipboard.writeText(referralCode).then(
      () => {
        setIsCodeCopied(true);
        setReferralOpen(false);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  }, [User.referral_link]);

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
            <Box
              onMouseLeave={() => setProductsOpen(false)}
              onMouseEnter={handleShowProducts}
              className={styles.subnav}
            >
              <Box id={styles.products_btn}>
                <Typography mr={2} variant="subtitle2">
                  Products
                </Typography>
                {!productsOpen ? (
                  <ExpandMoreIcon
                    fontSize="small"
                    sx={{ color: theme.palette.primary.main }}
                  />
                ) : (
                  <ExpandLessIcon
                    fontSize="small"
                    sx={{ color: theme.palette.primary.main }}
                  />
                )}
              </Box>
              <Box
                className={styles.products_menu}
                sx={{ background: theme.palette.background.default }}
              >
                <Box>
                  <Typography variant="body1" mb={2}>
                    Loans:
                  </Typography>
                  <Link to={"/personal-loan"}>
                    <Typography
                      variant="subtitle2"
                      m={1}
                      className={styles.submenus}
                    >
                      🔹 Personal Loan
                    </Typography>
                  </Link>
                  <Link to={"/instant-loan"}>
                    <Typography
                      variant="subtitle2"
                      m={1}
                      className={styles.submenus}
                    >
                      🔹 Instant Loan
                    </Typography>
                  </Link>
                  <Link to={"/home-loan"}>
                    <Typography
                      variant="subtitle2"
                      m={1}
                      className={styles.submenus}
                    >
                      🔹 Home Loan
                    </Typography>
                  </Link>
                  <Link to={"/business-loan"}>
                    <Typography
                      variant="subtitle2"
                      m={1}
                      className={styles.submenus}
                    >
                      🔹 Business Loan
                    </Typography>
                  </Link>
                  <Link to={"/comingsoon"}>
                    <Typography
                      variant="subtitle2"
                      m={1}
                      className={styles.submenus}
                    >
                      🔹 Professional Loan
                    </Typography>
                  </Link>
                  <Link to={"/comingsoon"}>
                    <Typography
                      variant="subtitle2"
                      m={1}
                      className={styles.submenus}
                    >
                      🔹 Loan against property
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Typography variant="body1" mb={2}>
                    Card:
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    m={1}
                    className={styles.submenus}
                  >
                    🔹 My Card
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" mb={2}>
                    Investment:
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    m={1}
                    className={styles.submenus}
                  >
                    🔹 My Investment
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* <---- Resources ----> */}
            <Box
              onMouseLeave={() => setResourceOpen(false)}
              onMouseEnter={handleShowResources}
              className={styles.subnav}
            >
              <Box id={styles.resource_btn}>
                <Typography variant="subtitle2" mr={2}>
                  Resources
                </Typography>
                {!resourceOpen ? (
                  <ExpandMoreIcon
                    fontSize="small"
                    sx={{ color: theme.palette.primary.main }}
                  />
                ) : (
                  <ExpandLessIcon
                    fontSize="small"
                    sx={{ color: theme.palette.primary.main }}
                  />
                )}
              </Box>
              <Box
                className={styles.resource_menu}
                sx={{ background: theme.palette.background.default }}
              >
                <Box>
                  <Typography variant="body1" mb={2}>
                    Calculator:
                  </Typography>
                  <a href="http://localhost:3000#calculator">
                    <Typography
                      variant="subtitle2"
                      m={1}
                      className={styles.submenus}
                    >
                      🔹 Calculator
                    </Typography>
                  </a>
                </Box>
                <Box>
                  <Typography variant="body1" mb={2}>
                    Financial Literacy
                  </Typography>
                  <Link to={"/financial-literacy"}>
                    <Typography
                      variant="subtitle2"
                      m={1}
                      className={styles.submenus}
                    >
                      🔹 Financial Literacy
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Typography variant="body1" mb={2}>
                    Credit Management
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    m={1}
                    className={styles.submenus}
                  >
                    🔹 Credit Management
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Link to={"/aboutus"}>
              <Typography variant="subtitle2">About Us</Typography>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/contactus"}>
              <Typography
                textTransform={"capitalize"}
                mt={0.2}
                variant="subtitle2"
              >
                Contact Us
              </Typography>
            </Link>
            {isAuth ? (
              <Typography
                onClick={handleRefferalOpen}
                variant="body1"
                mt={1}
                fontWeight={500}
              >
                <PiShareNetworkFill />
              </Typography>
            ) : (
              ""
            )}
            <Dialog open={referralOpen} onClose={handleRefferalClose}>
              <DialogTitle>
                <Typography
                  textAlign={"center"}
                  fontWeight={600}
                  variant="h6"
                  sx={{ textDecoration: "underline" }}
                >
                  Refer a friend
                </Typography>
                <Typography
                  textAlign={"center"}
                  fontWeight={500}
                  variant="body2"
                  p={1}
                >
                  Share this code with others and ask them to sign up. Both of
                  you will be rewarded with a referral bonus.
                </Typography>
              </DialogTitle>
              <DialogContent>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={"10px"}
                >
                  <img
                    className={styles.referral_img}
                    src={referral_img}
                    alt=""
                  />

                  <Box>
                    <Typography variant="body2" textAlign={"center"} mb={1}>
                      Your Referral Code :
                    </Typography>
                    <Button
                      onClick={handleCopyCode}
                      sx={{ padding: "10px 25px" }}
                    >
                      <Typography
                        color={theme.palette.secondary.main}
                        variant="subtitle2"
                        fontSize={"small"}
                        fontWeight={500}
                        textTransform={"lowercase"}
                      >
                        {User.referral_link}
                      </Typography>
                    </Button>
                    <Typography
                      textAlign={"center"}
                      fontSize={"x-small"}
                      mt={1}
                    >
                      Click to copy referral code
                    </Typography>
                  </Box>
                </Box>
              </DialogContent>
            </Dialog>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={isCodeCopied}
              autoHideDuration={3000}
              onClose={() => setIsCodeCopied(false)}
            >
              <Alert
                onClose={() => setIsCodeCopied(false)}
                severity="success"
                sx={{ width: "100%" }}
              >
                Referral Code copied successfully !
              </Alert>
            </Snackbar>
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
                  <MenuItem onClick={NavToDash}>
                    <DashboardCustomizeRoundedIcon
                      sx={{ marginRight: "10px " }}
                    />
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ marginRight: "10px" }} /> Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Link style={{ textDecoration: "none" }} to={"/authentication"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <LoginIcon
                      sx={{ color: `${theme.palette.primary.main}` }}
                    />
                    <Typography
                      sx={{ color: `${theme.palette.primary.main}` }}
                      ml={2}
                      textTransform={"capitalize"}
                      variant="body2"
                      fontWeight={500}
                    >
                      Login
                    </Typography>
                  </Box>
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
                sx={{ color: theme.palette.primary.main }}
              >
                {theme.palette.mode !== "dark" ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeRoundedIcon />
                )}
              </Typography>
            </Box>
            <Box height={"90vh"} overflow={"scroll"}>
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
              <Box className={styles.products_menu_mob} ml={2} mt={2}>
                <Typography
                  color={theme.palette.primary.main}
                  variant="body2"
                  mb={1}
                >
                  Products :
                </Typography>
                <Link to={"/calculator"}>
                  <Typography variant={"subtitle2"}>🔹 Calculator</Typography>
                </Link>
                <Link to={"/financial-literacy"}>
                  <Typography variant={"subtitle2"}>
                    🔹 Financial Literacy
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
              <Box ml={1} mt={2}>
                <Link to={"/contactus"}>
                  <Typography variant={"subtitle2"}> 🔹 Contact Us</Typography>
                </Link>
              </Box>
              <Box ml={1} mt={1}>
                <Link to={"/aboutus"}>
                  <Typography variant={"subtitle2"}> 🔹 About Us</Typography>
                </Link>
              </Box>
              <Box ml={1} mt={1}>
                {isAuth ? (
                  <Link to={"/dashboard"}>
                    <Typography variant={"subtitle2"}> 🔹 Dashboard</Typography>
                  </Link>
                ) : (
                  ""
                )}
              </Box>
              <Box ml={1} mt={2}>
                {!isAuth ? (
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"/authentication"}
                    >
                      <Box display={"flex"} gap={"5px"}>
                        <Typography>
                          <LoginIcon fontSize="small" />
                        </Typography>
                        <Typography
                          textTransform={"capitalize"}
                          fontWeight={500}
                          variant="subtitle2"
                        >
                          Login
                        </Typography>
                      </Box>
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
              <Box pb={2} textAlign={"center"} mt={3} width={"95%"}>
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
                      <Link
                        target="_blank"
                        to={"https://www.instagram.com/finurl.in/"}
                      >
                        <InstagramIcon
                          sx={{ color: theme.palette.primary.main }}
                        />
                      </Link>
                    </Box>
                    <Box>
                      <FacebookIcon
                        sx={{ color: theme.palette.primary.main }}
                      />
                    </Box>
                    <Box>
                      <Link
                        target="_blank"
                        to={"https://www.linkedin.com/company/finurl"}
                      >
                        <LinkedinIcon
                          sx={{ color: theme.palette.primary.main }}
                        />
                      </Link>
                    </Box>
                    <Box>
                      <TwitterIcon sx={{ color: theme.palette.primary.main }} />
                    </Box>
                  </Box>
                </Box>
                <Typography pr={2} fontSize={"x-small"} variant="subtitle2">
                  Copyright Ⓒ 2023 FinURL. All Rights Reserved.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
