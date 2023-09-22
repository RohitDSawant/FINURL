import React from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import styles from "./../../CSS/homepage.module.css";
import credit_score from "./../../Assets/Images/credit_score.svg";


const HomeEScore = () => {

  const theme  = useTheme()
  console.log(theme);

  return (
    <>
      <section id={styles.home_e_sec}>
        <Box>
          <img className={styles.credit_score_img} src={credit_score} alt="" />
          <Button sx={{backgroundColor: `${theme.palette.primary.main}`, color:`${theme.palette.secondary.main}`}} >Check Here</Button>
        </Box>
      </section>
    </>
  );
};

export default HomeEScore;
