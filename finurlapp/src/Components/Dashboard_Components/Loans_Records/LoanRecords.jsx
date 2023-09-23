import React, { useEffect, useRef, useState } from "react";
import DashboardNavbar from "../DashboardNavbar";
import {
  Button,
  Dialog,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./../../../CSS/dashboard.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const LoanRecords = () => {
  const loans = useSelector((state) => state.authReducer.loans);
  const [ModalStates, setModalStates] = useState(new Map());
  const [leadsPunchOpen, setLeadsPunchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [SnackMsg, SetSnackMsg] = useState("");
  const [showSuccessSnack, SetShowSuccessSnack] = useState(false);
  const [showErrorSnack, SetShowErrorSnack] = useState(false);
  const formRef = useRef(null);
  const userId = useSelector((state) => state.authReducer.loggedInUser._id);

  const lenderOptions = [
    "Stashfin",
    "Prefr",
    "KreditBee",
    "CASHe",
    "TATA Capital",
    "IIFL BL",
    "Faircent",
    "MoneyWide",
    "Lendingkart",
    "Nira",
    "Privo",
    "L & T Service",
  ];

  const [formData, setFormData] = useState({
    loggedInUserId: userId,
    partner: "",
    full_name: "",
    phone_number: "",
    pan_number: "",
    aadhar_number: "",
    amount: "",
    lender_bank: "",
  });

  const handleClose = () => {
    SetShowSuccessSnack(false);
    SetShowErrorSnack(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    axios
      .post("https://api.finurl.in/api/v1/leads", formData)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          setIsLoading(false);
          SetShowSuccessSnack(true);
          SetSnackMsg("Punched Sucessfully!");
          setFormData({
            loggedInUserId: userId,
            partner: "",
            full_name: "",
            phone_number: "",
            pan_number: "",
            aadhar_number: "",
            amount: "",
            lender_bank: "",
          });
          setLeadsPunchOpen(false);
        }, 3000);
      })
      .catch((err) => {
        setTimeout(() => {
          setIsLoading(false);
          SetShowErrorSnack(true);
          SetSnackMsg("Oops! Data already punched with provided details!");
          setFormData({
            loggedInUserId: userId,
            partner: "",
            full_name: "",
            phone_number: "",
            pan_number: "",
            aadhar_number: "",
            amount: "",
            lender_bank: "",
          });
          setLeadsPunchOpen(false);
        }, 3000);
        console.log(err.response.data.message);
      });
  };

  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "Sr.No",
      width: 70,
      renderCell: (params) => {
        return (
          <Typography color={theme.palette.primary.main} ml={2} variant="body2">
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
          <Typography color={theme.palette.primary.main} variant="body2">
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
          <Typography color={theme.palette.primary.main} variant="body2">
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
          <Typography color={theme.palette.primary.main} variant="body2">
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
                ml={2}
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
              <>
                <Button onClick={() => setLeadsPunchOpen(true)}>
                  Disbursed
                </Button>
                <Dialog
                  open={leadsPunchOpen}
                  onClose={() => setLeadsPunchOpen(false)}
                >
                  <Box padding={2}>
                    <DialogTitle>
                      <Typography variant="h6">Leads Punching: </Typography>
                    </DialogTitle>
                    <DialogContent>
                      <form ref={formRef} onSubmit={handleSubmit}>
                        <TextField
                          required={true}
                          sx={{ marginBottom: "15px" }}
                          size="small"
                          name="partner"
                          label="Partner Name"
                          variant="standard"
                          fullWidth
                          value={formData.partner}
                          onChange={handleChange}
                        />
                        <TextField
                          required={true}
                          sx={{ marginBottom: "15px" }}
                          size="small"
                          name="full_name"
                          label="Full Name"
                          variant="standard"
                          fullWidth
                          value={formData.full_name}
                          onChange={handleChange}
                        />
                        <TextField
                          required={true}
                          sx={{ marginBottom: "15px" }}
                          size="small"
                          name="phone_number"
                          label="Phone Number"
                          variant="standard"
                          fullWidth
                          inputProps={{
                            minLength: 10, // Set the minimum length constraint
                          }}
                          value={formData.phone_number}
                          onChange={handleChange}
                        />
                        <TextField
                          required={true}
                          sx={{ marginBottom: "15px" }}
                          size="small"
                          name="pan_number"
                          label="PAN Number"
                          variant="standard"
                          fullWidth
                          inputProps={{
                            minLength: 10, // Set the minimum length constraint
                          }}
                          value={formData.pan_number}
                          onChange={handleChange}
                        />
                        <TextField
                          required={true}
                          sx={{ marginBottom: "15px" }}
                          size="small"
                          name="aadhar_number"
                          label="Aadhar Number"
                          variant="standard"
                          fullWidth
                          inputProps={{
                            minLength: 12, // Set the minimum length constraint
                          }}
                          value={formData.aadhar_number}
                          onChange={handleChange}
                        />
                        <TextField
                          required={true}
                          sx={{ marginBottom: "15px" }}
                          size="small"
                          name="amount"
                          label="Loan Amount"
                          variant="standard"
                          fullWidth
                          value={formData.amount}
                          onChange={handleChange}
                        />
                        <FormControl variant="standard" fullWidth>
                          <InputLabel>Lender Bank</InputLabel>
                          <Select
                            required={true}
                            size="medium"
                            name="lender_bank"
                            value={formData.lender_bank}
                            onChange={handleChange}
                            label="Lender Bank"
                          >
                            {lenderOptions.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <Box
                          mt={3}
                          display={"flex"}
                          gap={"20px"}
                          alignItems={"center"}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            Submit
                          </Button>
                          {isLoading ? <CircularProgress size={20} /> : ""}
                        </Box>
                      </form>
                    </DialogContent>
                  </Box>
                </Dialog>
              </>
              // <Typography
              //   textAlign={"center"}
              //   sx={{
              //     color: "crimson",
              //     fontSize: "small",
              //     fontWeight: 600,
              //   }}
              //   variant="body2"
              // >
              //   {params.row.results.application_status}
              // </Typography>
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
                PaperProps={{
                  elevation: 0, // Remove the shadow by setting elevation to 0
                }}
                open={isOpen}
                onClose={() => closeModal(rowIndex)}
              >
                <DialogTitle>
                  <Typography mb={2} variant="body2">
                    Info:
                  </Typography>
                </DialogTitle>
                <DialogContent>
                  <Typography sx={{ userSelect: "text" }} m={1} variant="body2">
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
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        open={showSuccessSnack || showErrorSnack}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={showSuccessSnack ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {SnackMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoanRecords;
