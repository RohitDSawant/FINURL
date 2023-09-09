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
import Navbar from "../Common/Navbar";

const PrefrApplication = () => {
  const loanId = useSelector(
    (state) => state.appReducer.currentProcessDetails.application_id
  );
  const userID = useSelector((state) => state.authReducer.loggedInUser._id);

  const [formData, setFormData] = useState({
    loanId: loanId,
    ﬁrstName: "",
    lastName: "",
    personalEmailId: "",
    gender: "",
    dob: "",
    panNumber: "",
    currentAddress: "",
    currentAddressPincode: "",
    monthsInCurrentResidence: "",
    netMonthlyIncome: "",
    desiredLoanAmount: "",
    monthlySalaryMode: "",
    employmentType: "",
    partnerSpeciﬁcInfo: {
      partnerUserId: userID,
      preQual: true,
      preQualAmount: 100000,
      preQualDataSource: "Experian",
      leadSource: "SMS",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");

  const handleSubmit = (e) => {};

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
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => handleClose()}
            severity={"info"}
            color="secondary"
            sx={{ width: "100%" }}
          >
            {snackMsg}
          </Alert>
        </Snackbar>
      </section>
    </>
  );
};

export default PrefrApplication;
