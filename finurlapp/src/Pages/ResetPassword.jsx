import React, { useState } from "react";
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
import reset_password from "./../Assets/Images/reset_password.svg";
import styles from "./../CSS/homepage.module.css";
import axios from "axios";

const ResetPassword = () => {
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [resetData, setResetData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmitReset = (e) => {
    e.preventDefault();
    console.log(resetData);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSuccessSnack(false);
    setShowErrorSnack(false);
  };

  const handleResetInputs = (e) => {
    const { name, value } = e.target;
    setResetData({ ...resetData, [name]: value });
  };

  return (
    <>
      <Navbar />
      <Typography
        textAlign={"center"}
        width={"80%"}
        m={"auto"}
        fontWeight={500}
        variant="h5"
        pt={15}
      >
        Reset your password
      </Typography>
      <Grid
        justifyContent={"space-between"}
        container
        alignItems={"center"}
        width={"70vw"}
        m={"auto"}
      >
        <Grid lg={5}>
          <FormControl
            component={"form"}
            onSubmit={handleSubmitReset}
            fullWidth
          >
            <Typography variant="body1" mb={1} fontWeight={500}>
              Please enter the new and unique password.
            </Typography>

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
              type="submit"
              disabled={loading}
              sx={{
                marginTop: "25px",
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
            alt="reset_password"
          />
        </Grid>
      </Grid>
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

export default ResetPassword;
