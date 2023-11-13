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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset_completion_password } from "../Redux/Func/Authentication/Authenticate";

const ResetPassword = () => {
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [resetData, setResetData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const applicant_email = useSelector(
    (state) => state.authReducer.reset_applicant_email
  );

  const handleSubmitReset = async (e) => {
    e.preventDefault();
    console.log(resetData);
    setIsLoading(true);

    if (resetData.newPassword === resetData.confirmPassword) {
      axios
        .post("https://api.finurl.in/api/v1/auth/reset_password", {
          email: applicant_email,
          new_password: resetData.confirmPassword,
        })
        .then((res) => {
          console.log(res.data);
          setTimeout(() => {
            setIsLoading(false);
            if (res.data.message === "Password updated successfully!") {
              setSnackMsg("Password updated successfully");
              setShowSuccessSnack(true);
              dispatch(reset_completion_password())
              setTimeout(() => {
                navigate("/authentication");
              }, 1500);
            } else {
              setSnackMsg("Something went wrong, please try again");
              setShowErrorSnack(true);
            }
          }, 1500);
        });
    } else {
      setIsLoading(false);
      setSnackMsg("Password didn't matched, please try again");
      setShowErrorSnack(true);
    }
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
        pb={5}
        pt={5}
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
            <Box display={"flex"} alignItems={"center"} gap={"20px"}>
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
              {loading ? (
                <CircularProgress size={25} sx={{ marginTop: "20px" }} />
              ) : (
                ""
              )}
            </Box>
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
