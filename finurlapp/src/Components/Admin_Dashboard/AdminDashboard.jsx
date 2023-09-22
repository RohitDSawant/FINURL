import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import AdminRightDashboard from "./AdminRightDashboard";
import AdminLeftDashboard from "./AdminLeftDashboard";


const AdminDashboard = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    console.log(path);
  
    return (
      <>
        <Box display={"flex"} gap={"2px"}>
          <AdminLeftDashboard />
          <Box width={"100%"}>
            <AdminRightDashboard />
          </Box>
        </Box>
      </>
    );
}

export default AdminDashboard




