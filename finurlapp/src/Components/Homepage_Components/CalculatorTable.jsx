import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./../../CSS/homepage.module.css"

const TableDetails = (props) => {
  return (
    <>
      <Box className={styles.calculated_sheet} >
        <Box m={2} display={"flex"} justifyContent={"space-between"}>
          <Typography variant="body1" fontWeight={600}>Loan Amount</Typography>
          <Typography variant="body2" fontSize={"medium"} fontWeight={600}>₹ {props.Amount}</Typography>
        </Box>
        <Box m={2} display={"flex"} justifyContent={"space-between"}>
          <Typography variant="body1" fontWeight={600}>Interest</Typography>
          <Typography variant="body2" fontSize={"medium"} fontWeight={600}>{props.interest} %</Typography>
        </Box>
        <Box m={2} display={"flex"} justifyContent={"space-between"}>
          <Typography variant="body1" fontWeight={600}>Tenure (Months)</Typography>
          <Typography variant="body2" fontSize={"medium"} fontWeight={600}>{props.duration}</Typography>
        </Box>
        <Box m={2} display={"flex"} justifyContent={"space-between"}>
          <Typography variant="body1" fontWeight={600}>EMI (Monthly)</Typography>
          <Typography variant="body2" fontSize={"medium"} fontWeight={600}>₹ {props.emi}</Typography>
        </Box>
        <Box m={2} display={"flex"} justifyContent={"space-between"}>
          <Typography variant="body1" fontWeight={600}>Total Interest</Typography>
          <Typography variant="body2" fontSize={"medium"} fontWeight={600}>₹ {props.TotalAmountOfInterest}</Typography>
        </Box>
        <hr />
        <Box m={2} display={"flex"} justifyContent={"space-between"}>
          <Typography variant="body1" fontWeight={600}>Total Payment <br /> <span style={{"fontSize":"x-small", "color":"gray"}}>" Loan Amount + Interest "</span></Typography>
          <Typography variant="body2" fontSize={"medium"} fontWeight={600}>₹ {props.totalAmt ? props.totalAmt : 0}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default TableDetails;
