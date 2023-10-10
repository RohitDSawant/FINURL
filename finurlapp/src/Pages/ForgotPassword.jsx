import React, { useRef, useState } from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import verifying_user from "./../Assets/Images/verifying_user.svg";
import otp from "./../Assets/Images/OTP.svg";
import styles from "./../CSS/homepage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [showResetSection, setShowResetSection] = useState(false);
  const [requiredEmail, setRequiredEmail] = useState("");
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [collectOtp, setCollectOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnack(false);
    setShowErrorSnack(false);
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await axios
      .post("http://localhost:4000/api/v1/auth/reset_pass_send_otp", {
        email: requiredEmail,
      })
      .then((res) => {
        setTimeout(() => {
          setIsLoading(false);
          if (res.data.message === "OTP sent to the registered email") {
            setShowSuccessSnack(true);
            setSnackMsg("OTP has been sent on the Email");
            setShowResetSection(true);
          } else {
            setShowErrorSnack(true);
            setSnackMsg(
              "Sorry, we didn't find any user with the email provided."
            );
          }
        }, 2000);
      })
      .catch((err) => {
        setIsLoading(false);
        setShowErrorSnack(true);
        setSnackMsg("Oops! please check the email provided");
      });
  };

  const handleRequiredEmailChange = (e) => {
    setRequiredEmail(e.target.value);
  };

  const handleInputKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "") {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    } else if (e.key >= "0" && e.key <= "9" && index < 5) {
      if (e.target.value.length < 1) {
        e.preventDefault();
        e.target.value = e.key;
        inputRefs[index + 1].current.focus();
        const newOtp = [...collectOtp];
        newOtp[index] = e.key;
        setCollectOtp(newOtp);
      }
      inputRefs[index + 1].current.focus();
      const newOtp = [...collectOtp];
      newOtp[index] = e.key;
      setCollectOtp(newOtp);
    }
  };

  const handleOtpInputs = (e) => {
    setCollectOtp(e.target.value);
  };

  // collect otp input
  const collectOTP = () => {
    const otpValues = inputRefs.map((ref) => ref.current.value);
    const enteredOtp = otpValues.join("");
    return enteredOtp;
  };

  const handleOTPSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(requiredEmail);
    const enteredOtp = collectOTP();

    await axios
      .post("http://localhost:4000/api/v1/auth/reset_pass_verify_otp", {
        email: requiredEmail,
        otp: enteredOtp,
      })
      .then((res) => {
        if (res.data.message === "OTP verified successfully") {
          setTimeout(() => {
            setIsLoading(false);
            setShowSuccessSnack(true);
            setSnackMsg("OTP verified successfully");
            navigate("/reset-password");
          }, 2000);
        } else {
          setTimeout(() => {
            setIsLoading(false);
            setShowErrorSnack(true);
            setSnackMsg("Please enter correct OTP");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          setIsLoading(false);
          setShowErrorSnack(true);
          setSnackMsg("Please enter correct OTP");
        }, 2000);
      });
  };

  return (
    <>
      <Navbar />
      <Box height={"80vh"} mt={2} pt={15}>
        {!showResetSection ? (
          <>
            <Typography
              textAlign={"center"}
              width={"80%"}
              m={"auto"}
              fontWeight={500}
              variant="h5"
            >
              Let's verify that it's you
            </Typography>
            <Grid
              justifyContent={"space-between"}
              container
              alignItems={"center"}
              width={"70vw"}
              m={"auto"}
              mt={3}
            >
              <Grid lg={5}>
                <FormControl
                  component={"form"}
                  onSubmit={handleSubmitEmail}
                  fullWidth
                >
                  <Typography mb={3} variant="body2" fontWeight={500}>
                    Please provide your email address, as we send an unique
                    O.T.P on your email address to reset your password.
                  </Typography>
                  <TextField
                    onChange={handleRequiredEmailChange}
                    label="Email address"
                    size="small"
                    variant="standard"
                  />
                  <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                    <Button
                      disabled={loading}
                      type={"submit"}
                      sx={{
                        marginTop: "20px",
                        width: "max-content",
                        padding: "5px 25px",
                      }}
                    >
                      Send OTP
                    </Button>
                    {loading ? (
                      <CircularProgress sx={{ marginTop: "20px" }} size={25} />
                    ) : (
                      ""
                    )}
                  </Box>
                </FormControl>
              </Grid>
              <Grid lg={5}>
                <img
                  className={styles.verifying_user}
                  src={verifying_user}
                  alt=""
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Typography
              textAlign={"center"}
              width={"80%"}
              m={"auto"}
              fontWeight={500}
              variant="h5"
            >
              O.T.P Verification
            </Typography>
            <Grid
              justifyContent={"space-between"}
              container
              alignItems={"center"}
              width={"70vw"}
              m={"auto"}
            >
              <Grid item lg={5}>
                <Typography variant="body2" fontWeight={600} mb={3}>
                  Please enter the O.T.P send on your mail
                </Typography>
                <FormControl onSubmit={handleOTPSubmit} component={"form"}>
                  <Box width={"90%"} display={"flex"} gap={"10px"}>
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <Box key={index}>
                        <TextField
                          onChange={handleOtpInputs}
                          placeholder="*"
                          inputRef={inputRefs[index]}
                          variant="outlined"
                          type="text"
                          sx={{ width: "75%", textAlign: "center" }}
                          size="medium"
                          inputProps={{ maxLength: 1 }}
                          onKeyDown={(e) => handleInputKeyDown(e, index)}
                        />
                      </Box>
                    ))}
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                    <Button
                      disabled={loading}
                      type={"submit"}
                      sx={{
                        marginTop: "20px",
                        width: "max-content",
                        padding: "5px 25px",
                      }}
                    >
                      Verify OTP
                    </Button>
                    {loading ? (
                      <CircularProgress sx={{ marginTop: "20px" }} size={25} />
                    ) : (
                      ""
                    )}
                  </Box>
                </FormControl>
              </Grid>
              <Grid mt={2} lg={5}>
                <img className={styles.verifying_user} src={otp} alt="" />
              </Grid>
            </Grid>
          </>
        )}
      </Box>
      <Snackbar
        color="secondary"
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
      <Footer />
    </>
  );
};

export default ForgotPassword;
