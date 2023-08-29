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
      width: 150,
      renderCell:(params)=>{
        return <Typography ml={2}>{params.value}</Typography>
      }
    },
    {
      field: "name",
      headerName: "Bank Name",
      width: 250,
      renderCell:(params)=>{
        return <Typography ml={1}>{params.value}</Typography>
      }
    },
    {
      field: "loans",
      headerName: "Loan upto",
      width: 250,
      renderCell:(params)=>{
        return <Typography ml={1} >{params.value}</Typography>
      }
    },
    {
      field: "roi",
      headerName: "Min. ROI",
      width: 250,
      renderCell:(params)=>{
        return <Typography ml={2}>{params.value}</Typography>
      }
    },
    {
      field: "description",
      headerName: "Max. Tenure",
      width: 250,
      renderCell:(params)=>{
        return <Typography ml={2}>{params.value}</Typography>
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
          bgcolor: theme.palette.primary.main,
          width: "95%",
          margin: "auto",
          height: "68vh",
        }}
        rows={bankoffers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={7}
        disableRowSelectionOnClick
      />
    </>
  );
};

export default ActualBankWise;
