import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/instantLoan.module.css";
import business_loan from "./../../Assets/Images/business_loan.jpg";

const BusinessLoanHeader = () => {
  return (
    <>
      <section id={styles.inst_loan_a}>
        <Grid
          height={"90vh"}
          width={"85vw"}
          container
          margin={"auto"}
          // justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Grid
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            item
            lg={5}
            md={5}
            sm={7}
          >
            <img
              className={styles.business_loan_pic}
              src={business_loan}
              alt=""
            />
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            item
            lg={5}
            md={5}
            sm={5}
          >
            <Typography mb={5} variant="h5">
              Business Loan
            </Typography>
            <Typography className="para" variant="body2">
              A new or established business may employ a business loan, which is
              an unsecured loan. A business loan is a terrific option whether
              you need money for employing new employees, growing your firm to
              new locations, investing in cutting-edge equipment, or paying off
              all of your debts. These days, a large number of banks and
              non-banking financial institutions (NBFI) provide speedy business
              loans with affordable interest rates. 
              {/* You can benefit from the
              best-curated deals and get an immediate business loan approval if
              you meet the eligibility requirements and have the necessary
              documentation in order. */}
            </Typography>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default BusinessLoanHeader;
