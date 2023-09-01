import {
  Box,
  FormControl,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import styles from "./../../CSS/EligibilityPoint1.module.css";
import React, { useState } from "react";
import application_pencil from "./../../Assets/Images/application-pencil.jpg";
import { useDispatch, useSelector } from "react-redux";
import { handleStashfinInitiateApp } from "../../Redux/Func/Stashfin/Initiate_Application";
import Navbar from "../Common/Navbar";
import theme from "../../Theme/theme";
import { check_status } from "../../Redux/Func/Stashfin/Check_Status";

const ApplicationForLoan = () => {
  const user = useSelector((state) => state.authReducer.loggedInUser._id);
  const processedApplication = useSelector(
    (state) => state.appReducer.currentProcessDetails
  );

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone: "",
    pan_number: "",
    gender: "",
    dob: "",
    mode_of_income: "",
    pincode: "",
    loggedInUserId: user,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnack(false);
    setShowErrorSnack(false);
  };

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await dispatch(
      handleStashfinInitiateApp({
        loggedInUserId: user,
        first_name: formData.first_name,
        middle_name: formData.middle_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        pan_number: formData.pan_number,
        gender: formData.gender,
        dob: formData.dob,
        income: Number(formData.income),
        pincode: Number(formData.pincode),
        token: processedApplication.client_token,
        mode_of_income: 1,
        employment_type: 1,
      })
    )
      .then((response) => {
        console.log(response.message);
        setTimeout(() => {
          setIsLoading(false);
          if (response.message === "Initiated Successfully") {
            dispatch(
              check_status({
                client_token: processedApplication.client_token,
                application_id: response.data.results.application_id,
              })
            );
            setShowSuccessSnack(true);
            setSnackMsg("Please wait while we redirect you...");
            setTimeout(() => {
              window.location.href = response.data.results.redirect_url;
            }, 2000);
            document.querySelector("form").reset();
          } else if (response.message === "User already exists") {
            console.log("sec");
            setShowErrorSnack(true);
            setSnackMsg("Sorry! you are already a part of Stashfin.");
          } else if (response.message === "Invalid details provided") {
            console.log("three");
            setShowErrorSnack(true);
            setSnackMsg("Invalid Details, please check and try again");
          }
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <section id={styles.eligibility_sec}>
        <Grid
          container
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            className={styles.application_left_sec}
            item
            xs={11}
            sm={11}
            md={7}
            lg={6}
          >
            <Typography mb={2} variant="h6">
              Let's complete your Application :
            </Typography>
            {/* 
            <Typography mb={2} variant="h6">
              Application Form:
            </Typography> */}
            <Box
              // bgcolor={theme.palette.primary.main}
              className={styles.application_form}
            >
              <FormControl component="form" onSubmit={handleSubmit}>
                <Box>
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="first_name"
                    label="First Name"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="middle_name"
                    label="Middle Name"
                    variant="standard"
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="last_name"
                    label="Last Name"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                </Box>
                <TextField
                  size="small"
                  sx={{ marginBottom: "15px", marginRight: "15px" }}
                  name="dob"
                  label="D.O.B"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  required
                  onChange={handleChange}
                />
                <Box>
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="email"
                    label="Email"
                    type="email"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="phone"
                    label="Mobile No."
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="pan_number"
                    label="PAN Number"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                </Box>
                <FormControl variant="standard" required>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    sx={{ marginBottom: "5px", color: "#121b28" }}
                    variant="standard"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    label="Gender"
                  >
                    <MenuItem value={"M"}>Male</MenuItem>
                    <MenuItem value={"F"}>Female</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" required>
                  <InputLabel>Employment Type</InputLabel>
                  <Select
                    sx={{
                      marginBottom: "15px",
                      marginTop: "15px",
                      color: "#121b28",
                    }}
                    variant="standard"
                    name="employment_type"
                    value={formData.employmentType}
                    onChange={handleChange}
                    label="Employment Type"
                  >
                    <MenuItem value={1}>Salaried</MenuItem>
                    <MenuItem value={2}>Self-Employed</MenuItem>
                    <MenuItem value={3}>Self_employed/C.A/Dr.</MenuItem>
                  </Select>
                </FormControl>
                <Box>
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="loanAmount"
                    label="Loan Amount"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="income"
                    label="Income"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="pincode"
                    label="Pincode"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={"25px"}>
                  <Button
                    id={styles.submit_btn}
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                  {isLoading ? (
                    <CircularProgress
                      size={25}
                      sx={{ width: "100%", marginTop: "20px" }}
                    />
                  ) : (
                    ""
                  )}
                </Box>
              </FormControl>
            </Box>
          </Grid>
          <Grid className={styles.application_right_sec} item md={4} lg={4}>
            <img
              id={styles.application_pencil}
              src={application_pencil}
              alt="eligibitlty_check_png"
            />
          </Grid>
        </Grid>
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
      </section>
    </>
  );
};

export default ApplicationForLoan;
