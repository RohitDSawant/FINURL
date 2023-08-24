import React, { useState } from "react";
import finurl from "../../Assets/Images/finurl1.png";
import "../../CSS/register.css";
import { useDispatch } from "react-redux";
import {
  LoginFunc,
  SignUpFunc,
} from "../../Redux/Func/Authentication/Authenticate";
import axios from "axios";
import { Alert, Button, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [showOptSec, setShowOptSec] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);
  const [loginSucessSnack, setLoginSucessSnack] = useState(false);
  // const [showSignupError, setShowSignupError] = useState(false);
  const [signupSucessSnack, setSignupSucessSnack] = useState(false);

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
    await axios
      .post("https://api.finurl.in/api/v1/auth/signup", formData)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert("SignUp Sucessful");
        } else {
          alert("Please check the credentials and try again");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Please check the credentials and try again");
      });
  };


  const handleOtp = (e) => {
    setOTPInputs(Number(e.target.value));
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://api.finurl.in/api/v1/auth/login", loginformData)
        .then((res) => {
          if ((res.data.msg = "OTP sent to the user")) {
            setShowOptSec(true);
          } else {
            setShowLoginError(true);
          }
        });
    } catch (error) {
      console.log(error);
      setShowLoginError(true);
    }
  };

  const handleInputBlur = (index) => {
    if (index !== activeInput) return;
    setActiveInput(null);
  };
  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  const navigate = useNavigate();

  const verifyOtp = async () => {
    console.log(getOTPInputs);
    try {
      await axios
        .post("https://api.finurl.in/api/v1/auth/verifyOtp", {
          email: loginformData.email,
          otp: getOTPInputs,
        })
        .then((res) => {
          console.log(res.data);
          if ((res.data.msg = "User Logged In Successfully!")) {
            setLoginSucessSnack(true);
            dispatch(LoginFunc({ user: res.data.user, token: res.data.token }));
            setTimeout(() => {
              navigate("/");
            }, 2000);
          } else {
            setShowLoginError(true);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {isSignUpMode ? (
              <form
                action="index.html"
                autoComplete="off"
                className="sign-up-form"
                onSubmit={handleSubmitSignIn}
              >
                <div className="logo">
                  <img src={finurl} alt="easyclass" />
                  {/* <h4>FINURL</h4> */}
                </div>

                <div className="heading">
                  <h2>Welcome</h2>
                  <h6>Not registered yet?</h6>
                  <a
                    href="#"
                    className="toggle"
                    onClick={() => setIsSignUpMode(!isSignUpMode)}
                  >
                    Sign Up
                  </a>
                </div>

                {/* <Snackbar
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  open={showSignupError}
                  autoHideDuration={3000}
                  onClose={() => setShowSignupError(false)}
                >
                  <Alert
                    onClose={() => setShowSignupError(false)}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    Sign Up failed ! Please try again...
                  </Alert>
                </Snackbar> */}
                <Snackbar
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  open={signupSucessSnack}
                  autoHideDuration={3000}
                  onClose={() => setSignupSucessSnack(false)}
                >
                  <Alert
                    onClose={() => setSignupSucessSnack(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Sign Up Sucessful
                  </Alert>
                </Snackbar>

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
                      // onFocus={() => handleInputFocus(0)}
                      // onBlur={() => handleInputBlur(0)}
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
                      // onFocus={() => handleInputFocus(1)}
                      // onBlur={() => handleInputBlur(1)}
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
                          // onFocus={() => handleInputFocus(1)}
                          // onBlur={() => handleInputBlur(1)}
                        />
                        {/* <label>Password</label> */}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <input
                    placeholder=""
                    type="submit"
                    value="Sign In"
                    className="sign-btn"
                  />

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
                  <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={showLoginError}
                    autoHideDuration={3000}
                    onClose={() => setShowLoginError(false)}
                  >
                    <Alert
                      onClose={() => setShowLoginError(false)}
                      severity="error"
                      sx={{ width: "100%" }}
                    >
                      Invalid Credentials! Please try again...
                    </Alert>
                  </Snackbar>
                  {/* login error snack  */}
                  <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={loginSucessSnack}
                    autoHideDuration={3000}
                    onClose={() => setLoginSucessSnack(false)}
                  >
                    <Alert
                      onClose={() => setLoginSucessSnack(false)}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Login Successful !
                    </Alert>
                  </Snackbar>
                  <p className="text">
                    Forgot your password or you login details?
                    <a href="#">Get help</a> signing in
                  </p>
                </div>
              </form>
            ) : (
              <form
                action="index.html"
                autoComplete="off"
                className="sign-in-form"
                onSubmit={handleSubmitSignup}
              >
                <div className="logo">
                  <img src={finurl} alt="easyclass" />
                  {/* <h4>FINURL</h4> */}
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <a
                    onClick={() => setIsSignUpMode(!isSignUpMode)}
                    className="toggle"
                  >
                    Sign in
                  </a>
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

                  <input type="submit" value="Sign Up" className="sign-btn" />

                  <p className="text">
                    By signing up, I agree to the
                    <a href="#">Terms of Services</a> and
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src="src\assets\undraw_doctors_p6aq.svg"
                className={`image img-1 ${activeSlide === 1 ? "show" : ""}`}
                alt=""
              />
              <img
                src="src\assets\undraw_medical_care_movn.svg"
                className={`image img-2 ${activeSlide === 2 ? "show" : ""}`}
                alt=""
              />
              <img
                src="src\assets\undraw_medicine_b-1-ol.svg"
                className={`image img-3 ${activeSlide === 3 ? "show" : ""}`}
                alt=""
              />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div style={{ color: "black" }} className="text-group">
                  {activeSlide === 1 && (
                    <>
                      <h2>Find best loan suitable for you</h2>
                    </>
                  )}
                  {activeSlide === 2 && (
                    <>
                      <h2>Get Personalized loans </h2>
                    </>
                  )}
                  {activeSlide === 3 && (
                    <>
                      <h2>Best rate possible</h2>
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
  );
};

export default LoginPage;
