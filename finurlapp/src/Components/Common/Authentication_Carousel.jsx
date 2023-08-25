import React, { useState } from "react";
import finurl from "../../Assets/Images/finurl1.png";
import "../../CSS/register.css";
import { useDispatch } from "react-redux";
import {
  LoginFunc,
  SignUpFunc,
} from "../../Redux/Func/Authentication/Authenticate";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import auth1 from "./../../Assets/Images/auth_1.svg";
import auth2 from "./../../Assets/Images/auth_2.svg";
import auth3 from "./../../Assets/Images/auth_3.svg";

const LoginPage = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [showOptSec, setShowOptSec] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);
  const [showSigupError, setShowSigupError] = useState(false);
  const [openSignInSnack, setOpenSignInSnack] = useState(false);
  const [openSignupSnack, setOpenSignupSnack] = useState(false);

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
      .post("http://localhost:4000/api/v1/auth/signup", formData)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setOpenSignupSnack(true);
          console.log(res.data.message);
          setTimeout(()=>{
            document.querySelector(".toggle").click()
          }, 2000)
        } else {
          setShowSigupError(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setShowSigupError(true);
      });
  };

  const handleOtp = (e) => {
    setOTPInputs(Number(e.target.value));
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/api/v1/auth/login", loginformData)
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
        .post("http://localhost:4000/api/v1/auth/verifyOtp", {
          email: loginformData.email,
          otp: getOTPInputs,
        })
        .then((res) => {
          console.log(res.data);
          if ((res.data.msg = "User Logged In Successfully!")) {
            setOpenSignInSnack(true);
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

  console.log("sigupSucess", openSignupSnack);
  console.log("signuperr", showSigupError);
  console.log("siginSucess", openSignInSnack);
  console.log("signInerr", showLoginError);

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
                        />
                        {/* <label>Password</label> */}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {!showOptSec ? (
                    <input
                      placeholder=""
                      type="submit"
                      value="Sign In"
                      className="sign-btn"
                    />
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
                  {!openSignupSnack && !showSigupError ? (
                    <input type="submit" value="Sign Up" className="sign-btn" />
                  ) : openSignupSnack ? (
                    <Typography variant="body1" mb={3} fontWeight={600} color={"green"} display={"flex"} alignItems={"center"} justifyContent={"center"}>Signup Successful</Typography>
                  ) : (
                    <Typography variant="body1" mb={3} fontWeight={600} color={"crimson"} display={"flex"} alignItems={"center"} justifyContent={"center"}>Signup Failed</Typography>
                  )}

                  {/* {!showSigupError && ?(<>
                  <input type="submit" value="Sign Up" className="sign-btn" />
                   </>) : (
                     <Typography variant="body1">Signup Failed</Typography>
                   )} */}
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
                // src={auth1}
                className={`image img-1 ${activeSlide === 1 ? "show" : ""}`}
                alt=""
              />
              <img
                // src={auth2}
                className={`image img-2 ${activeSlide === 2 ? "show" : ""}`}
                alt=""
              />
              <img
                // src={auth3}
                className={`image img-3 ${activeSlide === 3 ? "show" : ""}`}
                alt=""
              />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div style={{ color: "black" }} className="text-group">
                  {activeSlide === 1 && (
                    <>
                      <h2>Find the best loan for you</h2>
                    </>
                  )}
                  {activeSlide === 2 && (
                    <>
                      <h2>Loans at best rates possible </h2>
                    </>
                  )}
                  {activeSlide === 3 && (
                    <>
                      <h2>Track your progress in no time</h2>
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
