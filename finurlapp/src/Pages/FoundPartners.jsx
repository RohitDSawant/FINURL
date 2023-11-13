import React, { useState } from "react";
import Navbar from "../Components/Common/Navbar";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import stashfin_logo from "./../Assets/Images/partners_logo/stashfin.png";
import prefr_logo from "./../Assets/Images/partners_logo/prefr.png";
import Footer from "../Components/Common/Footer";
import { useDispatch, useSelector } from "react-redux";
import styles from "./../CSS/EligibilityPoint1.module.css";
import { Link, useNavigate } from "react-router-dom";
import OTPVerifcation from "../Components/Common/OTPVerifcation";
import { send_otp } from "../Redux/Func/Authentication/OTP";
import { resetPrefrData } from "../Redux/Func/Prefr/ResetPrefr";
import { resetStashfinData } from "../Redux/Func/Stashfin/ResetStashfin";
import { resetCurrentDedupeNumber } from "../Redux/Func/Common/Common_Action";
import no_results from "./../Assets/Images/no_result.svg";

const FoundPartners = () => {
  const partner = useSelector((state) => state.appReducer.found_partners_list);
  const [redirect_path, setRedirect_path] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(false);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const mobileNumberForOtp = useSelector(
    (state) => state.appReducer.mobile_to_verify
  );
  const navigate = useNavigate();
  const partnerEmail = useSelector(
    (state) => state.authReducer.loggedInUser.email
  );

  const handleClick = (bank) => {
    send_otp({ contact: mobileNumberForOtp, email: partnerEmail });
    console.log(bank);
    if (bank === "Prefer") setRedirect_path("/prefr/application");
    else if (bank === "Stashfin") setRedirect_path("/stashfin/application");
    setShowOtpSection(true);
  };

  const ClearResults = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(resetPrefrData());
      dispatch(resetStashfinData());
      dispatch(resetCurrentDedupeNumber());
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <Box height={"90vh"} pt={12}>
        {!showOtpSection ? (
          <>
            <Grid
              width={"90%"}
              justifyContent={"center"}
              container
              m={"auto"}
              mb={5}
              gap={2}
              alignItems={"center"}
            >
              {partner.length > 0 ? (
                <>
                  {" "}
                  <Grid item>
                    <Typography variant="body1" fontWeight={600}>
                      Here are some best Loan partners for you.
                    </Typography>
                  </Grid>
                  <Grid display={"flex"} alignItems={"center"} item>
                    <Button
                      onClick={ClearResults}
                      sx={{
                        padding: "5px 15px",
                        fontSize: "x-small",
                        marginRight: "20px",
                      }}
                    >
                      Clear Results
                    </Button>
                    {isLoading ? (
                      <CircularProgress
                        sx={{ marginBottom: "5px" }}
                        size={20}
                      />
                    ) : null}
                  </Grid>
                </>
              ) : null}
            </Grid>
            {partner && partner.length > 0 ? (
              <>
                <Box className={styles.found_partners_list_container}>
                  {partner.map((ele) => {
                    return (
                      <Box
                        // data-aos="fade-up"
                        // data-aos-duration="1500"
                        // data-aos-easing="ease-in-sine"
                        justifyContent={"center"}
                        borderRadius={"5px"}
                        boxShadow={
                          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
                        }
                        alignItems={"center"}
                        m={"auto"}
                        item
                        p={2}
                        lg={2}
                      >
                        <Box>
                          <img
                            style={{
                              height: "7vh",
                              margin: "auto",
                              display: "block",
                              marginTop: "5%",
                            }}
                            src={
                              ele.bankName === "Stashfin"
                                ? stashfin_logo
                                : prefr_logo
                            }
                            alt="found_partner"
                          />
                        </Box>
                        <Typography
                          textAlign={"center"}
                          variant="subtitle2"
                          fontWeight={500}
                          fontSize={"large"}
                          pb={1}
                          mt={1}
                        >
                          {ele.bankName}
                        </Typography>
                        <Button
                          onClick={() => handleClick(ele.bankName)}
                          sx={{
                            margin: "auto",
                            display: "block",
                            padding: "5px 30px",
                            fontSize: "small",
                          }}
                        >
                          Apply Now
                        </Button>
                      </Box>
                    );
                  })}
                </Box>
              </>
            ) : (
              <>
                <Box
                  width={"75%"}
                  margin={"auto"}
                  alignItems={"center"}
                  display={"flex"}
                >
                  <Box>
                    <img
                      style={{ height: "40vh" }}
                      src={no_results}
                      alt="no_results"
                    />
                  </Box>
                  <Box width={"100%"}>
                    <Typography
                      variant="body2"
                      fontSize={"medium"}
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      We are sorry, But it seems that you dont meet the Loan
                      Eligibility criteria.
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={"medium"}
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      {" "}
                      Better luck ahead
                    </Typography>
                  </Box>
                </Box>
                <Link to={"/"}>
                  {" "}
                  <Button
                    sx={{
                      display: "block",
                      margin: "auto",
                      fontSize: "small",
                      padding: "5px 25px",
                    }}
                  >
                    Back to Home
                  </Button>
                </Link>
              </>
            )}
          </>
        ) : (
          <OTPVerifcation path={redirect_path} />
        )}
      </Box>
      <Footer />
    </>
  );
};

export default FoundPartners;
