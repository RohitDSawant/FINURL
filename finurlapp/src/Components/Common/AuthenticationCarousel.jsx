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
  Button,
  LinearProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import auth1 from "./../../Assets/Images/auth_1.jpg";
import auth2 from "./../../Assets/Images/auth_2.jpg";
import auth3 from "./../../Assets/Images/auth_3.jpg";
import Navbar from "./Navbar";
import theme from "../../Theme/theme";

const LoginPage = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [showOptSec, setShowOptSec] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [getOTPInputs, setOTPInputs] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    panNumber: "",
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

  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    LoginSetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .post("http://localhost:4000/api/v1/auth/signup", formData)
      .then((res) => {
        document.querySelector("form").reset();
        console.log(res.data);
        if (res.data.message === "User created") {
          setIsLoading(false);
          setShowSuccessSnack(true);
          setSnackMsg("Signup successful");
          console.log(res.data.message);

          setTimeout(() => {
            document.querySelector(".toggle").click();
          }, 2000);
        } else {
          setIsLoading(false);
          setShowErrorSnack(true);
          setSnackMsg(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        setShowErrorSnack(true);
        setSnackMsg("Sign up failed, please try again...");
      });
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios
        .post("http://localhost:4000/api/v1/auth/login", loginformData)
        .then((res) => {
          if ((res.data.msg = "OTP sent to the user")) {
            setIsLoading(false);
            setShowOptSec(true);
            setShowSuccessSnack(true);
            setSnackMsg("OTP mailed successfully");
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

  const navigate = useNavigate();

  const verifyOtp = async () => {
    console.log(getOTPInputs);
    setIsLoading(true);
    try {
      await axios
        .post("http://localhost:4000/api/v1/auth/verifyOtp", {
          email: loginformData.email,
          otp: getOTPInputs,
        })
        .then((res) => {
          console.log(res.data);
          setTimeout(() => {
            if ((res.data.msg = "User Logged In Successfully!")) {
              setIsLoading(false);
              setShowSuccessSnack(true);
              setSnackMsg("Login Successfull!");
              dispatch(
                LoginFunc({ user: res.data.user, token: res.data.token })
              );
              setTimeout(() => {
                navigate("/");
              }, 3000);
            } else {
              setIsLoading(false);
              setShowErrorSnack(true);
              setSnackMsg("Login Failed!");
            }
          }, 3000);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(showSuccessSnack);
  console.log(showErrorSnack);
  console.log(snackMsg);

  return (
    <>
      <Navbar />
      <main className={isSignUpMode ? "sign-up-mode" : ""}>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              {isSignUpMode ? (
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
                      <Typography mb={5} fontSize={"small"} variant="body2">
                        Not registered yet?{" "}
                        <a
                          href="#"
                          className="toggle"
                          onClick={() => setIsSignUpMode(!isSignUpMode)}
                        >
                          Sign Up
                        </a>
                      </Typography>
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
                        <Button
                          type="submit"
                          className="sign-btn"
                          sx={{
                            backgroundColor: `${theme.palette.primary.main}`,
                            color: "#fff",
                            marginBottom: "10px",
                          }}
                        >
                          Sign In
                        </Button>
                      ) : (
                        ""
                      )}

                      {showOptSec ? (
                        <>
                          <Button
                            onClick={verifyOtp}
                            sx={{
                              background: "pink",
                              color: "#000",
                              display: "block",
                              margin: "auto",
                              marginBottom: "10px",
                              textTransform: "capitalize",
                            }}
                          >
                            Verify OTP
                          </Button>
                        </>
                      ) : (
                        <></>
                      )}
                      {!showOptSec ? (
                        <p className="text">
                          Forgot your password or you login details?
                          <a href="#"> Get help</a> signing in
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    {!isLoading ? (
                      <LinearProgress
                        sx={{ width: "60%", margin: "auto", marginTop: "10px" }}
                      />
                    ) : (
                      ""
                    )}
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

                    <div className="heading">
                      <Typography variant="body2" fontSize={"small"}>
                        Get Started
                      </Typography>
                      <Typography mb={2} variant="body2" fontSize={"small"}>
                        Already have an account?{" "}
                        <a
                          onClick={() => setIsSignUpMode(!isSignUpMode)}
                          className="toggle"
                        >
                          Sign in
                        </a>
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
                      {!showSuccessSnack && !showErrorSnack ? (
                        <Button
                          type="submit"
                          value="Sign Up"
                          className="sign-btn"
                          sx={{
                            background: `${theme.palette.primary.main}`,
                            color: "#fff",
                            marginBottom: "10px",
                          }}
                        >
                          Sign Up
                        </Button>
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

                      {/* {!showSigupError && ?(<>
                  <input type="submit" value="Sign Up" className="sign-btn" />
                   </>) : (
                     <Typography variant="body1">Signup Failed</Typography>
                   )} */}
                      <p className="text">
                        By signing up, I agree to the
                        <a href="#"> Terms of Services</a> and
                        <a href="#"> Privacy Policy</a>
                      </p>
                    </div>
                  </form>
                  {isLoading ? (
                    <LinearProgress
                      color={"primary"}
                      sx={{ width: "60%", margin: "auto", marginTop: "10px" }}
                    />
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
            <Snackbar
              open={showSuccessSnack || showErrorSnack}
              autoHideDuration={3100}
              onClose={() => handleClose()}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                onClose={() => handleClose()}
                severity={"info"}
                sx={{ width: "100%" }}
              >
                {snackMsg}
              </Alert>
            </Snackbar>

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
                  <div style={{ color: "black" }} className="text-group">
                    {activeSlide === 1 && (
                      <>
                        <Typography color={"#fff"} variant="h6">
                          Find the best loan for you
                        </Typography>
                      </>
                    )}
                    {activeSlide === 2 && (
                      <>
                        <Typography color={"#fff"} variant="h6">
                          Loans at best rates possible{" "}
                        </Typography>
                      </>
                    )}
                    {activeSlide === 3 && (
                      <>
                        <Typography color={"#fff"} variant="h6">
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
      </main>
    </>
  );
};

export default LoginPage;
