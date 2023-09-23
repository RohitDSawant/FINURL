import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./../../../CSS/dashboard.module.css";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";


const LeedsData = () => {
  const [rows, setRows] = useState([]);
  const theme  =  useTheme()

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
        field: "_id",
      headerName: "Application ID",
      width: 250,
      renderCell: (params) => {
        return (
          <Typography color={theme.palette.primary.main} variant="body2">
            {params.value}
          </Typography>
        );
    },
},
{
  field: "full_name",
  headerName: "Name",
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
    field: "lender_bank",
    headerName: "Lender",
    width: 100,
    renderCell: (params) => {
      return (
        <Typography ml={2} color={theme.palette.primary.main} variant="body2">
          {params.value}
        </Typography>
      );
    },
  },
    {
      field: "pan_number",
      headerName: "Pan Number",
      width: 140,
      renderCell: (params) => {
        return (
          <Typography color={theme.palette.primary.main} variant="body2">
            {params.value}
          </Typography>
        );
      },
    },
    {
        field: "partner",
        headerName: "Partner Name",
        width: 250,
        renderCell: (params) => {
          return (
            <Typography color={theme.palette.primary.main} variant="body2">
              {params.value}
            </Typography>
          );
        },
      },
      {
        field: "amount",
        headerName: "Loan Amount",
        width: 200,
        renderCell: (params) => {
          return (
            <Typography color={theme.palette.primary.main} variant="body2">
              {params.value}
            </Typography>
          );
        },
      },
    // {
    //   field: "loan_status",
    //   headerName: "Loan Status",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         {params.row.results.application_status === "In process" ? (
    //           <Typography
    //             textAlign={"center"}
    //             sx={{
    //               color: "navy",
    //               fontSize: "small",
    //               fontWeight: 600,
    //             }}
    //             variant="body2"
    //           >
    //             {params.row.results.application_status}
    //           </Typography>
    //         ) : params.row.results.application_status === "Eligible" ? (
    //           <Typography
    //             textAlign={"center"}
    //             sx={{
    //               color: "green",
    //               fontSize: "small",
    //               fontWeight: 600,
    //             }}
    //             variant="body2"
    //           >
    //             {params.row.results.application_status}
    //           </Typography>
    //         ) : (
    //           <Typography
    //             textAlign={"center"}
    //             sx={{
    //               color: "crimson",
    //               fontSize: "small",
    //               fontWeight: 600,
    //             }}
    //             variant="body2"
    //           >
    //             {params.row.results.application_status}
    //           </Typography>
    //         )}
    //       </>
    //     );
    //   },
    // },
    // {
    //   field: "loan_info",
    //   headerName: "Loan Info",
    //   width: 250,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Button
    //           onClick={() => openModal(params.id - 1)}
    //           sx={{
    //             backgroundColor: "#12162b",
    //             color: "#fff",
    //             fontSize: "x-small",
    //           }}
    //         >
    //           Info
    //         </Button>
    //         {Array.from(ModalStates.entries()).map(([rowIndex, isOpen]) => (
    //           <Dialog
    //             hideBackdrop={true}
    //             key={rowIndex}
    //             PaperProps={{
    //               elevation: 0, // Remove the shadow by setting elevation to 0
    //             }}
    //             open={isOpen}
    //             onClose={() => closeModal(rowIndex)}
    //           >
    //             <DialogTitle>
    //               <Typography
    //                 mb={2}
    //                 variant="body2"
    //               >
    //                 Info:
    //               </Typography>
    //             </DialogTitle>
    //             <DialogContent>
    //               <Typography
    //                 sx={{ userSelect: "text" }}
    //                 m={1}
    //                 variant="body2"
    //               >
    //                 Bank Statement URL :{" "}
    //                 {loans[rowIndex]?.results?.bank_statement_url ||
    //                   "URL Not available"}
    //               </Typography>
    //             </DialogContent>
    //           </Dialog>
    //         ))}
    //       </>
    //     );
    //   },
    // },
  ];


  useEffect(() => {
    axios.get("https://api.finurl.in/api/v1/leads/getLeads").then((res) => {
    console.log(res.data)  
    let arr = [];
      if (res.data.length > 0) {
        arr = res.data.map((ele, idx) => {
          return { ...ele, id: idx + 1 };
        });
        setRows(arr);
      } else setRows(arr);
    });
  }, []);

  return <>
   <DataGrid
        className={styles.back_data_grid}
        sx={{
          width: "95%",
          margin: "auto",
          height: "74.5vh",
        }}
        rows={rows}
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
  </>;
};

export default LeedsData;
