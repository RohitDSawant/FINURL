import React, { useState } from "react";
import finurl from "../../Assets/Images/circle_log.png";
import "../../CSS/register.css";
import { useDispatch } from "react-redux";
import {
  LoginFunc,
  SignUpFunc,
} from "../../Redux/Func/Authentication/Authenticate";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Snackbar,
  Switch,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import auth1 from "./../../Assets/Images/best_loans_for_you.svg";
import auth3 from "./../../Assets/Images/partners_support.svg";
import auth2 from "./../../Assets/Images/easy_access.svg";
import Slider from "react-slick";

const LoginPage = () => {
  const theme = useTheme();

  const [activeInput, setActiveInput] = useState(null);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [showOptSec, setShowOptSec] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [getOTPInputs, setOTPInputs] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    panNumber: "",
    // partner: true,
  });

  const [loginformData, LoginSetFormData] = useState({
    email: "",
    password: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnack(false);
    setShowErrorSnack(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handlePartnerToggle = () => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     partner: !prevData.partner,
  //   }));
  // };

  const dispatch = useDispatch();

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    await axios
      .post("https://api.finurl.in/api/v1/auth/signup", formData)
      .then((res) => {
        document.querySelector("form").reset();
        console.log(res.data);
        if (res.data.message === "User created") {
          setIsLoading(false);
          setShowSuccessSnack(true);
          setSnackMsg("Signup success, Password sent on email.");
          console.log(res.data.message);

          setTimeout(() => {
            document.querySelector(".toggle").click();
          }, 2000);
        } else {
          setIsLoading(false);
          setShowErrorSnack(true);
          setSnackMsg("Signup Failed, Please try again.");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Request failed with status code 409") {
          setSnackMsg(`Sorry ! User with same credentials already exists.`);
          setShowErrorSnack(true);
          setIsLoading(false);
        } else {
          setSnackMsg(`Invalid credentials`);
          setShowErrorSnack(true);
          setIsLoading(false);
        }
      });
  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<< Signin >>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    LoginSetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios
        .post("https://api.finurl.in/api/v1/auth/login", loginformData)
        .then((res) => {
          if ((res.data.msg = "Login Success")) {
            setIsLoading(false);
            setShowOptSec(true);
            setShowSuccessSnack(true);
            setSnackMsg("OTP sent on email");
          } else {
            showErrorSnack(true);
            setIsLoading(false);
            setSnackMsg("Invalid Credentials, please try again...");
          }
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setShowErrorSnack(true);
      setSnackMsg("Invalid Credentials, please try again...");
    }
  };

  // OTP func
  const handleOtp = (e) => {
    setOTPInputs(Number(e.target.value));
  };

  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  const verifyOtp = async () => {
    console.log(getOTPInputs);
    setIsLoading(true);
    try {
      await axios
        .post("https://api.finurl.in/api/v1/auth/verifyOtp", {
          email: loginformData.email,
          otp: getOTPInputs,
        })
        .then((res) => {
          console.log(res.data);
          setTimeout(() => {
            if (res.data.msg === "User Logged In Successfully!") {
              setIsLoading(false);
              setShowSuccessSnack(true);
              setSnackMsg("Login Successfull!");
              dispatch(
                LoginFunc({ user: res.data.user, token: res.data.token })
              );
              setTimeout(() => {
                navigate("/");
              }, 3000);
            }
          }, 3000);
        });
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setShowErrorSnack(true);
      setSnackMsg("Incorrect OTP, Please try again");
    }
  };

  return (
    <>
      <Navbar />
      <main className={!isSignUpMode ? "sign-up-mode" : ""}>
        <Box
          style={{
            backgroundColor:
              theme.palette.mode === "light"
                ? "#fff"
                : theme.palette.secondary.light,
          }}
          className="box"
        >
          <Box className="inner-box">
            <Box className="forms-wrap">
              {!isSignUpMode ? (
                <>
                  <form
                    action="index.html"
                    autoComplete="off"
                    className="sign-up-form"
                    onSubmit={handleSubmitSignIn}
                  >
                    <Box mb={2} gap={"15px"} display={"flex"}>
                      <img className="logo" src={finurl} alt="easyclass" />
                      <Typography variant="h6">FinURL</Typography>
                    </Box>

                    <Box className="heading">
                      <Typography mb={0.5} variant="h6">
                        Welcome
                      </Typography>
                      <Box mb={3} display={"flex"} alignItems={"center"}>
                        <Typography mr={1} fontSize={"small"} variant="body2">
                          Not registered yet ?
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight={600}
                          className="toggle"
                          fontSize={"small"}
                          // color={theme.palette.primary.main}
                          onClick={() => setIsSignUpMode(!isSignUpMode)}
                        >
                          Sign Up
                        </Typography>
                        <Typography mt={0.5}>
                          <KeyboardDoubleArrowRightIcon fontSize="small" />
                        </Typography>
                      </Box>
                    </Box>

                    <Box className="actual-form">
                      <Box className="input-wrap">
                        <TextField
                          size="small"
                          variant="standard"
                          sx={{ width: "85%" }}
                          placeholder="Email"
                          onChange={handleSigninChange}
                          type="email"
                          name="email"
                          className={`input-field ${
                            activeInput === 0 ? "active" : ""
                          }`}
                          autoComplete="off"
                          required
                        />
                        {/* <label>Name</label> */}
                      </Box>

                      <Box className="input-wrap">
                        <TextField
                          size="small"
                          variant="standard"
                          sx={{ width: "85%" }}
                          placeholder="Password"
                          onChange={handleSigninChange}
                          type="password"
                          name="password"
                          className={`input-field ${
                            activeInput === 1 ? "active" : ""
                          }`}
                          autoComplete="off"
                          required
                        />
                        {/* <label>Password</label> */}
                      </Box>

                      {showOptSec ? (
                        <>
                          <Box className="input-wrap">
                            <TextField
                              size="small"
                              variant="standard"
                              sx={{ width: "85%" }}
                              placeholder="OTP"
                              onChange={handleOtp}
                              type="number"
                              minLength="6"
                              name="otp"
                              className={`input-field ${
                                activeInput === 1 ? "active" : ""
                              }`}
                              autoComplete="off"
                              required
                            />
                          </Box>
                        </>
                      ) : (
                        <></>
                      )}

                      {!showOptSec ? (
                        <>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={"30px"}
                            marginBottom={"20px"}
                          >
                            <Button
                              disabled={isLoading}
                              type="submit"
                              className="sign-btn"
                              sx={{
                                backgroundColor: `${theme.palette.primary.main}`,
                                marginBottom: "5px",
                                width: "max-content",
                                padding: "5px 15px",
                              }}
                            >
                              <Typography
                                variant="body2"
                                color={theme.palette.secondary.main}
                                fontWeight={600}
                              >
                                Sign in
                              </Typography>
                            </Button>
                            <Typography>
                              {isLoading ? <CircularProgress size={20} /> : ""}
                            </Typography>
                          </Box>
                        </>
                      ) : (
                        ""
                      )}

                      {showOptSec ? (
                        <>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={"30px"}
                          >
                            <Button
                              disabled={isLoading}
                              className={"sign-btn"}
                              onClick={verifyOtp}
                              sx={{
                                width: "max-content",
                              }}
                            >
                              <Typography
                                variant="body2"
                                fontWeight={500}
                                textTransform={"capitalize"}
                                color={theme.palette.secondary.main}
                              >
                                Verify OTP
                              </Typography>
                            </Button>
                            {isLoading ? <CircularProgress size={20} /> : ""}
                          </Box>
                        </>
                      ) : (
                        <></>
                      )}
                      {!showOptSec ? (
                        <Link to={"/forgot-password"}>
                          <Typography
                            variant="body2"
                            textAlign={"left"}
                            className="text"
                            id={"forget"}
                          >
                            Forgot your password?
                          </Typography>
                        </Link>
                      ) : (
                        ""
                      )}
                    </Box>
                  </form>
                </>
              ) : (
                <>
                  <form
                    action="index.html"
                    autoComplete="off"
                    className="sign-in-form"
                    onSubmit={handleSubmitSignup}
                  >
                    <Box display={"flex"} gap={"10px"} mb={2}>
                      <img className="logo" src={finurl} alt="easyclass" />
                      <Typography variant="h6">FinURL</Typography>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        mr={1}
                        variant="body2"
                        mb={1}
                        fontSize={"small"}
                      >
                        Already have an account.?
                      </Typography>
                      <Typography
                        variant="body2"
                        mt={-0.5}
                        fontWeight={600}
                        onClick={() => setIsSignUpMode(!isSignUpMode)}
                        className="toggle"
                      >
                        Sign in
                      </Typography>
                      <Typography>
                        <KeyboardDoubleArrowRightIcon fontSize="small" />
                      </Typography>
                    </Box>

                    <Box className="actual-form">
                      <Box className="input-wrap">
                        <TextField
                          size="small"
                          variant="standard"
                          sx={{ width: "85%" }}
                          placeholder="Full Name"
                          onChange={handleChange}
                          type="text"
                          name="name"
                          minLength="4"
                          className="input-field"
                          autoComplete="off"
                          required
                        />
                        {/* <label>Name</label> */}
                      </Box>

                      <Box className="input-wrap">
                        <TextField
                          size="small"
                          variant="standard"
                          sx={{ width: "85%" }}
                          placeholder="Email"
                          onChange={handleChange}
                          type="email"
                          className="input-field"
                          autoComplete="off"
                          required
                          name="email"
                        />
                        {/* <label>Email</label> */}
                      </Box>
                      <Box className="input-wrap">
                        <TextField
                          size="small"
                          variant="standard"
                          sx={{ width: "85%" }}
                          placeholder="PAN No"
                          onChange={handleChange}
                          type="text"
                          className="input-field"
                          autoComplete="off"
                          required
                          name="panNumber"
                        />
                        {/* <label>PAN No</label> */}
                      </Box>

                      <Box className="input-wrap">
                        <TextField
                          size="small"
                          variant="standard"
                          sx={{ width: "85%" }}
                          placeholder="Mobile No"
                          onChange={handleChange}
                          type="number"
                          name="phoneNumber"
                          minLength="10"
                          className="input-field"
                          autoComplete="off"
                          required
                        />
                        {/* <label>Mobile No</label> */}
                      </Box>
                      {/* <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={"10px"}
                        className="input-wrap"
                      >
                        <Switch
                          onChange={handlePartnerToggle}
                          size="small"
                          checked={formData.partner}
                          name="partner"
                        />
                        <Typography variant="body2">
                          Sign up as Partner
                        </Typography>
                      </Box> */}
                      {!showSuccessSnack && !showErrorSnack ? (
                        <>
                          <Box
                            marginBottom={"15px"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"30px"}
                          >
                            <Button
                              disabled={isLoading}
                              type="submit"
                              sx={{
                                backgroundColor: `${theme.palette.primary.main}`,
                                marginBottom: "5px",
                                width: "max-content",
                                padding: "5px 15px",
                              }}
                              value="Sign Up"
                              className="sign-btn"
                            >
                              <Typography
                                color={theme.palette.secondary.main}
                                variant="body2"
                                fontWeight={600}
                              >
                                Sign Up
                              </Typography>
                            </Button>
                            <Typography mt={1}>
                              {isLoading ? <CircularProgress size={20} /> : ""}
                            </Typography>
                          </Box>
                        </>
                      ) : showSuccessSnack ? (
                        <Typography
                          variant="body1"
                          mb={3}
                          fontWeight={600}
                          color={"green"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          Signup Successful
                        </Typography>
                      ) : (
                        <Typography
                          variant="body1"
                          mb={3}
                          fontWeight={600}
                          color={"crimson"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          Signup Failed
                        </Typography>
                      )}

                      <Typography
                        fontSize={"small"}
                        textAlign={"center"}
                        color={theme.palette.primary.main}
                        variant="subtitile2"
                      >
                        By signing up, I agree to the Terms of Services and
                        Privacy Policy
                      </Typography>
                    </Box>
                  </form>
                </>
              )}
            </Box>

            <Box
              style={{ background: theme.palette.primary.main }}
              className="carousel"
            >
              <Slider dots={false} autoplay={true} infinite={true} speed={500}>
                <Box>
                  <img
                    id="auth_img"
                    src={auth1}
                    alt="authentication_carousel"
                  />
                  <Typography
                    mt={1}
                    variant="body1"
                    fontSize={"large"}
                    textAlign={"center"}
                    color={theme.palette.secondary.main}
                    fontWeight={600}
                  >
                    Find the best loans for you
                  </Typography>
                </Box>
                <Box>
                  <img
                    id="auth_img"
                    src={auth2}
                    alt="authentication_carousel"
                  />
                  <Typography
                    mt={1}
                    variant="body1"
                    fontSize={"large"}
                    textAlign={"center"}
                    fontWeight={600}
                    color={theme.palette.secondary.main}
                  >
                    Easy to access from anywhere
                  </Typography>
                </Box>
                <Box>
                  <img
                    id="auth_img"
                    src={auth3}
                    alt="authentication_carousel"
                  />
                  <Typography
                    mt={1}
                    variant="body1"
                    fontSize={"large"}
                    textAlign={"center"}
                    fontWeight={600}
                    color={theme.palette.secondary.main}
                  >
                    Best partners for support
                  </Typography>
                </Box>
              </Slider>
            </Box>
          </Box>
        </Box>
        <Snackbar
          color="primary"
          open={showSuccessSnack || showErrorSnack}
          autoHideDuration={3100}
          onClose={() => handleClose()}
          anchorOrigin={
            !isSignUpMode
              ? { vertical: "bottom", horizontal: "right" }
              : { vertical: "bottom", horizontal: "left" }
          }
        >
          <Alert
            onClose={() => handleClose()}
            severity={"info"}
            sx={{ width: "100%" }}
          >
            {snackMsg}
          </Alert>
        </Snackbar>
      </main>
    </>
  );
};

export default LoginPage;
