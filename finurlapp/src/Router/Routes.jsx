import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import InstantLoan from "../Pages/InstantLoan";
import EligiblityEntrypoints from "../Components/EntryPoints/EligiblityEntrypoints";
import StashfinApplication from "../Components/EntryPoints/StashfinApplication";
import AuthenticationCarousel from "../Components/Common/AuthenticationCarousel";
import Dashboard from "../Pages/Dashboard";
import ContactUs from "../Pages/ContactUs";
import PersonalLoan from "../Pages/PersonalLoan";
import BusinessLoan from "../Pages/BusinessLoan";
import ComingSoon from "../Pages/ComingSoon";
import HomeLoan from "../Pages/HomeLoan";
import PrefrApplication from "../Components/EntryPoints/PrefrApplication";
import GetStarted from "../Pages/GetStarted";
import AdminDashboard from "../Components/Admin_Dashboard/AdminDashboard";
import AboutUs from "../Pages/AboutUs";
import FinancialLiteracy from "../Pages/FinancialLiteracy";
import IncLoanBalance from "../Pages/IncLoanBalance";
import CreditScoreDrop from "../Pages/CreditScoreDrop";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import ProtectResetRoute from "../Components/Common/ProtectResetRoute";
import AgentData from "../Components/Admin_Dashboard/Leeds_Data/AgentData";
import ProtectedRoute from "../Components/Common/ProtectedRoute";
import FoundPartners from "../Pages/FoundPartners";
import StashfinApplicationProtectedRoute from "../Components/Common/StashfinApplicationProtectedRoute";
import PrefrApplicationProtectedRoute from "../Components/Common/PreferApplicationProtectedRoute";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/instant-loan" element={<InstantLoan />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/business-loan" element={<BusinessLoan />} />
        <Route path="/home-loan" element={<HomeLoan />} />

        <Route path="/:bank/dedupe" element={<EligiblityEntrypoints />} />
        <Route
          path="/stashfin/application"
          element={
            <StashfinApplicationProtectedRoute>
              <StashfinApplication />
            </StashfinApplicationProtectedRoute>
          }
        />
        <Route
          path="/prefr/application"
          element={
            <PrefrApplicationProtectedRoute>
              <PrefrApplication />
            </PrefrApplicationProtectedRoute>
          }
        />
        <Route path="/authentication" element={<AuthenticationCarousel />} />

        <Route
          path="/authentication/referral/:referedBy"
          element={<AuthenticationCarousel />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/financial-literacy" element={<FinancialLiteracy />} />
        <Route path="/increase-loan-balance" element={<IncLoanBalance />} />
        <Route path="/credit-score-drop" element={<CreditScoreDrop />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-password"
          element={
            <ProtectResetRoute>
              <ResetPassword />
            </ProtectResetRoute>
          }
        />
        <Route
          path="/agent/:agent"
          element={
            <ProtectedRoute>
              <AgentData />
            </ProtectedRoute>
          }
        />
        <Route path="/found-partners" element={<FoundPartners />} />
      </Routes>
    </>
  );
};

export default Router;
