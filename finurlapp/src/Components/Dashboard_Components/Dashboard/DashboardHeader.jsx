import React from "react";
import { Box, CircularProgress, Grid, Typography, useTheme } from "@mui/material";

const DashboardHeader = () => {

  const theme = useTheme()
  return (
    <>
      <Grid
        // border={"1px solid"}
        justifyContent={"space-around"}
        container
        mt={2}
      >
        <Grid
          item
          lg={2.7}
          padding={2}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          borderRadius={2}
        >
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            gap={"10px"}
            alignItems={"center"}
          >
            <Box>
              <Typography variant="body1" fontWeight={600} mb={1}>
                Loan Submitted
              </Typography>
              <Typography variant="subtitle1" fontWeight={600}>
              ₹ 12,361
              </Typography>
            </Box>
            <CircularProgress sx={{"color": theme.palette.primary.main}} value={80} variant="determinate" size={30} />
          </Box>
        </Grid>
        <Grid
          item
          lg={2.7}
          padding={2}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          }
          borderRadius={2}
        >
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            gap={"10px"}
            alignItems={"center"}
          >
           
          </Box>
        </Grid>
        <Grid
          item
          lg={2.7}
          padding={2}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          }
          borderRadius={2}
        >
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            gap={"10px"}
            alignItems={"center"}
          >
            <Box>
              <Typography variant="body1" fontWeight={600} mb={1}>
                Amount Disributed
              </Typography>
              <Typography variant="subtitle1" fontWeight={600}>
              ₹ 21,225
              </Typography>
            </Box>
            <CircularProgress sx={{"color": theme.palette.primary.main}} value={80} variant="determinate" size={30} />
          </Box>
        </Grid>
        <Grid
          item
          lg={2.7}
          padding={2}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          }
          borderRadius={2}
        >
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            gap={"10px"}
            alignItems={"center"}
          >
            <Box>
              <Typography variant="body1" fontWeight={600} mb={1}>
                Redeem Amount
              </Typography>
              <Typography variant="subtitle1" fontWeight={600}>
              ₹ 1,325,425
              </Typography>
            </Box>
            <CircularProgress sx={{"color": theme.palette.primary.main}} value={80} variant="determinate" size={30} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardHeader;
