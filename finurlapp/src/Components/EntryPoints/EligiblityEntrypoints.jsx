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
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./../../CSS/EligibilityPoint1.module.css";
import React, { useState } from "react";
import checking_img from "./../../Assets/Images/eligibility-check.jpg";
import { useDispatch, useSelector } from "react-redux";
import { handleStashfinEligibility } from "../../Redux/Func/Stashfin/Check_Eligibility";
import Navbar from "../Common/Navbar";
import theme from "../../Theme/theme";
import {
  prefrDedupe,
  prefrDedupeService,
} from "../../Redux/Func/Prefr/Dedupe_Service";
import { registerStart, settingApplicationID } from "../../Redux/Func/Prefr/Register_Start";
import { gettingWebViewUrl } from "../../Redux/Func/Prefr/GettingWebview";

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
    accountNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigate = useNavigate()

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
    }
    
    else if (current_path === "prefr") {
      dispatch(
        prefrDedupeService({
          productName: "pl",
          requestId: (formData.pan_number + userId).toUpperCase(),
          hashEnabled: false,
          panNumber: formData.pan_number,
          accountNumber: formData.accountNumber,
          personalEmailId: formData.email,
        })
      ).then((res) => {
        if (res.data === "success") {
          dispatch(
            registerStart({
              userId: (formData.pan_number + userId).toUpperCase(),
              mobileNo: formData.mobile_no,
            })
          ).then((res) => {
            setIsLoading(false)
            if (res.data.loanId && res.data.skipApplicationDetails) {
              dispatch(gettingWebViewUrl({
                loanId: res.loanId,
              }))
              .then((res)=>{
                if (res.data === "success") {
                  window.open(res.data.webviewUrl, "_blank");
                  navigate("/")
                }
                else {
                  setShowErrorSnack(true)
                  setSnackMsg("Oops! Loan ID is missing")
                }
              })
              setShowSuccessSnack(true)
              setSnackMsg("Please wait, Generating redirection link...")
            }
            else if (res.data.loanId && !res.data.skipApplicationDetails ){
              dispatch(settingApplicationID(res.data.loanId))
              setIsLoading(false)
              setShowSuccessSnack(true)
              setSnackMsg("Redirecting you fill out the additional information further...")
              setTimeout(() => {
                  navigate("/prefr/application")
              }, 4000);
            }
            else {
              setShowErrorSnack(true)
              setSnackMsg("Something went wrong, please try again")
            }
            // console.log(res)
          });
        } else {
          setShowErrorSnack(true);
          setSnackMsg("Something went wrong, please check the details provided")
        }
      })
      .catch((err)=>{
        console.log(err)
      })
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
      <Navbar />
      <section id={styles.eligibility_sec}>
        <Grid
          container
          spacing={1}
          justifyContent={"center"}
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
              Check Loan Eligibility :
            </Typography>
            <Typography fontSize={"small"} variant="body2">
              Because of Finurl and their tie-ups with multiple banks and NBCs.
            </Typography>
            <Typography mb={2} fontSize={"small"} variant="body2">
              I was able to get a loan within 48 hours.
            </Typography>
            <Box
              sx={{
                // backgroundColor: `${theme.palette.primary.main}`,
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <FormControl
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
                {current_path === "prefr" ? (
                  <TextField
                    size={"small"}
                    sx={{ margin: "5px" }}
                    name="accountNumber"
                    label="Account Number"
                    variant="standard"
                    required
                    onChange={handleChange}
                  />
                ) : (
                  ""
                )}

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
                  <Button disabled={isLoading}
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
