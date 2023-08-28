import React, { useEffect } from "react";
import LeftDashboard from "../Components/Dashboard_Components/LeftDashboard";
import RightDashboard from "../Components/Dashboard_Components/RightDashboard";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";

const Dashboard = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path);

  return (
    <>
      <Grid container>
        <Grid item>
          <LeftDashboard />
        </Grid>
        <Grid item>
          <RightDashboard />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
