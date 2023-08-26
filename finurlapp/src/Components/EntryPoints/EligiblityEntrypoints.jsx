import {
  Box,
  FormControl,
  Typography,
  TextField,
  Button,
  Grid,
  LinearProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import styles from "./../../CSS/EligibilityPoint1.module.css";
import React, { useState } from "react";
import checking_img from "./../../Assets/Images/eligibility-check.jpg";
import { useDispatch, useSelector } from "react-redux";
import { handleStashfinEligibility } from "../../Redux/Func/Stashfin/Check_Eligibility";

const EligiblityEntrypoints = () => {
  const location = useLocation();
  const current_path = location.pathname.split("/")[1];
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");

  const userId = useSelector((state) => state.authReducer.loggedInUser._id);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile_no: "",
    pan_number: "",
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
    setIsLoading(true);
    console.log(formData);

    if (current_path === "stashfin") {
      dispatch(
        handleStashfinEligibility({
          phone: formData.mobile_no,
          token: {
            id: "20395df108eb4c7fb8d94b40f2fb6f8a",
            client_secret: "BD2y7zO9D9Bq",
          },
          email: formData.email,
        })
      ).then((response) => {
        console.log(response);
        setTimeout(() => {
          setIsLoading(false);
          if (!response.results) {
            setShowSuccessSnack(true);
            setSnackMsg("Congrats! You are eligible.");
            document.querySelector("form").reset();

            setTimeout(() => {
              window.location.href = "/application";
            }, 3000);
          } else {
            setShowErrorSnack(true);
            setSnackMsg("Sorry! Currently you are not eligible.");
            document.querySelector("form").reset();
          }
        }, 3000);
      });
    } else {
      console.log("coming from other way");
    }
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
      <section id={styles.eligibility_sec}>
        <Grid
          container
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid className={styles.eligibility_check_form} item lg={5}>
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
                  size="small"
                  sx={{ margin: "5px" }}
                  name="mobile_no"
                  label="Mobile No."
                  variant="outlined"
                  required
                  inputProps={{ maxLength: 10 }}
                  onChange={handleChange}
                />

                <TextField
                  size={"small"}
                  sx={{ margin: "5px" }}
                  name="pan_number"
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
            {isLoading ? (
              <LinearProgress sx={{ width: "75%", marginTop: "10px" }} />
            ) : (
              ""
            )}
            <Snackbar
              open={showSuccessSnack || showErrorSnack}
              autoHideDuration={3000}
              onClose={() => handleClose()}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={() => handleClose()}
                severity={showErrorSnack ? "error" : "info"}
                sx={{ width: "100%" }}
              >
                {snackMsg}
              </Alert>
            </Snackbar>
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
