import React from "react";
import DashboardNavbar from "../DashboardNavbar";
import { DataGrid } from "@mui/x-data-grid";
import { bankoffers } from "../../../Assets/Images/Partners_data/partners";
import theme from "../../../Theme/theme";
import styles from "./../../../CSS/dashboard.module.css"
import { Typography } from "@mui/material";

const ActualBankWise = () => {
  const columns = [
    {
      field: "id",
      headerName: "Sr.No",
      width: 170,
      renderCell:(params)=>{
        return <Typography fontSize={"small"} ml={2}>{params.value}</Typography>
      }
    },
    {
      field: "name",
      headerName: "Bank Name",
      width: 260,
      renderCell:(params)=>{
        return <Typography fontSize={"small"} ml={1}>{params.value}</Typography>
      }
    },
    {
      field: "loans",
      headerName: "Loan upto",
      width: 260,
      renderCell:(params)=>{
        return <Typography fontSize={"small"} ml={1} >{params.value}</Typography>
      }
    },
    {
      field: "roi",
      headerName: "Min. ROI",
      width: 260,
      renderCell:(params)=>{
        return <Typography fontSize={"small"} ml={2}>{params.value}</Typography>
      }
    },
    {
      field: "description",
      headerName: "Max. Tenure",
      width: 260,
      renderCell:(params)=>{
        return <Typography fontSize={"small"} ml={2}>{params.value}</Typography>
      }
    },
  ];

  return (
    <>
      <DashboardNavbar />
      <DataGrid
        className={styles.back_data_grid}
        sx={{
          color: "#fff",
          width: "95%",
          margin: "auto",
          height: "85vh",
        }}
        rows={bankoffers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 14,
            },
          },
        }}
        // pageSizeOptions={[9,14]}
      />
    </>
  );
};

export default ActualBankWise;
