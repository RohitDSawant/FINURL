import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import InstantLoan from "../Pages/InstantLoan";
import EligiblityEntrypoints from "../Components/EntryPoints/EligiblityEntrypoints";
import ApplicationForLoan from "../Components/EntryPoints/ApplicationForLoan";
import AuthenticationCarousel from "../Components/Common/AuthenticationCarousel";
import Dashboard from "../Pages/Dashboard";
import ContactUs from "../Pages/ContactUs";
import PersonalLoan from "../Pages/PersonalLoan";
import BusinessLoan from "../Pages/BusinessLoan";
import ComingSoon from "../Pages/ComingSoon";
import ApplicationProtectedRoute from "../Components/Common/ApplicationRouteProtection";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/instant-loan" element={<InstantLoan />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/business-loan" element={<BusinessLoan />} />
        <Route path="/:bank/dedupe" element={<EligiblityEntrypoints />} />
        <Route
          path="/application"
          element={
            <ApplicationProtectedRoute>
              <ApplicationForLoan />
            </ApplicationProtectedRoute>
          }
        />
        <Route path="/authentication" element={<AuthenticationCarousel />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </>
  );
};

export default Router;
