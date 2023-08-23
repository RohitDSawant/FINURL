import React, { useState } from "react";
import styles from "./../CSS/authentication.module.css";
import { Box, Grid, Modal } from "@mui/material";
import SignUp from "../Components/Common/SignUp";
import signup_svg from "./../Assets/Images/signup.svg";
import finurl_logo from "./../Assets/Images/finurl1.png";
import Login from "../Components/Common/Login";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(false); // Default to SignUp view

  const toggleView = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      <Box id={styles.authentication_container}>
        <Grid
          className={styles.authentication_grid}
          container
        //   spacing={1}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          {/* Image Grid */}
          <Grid
            lg={6}
            item
            className={!isLogin ? styles.slideLeft : styles.slideRight}
          >
            <img className={styles.signup_carousel} src={signup_svg} alt="" />
          </Grid>

          {/* Form Grid */}
          <Grid
            item
            lg={5}
            className={isLogin ? styles.slideLeft : styles.slideRight}
          >
            {isLogin ? (
              <Login toggleView={toggleView} />
            ) : (
              <SignUp toggleView={toggleView} />
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Authentication;
