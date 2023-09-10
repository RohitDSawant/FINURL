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
import { sendApplicationDetails } from "../../Redux/Func/Prefr/SendApplicationDetails";

const PrefrApplication = () => {
  const loanId = useSelector(
    (state) => state.appReducer.currentProcessDetails.application_id
  );
  const userID = useSelector((state) => state.authReducer.loggedInUser._id);

  const [formData, setFormData] = useState({
    loanId: loanId,
    firstName: "",
    lastName: "",
    personalEmailId: "",
    gender: "",
    dob: "",
    panNumber: "",
    currentAddress: "",
    currentAddressPincode: "",
    netMonthlyIncome: "",
    desiredLoanAmount: "",
    employmentType: "",
    partnerSpecificInfo: {
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

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendApplicationDetails(formData))
    .then((res)=>[
      console.log(res)
    ])
    console.log(formData)
  };

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
                    name="firstName"
                    label="First Name"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="lastName"
                    label="Last Name"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="personalEmailId"
                    label="Email"
                    type="email"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                </Box>

                <Box>
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
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="panNumber"
                    label="PAN Number"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                </Box>
                <Box>
                  <FormControl fullWidth={true} variant="standard" required>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      sx={{ marginBottom: "5px", marginRight:"10px", color: "#121b28" }}
                      variant="standard"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      label="Gender"
                    >
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth={true} variant="standard" required>
                    <InputLabel>Employment Type</InputLabel>
                    <Select
                      sx={{
                        marginBottom: "15px",
                        marginTop: "15px",
                        color: "#121b28",
                      }}
                      variant="standard"
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      label="Employment Type"
                    >
                      <MenuItem value={"salaried"}>Salaried</MenuItem>
                      <MenuItem value={"selfEmployed"}>Self-Employed</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  size="small"
                  sx={{ marginBottom: "15px", marginRight: "15px" }}
                  name="currentAddress"
                  label="Current Address"
                  variant="standard"
                  required
                  onChange={handleChange}
                />
                <Box>
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="desiredLoanAmount"
                    label="Loan Amount"
                    type="number"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="netMonthlyIncome"
                    label="Income"
                    type="number"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "15px", marginRight: "15px" }}
                    name="currentAddressPincode"
                    label="Pincode"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={"25px"}>
                  <Button
                    disabled={isLoading}
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