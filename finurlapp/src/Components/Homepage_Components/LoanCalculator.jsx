import React, { useState } from "react";
import { Box, Grid, Slider, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();
  return (
    <>
      <section id="#calculator">
        <>
          <Typography textAlign={"center"} mb={5} variant="h5">
            EMI calculator
          </Typography>
          <Grid
            width={"95%"}
            margin={"auto"}
            justifyContent={"space-around"}
            alignItems={"center"}
            container
            spacing={1}
          >
            <Grid
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              item
              xs={10}
              sm={7}
              md={7}
              lg={7}
            >
              <Box m={2}>
                <Typography variant="body1" fontWeight={600}>
                  {" "}
                  Loan Amount
                </Typography>
                <Slider
                  sx={{ color: theme.palette.primary.main }}
                  value={Amount}
                  onChange={(event, vAmt) => {
                    setAmount(vAmt);
                  }}
                  defaultValue={Amount}
                  max={maxValue}
                />
              </Box>
              <Box m={2}>
                <Typography variant="body1" fontWeight={600}>
                  {" "}
                  Interest Rate
                </Typography>
                <Slider
                  sx={{ color: theme.palette.primary.main }}
                  value={interest}
                  onChange={(event, vInt) => {
                    setInterest(vInt);
                  }}
                  defaultValue={interest}
                  max={intMax}
                />
              </Box>
              <Box m={2}>
                <Typography variant="body1" fontWeight={600}>
                  {" "}
                  Tenure (Months)
                </Typography>
                <Slider
                  sx={{ color: theme.palette.primary.main }}
                  value={duration}
                  onChange={(event, vDur) => {
                    setDuration(vDur);
                  }}
                  defaultValue={duration}
                  max={maxDuration}
                />
              </Box>
            </Grid>
            <Grid
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              item
              xs={10}
              sm={4}
              md={4}
              lg={3.5}
            >
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
      </section>
    </>
  );
};

export default LoanCalculator;
