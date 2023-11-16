import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { React, useState, useRef } from "react";
import styles from "./../../CSS/EligibilityPoint1.module.css";
import verify_otp_img from "./../../Assets/Images/enterOtp.svg";
import { useNavigate } from "react-router-dom";
import { verify_otp } from "../../Redux/Func/Authentication/OTP";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";

const OTPVerifcation = ({ path }) => {
  const partnerEmail = useSelector(
    (state) => state.authReducer.loggedInUser.email
  );
  const [collectOtp, setCollectOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const isSmallScreen = useMediaQuery("(min-width:600px)");

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const navigate = useNavigate();

  const handleInputKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "") {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    } else if (e.key >= "0" && e.key <= "9" && index < 5) {
      if (e.target.value.length < 1) {
        e.preventDefault();
        e.target.value = e.key;
        inputRefs[index + 1].current.focus();
        const newOtp = [...collectOtp];
        newOtp[index] = e.key;
        setCollectOtp(newOtp);
      }
      inputRefs[index + 1].current.focus();
      const newOtp = [...collectOtp];
      newOtp[index] = e.key;
      setCollectOtp(newOtp);
    }
  };

  const handleOtpInputs = (e) => {
    setCollectOtp(e.target.value);
  };

  const collectOTP = () => {
    const otpValues = inputRefs.map((ref) => ref.current.value);
    const enteredOtp = otpValues.join("");
    return enteredOtp;
  };

  const handleOTPSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const otp = collectOTP();
    let response;
    setTimeout(async () => {
      setIsLoading(false);
      response = await verify_otp({ email: partnerEmail, otp: otp });
      console.log(response);
      if (response.message === "OTP verified successfully!") navigate(path)
      else {
        setSnackMsg("Invalid OTP !");
        setShowErrorSnack(true);
      }
    }, 2000);
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
      <Grid pt={5} width={"90%"} m={"auto"} container>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
          >
            <Typography mb={1} variant="h6">
              Mobile Number Verification :
            </Typography>
            <Typography fontSize={"small"} variant="body2">
              Please enter the 6-digit O.T.P received on the provided mobile
              number.
            </Typography>
            <Typography mb={2} mt={1} fontSize={"x-small"} variant="body2">
              * If not received, please wait for couple seconds...
            </Typography>

            <Box mt={4}>
              <FormControl onSubmit={handleOTPSubmit} component={"form"}>
                <Box display={"flex"} gap={"2px"}>
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <Box key={index}>
                      <TextField
                        onChange={handleOtpInputs}
                        placeholder="-"
                        inputRef={inputRefs[index]}
                        variant="standard"
                        type="text"
                        sx={{ paddingLeft: "15px" }}
                        size="medium"
                        inputProps={{ maxLength: 1 }}
                        onKeyDown={(e) => handleInputKeyDown(e, index)}
                      />
                    </Box>
                  ))}
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                  <Button
                    disabled={isLoading}
                    type={"submit"}
                    sx={{
                      width: "max-content",
                      padding: "5px 25px",
                      display: "block",
                      margin: "auto",
                      marginTop: "30px",
                    }}
                  >
                    Verify OTP
                  </Button>
                  {isLoading ? (
                    <CircularProgress sx={{ marginTop: "20px" }} size={25} />
                  ) : (
                    ""
                  )}
                </Box>
              </FormControl>
              <Box mt={5}>
                <Typography fontSize={"small"} variant="subtitle2" mt={1}>
                  * We here verify the mobile number provided by sending an OTP.
                </Typography>
                <Typography fontSize={"small"} variant="subtitle2" mt={1}>
                  * Please keep a note that OTP is valid for only 10 minutes.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={4}>
          {!isSmallScreen ? null : (
            <>
              <img
                id={styles.otp_check}
                src={verify_otp_img}
                alt="eligibitlty_check_png"
              />
              <Typography
                textAlign={"center"}
                sx={{ width: "55%" }}
                margin={"auto"}
                mt={1}
                variant="subtitle2"
              >
                O.T.P verification against the mobile number.
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
      <Snackbar
        open={showSuccessSnack || showErrorSnack}
        autoHideDuration={5000}
        onClose={() => handleClose()}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => handleClose()}
          severity={showErrorSnack ? "error" : "success"}
          sx={{ width: "100%" }}
          color="secondary"
        >
          {snackMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default OTPVerifcation;
