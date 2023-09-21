import React, { useEffect, useState } from "react";
import DashboardNavbar from "../DashboardNavbar";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./../../../CSS/dashboard.module.css";
import data from "../../../Assets/fake-data/loansdata";
import { useSelector } from "react-redux";

const LoanRecords = () => {
  const loans = useSelector((state) => state.authReducer.loans);
  const [ModalStates, setModalStates] = useState(new Map());
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "Sr.No",
      width: 70,
      renderCell: (params) => {
        return (
          <Typography color={theme.palette.secondary.dark} ml={2} variant="body2">
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
        return (
          <Typography color={theme.palette.secondary.dark} variant="body2">
            {params.row.first_name + " " + params.row.last_name}
          </Typography>
        );
      },
    },
    {
      field: "application_id",
      headerName: "Application ID",
      width: 200,
      renderCell: (params) => {
        return (
          <Typography color={theme.palette.secondary.dark} variant="body2">
            {params.row.results.application_id}
          </Typography>
        );
      },
    },
    {
      field: "pan_number",
      headerName: "Pan Number",
      width: 200,
      renderCell: (params) => {
        return (
          <Typography color={theme.palette.secondary.dark} variant="body2">
            {params.value}
          </Typography>
        );
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
          <>
            <Button
              onClick={() => openModal(params.id - 1)}
              sx={{
                backgroundColor: "#12162b",
                color: "#fff",
                fontSize: "x-small",
              }}
            >
              Info
            </Button>
            {Array.from(ModalStates.entries()).map(([rowIndex, isOpen]) => (
              <Dialog
                hideBackdrop={true}
                key={rowIndex}
                open={isOpen}
                onClose={() => closeModal(rowIndex)}
              >
                <DialogTitle>
                  <Typography
                    color={theme.palette.secondary.dark}
                    mb={2}
                    variant="body2"
                  >
                    Info:
                  </Typography>
                </DialogTitle>
                <DialogContent>
                  <Typography
                    color={theme.palette.secondary.dark}
                    sx={{ userSelect: "text" }}
                    m={1}
                    variant="body2"
                  >
                    Bank Statement URL :{" "}
                    {loans[rowIndex]?.results?.bank_statement_url ||
                      "URL Not available"}
                  </Typography>
                </DialogContent>
              </Dialog>
            ))}
          </>
        );
      },
    },
  ];

  useEffect(() => {
    // Initialize modal states for each row to false
    const initialStates = new Map();
    loans.forEach((loan, index) => {
      initialStates.set(index, false);
    });
    setModalStates(initialStates);
  }, [loans]);

  const openModal = (rowIndex) => {
    setModalStates((prevStates) => {
      const newState = new Map(prevStates);
      newState.set(rowIndex, true);
      return newState;
    });
  };

  const closeModal = (rowIndex) => {
    setModalStates((prevStates) => {
      const newState = new Map(prevStates);
      newState.set(rowIndex, false);
      return newState;
    });
  };

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
