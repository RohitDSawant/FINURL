import React from "react";
import Navbar from "../Components/Common/Navbar";
import { Box, Grid, Typography } from "@mui/material";
import financial_term from "./../Assets/Images/financial_literacy.png";
import credit_report from "./../Assets/Images/credit_report.svg";
import credit_world from "./../Assets/Images/financial_world.svg"

const FinancialLiteracy = () => {
  return (
    <>
      <Navbar />
      <Box pt={10}>
        <Typography mt={2} variant="h5" fontWeight={500} textAlign={"center"}>
          Financial Terms you should know
        </Typography>
        <Typography
          mt={1}
          p={1.5}
          mb={5}
          fontWeight={500}
          textAlign={"center"}
          variant="subtitle2"
        >
          A lot of people can find the acronyms and phrases used in the
          financial industry strange. To help you better understand money and
          credit, we have put up a dictionary of financial words.
        </Typography>
      </Box>
      <img
        style={{ height: "45vh", display: "block", margin: "auto" }}
        src={financial_term}
        alt="financial_term"
      />
      <Box width={"75vw"} margin={"auto"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          mb={2}
          mt={5}
        >
          <Typography variant="subtitle2" textAlign={"center"} fontWeight={600}>
            401(k):
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            Depending on the options available in your plan, you can contribute
            money to this account sponsored by your company either before or
            after taxes for retirement purposes.
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"} mb={2}>
          <Typography variant="subtitle2" textAlign={"center"} fontWeight={600}>
            AnnualCreditReport.com:
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            The sole website allowed to offer free credit reports under federal
            law. Equifax, Experian, and TransUnion, the three credit reporting
            bureaus, are required to provide one free credit report to every
            American every year.
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"} mb={2}>
          <Typography variant="subtitle2" textAlign={"center"} fontWeight={600}>
            Amortization:
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            An amortisation schedule may be provided to you when applying for a
            mortgage or auto loan. This schedule illustrates how your loan will
            be gradually repaid over time.
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"} mb={2}>
          <Typography variant="subtitle2" textAlign={"center"} fontWeight={600}>
            APR:
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            APR stands for annual percentage rate. It's the interest rate you
            pay when you get a loan or what you earn on an investment in one
            year, including fees.
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"} mb={2}>
          <Typography variant="subtitle2" textAlign={"center"} fontWeight={600}>
            APY:
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            APY stands for annual percentage yield. It's similar to APR, except
            it takes into account the compound interest you earn over a year.
            APY is higher than APR because it includes the interest you've
            already accumulated in its calculations. Banks advertise APY for
            savings accounts and APR for loans.
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"} mb={2}>
          <Typography variant="subtitle2" textAlign={"center"} fontWeight={600}>
            ARM:
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            ARM stands for an adjustable-rate mortgage. Your interest rate
            starts at a certain APR, but it can go up (sometimes down) over
            time, which could make them riskier compared to fixed-rate
            mortgages.
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"} mb={2}>
          <Typography variant="subtitle2" textAlign={"center"} fontWeight={600}>
            Cash flow:
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            The net amount of cash and cash equivalents moving into and out of a
            business.
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"} mb={2}>
          <Typography variant="subtitle2" textAlign={"center"} fontWeight={600}>
            Capital gains (and losses):
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            A captain gain is when you sell something for more money than you
            paid for it. A capital loss occurs when you sell something for less
            than you paid for it.
          </Typography>
        </Box>
      </Box>
      <Box mt={5}>
        <img
          style={{ height: "50vh", display: "block", margin: "auto" }}
          src={credit_report}
          alt=""
        />
      </Box>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Credit limit:
      </Typography>
      <Typography textAlign={"center"} variant="body2" mb={0.5}>
        {" "}
        The maximum credit you can get on a financial product, such as a credit
        card or line of credit from a lender or financial institution.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Credit report:
      </Typography>
      <Typography textAlign={"center"} variant="body2" mb={0.5}>
        {" "}
        A credit bureau will compile a thorough history of a person's credit in
        the form of a credit report. It contains information on your credit
        account status, account balances, and payment history
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Credit score:
      </Typography>
      <Typography textAlign={"center"} variant="body2" mb={0.5}>
        {" "}
        Lenders use credit scoring, among other things, to determine your
        creditworthiness. A person's credit score is a number between 300 and
        850.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Credit terms:
      </Typography>
      <Typography textAlign={"center"} variant="body2" mb={0.5}>
        {" "}
        The agreement between borrower and lender that stipulates the monthly
        payment amount due, due date, fees and interest.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Creditworthiness:
      </Typography>
      <Typography textAlign={"center"} variant="body2" mb={0.5}>
        {" "}
        Measure of whether you're financially sound enough to extend credit to.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Debt consolidation:
      </Typography>
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        {" "}
        The process of merging numerous loans or other debts into one to get a
        better rate or pay less in fees.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Diversification:
      </Typography>
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        You're familiar with the proverb "don't put all your eggs in one
        basket." It is a risk management strategy that distributes assets among
        securities from various markets or asset classes.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Financial wellness:
      </Typography>
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        When a consumer is on top of their finances, they're referred to as
        financially healthy. It's a highly personal state, regardless of income,
        that we all strive for.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Fixed-rate loan:
      </Typography>
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        {" "}
        A loan where the interest rate doesn't fluctuate for the duration of the
        loan.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Gross income:
      </Typography>
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        {" "}
        The total money earned before taxes are deducted.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Hard inquiry (or hard pull ) :{" "}
      </Typography>
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        {" "}
        Inquiries that have an impact on your credit rating. Potential creditors
        frequently conduct hard pulls with your consent to assess your
        creditworthiness.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Identity theft:
      </Typography>
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        {" "}
        Acquiring personal information to obtain credit under another person's
        name.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        IRA:
      </Typography>{" "}
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        IRA stands for individual retirement account. Unlike 401(k)s, an IRA can
        be opened by an individual and don't have to be sponsored by your
        employer. You can contribute income up to a set maximum dollar amount.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Net income:
      </Typography>{" "}
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        It's the total money earned after taxes and other deductions are taken
        out.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Net worth:
      </Typography>{" "}
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        The difference between your assets and your debts.
      </Typography>
      <Box mt={5}>
        <img
          style={{ height: "55vh", display: "block", margin: "auto" }}
          src={credit_world}
          alt=""
        />
      </Box>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        ROI:
      </Typography>{" "}
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        ROI stands for return on investment. To calculate ROI, take the gain of
        the investment, subtract the cost of the investment, and then divide the
        total by the investment cost.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Soft inquiry (or soft pull )
      </Typography>{" "}
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        : Inquiries that have no impact on your credit rating. Typically,
        utilities, lenders, or employers start soft pulls.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Secured credit card:{" "}
      </Typography>{" "}
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        {" "}
        A credit card backed by a cash deposit. When you are rebuilding your
        credit, these types of cards can be helpful.
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Secured debt:
      </Typography>
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        {" "}
        A debt secured with collateral to reduce a lender's risk (e.g., a car
        loan, mortgage, or home equity line of credit).
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Unsecured debt:
      </Typography>
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        {" "}
        A debt that isn't secured with collateral (e.g., credit cards,
        certain personal loans).
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        fontWeight={600}
        m={1}
      >
        Variable interest rate:{" "}
      </Typography>
      <Typography variant="body2" mb={0.5} textAlign={"center"}>
        {" "}
        When a loan's interest rate changes over the course of the term.
      </Typography>
    </>
  );
};

export default FinancialLiteracy;
