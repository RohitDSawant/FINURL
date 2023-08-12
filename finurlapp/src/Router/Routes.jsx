import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path='/' element={""} />
            <Route path='/' element={""} />
            <Route path='/' element={""} />
            <Route path='/' element={""} />
            <Route path='/' element={""} /> */}
      </Routes>
    </>
  );
};

export default Router;
