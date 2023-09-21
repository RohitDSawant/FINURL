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
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import auth1 from "./../../Assets/Images/auth_1.jpg";
import auth2 from "./../../Assets/Images/auth_2.jpg";
import auth3 from "./../../Assets/Images/auth_3.jpg";
import Navbar from "./Navbar";

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
        <div
          style={{ backgroundColor: "#fff" }}
          className="box"
        >
          <div className="inner-box">
            <div className="forms-wrap">
              {!isSignUpMode ? (
                <>
                  <form
                    action="index.html"
                    autoComplete="off"
                    className="sign-up-form"
                    onSubmit={handleSubmitSignIn}
                  >
                    <div className="logo">
                      <img src={finurl} alt="easyclass" />
                      <Typography variant="h6">FinURL</Typography>
                    </div>

                    <div className="heading">
                      <Typography
                        color={theme.palette.primary.main}
                        variant="h6"
                      >
                        Welcome
                      </Typography>
                      <Box display={"flex"} gap={"10px"}>
                        <Typography mb={5} fontSize={"small"} variant="body2">
                          Not registered yet?
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="toggle"
                          onClick={() => setIsSignUpMode(!isSignUpMode)}
                        >
                          Sign Up
                        </Typography>
                      </Box>
                    </div>

                    <div className="actual-form">
                      <div className="input-wrap">
                        <input
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
                      </div>

                      <div className="input-wrap">
                        <input
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
                      </div>

                      {showOptSec ? (
                        <>
                          <div className="input-wrap">
                            <input
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
                            {/* <label>Password</label> */}
                          </div>
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
                          >
                            <Button
                              disabled={isLoading}
                              type="submit"
                              className="sign-btn"
                              sx={{
                                backgroundColor: `${theme.palette.primary.main}`,
                                marginBottom: "10px",
                              }}
                            >
                              <Typography
                                color={"teal"}
                                variant="body2"
                                fontWeight={500}
                              >
                                Sign in
                              </Typography>
                            </Button>
                            {isLoading ? <CircularProgress size={15} /> : ""}
                          </Box>
                        </>
                      ) : (
                        ""
                      )}

                      {showOptSec ? (
                        <>
                          <Box display={"flex"} gap={"30px"}>
                            <Button
                              disabled={isLoading}
                              className={"sign-btn"}
                              onClick={verifyOtp}
                              sx={{
                                background: theme.palette.primary.main,
                                marginBottom: "10px",
                              }}
                            >
                              <Typography
                                variant="body2"
                                fontWeight={500}
                                textTransform={"capitalize"}
                              >
                                Verify OTP
                              </Typography>
                            </Button>
                            {isLoading ? (
                              <CircularProgress
                                size={25}
                                sx={{
                                  width: "60%",
                                  margin: "auto",
                                }}
                              />
                            ) : (
                              ""
                            )}
                          </Box>
                        </>
                      ) : (
                        <></>
                      )}
                      {!showOptSec ? (
                        <Typography
                          variant="body2"
                          textAlign={"left"}
                          className="text"
                        >
                          Forgot your password?
                        </Typography>
                      ) : (
                        ""
                      )}
                    </div>
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
                    <div className="logo">
                      <img src={finurl} alt="easyclass" />
                      <Typography variant="h6">FinURL</Typography>
                    </div>

                    <div
                      style={{ display: "flex", gap: "10px" }}
                      className="heading"
                    >
                      <Typography variant="body2" mb={1} fontSize={"small"}>
                        Get Started, Already have an account.?
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        onClick={() => setIsSignUpMode(!isSignUpMode)}
                        className="toggle"
                      >
                        Sign in
                      </Typography>
                    </div>

                    <div className="actual-form">
                      <div className="input-wrap">
                        <input
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
                      </div>

                      <div className="input-wrap">
                        <input
                          placeholder="Email"
                          onChange={handleChange}
                          type="email"
                          className="input-field"
                          autoComplete="off"
                          required
                          name="email"
                        />
                        {/* <label>Email</label> */}
                      </div>
                      <div className="input-wrap">
                        <input
                          placeholder="PAN No"
                          onChange={handleChange}
                          type="text"
                          className="input-field"
                          autoComplete="off"
                          required
                          name="panNumber"
                        />
                        {/* <label>PAN No</label> */}
                      </div>

                      <div className="input-wrap">
                        <input
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
                      </div>
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
                          <Box display={"flex"} gap={"10px"}>
                            <Button
                              disabled={isLoading}
                              type="submit"
                              value="Sign Up"
                              className="sign-btn"
                              sx={{
                                background: `${theme.palette.primary.main}`,
                                marginBottom: "10px",
                              }}
                            >
                              <Typography variant="subtitle2" fontWeight={500}>
                                Sign Up
                              </Typography>
                            </Button>
                            {isLoading ? (
                              <CircularProgress
                                size={15}
                                sx={{
                                  margin: "auto",
                                  marginTop: "10px",
                                }}
                              />
                            ) : (
                              ""
                            )}
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

                      <p className="text">
                        By signing up, I agree to the
                        <a href="#"> Terms of Services</a> and
                        <a href="#"> Privacy Policy</a>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>

            <div
              style={{ background: theme.palette.primary.main }}
              className="carousel"
            >
              <div className="images-wrapper">
                <img
                  src={auth1}
                  className={`image img-1 ${activeSlide === 1 ? "show" : ""}`}
                  alt=""
                />
                <img
                  src={auth2}
                  className={`image img-2 ${activeSlide === 2 ? "show" : ""}`}
                  alt=""
                />
                <img
                  src={auth3}
                  className={`image img-3 ${activeSlide === 3 ? "show" : ""}`}
                  alt=""
                />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div className="text-group">
                    {activeSlide === 1 && (
                      <>
                        <Typography
                          color={theme.palette.primary.main}
                          variant="h6"
                        >
                          Find the best loan for you
                        </Typography>
                      </>
                    )}
                    {activeSlide === 2 && (
                      <>
                        <Typography
                          color={theme.palette.primary.main}
                          variant="h6"
                        >
                          Loans at best rates possible{" "}
                        </Typography>
                      </>
                    )}
                    {activeSlide === 3 && (
                      <>
                        <Typography
                          color={theme.palette.primary.main}
                          variant="h6"
                        >
                          Track your progress in no time
                        </Typography>
                      </>
                    )}
                  </div>
                </div>

                <div className="bullets">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <span
                      key={index + 1}
                      className={activeSlide === index + 1 ? "active" : ""}
                      onClick={() => handleBulletClick(index + 1)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
