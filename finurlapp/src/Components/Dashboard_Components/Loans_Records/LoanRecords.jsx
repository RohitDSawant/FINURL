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
  Autocomplete,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./../../../CSS/dashboard.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import stashfin_logo from "./../../../Assets/Images/partners_logo/stashfin.png";
import prefr_logo from "./../../../Assets/Images/partners_logo/prefr.png";

import {
  prefr_dummy,
  stashfin_dummy,
} from "../../../Assets/fake-data/loansdata";

const LoanRecords = () => {
  const loans = useSelector((state) => state.authReducer.loans);

  const [displyEntries, setDisplayEntries] = useState([]);
  const [panList, SetPanlist] = useState([]);
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
      .patch("https://api.finurl.in/api/v1/leads", formData)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          setIsLoading(false);
          SetShowSuccessSnack(true);
          SetSnackMsg("Punched Successfully!");
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
        }, 2000);
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
        }, 2000);
        console.log(err.response.data.message);
      });
  };

  const theme = useTheme();

  useEffect(() => {
    // Initialize modal states for each row to false
    const initialStates = new Map();
    loans.forEach((loan, index) => {
      initialStates.set(index, false);
    });
    setModalStates(initialStates);

    let panList = loans.map((loan, id) => {
      return {label: id , value: loan.panNumber};
    });

    SetPanlist(panList);
  }, [loans]);

  console.log(panList)

  const openModal = (index) => {
    setModalStates((prevStates) => new Map(prevStates.set(index, true)));
  };

  const closeModal = (index) => {
    setModalStates((prevStates) => new Map(prevStates.set(index, false)));
  };

  // const handleSort = (e) => {
  //   let value = e.target.value;

  //   if (value === "asc") {
  //     let arr = displyEntries.sort((a, b) => a.firstName - b.firstName);
  //     setDisplayEntries(arr);
  //   } else if (value === "desc") {
  //     let arr = displyEntries.sort((a, b) => b.firstName - a.firstName);
  //     setDisplayEntries(arr);
  //   }
  // };

  const handleFilter = (e) => {
    let value = e.target.value;
    let arr;
    if (value === "stashfin") {
      arr = loans.filter((loan) => {
        return loan.bank_name === "stashfin";
      });
      console.log(arr);
      setDisplayEntries(arr);
    } else if (value === "prefr") {
      arr = loans.filter((loan) => {
        return loan.bank_name === "prefr";
      });
      setDisplayEntries(arr);
      console.log(arr);
    }
  };

  useEffect(() => {
    setDisplayEntries(loans);
  }, [loans]);

  return (
    <>
      <DashboardNavbar />
      <Box
        display={"flex"}
        gap={"15px"}
        justifyContent={"space-between"}
        width={"95%"}
        m={"auto"}
        mb={2}
      >
        <Box width={"35%"} display={"flex"} gap={"10px"}>
          {/* <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Sort By"
              onChange={handleSort}
            >
              <MenuItem value={"asc"}>New to Old entries</MenuItem>
              <MenuItem value={"desc"}>Old to New entries</MenuItem>
            </Select>
          </FormControl> */}
          <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">Banks</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Filter  By"
              onChange={handleFilter}
            >
              <MenuItem value={"prefr"}>Prefr</MenuItem>
              <MenuItem value={"stashfin"}>Stashfin</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={panList}
            getOptionLabel={(panList) => panList.value}
            sx={{ width: 300, border: "none" }}
            renderInput={(params) => (
              <TextField {...params} label="Search by PAN" />
            )}
          />
        </Box>
      </Box>
      <Box
        width={"99%"}
        height={"73vh"}
        sx={{ overflowX: "hidden" }}
        overflow={"scroll"}
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
        py={1.5}
        px={1.5}
      >
        {displyEntries &&
          displyEntries.map((loan, index) => {
            return loan.bank_name === "stashfin" ? (
              <Box
                key={index}
                width={"98%"}
                justifyContent={"space-between"}
                gap={"25px"}
                alignItems={"center"}
                p={1.5}
                borderRadius={"5px"}
                m="auto"
                display={"flex"}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
              >
                <Box width={"7%"} height={"3vh"}>
                  <img
                    style={{ height: "100%", display: "block", margin: "auto" }}
                    src={stashfin_logo}
                    alt=""
                  />
                </Box>
                <Box className={styles.loan_records_card_details}>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      First Name:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.firstName ? loan.first_name : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Last Name:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.lastName ? loan.last_name : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      D.O.B:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.dob ? loan.dob : " -"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Email Id:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.email ? loan.email : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Mobile:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.phone ? loan.phone : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Income
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.income ? loan.income : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      PAN Number:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.panNumber ? loan.panNumber : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Pincode:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.pincode ? loan.pincode : "-"}
                    </Typography>
                  </Box>
                  {/* Add other fields as needed */}
                </Box>
                <Box width={"10%"}>
                  <Button
                    sx={{ padding: "5px 15px", fontSize: "10px" }}
                    onClick={() => openModal(index)}
                  >
                    Loan Details
                  </Button>
                </Box>
                <Dialog
                  open={ModalStates.get(index)}
                  onClose={() => closeModal(index)}
                >
                  <DialogTitle>Info:</DialogTitle>
                  <DialogContent>
                    {loan.results ? (
                      <>
                        <Box>
                          <Typography variant={"subtitle2"}>
                            {loan.results.application_id}
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.results.application_status}
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.results.bank_statement_url}
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <Typography>No info found.</Typography>
                    )}
                  </DialogContent>
                </Dialog>
              </Box>
            ) : loan.bank_name === "prefr" ? (
              <Box
                key={index}
                width={"98%"}
                justifyContent={"space-between"}
                gap={"25px"}
                alignItems={"center"}
                p={0.5}
                borderRadius={"5px"}
                m="auto"
                display={"flex"}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
              >
                <Box width={"7%"} height={"4vh"}>
                  <img
                    style={{ height: "100%", display: "block", margin: "auto" }}
                    src={prefr_logo}
                    alt=""
                  />
                  {/* <Typography variant="subtitle2" textAlign={"center"}>Prefr</Typography> */}
                </Box>
                <Box className={styles.loan_records_card_details}>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      First Name:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.firstName ? loan.firstName : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Last Name:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.lastName ? loan.lastName : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      D.O.B:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.dob ? loan.dob : "-"}{" "}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Email Id:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.personalEmailId ? loan.personalEmailId : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Mobile:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.phone ? loan.phone : "-"}{" "}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Income
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.netMonthlyIncome ? loan.netMonthlyIncome : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      PAN Number:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.panNumber ? loan.panNumber : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Pincode:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.currentAddressPincode
                        ? loan.currentAddressPincode
                        : "-"}
                    </Typography>
                  </Box>
                  {/* Add other fields as needed */}
                </Box>
                <Box width={"10%"}>
                  <Button
                    sx={{ padding: "5px 15px", fontSize: "10px" }}
                    onClick={() => openModal(index)}
                  >
                    Loan Details
                  </Button>
                </Box>
                <Dialog
                  maxWidth={"xs"}
                  fullWidth={true}
                  open={ModalStates.get(index)}
                  onClose={() => closeModal(index)}
                >
                  <DialogTitle>Info:</DialogTitle>
                  <DialogContent>
                    {loan.data ? (
                      <Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"body2"}>Event Name:</Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.eventName}
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"body2"}>
                            Loan Amount:
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.loanAmount}
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"body2"}>
                            Rate Of Interest:
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.roi} %
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"body2"}>Tenure:</Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.tenure} months
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"subtitle2"}>
                            Pre-Emi Interest:
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.preEmiInterest}
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"subtitle2"}>
                            Final Processing Fee:
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.finalProcessingFee}
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"subtitle2"}>
                            First Emi Date:
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.firstEmiDate}
                          </Typography>
                        </Box>
                      </Box>
                    ) : (
                      <Typography>No Loan Info.</Typography>
                    )}
                  </DialogContent>
                </Dialog>
              </Box>
            ) : (
              <Box
                key={index}
                width={"98%"}
                justifyContent={"space-between"}
                gap={"25px"}
                alignItems={"center"}
                p={0.5}
                borderRadius={"5px"}
                m="auto"
                display={"flex"}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
              >
                <Box width={"7%"} height={"3vh"}>
                  <img
                    style={{ height: "100%", display: "block", margin: "auto" }}
                    src={stashfin_logo}
                    alt=""
                  />
                  {/* <Typography variant="subtitle2" textAlign={"center"}>Prefr</Typography> */}
                </Box>
                <Box className={styles.loan_records_card_details}>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      First Name:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.firstName ? loan.firstName : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Last Name:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.lastName ? loan.lastName : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      D.O.B:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.dob ? loan.dob : "-"}{" "}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Email Id:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.personalEmailId ? loan.personalEmailId : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Mobile:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.phone ? loan.phone : "-"}{" "}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Income
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.netMonthlyIncome ? loan.netMonthlyIncome : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      PAN Number:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.panNumber ? loan.panNumber : "-"}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color={"gray"}
                    >
                      Pincode:
                    </Typography>
                    <Typography variant="subtitle2">
                      {loan.currentAddressPincode
                        ? loan.currentAddressPincode
                        : "-"}
                    </Typography>
                  </Box>
                  {/* Add other fields as needed */}
                </Box>
                <Box width={"10%"}>
                  <Button
                    sx={{ padding: "5px 15px", fontSize: "10px" }}
                    onClick={() => openModal(index)}
                  >
                    Loan Details
                  </Button>
                </Box>
                <Dialog
                  maxWidth={"xs"}
                  fullWidth={true}
                  open={ModalStates.get(index)}
                  onClose={() => closeModal(index)}
                >
                  <DialogTitle>Info:</DialogTitle>
                  <DialogContent>
                    {loan.data ? (
                      <Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"body2"}>Event Name:</Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.eventName}
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"body2"}>
                            Loan Amount:
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.loanAmount}
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"body2"}>
                            Rate Of Interest:
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.roi} %
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"body2"}>Tenure:</Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.tenure} months
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"subtitle2"}>
                            Pre-Emi Interest:
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.preEmiInterest}
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"subtitle2"}>
                            Final Processing Fee:
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.finalProcessingFee}
                          </Typography>
                        </Box>
                        <Box display={"flex"} gap={"10px"}>
                          <Typography variant={"subtitle2"}>
                            First Emi Date:
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            {loan.data.selectedOfferDetails.firstEmiDate}
                          </Typography>
                        </Box>
                      </Box>
                    ) : (
                      <Typography>No Loan Info.</Typography>
                    )}
                  </DialogContent>
                </Dialog>
              </Box>
            );
          })}
      </Box>

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
