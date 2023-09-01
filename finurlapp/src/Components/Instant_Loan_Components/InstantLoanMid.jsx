import React from "react";
import styles from "./../../CSS/instantLoan.module.css";
import { Box, Grid, Typography } from "@mui/material";

const InstantLoanMid = () => {
  return (
    <>
      <section id={styles.inst_loan_b}>
        <Typography m={5} textAlign={"center"} variant={"h4"}>
          Details
        </Typography>
        <Grid
          width={"70%"}
          alignItems={"center"}
          justifyContent={"space-around"}
          container
          margin={"auto"}
          className={styles.inst_loans_details}
          p={2}
        >
          <Grid lg={5} xs={4} item>
            <Typography m={3}>Interest Rate</Typography>
            <Typography m={3}>Processing Fee</Typography>
            <Typography m={3}>Loan Amount Range</Typography>
            <Typography m={3}>Loan tenure</Typography>
            <Typography m={3}>Prepayment Charges</Typography>
            <Typography m={3}>Late Payment Charges</Typography>
          </Grid>
          <Grid item xs={5} lg={2}></Grid>
          <Grid lg={5}xs={5} item>
            <Typography textAlign={"right"} m={3}>
              10.49% p.a. onwards
            </Typography>
            <Typography textAlign={"right"} m={3}>
              Between 0.5% and 2.50% of the loan amount
            </Typography>
            <Typography textAlign={"right"} m={3}>
              Up to ₹50 Lakhs
            </Typography>
            <Typography textAlign={"right"} m={3}>
              1 to 6 years
            </Typography>
            <Typography textAlign={"right"} m={3}>
              2-3% of the outstanding loan amount
            </Typography>
            <Typography textAlign={"right"} m={3}>
              2% of the due amount
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Box p={4}>
          <Typography
            variant="body2"
            width={"65%"}
            textAlign={"center"}
            m={"auto"}
          >
            *The interest rates and associated charges can vary from one lending
            partner to the other and are subject to policy changes of the
            partner. At FinURl, we connect you with the best Instant loan
            lending partners across India. You can compare Instant loans and
            pick from the best lenders based on your convenience and apply for
            an instant loan on terms that you deem to be favorable.
          </Typography>
        </Box>
        <Typography textAlign={"center"} m={"auto"} p={2} mt={4} variant="h4">
          Compare Instant Loans & Apply Online
        </Typography>
        <Typography mb={2} textAlign={"center"} m={"auto"} variant="body2">
          Compare Instant loan interest rates of some of the leading Indian
          lenders right away. Their borrowing rates are as follows:
        </Typography>
        <Grid container width={"70%"} m={"auto"} mt={5}>
          <Grid item lg={6} xs={5}>
            <Typography textAlign={"center"} m={2} variant="body2">
              MONEYWIDE
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body2">
              FAIRCENT
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body2">
              PAYSENSE
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body2">
              IIFL BL
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body2">
              IIFL PL
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body2">
              PRIVO
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body2">
              FLEXI LOAN
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body2">
              NIRA
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body2">
              KREDITBEE
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body2">
              TATA CAPITAL
            </Typography>
          </Grid>
          <Grid item xs={5} lg={3}>
            <Typography m={2} textAlign={"center"} variant="body2">
              ROI 14%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body2">
              ROI 15%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body2">
              ROI 14%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body2">
              ROI 12%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body2">
              ROI 12%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body2">
              ROI 15%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body2">
              ROI 12%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body2">
              ROI 14%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body2">
              ROI 15%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body2">
              ROI 12%
            </Typography>
          </Grid>
        </Grid>
        <Typography m={5} mt={10} textAlign={"center"} variant={"h4"}>
          How to Apply Instant Loan online ?
        </Typography>
        <Box width={"90vw"} display={"flex"} flexDirection={"column"} alignItems={""} margin={"auto"}>
          <Box p={3} display={"flex"} alignItems={"center"} gap={"20px"}>
            <Typography variant="body1" fontWeight={600}>
              Step 1 :
            </Typography>
            <Typography variant="body2">
              Fill up the application form online at the top of the page with
              your Instant and professional details.
            </Typography>
          </Box>
          <Box p={3} display={"flex"} alignItems={"center"} gap={"20px"}>
            <Typography variant="body1" fontWeight={600}>
              Step 2 :
            </Typography>
            <Typography variant="body2">
              {" "}
              Choose the loan amount you desire from the lending partner
            </Typography>
          </Box>
          <Box p={3} display={"flex"} alignItems={"center"} gap={"20px"}>
            <Typography variant="body1" fontWeight={600}>
              Step 3 :
            </Typography>
            <Typography variant="body2">
              Provide all the required documents and the application form for
              verification.
            </Typography>
          </Box>
          <Box p={3} display={"flex"} alignItems={"center"} gap={"20px"}>
            <Typography variant="body1" fontWeight={600}>
              Step 4 :
            </Typography>
            <Typography variant="body2">
              Once your loan is approved, the amount will get disbursed to your
              bank account within 24 hours.
            </Typography>
          </Box>
        </Box>

        <Typography m={5} mt={10} textAlign={"center"} variant={"h4"}>
          Documents Required
        </Typography>
        <Grid
          justifyContent={"space-between"}
          container
          width={"70%"}
          margin={"auto"}
        >
          <Grid lg={4} xs={2} item>
            <Typography textAlign={"center"} p={2} variant="body2">
              Identity Proof
            </Typography>
            <Typography textAlign={"center"} p={2} variant="body2">
              Proof of Residence
            </Typography>
            <Typography textAlign={"center"} p={2} variant="body2">
              Income Proof
            </Typography>
            <Typography textAlign={"center"} p={2} variant="body2">
              Photographs
            </Typography>
          </Grid>
          <Grid lg={6} xs={8} item>
            <Typography textAlign={"center"} p={2} variant="body2">
              PAN / Aadhaar Card, Voter ID, Passport, Driving licence
            </Typography>
            <Typography textAlign={"center"} p={2} variant="body2">
              Voter ID, Aadhaar card, Passport, Driving licence, Electricity
              bill, Telephone bill
            </Typography>
            <Typography textAlign={"center"} p={2} variant="body2">
              Bank statement or salary slips for the last three months
            </Typography>
            <Typography textAlign={"center"} p={2} variant="body2">
              2 Passport-size photographs
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Typography m={5} mt={7} textAlign={"center"} variant={"h4"}>
          Where can be a Instant be used ?
        </Typography>
        <br />
        <Box width={"80%"} margin={"auto"}>
          <Typography variant="body2" m={3}>
            <Typography variant="body1" m={1} fontWeight={600}>
              Wedding:
            </Typography>{" "}
            With the help of a marriage loan, you can take care of the seemingly
            endless list of expenses that one has to incur during weddings. Or
            you can also go about planning post-marriage trips with ease,
            knowing that you have enough money to take care of a majority of
            expenses.
          </Typography>
          <Typography variant="body2" m={3}>
            <Typography variant="body1" m={1} fontWeight={600}>
              Travel:
            </Typography>
            You can fulfill your desire to travel to that dream destination with
            the help of a travel loan. You should easily be able to manage the
            expenses, such as the likes of flight tickets and hotel bookings,
            among others.
          </Typography>
          <Typography variant="body2" m={3}>
            <Typography variant="body1" m={1} fontWeight={600}>
              Home Renovation:
            </Typography>
            If you have been trying to give your home a makeover, an instant
            Instant loan can help you do just that. Courtesy of the money that
            you avail of as a Instant loan, you will be able to manage the
            necessary expenses connected to home renovation and repair.
            Moreover, you can repay it over a flexible tenure of your choice.
          </Typography>
          <Typography variant="body2" m={3}>
            <Typography variant="body1" m={1} fontWeight={600}>
              Higher Education:
            </Typography>
            A Instant loan can also be used to pay for higher education. Instant
            loans are generally taken to meet expenses such as course fees,
            travel-related costs, and lodging/accommodation charges, among
            others.
          </Typography>
          <Typography variant="body2" m={3}>
            <Typography variant="body1" m={1} fontWeight={600}>
              Medical Emergency:
            </Typography>
            A medical emergency can lead to financial trouble. Such emergencies
            can also force you to ask for assistance from your family and
            friends. To deal with such an emergency, you can apply for a Instant
            loan for medical emergencies.
          </Typography>
          <Typography variant="body2" m={3}>
            <Typography variant="body1" m={1} fontWeight={600}>
              Buying Expensive Gadgets:
            </Typography>
            Consumer durable loans, yet another type of Instant loan, will
            provide you with the funds to purchase the gadgets you desire. You
            can use a consumer durable loan to purchase that TV you have always
            wanted, that mobile phone you have had your eyes on, or even that
            speaker system that will turn your home into a happening party area.
          </Typography>
        </Box>
      </section>
    </>
  );
};

export default InstantLoanMid;
