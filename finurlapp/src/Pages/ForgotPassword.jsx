import React, { useState } from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import verifying_user from "./../Assets/Images/verifying_user.svg";
import reset_password from "./../Assets/Images/reset_password.svg";
import styles from "./../CSS/homepage.module.css";

const ForgotPassword = () => {
  const [showResetSection, setShowResetSection] = useState(false);
  const [requiredEmail, setRequiredEmail] = useState("");
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [resetData, setResetData] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnack(false);
    setShowErrorSnack(false);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    console.log(requiredEmail);
  };

  const handleSubmitReset = (e) => {
    e.preventDefault();
    console.log(resetData);
  };

  const handleRequiredEmailChange = (e) => {
    setRequiredEmail(e.target.value);
  };

  const handleShowResetFunc = () => {
    setShowResetSection((prev) => !prev);
  };

  const handleResetInputs = (e) => {
    const { name, value } = e.target;
    setResetData({ ...resetData, [name]: value });
  };

  return (
    <>
      <Navbar />
      <Box height={"70vh"} mt={2} pt={12}>
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
                <FormControl onSubmit={handleSubmitEmail} fullWidth>
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
                  <Button
                    onClick={handleShowResetFunc}
                    sx={{
                      marginTop: "20px",
                      width: "max-content",
                      padding: "5px 25px",
                    }}
                  >
                    Send OTP
                  </Button>
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
              Reset your password
            </Typography>
            <Grid
              justifyContent={"space-between"}
              container
              alignItems={"center"}
              width={"70vw"}
              m={"auto"}
              mt={2}
            >
              <Grid lg={5}>
                <FormControl onSubmit={handleSubmitReset} fullWidth>
                  <Typography variant="body2" fontWeight={500}>
                    Please provide the O.T.P sent on your email address to reset
                    your password.
                  </Typography>
                  <TextField
                    onChange={handleResetInputs}
                    sx={{ marginTop: "10px" }}
                    label="O.T.P"
                    size="small"
                    variant="standard"
                    type="text"
                    name="otp"
                    value={resetData.otp}
                  />
                  <TextField
                    onChange={handleResetInputs}
                    sx={{ marginTop: "10px" }}
                    label="New Password"
                    size="small"
                    variant="standard"
                    type="password"
                    name="newPassword"
                    value={resetData.newPassword}
                  />
                  <TextField
                    onChange={handleResetInputs}
                    sx={{ marginTop: "10px" }}
                    label="Confirm Password"
                    size="small"
                    variant="standard"
                    type="password"
                    name="confirmPassword"
                    value={resetData.confirmPassword}
                  />
                  <Button
                    onClick={handleShowResetFunc}
                    sx={{
                      marginTop: "20px",
                      width: "max-content",
                      padding: "5px 25px",
                    }}
                  >
                    Reset Password
                  </Button>
                </FormControl>
              </Grid>
              <Grid lg={5}>
                <img
                  className={styles.verifying_user}
                  src={reset_password}
                  alt=""
                />
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
