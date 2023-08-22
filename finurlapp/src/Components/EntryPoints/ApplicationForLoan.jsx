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

const ApplicationForLoan = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    panNumber: "",
    dob: "",
    income: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/application");
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
                    name="firstName"
                    label="First Name"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    name="lastName"
                    label="Last Name"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
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
                </Box>
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
                    name="mobileNo"
                    label="Mobile No."
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    size="small"
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    name="panNumber"
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
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" required>
                  <InputLabel>Employment Type</InputLabel>
                  <Select
                    sx={{ marginBottom: "10px", marginRight: "10px" }}
                    variant="standard"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    label="Employment Type"
                  >
                    <MenuItem value={"Salaried"}>Salaried</MenuItem>
                    <MenuItem value={"Self-Employed"}>Self-Employed</MenuItem>
                    <MenuItem value={"Self_employed/C.A/Dr."}>
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

                <Button sx={{"marginTop":"20px"}} type="submit" variant="contained" color="primary">
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
