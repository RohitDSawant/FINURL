import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import InstantLoan from "../Pages/InstantLoan";
import EligiblityEntrypoints from "../Components/EntryPoints/EligiblityEntrypoints";
import ApplicationForLoan from "../Components/EntryPoints/ApplicationForLoan";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/instant-loan" element={<InstantLoan />} />
        <Route path="/:bank/dedupe" element={<EligiblityEntrypoints />} />
        <Route path="/application" element={<ApplicationForLoan />} />
        {/*     <Route path='/' element={""} />
            <Route path='/' element={""} /> */}
      </Routes>
    </>
  );
};

export default Router;
