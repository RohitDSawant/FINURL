import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import home_loan_img from "./../Assets/Images/home_loan.png"
import Navbar from "../Components/Common/Navbar";
import styles from "./../CSS/instantLoan.module.css";
import Footer from "../Components/Common/Footer";

const HomeLoan = () => {
  return (
    <>
      <Navbar />
      <Grid
        width={"95vw"}
        margin={"auto"}
        mt={5}
        alignItems={"center"}
        justifyContent={"center"}
        container
        height={"95vh"}
      >
        <Grid item lg={6} md={6} sm={11} xs={10}>
          <img
            style={{"display":"block", "margin": "auto"}}
            className={styles.instant_loan_pic}
            src={home_loan_img}
            alt="home_loan"
          />
        </Grid>
        <Grid item lg={5} md={6} sm={10} xs={12}>
          <Box>
            <Typography mb={5} variant="h4">
              Home Loan
            </Typography>
            <Typography variant="body2">
              Home loans up to 15 crores can be obtained for a reasonable
              interest rate starting at 8.50% annually. Not only that. With a
              payback period of up to 30 years, you can tailor your repayment to
              your financial situation. Continue reading to find out more about
              home loans and how to apply for one.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography mb={5} textAlign={"center"} variant="h5">
        Home loan Details
      </Typography>
      <Typography
        textAlign={"center"}
        width={"75%"}
        margin={"auto"}
        variant="body2"
        mb={5}
      >
        On FinURL, you may locate some of the greatest housing loan companies in
        India. To choose which offer best suits you, examine the home loan
        interest rates and offers from lending partners.
      </Typography>
      <Box
        mt={7}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        margin={"auto"}
        width={"85%"}
      >
        <Box display={"flex"} justifyContent={"space-between"} gap={"20px"}>
          <Typography m={2} textAlign={"left"} variant="body2">
            Interest rate
          </Typography>
          <Typography m={2} textAlign={"right"} variant="body2">
            8.50% p.a onwards
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} gap={"20px"}>
          <Typography m={2} textAlign={"left"} variant="body2">
            Loan Amount
          </Typography>
          <Typography m={2} textAlign={"right"} variant="body2">
            Up to 15 Crores
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} gap={"20px"}>
          <Typography m={2} textAlign={"left"} variant="body2">
            Repayment tenure
          </Typography>{" "}
          <Typography m={2} textAlign={"right"} variant="body2">
            Up to 30 years
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} gap={"20px"}>
          <Typography m={2} textAlign={"left"} variant="body2">
            Processing Fee
          </Typography>
          <Typography m={2} textAlign={"right"} variant="body2">
            Between 0.5% and 6% of the loan amount
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} gap={"20px"}>
          <Typography m={2} textAlign={"left"} variant="body2">
            Part-payments
          </Typography>
          <Typography m={2} textAlign={"right"} variant="body2">
            Must be at least 2 months’ EMI or more
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} gap={"20px"}>
          <Typography m={2} textAlign={"left"} variant="body2">
            Foreclosure
          </Typography>
          <Typography m={2} textAlign={"right"} variant="body2">
            Possible after 6 -12 EMIs, as per lender’s terms
          </Typography>
        </Box>
      </Box>
      <Typography textAlign={"center"} p={1} mt={10} variant="h5">
        Compare and Apply for Home Loan Online
      </Typography>
      <Typography
        textAlign={"center"}
        width={"75%"}
        margin={"auto"}
        variant="body2"
        mt={5}
        mb={7}
      >
        Before you apply, it's a good idea to compare loan offers to be sure
        you're getting the greatest bargain. Check the loan's interest rate,
        maximum loan amount, term, and fees to make comparisons.
      </Typography>
      <TableContainer>
        <Table sx={{ width: "80%", margin: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell>Home Loan Providers</TableCell>
              <TableCell>Home Loan Providers</TableCell>
              <TableCell>Home Loan Providers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Bajaj Housing Finance Limited </TableCell>
              <TableCell>8.85% p.a. onwards</TableCell>
              <TableCell>
                <Box>
                  <Typography variant="body2" m={1}>
                    Amount - ₹2.5 Cr
                  </Typography>
                  <Typography variant="body2" m={1}>
                    Tenure - 30 Years
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>PNB Housing Finance Limited </TableCell>
              <TableCell>8.75% p.a. onwards</TableCell>
              <TableCell>
                <Box>
                  <Typography variant="body2" m={1}>
                    Amount - ₹15 Cr
                  </Typography>
                  <Typography variant="body2" m={1}>
                    Tenure - 30 Years
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ICICI Bank</TableCell>
              <TableCell>9.00% p.a. onwards</TableCell>
              <TableCell>
                <Box>
                  <Typography variant="body2" m={1}>
                    Amount - ₹ 5 Cr
                  </Typography>
                  <Typography variant="body2" m={1}>
                    Tenure - 30 Years
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Home First Finance Company </TableCell>
              <TableCell>9.50% p.a. onwards</TableCell>
              <TableCell>
                <Box>
                  <Typography variant="body2" m={1}>
                    Amount - ₹ 40 lakhs
                  </Typography>
                  <Typography variant="body2" m={1}>
                    Tenure - 20 Years
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Union Bank of India </TableCell>
              <TableCell>8.50% p.a. onwards</TableCell>
              <TableCell>
                <Box>
                  <Typography variant="body2" m={1}>
                    Amount - ₹ 15 Cr
                  </Typography>
                  <Typography variant="body2" m={1}>
                    Tenure - 30 Years
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>LIC Housing Finance </TableCell>
              <TableCell>8.65% p.a. onwards</TableCell>
              <TableCell>
                <Box>
                  <Typography variant="body2" m={1}>
                    Amount - ₹15 Cr
                  </Typography>
                  <Typography variant="body2" m={1}>
                    Tenure - 30 Years
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shubham Housing Finance </TableCell>
              <TableCell>10.90% p.a. onwards</TableCell>
              <TableCell>
                <Box>
                  <Typography variant="body2" m={1}>
                    Amount - ₹50 lakhs
                  </Typography>
                  <Typography variant="body2" m={1}>
                    Tenure - 30 Years
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shriram Housing Finance </TableCell>
              <TableCell>11.50% p.a. onwards</TableCell>
              <TableCell>
                <Box>
                  <Typography variant="body2" m={1}>
                    Amount - 10 Cr
                  </Typography>
                  <Typography variant="body2" m={1}>
                    Tenure - 25 Years
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography textAlign={"center"} mt={10} mb={5} variant={"h5"}>
        How to Apply for Home Loan
      </Typography>
      <Typography
        variant="body2"
        textAlign={"center"}
        width={"75%"}
        margin={"auto"}
        mb={2}
      >
        With advancements in the fintech industry, applying for a housing loan
        is now easier than ever. Just enter a few basic details to fill out the
        online application form and upload the required documents.
      </Typography>
      <Typography textAlign={"center"} mb={5} variant="body2">
        Here are the steps to apply for a home loan on FinURL.
      </Typography>
      <Box mt={3} width={"75%"} display={"block"} margin={"auto"}>
        <Typography mb={2} variant="body1">
          1 . Through the website:
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 Enter the required details in the application form.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 Choose your preferred lending partner.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 Estimate your borrowing power.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 Property Details.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 Get Loan Approval.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 The application will be verified, post the approval.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 While the verification process is being completed you will be asked
          to pay the processing fee online.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 Then you will receive the sanction letter after which your property
          will be evaluated.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 After a successful legal check, you will receive the home loan
          amount in your bank account.
        </Typography>
      </Box>
      <Box width={"75%"} display={"block"} margin={"auto"} mt={5}>
        <Typography mb={2} variant="body1">
          2 . Through the FinURL App:
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 Enter your personal and employment details to check the right loan
          offer.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 Select the loan offer that works best for you.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 Enter the preferred loan amount and tenure.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 Upload the required documents for verification.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 After submitting the application, the lender will conduct a
          background check.
        </Typography>
        <Typography variant="subtitle2" m={1}>
          🔹 After verification, a representative from your chosen lender will
          contact you.
        </Typography>
      </Box>
      <Typography textAlign={"center"} mt={10} p={1} mb={3} variant={"h5"}>
        Documents Required for Home Loan
      </Typography>
      <Typography
        variant="body2"
        textAlign={"center"}
        width={"75%"}
        margin={"auto"}
        mb={7}
      >
        Here is the list of important documents required while applying:
      </Typography>
      <Box width={"75%"} display={"block"} pb={5} margin={"auto"}>
        <Box
          display={"flex"}
          alignItems={"baseline"}
          margin={"auto"}
          gap={"10px"}
          width={"90vw"}
        >
          <Typography variant="body2" mb={1} fontWeight={600}>
            1. Indentity proof :
          </Typography>

          <Typography variant="subtitle2">
            PAN Card, Aadhaar Card, Driving License, Voter ID.
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"baseline"}
          gap={"10px"}
          width={"90vw"}
        >
          <Typography variant="body2" mb={1} mt={2} fontWeight={600}>
            2. Address proof :
          </Typography>
          <Typography variant="subtitle2">
            Electricity bill, Valid Passport, Aadhaar Card, Driving License,
            Voter ID.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body2" mb={1} mt={2} fontWeight={600}>
            3. Income proof :
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography
            mb={1}
            ml={2}
            sx={{ textDecoration: "underline" }}
            fontWeight={500}
            variant="body2"
            color={"gray"}
          >
            For Salaried Applicant / Co-Applicant
          </Typography>
          <Box ml={3}>
            <Typography variant="subtitle2">
              🔹Last 3 months Salary Slips.
            </Typography>
            <Typography variant="subtitle2">
              🔹 A Copy of Form 16 or Income Tax Return (ITR) of last two years.
            </Typography>
          </Box>
        </Box>
        <Box mb={2}>
          <Typography
            mb={1}
            ml={2}
            sx={{ textDecoration: "underline" }}
            fontWeight={500}
            variant="body2"
            color={"gray"}
          >
            For Self- Employed Applicant / Co-Applicant
          </Typography>
          <Box ml={3}>
            <Typography variant="subtitle2">
              🔹Income Tax Returns of last 3 years.
            </Typography>
            <Typography variant="subtitle2">
              🔹 Qualification Certificate for Doctors, CA and other
              Professionals.
            </Typography>
            <Typography variant="subtitle2">
              🔹 Audited Balance Sheet from Certified CA.
            </Typography>
            <Typography variant="subtitle2">
              🔹 Profit and Loss Statement of Previous 3 Years.
            </Typography>
            <Typography variant="subtitle2">
              🔹 Business Licence Details with Address Proof and TDS Certificate
              .
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default HomeLoan;
