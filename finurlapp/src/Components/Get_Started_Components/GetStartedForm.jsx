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
import {
  eligibile_for_Stashfin,
  handleStashfinEligibility,
} from "../../Redux/Func/Stashfin/Check_Eligibility";
import application_img from "../../Assets/Images/form2.svg";
import {
  registerStart,
  settingApplicationID,
  skip_Application_Details,
} from "../../Redux/Func/Prefr/Register_Start";
import { prefrDedupeService } from "../../Redux/Func/Prefr/Dedupe_Service";
import {
  addPartnerToList,
  setCurrentDedupeNumber,
  setMobileToVerify,
  setPartnersFound,
} from "../../Redux/Func/Common/Common_Action";

const GetStartedForm = () => {
  const theme = useTheme();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const found_partners = useSelector(
    (state) => state.appReducer.found_partners
  );

  const userId = useSelector((state) => state.authReducer.loggedInUser._id);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile_no: "",
    pan_number: "",
    dob: "",
    income: 0,
    pincode: 0,
  });

  // calculate age
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)
    setIsLoading(true);

    setTimeout(async () => {
      const stashfinPromise = dispatch(
        handleStashfinEligibility({
          phone: formData.mobile_no,
          token: {
            id: "20395df108eb4c7fb8d94b40f2fb6f8a",
            client_secret: "BD2y7zO9D9Bq",
          },
          email: formData.email,
        })
      );

      let request_id = "";
      let start = 0;

      while (start < formData.mobile_no.length) {
        request_id = request_id + formData.mobile_no[start] + userId[start];
        start++;
      }

      let age = CalculateAge(formData.dob);

      const prefrPromise = dispatch(
        prefrDedupeService({
          productName: "pl",
          requestId: request_id.toUpperCase(),
          hashEnabled: false,
          panNumber: formData.pan_number,
          personalEmailId: formData.email,
          age: age,
          pincode: formData.pincode,
          income: formData.income,
        })
      );

      await Promise.all([stashfinPromise, prefrPromise]).then((results) => {
        console.log(results);
        const stashfinResult = results[0];
        const prefrResult = results[1];
        // Handle stashfinResult and prefrResult as needed
        if (stashfinResult.message === "Eligible") {
          console.log("stashfinResult");
          dispatch(eligibile_for_Stashfin());
          dispatch(
            addPartnerToList({
              bankName: "Stashfin",
            })
          );
          dispatch(setPartnersFound());
          dispatch(setCurrentDedupeNumber(formData.pan_number));
          dispatch(setMobileToVerify(formData.mobile_no));
        }
        if (prefrResult.data === "success") {
          console.log("prefrResult");
          dispatch(setPartnersFound());
          dispatch(setMobileToVerify(formData.mobile_no));
          dispatch(
            registerStart({
              userId: (formData.mobile_no + userId).toUpperCase(),
              mobileNo: formData.mobile_no,
            })
          ).then((res) => {
            console.log(res);
            if (res.data.loanId && res.data.skipApplicationDetails) {
              dispatch(settingApplicationID(res.data.loanId));
            } else if (res.data.loanId && !res.data.skipApplicationDetails) {
              dispatch(settingApplicationID(res.data.loanId));
              dispatch(skip_Application_Details());
            }
          });
          dispatch(
            addPartnerToList({
              bankName: "Prefer",
            })
          );
          dispatch(setCurrentDedupeNumber(formData.pan_number));
        }
        

        if (prefrResult.data === "success" || stashfinResult.message === "Eligible" ) {
          setSnackMsg("Please wait, we are redirecting....");
          setShowSuccessSnack(true);
          setTimeout(() => {
            navigate("/found-partners");
          }, 5000);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setSnackMsg(
            "Sorry ! The details provided does not meet loan application criteria."
          );
          setShowSuccessSnack(true);
          setTimeout(() => {
            document.querySelector("form").reset();
          }, 2000);
        }
        
      });
    }, 3000);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnack(false);
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
        pt={5}
        
      >
        <Grid
          md={7}
          xs={11}
          sm={10}
          className={styles.eligibility_left_sec}
          item
          ml={-10}
          lg={6}
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
        </Grid>
        <Grid md={4} className={styles.eligibility_right_sec} item lg={4}>
          <Box mt={-5}>
            <img id={styles.eligibility_check} src={application_img} alt="" />
            <Typography textAlign={"center"} mt={-5} variant="subtitle2">
              Fill the application form as we find the best loan partners for
              you.
            </Typography>
          </Box>
        </Grid>
        <Snackbar
          open={showSuccessSnack}
          autoHideDuration={5000}
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
      </Grid>
    </>
  );
};

export default GetStartedForm;
