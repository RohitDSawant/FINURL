import React from "react";
import LeedsData from "./Leeds_Data/LeedsData";
import AdminDashboardNavbar from "./AdminDashboardNavbar";

const AdminRightDashboard = () => {
  return (
    <>
      <AdminDashboardNavbar />
      <LeedsData />
    </>
  );
};

export default AdminRightDashboard;
