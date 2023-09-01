import React from "react";
import DashboardNavbar from "../DashboardNavbar";
import { Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import theme from "../../../Theme/theme";
import styles from "./../../../CSS/dashboard.module.css";
import data from "../../../Assets/fake-data/loansdata";

const LoanRecords = () => {
  const columns = [
    {
      field: "id",
      headerName: "Sr.No",
      width:70,
      renderCell: (params) => {
        return (
          <Typography ml={2} variant="body2">
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return <Typography variant="body2">{params.value}</Typography>;
      },
    },
    {
      field: "application_id",
      headerName: "Application ID",
      width: 150,
      renderCell: (params) => {
        return <Typography variant="body2">{params.value}</Typography>;
      },
    },
    {
      field: "pan number",
      headerName: "Pan Number",
      width: 150,
      renderCell: (params) => {
        return <Typography variant="body2">{params.value}</Typography>;
      },
    },
    {
      field: "loan_status",
      headerName: "Loan Status",
      width: 140,
      renderCell: (params) => {
        return (
          <>
            {params.value === "In process" ? (
              <Typography
              textAlign={"center"}
                sx={{
                  color: "navy",
                  fontSize: "small",
                  fontWeight: 600
                }}
                variant="body2"
              >
                {params.value}
              </Typography>
            ) : params.value === "Passed" ? (
              <Typography
              textAlign={"center"}
                sx={{
                  color: "green",
                  fontSize: "small",
                  fontWeight: 600
                }}
                variant="body2"
              >
                {params.value}
              </Typography>
            ) : (
              <Typography
              textAlign={"center"}
                sx={{
                  color: "crimson",
                  fontSize: "small",
                  fontWeight: 600
                }}
                variant="body2"
              >
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
    {
      field: "loan_info",
      headerName: "Loan Info",
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
        pageSizeOptions={[8, 16]}
        // disableRowSelectionOnClick
      />
    </>
  );
};

export default LoanRecords;
