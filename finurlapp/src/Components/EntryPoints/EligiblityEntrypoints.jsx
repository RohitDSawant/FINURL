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
import React, { useRef, useState } from "react";
import checking_img from "./../../Assets/Images/check_eligibility.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  eligibile_for_Stashfin,
  handleStashfinEligibility,
} from "../../Redux/Func/Stashfin/Check_Eligibility";
import Navbar from "../Common/Navbar";
import {
  prefrDedupe,
  prefrDedupeService,
} from "../../Redux/Func/Prefr/Dedupe_Service";
import {
  registerStart,
  settingApplicationID,
  skip_Application_Details,
} from "../../Redux/Func/Prefr/Register_Start";
import { gettingWebViewUrl } from "../../Redux/Func/Prefr/GettingWebview";
import { send_otp, verify_otp } from "../../Redux/Func/Authentication/OTP";
import verify_otp_img from "./../../Assets/Images/enterOtp.svg";
import { setCurrentDedupeNumber, setDedupeFormData } from "../../Redux/Func/Common/Common_Action";

const EligiblityEntrypoints = () => {
  const theme = useTheme();
  const location = useLocation();
  const current_path = location.pathname.split("/")[1];
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [showVerifyOTPsection, setShowVerifyOTPsection] = useState(false);
  const [collectOtp, setCollectOtp] = useState(["", "", "", "", "", ""]);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const userId = useSelector((state) => state.authReducer.loggedInUser._id);
  const partnerEmail = useSelector(
    (state) => state.authReducer.loggedInUser.email
  );
  const stashfin_eligible = useSelector(
    (state) => state.appReducer.NBC.stashfin.eligible
  );

  const prefr_loan_id = useSelector(
    (state) => state.appReducer.NBC.prefr.application_id
  );

  const skipApplicationDetails = useSelector(
    (state) => state.appReducer.NBC.prefr.skip_application_details
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile_no: "",
    pan_number: "",
    dob: "",
    income: 0,
    pincode: "",
  });

  //  Calculate age

  function CalculateAge(data) {
    const dob = new Date(data);

    const currentDate = new Date();

    const age = currentDate.getFullYear() - dob.getFullYear();

    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() &&
        currentDate.getDate() < dob.getDate())
    ) {
      return age - 1;
    } else {
      return age;
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

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

          if (response.message === "Eligible") {
            dispatch(
              setDedupeFormData({
                firstName: formData.fullName.split(" ")[0],
                lastName: formData.fullName.split(" ")[1],
                email: formData.email,
                panNumber: formData.pan_number,
                phoneNumber: formData.mobile_no,
                pincode: formData.pincode,
              })
            );
            dispatch(setCurrentDedupeNumber(formData.pan_number));
            setShowSuccessSnack(true);
            setSnackMsg("Congrats! You are eligible.");
            document.querySelector("form").reset();
            send_otp({ contact: formData.mobile_no, email: partnerEmail });
            setTimeout(() => {
              dispatch(eligibile_for_Stashfin());
              setShowVerifyOTPsection(true);
            }, 2000);
          } else if (response.message === "Not Eligible") {
            setShowErrorSnack(true);
            setSnackMsg("Sorry! Currently you are not eligible.");
            document.querySelector("form").reset();
          } else {
            setShowErrorSnack(true);
            setSnackMsg("Oops! Please check the details provided");
          }
        }, 1000);
      });
    }

    // <-------- PREFR ---------->
    else if (current_path === "prefr") {
      let request_id = "";
      let start = 0;

      while (start < formData.mobile_no.length) {
        request_id = request_id + formData.mobile_no[start] + userId[start];
        start++;
      }

      let age = CalculateAge(formData.dob);

      dispatch(
        prefrDedupeService({
          productName: "pl",
          requestId: request_id.toUpperCase(),
          hashEnabled: false,
          panNumber: formData.pan_number,
          accountNumber: formData.accountNumber,
          personalEmailId: formData.email,
          age: Number(age),
          pincode: formData.pincode,
          income: Number(formData.income),
        })
      )
        .then((res) => {
          if (res.data === "success") {
            dispatch(
              setDedupeFormData({
                firstName: formData.fullName.split(" ")[0],
                lastName: formData.fullName.split(" ")[1],
                email: formData.email,
                panNumber: formData.pan_number,
                phoneNumber: formData.mobile_no,
                pincode: formData.pincode,
              })
            );
            dispatch(setCurrentDedupeNumber(formData.pan_number));
            dispatch(
              registerStart({
                userId: (formData.mobile_no + userId).toUpperCase(),
                mobileNo: formData.mobile_no,
              })
            ).then((res) => {
              setIsLoading(false);
              if (res.data.loanId && res.data.skipApplicationDetails) {
                dispatch(setCurrentDedupeNumber(formData.pan_number));
                dispatch(settingApplicationID(res.data.loanId));
                send_otp({ contact: formData.mobile_no, email: partnerEmail });
                setShowVerifyOTPsection(true);
              } else if (res.data.loanId && !res.data.skipApplicationDetails) {
                dispatch(setCurrentDedupeNumber(formData.pan_number));
                dispatch(settingApplicationID(res.data.loanId));
                dispatch(skip_Application_Details());
                send_otp({ contact: formData.mobile_no, email: partnerEmail });
                setShowSuccessSnack(true);
                setSnackMsg(
                  "Redirecting you fill out the additional information further..."
                );
                setShowVerifyOTPsection(true);
              } else {
                setIsLoading(false);
                setShowErrorSnack(true);
                setSnackMsg("Something went wrong, please try again");
              }
            });
          } else if (
            res.response.data.message === "Age criteria doesn't meet"
          ) {
            setTimeout(() => {
              setIsLoading(false);
              setShowErrorSnack(true);
              setSnackMsg("Sorry ! You are not eligible as per Age criteria ");
            }, 1000);
          } else if (
            res.response.data.message === "Income criteria doesn't meet"
          ) {
            setTimeout(() => {
              setIsLoading(false);
              setShowErrorSnack(true);
              setSnackMsg(
                "Sorry ! Your income doesn't match up for Loan criteria"
              );
            }, 1000);
          } else if (
            res.response.data.message === "Regional criteria doesn't meet"
          ) {
            setTimeout(() => {
              setIsLoading(false);
              setShowErrorSnack(true);
              setSnackMsg(
                "Sorry ! Your pincode doesn't match up for regional criteria"
              );
            }, 1000);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }
  };

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

  // OTP submission
  const handleOTPSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const otp = collectOTP();
    let response;

    if (current_path === "stashfin") {
      setTimeout(async () => {
        setIsLoading(false);
        response = await verify_otp({ email: partnerEmail, otp: otp });
        console.log(response);
        if (response.message === "OTP verified successfully!") {
          setSnackMsg("OTP verified successfully!");
          setShowSuccessSnack(true);
          setTimeout(() => {
            navigate("/stashfin/application");
          }, 2000);
        } else {
          setSnackMsg("Invalid OTP !");
          setShowErrorSnack(true);
        }
      }, 2000);
    } else {
      setTimeout(async () => {
        setIsLoading(true);
        response = await verify_otp({ email: partnerEmail, otp: otp });
        console.log(response);
        if (response.message === "OTP verified successfully!") {
          setSnackMsg("OTP verified successfully !");
          setShowSuccessSnack(true);
          console.log("in prefer");
          if (!skipApplicationDetails) {
            setTimeout(() => {
              navigate("/prefr/application");
            }, 1500);
          } else {
            setIsLoading(true);
            dispatch(
              gettingWebViewUrl({
                loanId: prefr_loan_id,
                formData: formData,
              })
            ).then((res) => {
              if (res.data === "success") {
                setIsLoading(false);
                setShowSuccessSnack(true);
                setSnackMsg("Please wait, Generating redirection link...");
                setTimeout(() => {
                  window.open(res.data.webviewUrl, "_blank");
                  navigate("/");
                }, 1500);
              } else {
                setIsLoading(false);
                setShowErrorSnack(true);
                setSnackMsg("Oops! Loan ID is missing");
              }
            });
          }
        } else {
          setSnackMsg("Invalid OTP !");
          setShowErrorSnack(true);
        }
      }, 3000);
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
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Grid
            md={7}
            xs={11}
            sm={10}
            className={styles.eligibility_left_sec}
            item
            lg={6}
          >
            {showVerifyOTPsection || stashfin_eligible || prefr_loan_id ? (
              <>
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
                    Please enter the 6-digit O.T.P received on the provided
                    mobile number.
                  </Typography>
                  <Typography
                    mb={2}
                    mt={1}
                    fontSize={"x-small"}
                    variant="body2"
                  >
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
                          <CircularProgress
                            sx={{ marginTop: "20px" }}
                            size={25}
                          />
                        ) : (
                          ""
                        )}
                      </Box>
                    </FormControl>
                    <Box mt={5}>
                      <Typography fontSize={"small"} variant="subtitle2" mt={1}>
                        * We here verify the mobile number provided by sending
                        an OTP.
                      </Typography>
                      <Typography fontSize={"small"} variant="subtitle2" mt={1}>
                        * Please keep a note that OTP is valid for only 10
                        minutes.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </>
            ) : (
              <>
                <Typography mb={1} variant="h6">
                  Check Loan Eligibility :
                </Typography>
                <Typography fontSize={"small"} variant="body2">
                  Because of Finurl and their tie-ups with multiple banks and
                  NBCs.
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
                      required={true}
                      onChange={handleChange}
                    />
                    <TextField
                      size={"small"}
                      sx={{ margin: "5px" }}
                      name="email"
                      label="Email"
                      type="email"
                      variant="standard"
                      required={true}
                      onChange={handleChange}
                    />
                    <Box>
                      <TextField
                        size="small"
                        sx={{ margin: "5px" }}
                        name="mobile_no"
                        label="Mobile No."
                        variant="standard"
                        required={true}
                        inputProps={{ maxLength: 10 }}
                        onChange={handleChange}
                      />

                      <TextField
                        size={"small"}
                        sx={{ margin: "5px" }}
                        name="pan_number"
                        label="PAN Number"
                        variant="standard"
                        required={true}
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
                      required={true}
                      onChange={handleChange}
                    />

                    <Box>
                      <TextField
                        size={"small"}
                        sx={{ margin: "5px" }}
                        name="income"
                        label="Income"
                        variant="standard"
                        required={true}
                        onChange={handleChange}
                      />

                      <TextField
                        size={"small"}
                        sx={{ margin: "5px" }}
                        name="pincode"
                        label="Pincode"
                        variant="standard"
                        required={true}
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
            )}
          </Grid>
          <Grid md={4} className={styles.eligibility_right_sec} item lg={4}>
            {showVerifyOTPsection || stashfin_eligible || prefr_loan_id ? (
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
            ) : (
              <>
                <img
                  id={styles.eligibility_check}
                  src={checking_img}
                  alt="eligibitlty_check_png"
                />
                <Typography
                  textAlign={"center"}
                  sx={{ width: "55%" }}
                  margin={"auto"}
                  mt={-5}
                  variant="subtitle2"
                >
                  We verify the provided details and check if you are Eligible
                  or Not
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default EligiblityEntrypoints;
