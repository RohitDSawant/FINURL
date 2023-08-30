import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../Theme/theme";
import { loans } from "../../../Assets/fake-data/loansdata";
import bar_chart from "./../../../Assets/Images/1197869.png";

const GraphSection = () => {
  return (
    <>
      <Grid mt={5} container justifyContent={"space-around"}>
        <Grid  height={"40vh"} item lg={7}>
          <Box>
            <img
              height={"250px"}
              style={{ display: "block", margin: "auto" , "width": "400px"}}
              src={bar_chart}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item lg={4.5} height={"40vh"}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              padding: "15px 20px",
              borderRadius: "5px",
            }}
          >
            <Typography color={theme.palette.primary.dark} variant="subtitle2">
              Recent Loan Processed
            </Typography>
          </Box>
          <Box
            height={"30vh"}
            overflow={"scroll"}
            sx={{ overflowX: "hidden" }}
            mt={1}
          >
            {loans &&
              loans.map((people, id) => {
                return (
                  <Box
                    sx={{ backgroundColor: theme.palette.primary.main }}
                    display={"grid"}
                    gridTemplateColumns={"repeat(3, 1fr)"}
                    key={id}
                    justifySelf={"space-between"}
                    m={1}
                    p={1}
                    borderRadius={1}
                    pl={2}
                    gap={3}
                    pr={2}
                  >
                    <Box>
                      <Typography
                        color={theme.palette.secondary.dark}
                        fontSize={"x-small"}
                        letterSpacing={1}
                        mb={1}
                        variant="body2"
                      >
                        {people.loanID}
                      </Typography>
                      <Typography
                        color={theme.palette.primary.dark}
                        variant="subtitle2"
                      >
                        {people.name}{" "}
                      </Typography>
                    </Box>
                    <Typography
                      color={theme.palette.primary.dark}
                      alignSelf={"center"}
                      variant="body2"
                    >
                      {people.date}
                    </Typography>
                    <Typography
                      color={theme.palette.secondary.dark}
                      alignSelf={"center"}
                      variant="body1"
                    >
                      {people.amt}
                    </Typography>
                  </Box>
                );
              })}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default GraphSection;
