import React from "react";
import styles from "./../CSS/homepage.module.css";
import Navbar from "../Components/Common/Navbar";
import { Box, Grid, Typography } from "@mui/material";
import credit_report from "./../Assets/Images/credit_report.svg";
import credit_world from "./../Assets/Images/financial_world.svg";
import debt_control from "./../Assets/Images/debt_cons.svg";
import Footer from "../Components/Common/Footer";
import inquiry from "./../Assets/Images/inquiry.svg";
import score_drop from "./../Assets/Images/score_drop.svg";
import loan_growth from "./../Assets/Images/loan_growth.svg";
import { Link } from "react-router-dom";

const FinancialLiteracy = () => {
  return (
    <>
      <Navbar />
      <Box pt={10}>
        <Typography p={2} mt={1} textAlign={"center"} variant="h5" fontWeight={500}>
          Financial Terms you should know
        </Typography>
        <Typography
          textAlign={"center"}
          mt={1}
          p={1.5}
          mb={1}
          fontWeight={500}
          variant="subtitle2"
        >
          A lot of people can find the acronyms and phrases used in the
          financial industry strange. To help you better understand money and
          credit, we have put up a dictionary of financial words.
        </Typography>
      </Box>
      <Grid
        container
        width={"90vw"}
        justifyContent={"space-around"}
        alignItems={"center"}
        m="auto"
        mt={3}
      >
        <Grid lg={4} md={6} sm={10} xs={10}>
          <img
            className={styles.financial_literacy_img}
            style={{ display: "block", margin: "auto" }}
            src={credit_world}
            alt="financial_world"
          />
        </Grid>
        <Grid lg={7} md={6} sm={12} xs={12} mt={2}>
          <Typography variant="subtitle2" mb={0.5} fontWeight={600}>
            401(k):
          </Typography>
          <Typography variant="body2" mb={1} fontSize={"x-small"}>
            Depending on the options available in your plan, you can contribute
            money to this account sponsored by your company either before or
            after taxes for retirement purposes.
          </Typography>

          <Typography variant="subtitle2" mb={0.5} fontWeight={600}>
            AnnualCreditReport.com:
          </Typography>
          <Typography variant="body2" mb={1} fontSize={"x-small"}>
            The sole website allowed to offer free credit reports under federal
            law. Equifax, Experian, and TransUnion, the three credit reporting
            bureaus, are required to provide one free credit report to every
            American every year.
          </Typography>

          <Typography variant="subtitle2" mb={0.5} fontWeight={600}>
            Amortization:
          </Typography>
          <Typography variant="body2" mb={1} fontSize={"x-small"}>
            An amortisation schedule may be provided to you when applying for a
            mortgage or auto loan. This schedule illustrates how your loan will
            be gradually repaid over time.
          </Typography>

          <Typography variant="subtitle2" mb={0.5} fontWeight={600}>
            APR:
          </Typography>
          <Typography variant="body2" mb={1} fontSize={"x-small"}>
            APR stands for annual percentage rate. It's the interest rate you
            pay when you get a loan or what you earn on an investment in one
            year, including fees.
          </Typography>

          <Typography variant="subtitle2" mb={0.5} fontWeight={600}>
            APY:
          </Typography>
          <Typography variant="body2" mb={1} fontSize={"x-small"}>
            APY stands for annual percentage yield. It's similar to APR, except
            it takes into account the compound interest you earn over a year.
            APY is higher than APR because it includes the interest you've
            already accumulated in its calculations. Banks advertise APY for
            savings accounts and APR for loans.
          </Typography>

          <Typography variant="subtitle2" mb={0.5} fontWeight={600}>
            ARM:
          </Typography>
          <Typography variant="body2" mb={1} fontSize={"x-small"}>
            ARM stands for an adjustable-rate mortgage. Your interest rate
            starts at a certain APR, but it can go up (sometimes down) over
            time, which could make them riskier compared to fixed-rate
            mortgages.
          </Typography>

          <Typography variant="subtitle2" mb={0.5} fontWeight={600}>
            Cash flow:
          </Typography>
          <Typography variant="body2" mb={1} fontSize={"x-small"}>
            The net amount of cash and cash equivalents moving into and out of a
            business.
          </Typography>

          <Typography variant="subtitle2" mb={0.5} fontWeight={600}>
            Capital gains (and losses):
          </Typography>
          <Typography variant="body2" mb={1} fontSize={"x-small"}>
            A captain gain is when you sell something for more money than you
            paid for it. A capital loss occurs when you sell something for less
            than you paid for it.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"90vw"}
        m="auto"
        mt={5}
        mb={5}
      >
        <Grid lg={4} md={6} sm={10} xs={10} mb={5}>
          <img
            className={styles.financial_literacy_img}
            style={{ display: "block", margin: "auto" }}
            src={credit_report}
            alt=""
          />
        </Grid>
        <Grid lg={7} md={6} sm={12} xs={12} mt={2}>
          <Typography variant="subtitle2" fontWeight={600}>
            Credit limit:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            The maximum credit you can get on a financial product, such as a
            credit card or line of credit from a lender or financial
            institution.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Credit report:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            A credit bureau will compile a thorough history of a person's credit
            in the form of a credit report. It contains information on your
            credit account status, account balances, and payment history
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Credit score:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            Lenders use credit scoring, among other things, to determine your
            creditworthiness. A person's credit score is a number between 300
            and 850.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Secured credit card:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            A credit card backed by a cash deposit. When you are rebuilding your
            credit, these types of cards can be helpful.
          </Typography>

          <Typography variant="subtitle2" fontWeight={600}>
            Credit terms:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            The agreement between borrower and lender that stipulates the
            monthly payment amount due, due date, fees and interest.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Creditworthiness:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            Measure of whether you're financially sound enough to extend credit
            to.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Diversification:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            You're familiar with the proverb "don't put all your eggs in one
            basket." It is a risk management strategy that distributes assets
            among securities from various markets or asset classes.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        width={"90vw"}
        margin={"auto"}
        container
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid lg={4} md={6} sm={10} xs={10} mb={5}>
          <img
            className={styles.financial_literacy_img}
            style={{ display: "block", margin: "auto" }}
            src={debt_control}
            alt=""
          />
        </Grid>
        <Grid lg={7} md={6} sm={12} xs={12} mt={2}>
          <Typography variant="subtitle2" fontWeight={600}>
            Debt consolidation:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            The process of merging numerous loans or other debts into one to get
            a better rate or pay less in fees.
          </Typography>

          <Typography variant="subtitle2" fontWeight={600}>
            Financial wellness:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            When a consumer is on top of their finances, they're referred to as
            financially healthy. It's a highly personal state, regardless of
            income, that we all strive for.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Secured debt:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            A debt secured with collateral to reduce a lender's risk (e.g., a
            car loan, mortgage, or home equity line of credit).
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Unsecured debt:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            A debt that isn't secured with collateral (e.g., credit cards,
            certain personal loans).
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Gross income:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            The total money earned before taxes are deducted.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Net worth:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            The difference between your assets and your debts.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Net income:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            It's the total money earned after taxes and other deductions are
            taken out.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        pb={5}
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"90vw"}
        margin={"auto"}
        mt={5}
      >
        {" "}
        <Grid lg={4} md={6} sm={10} xs={10} mb={5}>
          <img
            className={styles.financial_literacy_img}
            style={{ display: "block", margin: "auto" }}
            src={inquiry}
            alt=""
          />
        </Grid>
        <Grid mt={3} lg={7} md={6} sm={12} xs={12} mt={2}>
          <Typography variant="subtitle2" fontWeight={600}>
            Hard inquiry (or hard pull ) :
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            Inquiries that have an impact on your credit rating. Potential
            creditors frequently conduct hard pulls with your consent to assess
            your creditworthiness.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Soft inquiry (or soft pull )
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            : Inquiries that have no impact on your credit rating. Typically,
            utilities, lenders, or employers start soft pulls.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Identity theft:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            Acquiring personal information to obtain credit under another
            person's name.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            IRA:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            IRA stands for individual retirement account. Unlike 401(k)s, an IRA
            can be opened by an individual and don't have to be sponsored by
            your employer. You can contribute income up to a set maximum dollar
            amount.
          </Typography>

          <Typography variant="subtitle2" fontWeight={600}>
            ROI:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            ROI stands for return on investment. To calculate ROI, take the gain
            of the investment, subtract the cost of the investment, and then
            divide the total by the investment cost.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Variable interest rate:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            When a loan's interest rate changes over the course of the term.
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Fixed-rate loan:
          </Typography>
          <Typography variant="body2" fontSize={"x-small"} mb={1}>
            A loan where the interest rate doesn't fluctuate for the duration of
            the loan.
          </Typography>
        </Grid>
      </Grid>
      <Typography mt={3} mb={5} textAlign={"center"} variant="h5">
        Know Why ?
      </Typography>
      <Box className={styles.know_why}>
        <Link to={"/credit-score-drop"}>
          <Box borderRadius={"10px"}>
            <Typography
              variant="body1"
              width={"85%"}
              m={"auto"}
              fontWeight={600}
              textAlign={"center"}
            >
              Why did my Credit Score Drop ?
            </Typography>
            <img src={score_drop} alt="" />
          </Box>
        </Link>
        <Link to={"/increase-loan-balance"}>
          <Box borderRadius={"10px"}>
            <Typography
              variant="body1"
              width={"85%"}
              m={"auto"}
              fontWeight={600}
              textAlign={"center"}
            >
              What Increases Your Total Loan Balance?
            </Typography>
            <img src={loan_growth} alt="" />
          </Box>
        </Link>
      </Box>
      <Footer />
    </>
  );
};

export default FinancialLiteracy;
