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
} from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import styles from "./../../CSS/EligibilityPoint1.module.css";
import React, { useState } from "react";
import application_pencil from "./../../Assets/Images/application-pencil.jpg";
import { useDispatch, useSelector } from "react-redux";
import { handleStashfinInitiateApp } from "../../Redux/Func/Stashfin/Initiate_Application";

const ApplicationForLoan = () => {
  const client_token = localStorage.getItem("client_token");
const user = useSelector((state)=>state.authReducer.loggedInUser._id)
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      handleStashfinInitiateApp({
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
        employment_type: 1
      })
    );
  };
  return (
    <>
      <section id={styles.eligibility_sec}>
        <Grid
          container
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid lg={5}>
            <Typography mb={2} variant="h6">
              Let's complete your Application :
            </Typography>

            <Box>
              <Typography mb={2} variant="h6">
                Application Form:
              </Typography>
              <FormControl component="form" onSubmit={handleSubmit}>
                <Box>
                  <TextField
                    size="small"
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    name="first_name"
                    label="First Name"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    name="middle_name"
                    label="Middle Name"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    name="last_name"
                    label="Last Name"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                </Box>
                <TextField
                  size="small"
                  sx={{ marginBottom: "10px", marginRight: "10px" }}
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
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    name="email"
                    label="Email"
                    type="email"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    name="phone"
                    label="Mobile No."
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
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
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    variant="standard"
                    name="employment_type"
                    value={formData.employmentType}
                    onChange={handleChange}
                    label="Employment Type"
                  >
                    <MenuItem value={1}>Salaried</MenuItem>
                    <MenuItem value={2}>Self-Employed</MenuItem>
                    <MenuItem value={3}>
                      Self_employed/C.A/Dr.
                    </MenuItem>
                  </Select>
                </FormControl>
                <Box></Box>
                <Box>
                  <TextField
                    size="small"
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    name="loanAmount"
                    label="Loan Amount"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    name="income"
                    label="Income"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    name="pincode"
                    label="Pincode"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                </Box>

                <Button
                  sx={{ marginTop: "20px" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Grid>
          <Grid item lg={4}>
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
