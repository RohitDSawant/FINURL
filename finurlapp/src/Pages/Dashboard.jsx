import React, { useEffect } from "react";
import LeftDashboard from "../Components/Dashboard_Components/LeftDashboard";
import RightDashboard from "../Components/Dashboard_Components/RightDashboard";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";

const Dashboard = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path);

  return (
    <>
      <Box display={"flex"} gap={"2px"}>
        <LeftDashboard />
        <Box width={"100%"}>
          <RightDashboard />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
