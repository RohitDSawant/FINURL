import {
  Box,
  FormControl,
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./../../CSS/EligibilityPoint1.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleStashfinEligibility } from "../../Redux/Func/Stashfin/Check_Eligibility";
import Navbar from "../Common/Navbar";
import application_img from "../../Assets/Images/form2.svg";

const GetStartedForm = () => {
  const theme = useTheme();
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
    accountNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {};

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSuccessSnack(false);
    setShowErrorSnack(false);
  };

  return (
    <>
      <Grid
        width={"90vw"}
        margin={"auto"}
        container
        spacing={1}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Grid
          md={7}
          xs={11}
          sm={10}
          className={styles.eligibility_left_sec}
          item
          lg={5}
        >
          <Typography mb={1} variant="h6">
            Please fill out the details:
          </Typography>
          <Typography fontSize={"small"} variant="body2">
            As we are here to find our best partners for you.
          </Typography>
          <Typography mb={1} fontSize={"small"} variant="body2">
            We have tie-ups with multiple banks and NBCs to get a loan within 48
            hours.
          </Typography>
          <Box
            sx={{
              // backgroundColor: `${theme.palette.primary.main}`,
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <FormControl
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-easing="ease-in-sine"
              fullWidth={true}
              component="form"
              onSubmit={handleSubmit}
            >
              <TextField
                size={"small"}
                sx={{ margin: "5px" }}
                name="fullName"
                label="Full Name"
                variant="standard"
                required
                onChange={handleChange}
              />
              <TextField
                size={"small"}
                sx={{ margin: "5px" }}
                name="email"
                label="Email"
                type="email"
                variant="standard"
                required
                onChange={handleChange}
              />
              <Box>
                <TextField
                  size="small"
                  sx={{ margin: "5px" }}
                  name="mobile_no"
                  label="Mobile No."
                  variant="standard"
                  required
                  inputProps={{ maxLength: 10 }}
                  onChange={handleChange}
                />

                <TextField
                  size={"small"}
                  sx={{ margin: "5px" }}
                  name="pan_number"
                  label="PAN Number"
                  variant="standard"
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
                variant="standard"
                required
                onChange={handleChange}
              />

              <TextField
                size={"small"}
                sx={{ margin: "5px" }}
                name="accountNumber"
                label="Account Number"
                variant="standard"
                required
                onChange={handleChange}
              />

              <Box>
                <TextField
                  size={"small"}
                  sx={{ margin: "5px" }}
                  name="income"
                  label="Income"
                  variant="standard"
                  required
                  onChange={handleChange}
                />

                <TextField
                  size={"small"}
                  sx={{ margin: "5px" }}
                  name="pincode"
                  label="Pincode"
                  variant="standard"
                  required
                  onChange={handleChange}
                />
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={"30px"}>
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
                    sx={{ width: "75%", marginTop: "20px" }}
                  />
                ) : (
                  ""
                )}
              </Box>
            </FormControl>
          </Box>

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
              color="secondary"
            >
              {snackMsg}
            </Alert>
          </Snackbar>
        </Grid>
        <Grid md={4} className={styles.eligibility_right_sec} item lg={4}>
          <Box>
            <img id={styles.eligibility_check} src={application_img} alt="" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default GetStartedForm;
