import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./../../../CSS/dashboard.module.css";
import {
  Box,
  Button,
  Dialog,
  Typography,
  useTheme,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../../Common/Navbar";
import avatar from "./../../../Assets/Images/avatar.svg";
import stashfin_logo from "./../../../Assets/Images/partners_logo/stashfin.png";
import prefr_logo from "./../../../Assets/Images/partners_logo/prefr.png";

const AgentData = () => {
  const theme = useTheme();
  const [current_agent, setCurrentAgent] = useState({});
  const [agent_entires, setAgentEntires] = useState([]);
  const [ModalStates, setModalStates] = useState(new Map());

  const { agent } = useParams();

  console.log(agent);

  useEffect(() => {
    axios
      .get(`https://api.finurl.in/api/v1/user/agent_loans/${agent}`)
      .then((res) => {
        console.log(res.data);
        setCurrentAgent(res.data);
        if (res.data.message !== "No such agent found") {
          let entries = res.data.loans.map((ele, idx) => {
            return { ...ele, id: idx + 1 };
          });
          setAgentEntires(entries);
        }
      });
  }, [agent]);

  const openModal = (index) => {
    setModalStates((prevStates) => new Map(prevStates.set(index, true)));
  };

  const closeModal = (index) => {
    setModalStates((prevStates) => new Map(prevStates.set(index, false)));
  };

  const joining_date = new Date(current_agent.createdAt).toLocaleDateString();
  const last_visit = new Date(current_agent.updatedAt).toLocaleDateString();

  return (
    <>
      <Navbar />
      <Box height={"100vh"} pt={12}>
        <Box id={styles.agent_info}>
          <Box>
            <img style={{ height: "15vh" }} src={avatar} alt="avatar" />
          </Box>
          <Box>
            <Box display={"flex"} gap={"15px"} alignItems={"center"}>
              <Typography variant={"body2"} fontWeight={500}>
                {" "}
                Name:{" "}
              </Typography>
              <Typography variant="body2" textTransform={"capitalize"}>
                {current_agent.name}
              </Typography>
            </Box>
            <Box display={"flex"} gap={"15px"} alignItems={"center"}>
              <Typography variant={"body2"} fontWeight={500}>
                Pan Number:{" "}
              </Typography>
              <Typography variant="body2">{current_agent.panNumber}</Typography>
            </Box>
            <Box display={"flex"} gap={"15px"} alignItems={"center"}>
              <Typography variant={"body2"} fontWeight={500}>
                Phone :{" "}
              </Typography>
              <Typography variant="body2">
                {current_agent.phoneNumber}
              </Typography>
            </Box>
            <Box display={"flex"} gap={"15px"} alignItems={"center"}>
              <Typography variant={"body2"} fontWeight={500}>
                Email Id:{" "}
              </Typography>
              <Typography variant="body2">{current_agent.email}</Typography>
            </Box>
            <Box display={"flex"} gap={"15px"} alignItems={"center"}>
              <Typography variant={"body2"} fontWeight={500}>
                Joined:{" "}
              </Typography>
              <Typography variant="body2">{joining_date}</Typography>
            </Box>
            <Box display={"flex"} gap={"15px"} alignItems={"center"}>
              <Typography variant={"body2"} fontWeight={500}>
                Last visited:{" "}
              </Typography>
              <Typography variant="body2">{last_visit}</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          width={"99%"}
          height={"65vh"}
          sx={{ overflowX: "hidden" }}
          overflow={"scroll"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          py={.5}
          px={.5}
        >
          {agent_entires &&
            agent_entires.map((loan, index) => {
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
                      style={{
                        height: "100%",
                        display: "block",
                        margin: "auto",
                      }}
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
                      style={{
                        height: "100%",
                        display: "block",
                        margin: "auto",
                      }}
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
                            <Typography variant={"body2"}>
                              Event Name:
                            </Typography>
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
                              {
                                loan.data.selectedOfferDetails
                                  .finalProcessingFee
                              }
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
                      style={{
                        height: "100%",
                        display: "block",
                        margin: "auto",
                      }}
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
                            <Typography variant={"body2"}>
                              Event Name:
                            </Typography>
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
                              {
                                loan.data.selectedOfferDetails
                                  .finalProcessingFee
                              }
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
      </Box>
    </>
  );
};

export default AgentData;
