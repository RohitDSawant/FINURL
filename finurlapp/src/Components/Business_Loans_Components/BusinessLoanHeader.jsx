import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/instantLoan.module.css";
import business_loan from "./../../Assets/Images/business_loan.jpg";

const BusinessLoanHeader = () => {
  return (
    <>
      <section id={styles.inst_loan_a}>
        <Box width={"85%"} margin={"auto"}>
          <Grid container spacing={1} alignItems={"center"}>
            <Grid item lg={8}>
              <img
                className={styles.instant_loan_pic}
                src={business_loan}
                alt=""
              />
            </Grid>
            <Grid item lg={4}>
              <Typography mb={5} variant="h5">
                Business Loan
              </Typography>
              <Typography className="para" variant="body2">
                A new or established business may employ a business loan, which
                is an unsecured loan. A business loan is a terrific option
                whether you need money for employing new employees, growing your
                firm to new locations, investing in cutting-edge equipment, or
                paying off all of your debts. These days, a large number of
                banks and non-banking financial institutions (NBFI) provide
                speedy business loans with affordable interest rates. You can
                benefit from the best-curated deals and get an immediate
                business loan approval if you meet the eligibility requirements
                and have the necessary documentation in order.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default BusinessLoanHeader;
