import React from "react";
import DashboardNavbar from "../DashboardNavbar";
import { Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import theme from "../../../Theme/theme";
import styles from "./../../../CSS/dashboard.module.css";
import data from "../../../Assets/fake-data/loansdata";
import { useSelector } from "react-redux";

const LoanRecords = () => {
  const loans = useSelector((state) => state.authReducer.loans);

  const columns = [
    {
      field: "id",
      headerName: "Sr.No",
      width: 70,
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
      width: 290,
      renderCell: (params) => {
        return <Typography variant="body2">{params.row.first_name + " " +  params.row.last_name}</Typography>;
      },
    },
    {
      field: "application_id",
      headerName: "Application ID",
      width: 200,
      renderCell: (params) => {
        return <Typography variant="body2">{params.row.results.application_id}</Typography>;
      },
    },
    {
      field: "pan_number",
      headerName: "Pan Number",
      width: 200,
      renderCell: (params) => {
        return <Typography variant="body2">{params.value}</Typography>;
      },
    },
    {
      field: "loan_status",
      headerName: "Loan Status",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            {params.row.results.application_status === "In process" ? (
              <Typography
                textAlign={"center"}
                sx={{
                  color: "navy",
                  fontSize: "small",
                  fontWeight: 600,
                }}
                variant="body2"
              >
                {params.row.results.application_status}
              </Typography>
            ) : params.row.results.application_status === "Eligible" ? (
              <Typography
                textAlign={"center"}
                sx={{
                  color: "green",
                  fontSize: "small",
                  fontWeight: 600,
                }}
                variant="body2"
              >
                {params.row.results.application_status}
              </Typography>
            ) : (
              <Typography
                textAlign={"center"}
                sx={{
                  color: "crimson",
                  fontSize: "small",
                  fontWeight: 600,
                }}
                variant="body2"
              >
                {params.row.results.application_status}
              </Typography>
            )}
          </>
        );
      },
    },
    {
      field: "loan_info",
      headerName: "Loan Info",
      width: 250,
      renderCell: (params) => {
        return (
          <Button
            sx={{
              backgroundColor: "#12162b",
              color: "#fff",
              fontSize: "x-small",
            }}
          >
            Info
          </Button>
        );
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
        rows={loans}
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
