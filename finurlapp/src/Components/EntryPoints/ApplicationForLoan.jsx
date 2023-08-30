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
} from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import styles from "./../../CSS/EligibilityPoint1.module.css";
import React, { useState } from "react";
import application_pencil from "./../../Assets/Images/application-pencil.jpg";
import { useDispatch, useSelector } from "react-redux";
import { handleStashfinInitiateApp } from "../../Redux/Func/Stashfin/Initiate_Application";
import Navbar from "../Common/Navbar";
import theme from "../../Theme/theme";

const ApplicationForLoan = () => {
  const client_token = localStorage.getItem("client_token");
  const user = useSelector((state) => state.authReducer.loggedInUser._id);
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

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    dispatch(
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
        token: client_token,
        mode_of_income: 1,
        employment_type: 1,
      })
    ).then((response) => {
      setTimeout(() => {
        setIsLoading(false);
        if (response.status) {
          setShowSuccessSnack(true);
          setSnackMsg("Please wait while we redirect you...");
          document.querySelector("form").reset();
          setTimeout(() => {
            window.location.href = "/application";
          }, 3000);
        } else if (response.errors.message === "customer already exists") {
          setShowErrorSnack(true);
          setSnackMsg("Sorry! you are already a part of Stashfin.");
          document.querySelector("form").reset();
        } else {
          setShowErrorSnack(true);
          setSnackMsg(
            "Something went wrong please check the deatils provided."
          );
          document.querySelector("form").reset();
        }
      }, 3000);
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
                    sx={{ marginBottom: "5px" }}
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
                    sx={{ marginBottom: "15px", marginTop: "15px" }}
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

                <Button
                  sx={{
                    background: `${theme.palette.primary.main}`,
                    color: "#fff",
                    width: "max-content",
                    padding: "5px 50px",
                    display: "block",
                    margin: "auto",
                    marginTop: "20px",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </FormControl>
            </Box>
            {isLoading ? (
              <CircularProgress sx={{ width: "100%", marginTop: "20px" }} />
            ) : (
              ""
            )}
          </Grid>
          <Grid className={styles.application_right_sec} item md={4} lg={4}>
            <img
              id={styles.application_pencil}
              src={application_pencil}
              alt="eligibitlty_check_png"
            />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default ApplicationForLoan;
