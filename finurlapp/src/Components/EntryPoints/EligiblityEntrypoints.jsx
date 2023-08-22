import {
  Box,
  FormControl,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import styles from "./../../CSS/EligibilityPoint1.module.css";
import React, { useState } from "react";
import checking_img from "./../../Assets/Images/eligibility-check.jpg";

const EligiblityEntrypoints = () => {
  const location = useLocation();

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
  };

  return (
    <>
      <section id={styles.eligibility_sec}>
        <Grid container spacing={1} justifyContent={"center"} alignItems={"center"}>
          <Grid item lg={5}>
            <Typography mb={1} variant="h6">
              Check Loan Eligibility :
            </Typography>
            <Typography variant="body2">
              Because of Finurl and their tie-ups with multiple banks and NBCs
            </Typography>
            <Typography mb={2} variant="body2">
              I was able to get a loan within 48 hours.
            </Typography>
            <FormControl component="form" onSubmit={handleSubmit}>
              <TextField
                size={"small"}
                sx={{ margin: "5px" }}
                name="fullName"
                label="Full Name"
                variant="outlined"
                required
                onChange={handleChange}
              />
              <TextField
                size={"small"}
                sx={{ margin: "5px" }}
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                required
                onChange={handleChange}
              />
              <Box>
                <TextField
                  size={"small"}
                  sx={{ margin: "5px" }}
                  name="mobileNo"
                  label="Mobile No."
                  variant="outlined"
                  required
                  onChange={handleChange}
                />
                <TextField
                  size={"small"}
                  sx={{ margin: "5px" }}
                  name="panNumber"
                  label="PAN Number"
                  variant="outlined"
                  required
                  onChange={handleChange}
                />
              </Box>
              <TextField
                size={"small"}
                sx={{ margin: "5px" }}
                name="dob"
                label="D.O.B"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                required
                onChange={handleChange}
              />
              <Box>
                <TextField
                  size={"small"}
                  sx={{ margin: "5px" }}
                  name="income"
                  label="Income"
                  variant="outlined"
                  required
                  onChange={handleChange}
                />
                <TextField
                  size={"small"}
                  sx={{ margin: "5px" }}
                  name="pincode"
                  label="Pincode"
                  variant="outlined"
                  required
                  onChange={handleChange}
                />
              </Box>
              <Button
                sx={{
                  width: "max-content",
                  display: "block",
                  margin: "auto",
                  marginTop: "10px",
                  padding: "5px 50px",
                }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </FormControl>
          </Grid>
          <Grid item lg={4}>
            <img
              id={styles.eligibility_check}
              src={checking_img}
              alt="eligibitlty_check_png"
            />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default EligiblityEntrypoints;
