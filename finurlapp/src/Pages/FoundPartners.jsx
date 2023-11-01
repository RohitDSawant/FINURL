import React from "react";
import Navbar from "../Components/Common/Navbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import stashfin_logo from "./../Assets/Images/partners_logo/stashfin.png";
import Footer from "../Components/Common/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FoundPartners = () => {
  const partner = useSelector((state)=> state.appReducer.found_partners_list);
  const navigate = useNavigate()

  const handleClick = (bank) =>{

    if  (bank === "Prefer") navigate("/prefr/application")
    else if (bank === "Stashfine") navigate("/stashfine/application")

  }



  return (
    <>
      <Navbar />
      <Box height={"100vh"} pt={15} >
        <Typography ml={15} variant="h6" mb={5}>
          Here are the best Loan partners for you.
        </Typography>
        <Grid container>
          {partner.map((ele) => {
            return (
              <Grid
                justifyContent={"center"}
                px={10}
                py={2.5}
                borderRadius={"5px"}
                border={"1px solid #ccc"}
                alignItems={"center"}
                m={"auto"}
                item
              >
                <img style={{ height: "4vh" }} src={stashfin_logo} alt="" />
                <Typography
                  textAlign={"center"}
                  variant="subtitle2"
                  fontWeight={500}
                  fontSize={"large"}
                  pt={5}
                  pb={1}
                >
                  {ele.bankName}
                </Typography>
                <Button onClick={() => handleClick(ele.bankName)} sx={{ margin: "auto", display: "block" }}>
                  Apply Now
                </Button>
              </Grid>
            );
          })}
        </Grid>

      </Box>
      <Footer/>
    </>
  );
};

export default FoundPartners;
