import { Box } from '@mui/material'
import React from 'react'
import comingSoon from "./../../Assets/Images/coming_soon.jpg"

const CoomingSoon = () => {
  return (
    <>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
           <img height={"150vh"} src={comingSoon} alt="" />
        </Box>
    </>
  )
}

export default CoomingSoon