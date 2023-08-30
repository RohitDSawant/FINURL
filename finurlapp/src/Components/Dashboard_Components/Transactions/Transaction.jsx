import React from "react";
import DashboardNavbar from "../DashboardNavbar";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import theme from "../../../Theme/theme";
import styles from "./../../../CSS/dashboard.module.css";
import data from "../../../Assets/fake-data/loansdata";

const Transaction = () => {
  const columns = [
    {
      field: "id",
      headerName: "Sr.No",
      width: 150,
      renderCell: (params) => {
        return <Typography ml={2} variant="body2">{params.value}</Typography>;
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 270,
      renderCell: (params) => {
        return <Typography variant="body2">{params.value}</Typography>;
      },
    },
    {
      field: "application_id",
      headerName: "Application ID",
      width: 270,
      renderCell: (params) => {
        return <Typography variant="body2">{params.value}</Typography>;
      },
    },
    {
      field: "loan_status",
      headerName: "Loan Status",
      width: 270,
      renderCell: (params) => {
        return (
          <>
            {params.value === "In process" ? (
              <Typography color={"blue"} variant="body2">
                {params.value}
              </Typography>
            ) : params.value === "Passed" ? (
              <Typography color={"green"} variant="body2">
                {params.value}
              </Typography>
            ) : (
              <Typography color={"red"} variant="body2">
                {params.value}
              </Typography>
            )}
          </>
        );
      },
    },
    {
      field: "date_of_application",
      headerName: "Application Date",
      width: 250,
      renderCell: (params) => {
        return <Typography variant="body2">{params.value}</Typography>;
      },
    },
  ];
  return (
    <>
      <DashboardNavbar />
      <DataGrid
        className={styles.back_data_grid}
        sx={{
        
          width: "95%",
          margin: "auto",
          height: "74.5vh",
        }}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8,16]}
        // disableRowSelectionOnClick
      />
    </>
  );
};

export default Transaction;
