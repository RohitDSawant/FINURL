import React from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./../CSS/instantLoan.module.css";
import business_loan from "./../Assets/Images/business_loan.svg";

const BusinessLoan = () => {
  return (
    <>
      <Navbar />
      <Grid
        height={"95vh"}
        width={"90vw"}
        container
        margin={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          item
          lg={5}
          md={5}
          sm={11}
        >
          <img

            className={styles.business_loan_pic}
            src={business_loan}
            alt=""
          />
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          item
          lg={5}
          md={5}
          sm={12}
        >
          <Typography mb={5} variant="h4">
            Business Loan
          </Typography>
          <Typography className="para" variant="body2">
            A new or established business may employ a business loan, which is
            an unsecured loan. A business loan is a terrific option whether you
            need money for employing new employees, growing your firm to new
            locations, investing in cutting-edge equipment, or paying off all of
            your debts. These days, a large number of banks and non-banking
            financial institutions (NBFI) provide speedy business loans with
            affordable interest rates.
            {/* You can benefit from the
              best-curated deals and get an immediate business loan approval if
              you meet the eligibility requirements and have the necessary
              documentation in order. */}
          </Typography>
        </Grid>
      </Grid>
      <Typography m={5} textAlign={"center"} variant={"h5"}>
        Business Loan Fees & Interest Rates
      </Typography>
      <Grid
        width={"90vw"}
        alignItems={"center"}
        justifyContent={"space-around"}
        container
        margin={"auto"}
        className={styles.inst_loans_details}
        p={2}
      >
        <Grid
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          lg={5}
          md={5}
          sm={3}
          xs={3.8}
          item
        >
          <Typography variant="body2" m={3}>
            Interest Rate
          </Typography>
          <Typography variant="body2" m={3}>
            Processing Fee
          </Typography>
          <Typography variant="body2" m={3}>
            Pre-Closure Charges
          </Typography>
          <Typography variant="body2" m={3}>
            Eligibility Criteria
          </Typography>
          <Typography variant="body2" m={3}>
            Loan Amount
          </Typography>
          <Typography variant="body2" m={3}>
            Instalments
          </Typography>
        </Grid>
        <Grid
          lg={5}
          md={5}
          sm={5.5}
          xs={8.2}
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          item
        >
          <Typography variant="body2" textAlign={"right"} m={3}>
            Sataring from 12% p.a
          </Typography>
          <Typography variant="body2" textAlign={"right"} m={3}>
            2 - 3 % of the loan amount
          </Typography>
          <Typography variant="body2" textAlign={"right"} m={3}>
            Upto 72 months
          </Typography>
          <Typography variant="body2" textAlign={"right"} m={3}>
            4% of principal outstanding amount + GST
          </Typography>
          <Typography variant="body2" textAlign={"right"} m={3}>
            ₹ 90,000 turnover for 3 months
          </Typography>
          <Typography variant="body2" textAlign={"right"} m={3}>
            ₹ 25,000 to ₹50 Lakhs
          </Typography>
          <Typography variant="body2" textAlign={"right"} m={3}>
            Flexible Monthly/Bi-weekly
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Box p={4}>
        <Typography
          variant="subtitle2"
          width={"85vw"}
          textAlign={"center"}
          m={"auto"}
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          *The interest rates and associated charges can vary from one lending
          partner to the other and are subject to policy changes of the partner.
          <br /> We at FinURL can put you in touch with the best personal loan
          lenders in India. You can compare personal loans, choose the best
          lenders based on convenience, and submit an application for an
          immediate loan with conditions you find agreeable.
        </Typography>
      </Box>
      <Typography textAlign={"center"} m={"auto"} p={2} mt={4} variant="h5">
        Compare Instant Loans & Apply Online
      </Typography>
      <Typography
        p={1}
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
        width={"90vw"}
        justifyContent={"center"}
        m={"auto"}
        mt={5}
      >
        <Grid
          lg={3}
          md={5.5}
          sm={4}
          xs={5}
          item
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <Typography
            m={3}
            textAlign={"center"}
            fontWeight={600}
            variant="body2"
          >
            Our Partners
          </Typography>
          <Typography textAlign={"center"} m={2} variant="subtitle2">
            Bajaj Finance Limited
          </Typography>

          <Typography textAlign={"center"} m={2} variant="subtitle2">
            Lendingkart Finance Limited
          </Typography>

          <Typography textAlign={"center"} m={2} variant="subtitle2">
            KreditBee
          </Typography>

          <Typography textAlign={"center"} m={2} variant="subtitle2">
            FlexiLoans
          </Typography>

          <Typography textAlign={"center"} m={2} variant="subtitle2">
            IIFL
          </Typography>

          <Typography textAlign={"center"} m={2} variant="subtitle2">
            InCred
          </Typography>

          <Typography textAlign={"center"} m={2} variant="subtitle2">
            AYE Finance
          </Typography>

          <Typography textAlign={"center"} m={2} variant="subtitle2">
            Indifi
          </Typography>
        </Grid>
        <Grid item lg={3} md={4} sm={3.5} xs={4.5}>
          <Typography
            fontWeight={600}
            m={3}
            textAlign={"center"}
            variant="body2"
          >
            Interest Rate Range
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            18% onwards
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            15% onwards
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            15% onwards
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            12% onwards
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            16.50% onwards
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            20% onwards
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            28% onwards
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            16% onwards
          </Typography>
        </Grid>
        <Grid
          lg={3}
          md={2}
          sm={3.5}
          xs={2.5}
          item
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <Typography
            m={3}
            fontWeight={600}
            textAlign={"center"}
            variant="body2"
          >
            Maximum Tenure
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            72 months
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            36 months
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            9 months
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            36 months
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            60 months
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            48 months
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            36 months
          </Typography>
          <Typography m={2} textAlign={"center"} variant="body2">
            36 months
          </Typography>
        </Grid>
      </Grid>
      <Typography m={5} mt={10} textAlign={"center"} variant={"h5"}>
        How to Apply Business Loan online ?
      </Typography>
      <Box width={"85vw"} display={"block"} margin={"auto"}>
        <Box
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          p={2}
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Typography variant="body2" fontWeight={600}>
            Step 1 :
          </Typography>
          <Typography variant="subtitle2">
            Visit the Online Platform: Visit the FinURL website, select the
            category titled ‘Business Loans’ in the ‘Loans’ section and click on
            ‘Apply Now.’
          </Typography>
        </Box>
        <Box
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-sine"
          p={2}
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Typography variant="body2" fontWeight={600}>
            Step 2 :
          </Typography>
          <Typography variant="subtitle2">
            Online Form Filling: Fill in your personal and business details.
          </Typography>
        </Box>
        <Box
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-easing="ease-in-sine"
          p={2}
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Typography variant="body2" fontWeight={600}>
            Step 3 :
          </Typography>
          <Typography variant="subtitle2">
            Select Your Lending Partner: From the list of loan offers, select a
            business loan from your preferred partner.
          </Typography>
        </Box>
        <Box
          data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-easing="ease-in-sine"
          p={2}
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Typography variant="body2" fontWeight={600}>
            Step 4 :
          </Typography>
          <Typography variant="subtitle2">
            Specify Loan Details: Choose your preferred loan amount and
            repayment tenure.
          </Typography>
        </Box>
        <Box
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
          p={2}
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Typography variant="body2" fontWeight={600}>
            Step 5 :
          </Typography>
          <Typography variant="subtitle2">
            Required Documents: Upload the scanned copies of all the required
            documents.
          </Typography>
        </Box>
        <Box
          data-aos="fade-right"
          data-aos-duration="1700"
          data-aos-easing="ease-in-sine"
          p={2}
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Typography variant="body2" fontWeight={600}>
            Step 6 :
          </Typography>
          <Typography variant="subtitle2">
            Approval & Disbursal: Submit your application; post verification and
            approval, the money would be disbursed to your account.
          </Typography>
        </Box>
      </Box>

      <Typography m={5} mt={10} textAlign={"center"} variant={"h5"}>
        Documents Required
      </Typography>
      <Box width={"70%"} display={"block"} margin={"auto"}>
        <Typography
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          p={1}
          variant="body2"
        >
          PAN / Aadhaar Card, Voter ID, Passport, Driving licence as identity
          proof.
        </Typography>
        <Typography
          p={1}
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-sine"
          variant="body2"
        >
          Aadhaar card/passport/utility bills/lease agreement as address proof.
        </Typography>
        <Typography
          p={1}
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-easing="ease-in-sine"
          variant="body2"
        >
          Bank statement for the last 6 months
        </Typography>
        <Typography
          p={1}
          data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-easing="ease-in-sine"
          variant="body2"
        >
          ITR form in addition with certified copies with details such as income
          computation, balance sheet, and Profit and Loss (P&L) statement for
          the last 2 years
        </Typography>
        <Typography
          p={1}
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
          variant="body2"
        >
          ITR form in addition with certified copies with details such as income
          computation, balance sheet, and Profit and Loss (P&L) statement for
          the last 2 years
        </Typography>
        <Typography
          p={1}
          data-aos="fade-right"
          data-aos-duration="1700"
          data-aos-easing="ease-in-sine"
          variant="body2"
        >
          Certified copy of Memorandum and Articles of Association
        </Typography>
      </Box>
      <br />
      <Typography m={5} mt={7} textAlign={"center"} variant={"h5"}>
        Reasons To Apply For a Business Loan
      </Typography>
      <br />
      <Typography
        variant="subtitle2"
        width={"75%"}
        display={"block"}
        margin={"auto"}
        mb={5}
        textAlign={"center"}
      >
        If your company needs money and you want to apply for a quick business
        loan, it's simple to do so online right now. Here are some reasons why
        this type of funding can be the best option if you're unsure about
        obtaining a business loan for your project.
      </Typography>
      <Box width={"80%"} pb={5} margin={"auto"}>
        <Typography variant="subtitle2" m={3}>
          <Typography
            variant="body1"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            m={1}
            fontWeight={600}
          >
            Increased Working Capital:
          </Typography>
          The cash on hand to cover your company's immediate liabilities is
          referred to as working capital. For just this aim, there are
          specialised working capital business loans available. You can increase
          your company's liquidity and conveniently meet your working capital
          needs by taking use of this service.
        </Typography>
        <Typography variant="subtitle2" m={3}>
          <Typography
            variant="body1"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
            m={1}
            fontWeight={600}
          >
            Business Expansion:
          </Typography>
          You will eventually need to extend your firm in several ways as you
          scale it up. This involves introducing new goods or services, starting
          a new branch, buying new machinery and equipment, and leasing new
          office space. Business loans might assist you with the additional
          financing needed for all of this.
        </Typography>
        <Typography variant="subtitle2" m={3}>
          <Typography
            variant="body1"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-easing="ease-in-sine"
            m={1}
            fontWeight={600}
          >
            Credit Building:
          </Typography>
          Building future credit might also be aided by business financing. You
          raise your company credit score (or personal credit score, in the
          event of a sole proprietorship or similar entity) each time you pay
          the EMIs due on your business loan on time. You will find it simpler
          to get more credit facilities for your company in the future as a
          result.
        </Typography>
        <Typography variant="subtitle2" m={3}>
          <Typography
            variant="body1"
            data-aos="fade-right"
            data-aos-duration="1300"
            data-aos-easing="ease-in-sine"
            m={1}
            fontWeight={600}
          >
            Higher Education:
          </Typography>
          A Instant loan can also be used to pay for higher education. Instant
          loans are generally taken to meet expenses such as course fees,
          travel-related costs, and lodging/accommodation charges, among others.
        </Typography>
        <Typography variant="subtitle2" m={3}>
          <Typography
            variant="body1"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            m={1}
            fontWeight={600}
          >
            Improved Business Marketing:
          </Typography>
          Another area of business that necessitates a big expenditure is
          marketing. You need a strong marketing strategy if you want to reach
          your target market and increase lead conversion. You may be able to
          acquire the money you need through business loans to increase your
          company's consumer base and promote it more effectively.
        </Typography>
        <Typography variant="subtitle2" m={3}>
          <Typography
            variant="body1"
            data-aos="fade-right"
            data-aos-duration="1700"
            data-aos-easing="ease-in-sine"
            m={1}
            fontWeight={600}
          >
            Upgradation of Your Workforce:
          </Typography>
          You can also increase and/or modernise your personnel with a business
          loan to accommodate your company's expanding needs. You can use the
          borrowed money to pay for new hires or raise salaries for current
          workers when they are due. Additionally, it can help pay for the
          necessary retraining or upskilling of your personnel.
        </Typography>
      </Box>

      <Footer />
    </>
  );
};

export default BusinessLoan;
