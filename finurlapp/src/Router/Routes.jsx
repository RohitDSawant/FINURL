import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import InstantLoan from "../Pages/InstantLoan";
import EligiblityEntrypoints from "../Components/EntryPoints/EligiblityEntrypoints";
import ApplicationForLoan from "../Components/EntryPoints/ApplicationForLoan";
import AuthenticationCarousel from "../Components/Common/AuthenticationCarousel";
import Dashboard from "../Pages/Dashboard";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/instant-loan" element={<InstantLoan />} />
        <Route path="/:bank/dedupe" element={<EligiblityEntrypoints />} />
        <Route path="/application" element={<ApplicationForLoan />} />
        <Route path="/authentication" element={<AuthenticationCarousel />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Router;
