import React from "react";
import styles from "./../../../CSS/dashboard.module.css";
import DashboardNavbar from "../DashboardNavbar";
import GraphSection from "./GraphSection";
import DashboardHeader from "./DashboardHeader";

const ActualDashboardSection = () => {
  return (
    <>
      <DashboardNavbar />
      <section id={styles.dashboard_main}>
        <DashboardHeader />
        <GraphSection />
      </section>
    </>
  );
};

export default ActualDashboardSection;
