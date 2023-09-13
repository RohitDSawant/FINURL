import React from "react";
import styles from "./../../CSS/instantLoan.module.css";
import { Box, Grid, Typography } from "@mui/material";

const InstantLoanMid = () => {
  return (
    <>
      <section id={styles.inst_loan_b}>
        <Typography m={5} textAlign={"center"} variant={"h5"}>
          Details
        </Typography>
        <Grid
          width={"85vw"}
          alignItems={"center"}
          justifyContent={"space-around"}
          container
          margin={"auto"}
          className={styles.inst_loans_details}
          p={2}
        >
          <Grid
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            lg={5}
            xs={5}
            item
          >
            <Typography variant="body1" m={3}>
              Interest Rate
            </Typography>
            <Typography variant="body1" m={3}>
              Processing Fee
            </Typography>
            <Typography variant="body1" m={3}>
              Loan Amount Range
            </Typography>
            <Typography variant="body1" m={3}>
              Loan tenure
            </Typography>
            <Typography variant="body1" m={3}>
              Prepayment Charges
            </Typography>
            <Typography variant="body1" m={3}>
              Late Payment Charges
            </Typography>
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            lg={5}
            xs={7}
            item
          >
            <Typography variant="body1" textAlign={"right"} m={3}>
              10.49% p.a. onwards
            </Typography>
            <Typography variant="body1" textAlign={"right"} m={3}>
              Between 0.5% and 2.50% of the loan amount
            </Typography>
            <Typography variant="body1" textAlign={"right"} m={3}>
              Up to ₹50 Lakhs
            </Typography>
            <Typography variant="body1" textAlign={"right"} m={3}>
              1 to 6 years
            </Typography>
            <Typography variant="body1" textAlign={"right"} m={3}>
              2-3% of the outstanding loan amount
            </Typography>
            <Typography variant="body1" textAlign={"right"} m={3}>
              2% of the due amount
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Box p={4}>
          <Typography
            variant="subtitle2"
            width={"75vw"}
            textAlign={"center"}
            m={"auto"}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            *The interest rates and associated charges can vary from one lending
            partner to the other and are subject to policy changes of the
            partner. At FinURl, we connect you with the best Instant loan
            lending partners across India. You can compare Instant loans and
            pick from the best lenders based on your convenience and apply for
            an instant loan on terms that you deem to be favorable.
          </Typography>
        </Box>
        <Typography
          width={"90%"}
          textAlign={"center"}
          m={"auto"}
          p={2}
          mt={4}
          variant="h5"
        >
          Compare Instant Loans & Apply Online
        </Typography>
        <Typography
          width={"85vw"}
          mb={2}
          textAlign={"center"}
          m={"auto"}
          variant="subtitle2"
        >
          Compare Instant loan interest rates of some of the leading Indian
          lenders right away. Their borrowing rates are as follows:
        </Typography>
        <Grid
          container
          width={"80vw"}
          justifyContent={"center"}
          margin={"auto"}
          mt={5}
        >
          <Grid
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            item
            lg={4}
            xs={5.5}
          >
            <Typography textAlign={"center"} m={2} variant="body1">
              MONEYWIDE
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body1">
              FAIRCENT
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body1">
              PAYSENSE
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body1">
              IIFL BL
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body1">
              IIFL PL
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body1">
              PRIVO
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body1">
              FLEXI LOAN
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body1">
              NIRA
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body1">
              KREDITBEE
            </Typography>

            <Typography textAlign={"center"} m={2} variant="body1">
              TATA CAPITAL
            </Typography>
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            item
            xs={4}
            lg={3}
          >
            <Typography m={2} textAlign={"center"} variant="body1">
              ROI 14%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body1">
              ROI 15%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body1">
              ROI 14%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body1">
              ROI 12%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body1">
              ROI 12%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body1">
              ROI 15%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body1">
              ROI 12%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body1">
              ROI 14%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body1">
              ROI 15%
            </Typography>
            <Typography m={2} textAlign={"center"} variant="body1">
              ROI 12%
            </Typography>
          </Grid>
        </Grid>
        <Typography m={5} mt={10} textAlign={"center"} variant={"h5"}>
          How to Apply Instant Loan online ?
        </Typography>
        <Box width={"80vw"} display={"block"} margin={"auto"}>
          <Box
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            p={3}
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Typography variant="body1" fontWeight={600}>
              Step 1 :
            </Typography>
            <Typography variant="subtitle2">
              Fill up the application form online at the top of the page with
              your Instant and professional details.
            </Typography>
          </Box>
          <Box
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
            p={3}
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Typography variant="body1" fontWeight={600}>
              Step 2 :
            </Typography>
            <Typography variant="subtitle2">
              Choose the loan amount you desire from the lending partner
            </Typography>
          </Box>
          <Box
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            p={3}
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Typography variant="body1" fontWeight={600}>
              Step 3 :
            </Typography>
            <Typography variant="subtitle2">
              Provide all the required documents and the application form for
              verification.
            </Typography>
          </Box>
          <Box
            p={3}
            data-aos="fade-right"
            data-aos-duration="1700"
            data-aos-easing="ease-in-sine"
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Typography variant="body1" fontWeight={600}>
              Step 4 :
            </Typography>
            <Typography variant="subtitle2">
              Once your loan is approved, the amount will get disbursed to your
              bank account within 24 hours.
            </Typography>
          </Box>
        </Box>

        <Typography m={5} mt={10} textAlign={"center"} variant={"h5"}>
          Documents Required
        </Typography>
        <Box width={"75vw"} display={"block"} margin={"auto"}>
          <Typography
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            fontWeight={500}
            variant="body1"
          >
            Identity Proof
          </Typography>
          <Typography variant="subtitle2" ml={2} mt={1} mb={3}>
            PAN / Aadhaar Card, Voter ID, Passport, Driving licence
          </Typography>

          <Typography
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            fontWeight={500}
            variant="body1"
          >
            Proof of Residence
          </Typography>
          <Typography variant="subtitle2" ml={2} mt={1} mb={3}>
            Voter ID, Aadhaar card, Passport, Driving licence, Electricity bill,
            Telephone bill
          </Typography>
          <Typography
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            fontWeight={500}
            variant="body1"
          >
            Income Proof
          </Typography>
          <Typography variant="subtitle2" ml={2} mt={1} mb={3}>
            Bank statement or salary slips for the last three months
          </Typography>
          <Typography
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            fontWeight={500}
            variant="body1"
          >
            Photographs
          </Typography>
          <Typography variant="subtitle2" ml={2} mt={1} mb={3}>
            2 Passport-size photographs
          </Typography>
        </Box>
        <Typography m={5} mt={7} textAlign={"center"} variant={"h5"}>
          Where can be a Instant be used ?
        </Typography>
        <br />
        <Box width={"80%"} pb={5} margin={"auto"}>
          <Typography variant="subtitle2" m={3}>
            <Typography
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              variant="body1"
              m={1}
              fontWeight={600}
            >
              Wedding:
            </Typography>
            With the help of a marriage loan, you can take care of the seemingly
            endless list of expenses that one has to incur during weddings. Or
            you can also go about planning post-marriage trips with ease,
            knowing that you have enough money to take care of a majority of
            expenses.
          </Typography>
          <Typography variant="subtitle2" m={3}>
            <Typography
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-easing="ease-in-sine"
              variant="body1"
              m={1}
              fontWeight={600}
            >
              Travel:
            </Typography>
            You can fulfill your desire to travel to that dream destination with
            the help of a travel loan. You should easily be able to manage the
            expenses, such as the likes of flight tickets and hotel bookings,
            among others.
          </Typography>
          <Typography variant="subtitle2" m={3}>
            <Typography
              data-aos="fade-right"
              data-aos-duration="1100"
              data-aos-easing="ease-in-sine"
              variant="body1"
              m={1}
              fontWeight={600}
            >
              Home Renovation:
            </Typography>
            If you have been trying to give your home a makeover, an instant
            Instant loan can help you do just that. Courtesy of the money that
            you avail of as a Instant loan, you will be able to manage the
            necessary expenses connected to home renovation and repair.
            Moreover, you can repay it over a flexible tenure of your choice.
          </Typography>
          <Typography variant="subtitle2" m={3}>
            <Typography
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              variant="body1"
              m={1}
              fontWeight={600}
            >
              Higher Education:
            </Typography>
            A Instant loan can also be used to pay for higher education. Instant
            loans are generally taken to meet expenses such as course fees,
            travel-related costs, and lodging/accommodation charges, among
            others.
          </Typography>
          <Typography m={3}>
            <Typography
              data-aos="fade-right"
              data-aos-duration="1700"
              data-aos-easing="ease-in-sine"
              variant="body1"
              m={1}
              fontWeight={600}
            >
              Medical Emergency:
            </Typography>
            A medical emergency can lead to financial trouble. Such emergencies
            can also force you to ask for assistance from your family and
            friends. To deal with such an emergency, you can apply for a Instant
            loan for medical emergencies.
          </Typography>
          <Typography variant="subtitle2" m={3}>
            <Typography
              data-aos="fade-right"
              data-aos-duration="1900"
              data-aos-easing="ease-in-sine"
              variant="body1"
              m={1}
              fontWeight={600}
            >
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
