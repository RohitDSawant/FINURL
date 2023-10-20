import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./../../../CSS/dashboard.module.css";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../../Common/Navbar";
import avatar from "./../../../Assets/Images/avatar.svg";

const AgentData = () => {
  const theme = useTheme();
  const [current_agent, setCurrentAgent] = useState({});
  const [agent_entires, setAgentEntires] = useState([]);
  const { agent } = useParams();

  useEffect(() => {
    let config = {
      headers: {
        Authorization: agent,
      },
    };

    axios
      .get("https://api.finurl.in/api/v1/user/agent_entries", config)
      .then((res) => {
        console.log(res.data);
        setCurrentAgent(res.data);
        if (res.data.message !== "No entries yet") {
          let entries = res.data.loans.map((ele, idx) => {
            return { ...ele, id: idx + 1 };
          });
          setAgentEntires(entries);
        }
      });
  }, [agent]);

  const columns = [
    {
      field: "id",
      headerName: "Sr.No",
      width: 90,
      renderCell: (params) => {
        return (
          <Typography
            color={theme.palette.primary.main}
            ml={2}
            variant="subtitle2"
          >
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        return (
          <Typography
            textTransform={"uppercase"}
            color={theme.palette.primary.main}
            variant="subtitle2"
          >
            {params.row.first_name} {params.row.last_name}
          </Typography>
        );
      },
    },

    {
      field: "pan_number",
      headerName: "Pan Number",
      width: 250,
      renderCell: (params) => {
        return (
          <Typography color={theme.palette.primary.main} variant="subtitle2">
            {params.value}
          </Typography>
        );
      },
    },

    {
      field: "phone",
      headerName: "Contact Number",
      width: 250,
      renderCell: (params) => {
        return (
          <Typography color={theme.palette.primary.main} variant="subtitle2">
            +91 {params.value}
          </Typography>
        );
      },
    },

    {
      field: "applicationId",
      headerName: "Application ID",
      width: 250,
      renderCell: (params) => {
        return (
          <Typography textAlign={"center"} variant="subtitle2">
            {params.row.results.application_id}
          </Typography>
        );
      },
    },
    
    {
      field: "application_status",
      headerName: "Application Status",
      width: 283,
      renderCell: (params) => {
        return (
          <>
            {params.row.results.application_status === "Rejected" ? (
              <Typography ml={4} color={"red"} variant="subtitle2">
                {params.row.results.application_status}
              </Typography>
            ) : (
              <Typography ml={4} color={"green"} variant="subtitle2">
                {params.row.results.application_status}
              </Typography>
            )}
          </>
        );
      },
    },
  ];

  const joining_date = new Date(current_agent.createdAt).toLocaleDateString()
  const last_visit = new Date(current_agent.updatedAt).toLocaleDateString()

  return (
    <>
      <Navbar />
      <Box height={"100vh"} pt={12}>
        <Box id={styles.agent_info}>
          <Box>
            <img style={{"height": "15vh"}} src={avatar} alt="avatar" />
          </Box>
         <Box>
         <Box display={"flex"} gap={"15px"} alignItems={"center"}>
            <Typography variant={"body2"}fontWeight={500} > Name: </Typography>
            <Typography variant="body2"  textTransform={"capitalize"}>
              {current_agent.name}
            </Typography>
          </Box>
          <Box display={"flex"} gap={"15px"} alignItems={"center"}>
            <Typography variant={"body2"}fontWeight={500} >Pan Number: </Typography>
            <Typography variant="body2" >{current_agent.panNumber}</Typography>
          </Box>
          <Box display={"flex"} gap={"15px"} alignItems={"center"}>
            <Typography variant={"body2"}fontWeight={500} >Phone : </Typography>
            <Typography variant="body2" >{current_agent.phoneNumber}</Typography>
          </Box>
          <Box display={"flex"} gap={"15px"} alignItems={"center"}>
            <Typography variant={"body2"}fontWeight={500} >Email Id: </Typography>
            <Typography variant="body2" >{current_agent.email}</Typography>
          </Box>
          <Box display={"flex"} gap={"15px"} alignItems={"center"}>
            <Typography variant={"body2"}fontWeight={500} >Joined: </Typography>
            <Typography variant="body2" >{joining_date}</Typography>
          </Box>
          <Box display={"flex"} gap={"15px"} alignItems={"center"}>
            <Typography variant={"body2"}fontWeight={500} >Last visited: </Typography>
            <Typography variant="body2" >{last_visit}</Typography>
          </Box>
         </Box>
        </Box>
        <Box>
          <DataGrid
            className={styles.back_data_grid}
            sx={{
              width: "90vw",
              margin: "auto",
              height: "67vh",
            }}
            rows={agent_entires}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 7,
                },
              },
            }}
            pageSizeOptions={[7, 14]}
            // disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </>
  );
};

export default AgentData;
