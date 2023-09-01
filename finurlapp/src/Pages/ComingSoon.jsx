import React from "react";
import Navbar from "../Components/Common/Navbar";
import CoomingSoon from "../Components/Carousel_Components/ComingSoon";
import { Box } from "@mui/material";

const ComingSoon = () => {
  return (
    <>
      <Navbar />
      <Box mt={35}>
      <CoomingSoon />
      </Box>
    </>
  );
};

export default ComingSoon;
