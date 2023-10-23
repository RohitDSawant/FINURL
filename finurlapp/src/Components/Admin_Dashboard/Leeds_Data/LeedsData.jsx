import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./../../../CSS/dashboard.module.css";
import {
  Button,
  Typography
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const LeedsData = () => {

  const [rows, setRows] = useState([]);

  const theme = useTheme();

  const navigate = useNavigate()

  const showAgentData = (agent) =>{
    navigate(`/agent/${agent}`)
  }

  const columns = [
    {
      field: "id",
      headerName: "Sr.No",
      width: 70,
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
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        return (
          <Typography
            textTransform={"uppercase"}
            color={theme.palette.primary.main}
            variant="subtitle2"
          >
            {params.value}
          </Typography>
        );
      },
    },

    {
      field: "panNumber",
      headerName: "Pan Number",
      width: 150,
      renderCell: (params) => {
        return (
          <Typography color={theme.palette.primary.main} variant="subtitle2">
            {params.value}
          </Typography>
        );
      },
    },

    {
      field: "phoneNumber",
      headerName: "Contact Number",
      width: 150,
      renderCell: (params) => {
        return (
          <Typography color={theme.palette.primary.main} variant="subtitle2">
            +91 {params.value}
          </Typography>
        );
      },
    },

    {
      field: "createdAt",
      headerName: "Joined At",
      width: 200,
      renderCell: (params) => {
        let date = new Date(params.row.createdAt);

        return (
          <Typography textAlign={"center"} variant="subtitle2">
            {date.toLocaleString()}
          </Typography>
        );
      },
    },
    {
      field: "updatedAt",
      headerName: "Last Visit",
      width: 200,
      renderCell: (params) => {
        let date = new Date(params.row.updatedAt);
        return (
          <Typography color={theme.palette.primary.main} variant="subtitle2">
            {date.toLocaleString()}
          </Typography>
        );
      },
    },
    {
      field: "loan_info",
      headerName: "Deatiled Information",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={()=> showAgentData(params.row._id)}
              sx={{
                backgroundColor: "#12162b",
                color: "#fff",
                fontSize: "x-small",
                marginLeft: "10px",
              }}
            >
              Click for Details
            </Button>
          </>
          // <Button sx={{ padding: "5px 15px" }}>Details</Button>
        );
      },
    },
  ];

  useEffect(() => {
    axios.get("https://api.finurl.in/api/v1/user/all_agents").then((res) => {
      console.log(res.data);
      let arr = [];
      if (res.data.length > 0) {
        arr = res.data.map((ele, idx) => {
          return { ...ele, id: idx + 1 };
        });
        setRows(arr);
      } else setRows(arr);
    });
  }, []);

  return (
    <>
      <DataGrid
        className={styles.back_data_grid}
        sx={{
          width: "80vw",
          margin: "auto",
          height: "82vh",
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        pageSizeOptions={[9, 18]}
        // disableRowSelectionOnClick
      />
      <Typography variant="subtitle2" mt={1} ml={2} fontSize={"x-small"}>
        * Please hover on the column headers for additional functionalites.
      </Typography>
    </>
  );
};

export default LeedsData;
