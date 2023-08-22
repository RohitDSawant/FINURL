import React, { useState } from "react";
import { Box, Grid, Slider, Typography } from "@mui/material";
import TableDetails from "./CalculatorTable";

const LoanCalculator = () => {
  const [Amount, setAmount] = useState(2755000);
  const [interest, setInterest] = useState(7);
  const [duration, setDuration] = useState(147);
  const maxValue = 6000000;
  const intMax = 20;
  const maxDuration = 360;

  const intr = interest / 1200;
  const emi = duration
    ? Math.round((Amount * intr) / (1 - Math.pow(1 / (1 + intr), duration)))
    : 0;
  const totalAmt = duration * emi;
  var TotalAmountOfCredit = Math.round(
    (emi / intr) * (1 - Math.pow(1 + intr, -duration))
  );

  const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);

  return (
    <>
      <Typography textAlign={"center"} mb={5} variant="h5">EMI calculator</Typography>
      <Grid
        width={"95%"}
        margin={"auto"}
        justifyContent={"space-around"}
        alignItems={"center"}
        container
        spacing={1}
      >
        <Grid item lg={7}>
          <Box m={3}>
            <Typography variant="body1" fontWeight={600}> Loan Amount</Typography>
            <Slider
              value={Amount}
              onChange={(event, vAmt) => {
                setAmount(vAmt);
              }}
              defaultValue={Amount}
              max={maxValue}
            />
          </Box>
          <Box m={3}>
            <Typography variant="body1" fontWeight={600}> Interest Rate</Typography>
            <Slider
              value={interest}
              onChange={(event, vInt) => {
                setInterest(vInt);
              }}
              defaultValue={interest}
              max={intMax}
            />
          </Box>
          <Box m={3}>
            <Typography variant="body1" fontWeight={600}> Tenure (Months)</Typography>
            <Slider
              value={duration}
              onChange={(event, vDur) => {
                setDuration(vDur);
              }}
              defaultValue={duration}
              max={maxDuration}
            />
          </Box>
        </Grid>
        <Grid lg={3.5} item>
          <TableDetails
            Amount={Amount}
            totalAmt={totalAmt}
            interest={interest}
            duration={duration}
            emi={emi}
            TotalAmountOfInterest={TotalAmountOfInterest}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default LoanCalculator;
