import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./../../CSS/homepage.module.css";
import credit_score from "./../../Assets/Images/credit_score.jpg";

const HomeEScore = () => {
  return (
    <>
      <section id={styles.home_e_sec}>
        <Box>
          <img className={styles.credit_score_img} src={credit_score} alt="" />
          <Button sx={{ background: "teal", color: "#fff" }}>Check Here</Button>
        </Box>
      </section>
    </>
  );
};

export default HomeEScore;
