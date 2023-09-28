import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Common/Navbar";
import loan_growth from "./../Assets/Images/loan_growth.svg";
import styles from "./../CSS/homepage.module.css";
import Footer from "../Components/Common/Footer";

const IncLoanBalance = () => {
  return (
    <>
      <Navbar />
      <Typography
        p={2}
        pt={15}
        mb={2}
        variant="h5"
        fontWeight={500}
        textAlign={"center"}
      >
        What Increases Your Total Loan Balance?
      </Typography>
      <Box mb={1}>
        <img className={styles.loan_increase_img} src={loan_growth} alt="" />
      </Box>
      <Typography
        textAlign={"center"}
        p={2}
        width={"80vw"}
        m={"auto"}
        variant="subtitle2"
      >
        Although the majority of us would like to avoid debt, borrowing money
        from others occasionally has to be done. For instance, you might want a
        loan to pay for a significant medical expense or to cover regular
        expenses while your wage catches up to the increased costs. Everyone's
        motives for taking out a loan are different. You are not the only
        individual who has a personal loan. According to TransUnion, 22 million
        Americans had this form of loan as of the third quarter of 2022.
        Whatever your motivations were for getting a loan, the loan principal
        can easily become out of hand. Even if you are making payments, the
        balance of your loan may still be increasing.
      </Typography>
      <Typography variant="h5" textAlign={"center"} mt={5}>
        ' 5 ' Factors that can increase your Total Loan Balance:
      </Typography>
      <Box mt={5}>
        <Typography textAlign={"center"} variant="h6" p={2}>
          Interest Rates
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          m={"auto"}
          mt={2}
          width={"80%"}
        >
          A consumer loan comes with an interest rate that is set by the lender.
          The loan agreement calls for interest-plus-principal repayment. The
          interest rate associated with your loan may cause the loan balance to
          rise over time depending on the loan arrangement. Interest
          capitalization is a method used frequently to compound interest over
          time. In essence, this means that whenever interest is paid on a loan,
          it is added to the loan balance. The greater loan balance, which now
          includes accrued interest, is utilised to determine interest going
          ahead. Compound interest over time might result in a much higher debt
          balance. It's important to note that your annual percentage rate (APR)
          and your interest rate are two different concepts. The interest rate
          and other fees related to the loan origination are included in the APR
          for your loan.
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography textAlign={"center"} variant="h6" p={2}>
          Variable interest rates
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          m={"auto"}
          mt={2}
          width={"80%"}
        >
          An interest rate that varies over time is called a variable interest
          rate. Variable interest rates are frequently linked to a benchmark or
          index rate that fluctuates in response to the state of the market.
          Variable interest rates can be alluring in a context of low rates, but
          the prospect of rising rates could trap you in a cycle of
          high-interest debt. For example, a Federal Reserve report indicates
          that the average credit card interest rate rose from 14.51% in the
          fourth quarter of 2021 to 19.07% in November 2022. The steep rise
          might cause you to see a growing loan balance.
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography textAlign={"center"} variant="h6" p={2}>
          Only making the minimum payment
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          m={"auto"}
          mt={2}
          width={"80%"}
        >
          It's tempting to continue making the bare minimum payment each month.
          However, you run the risk of paying less than the interest accumulated
          each month if you just make a tiny payment each month. If the interest
          costs are greater than your minimum monthly payment, the loan balance
          will increase. While the minimum payment might feel like a better fit
          for your budget right now, it might lead to a growing loan balance.
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography textAlign={"center"} variant="h6" p={2}>
          Making late payments
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          m={"auto"}
          mt={2}
          width={"80%"}
        >
          If you pay a loan late, a late charge will probably be your first
          financial blow. Your loan sum will also continue to earn interest,
          which will increase the balance. Regularly making late payments could
          have a significant impact on your loan balance.
        </Typography>
      </Box>
      <Box mt={5} mb={10}>
        <Typography textAlign={"center"} variant="h6" p={2}>
          Missing a payment
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          m={"auto"}
          mt={2}
          width={"80%"}
        >
          A payment that is completely missed could have a lot of unpleasant
          repercussions. Potential loan default worries are one of the main
          problems. However, skipping a payment can increase the amount owed on
          your loan. Your loan balance will initially remain the same if you
          don't make the payment. It does allow your loan the opportunity to
          earn interest on a higher loan amount, though. After a missed payment,
          you can easily detect a greater loan debt with that. Making every
          effort to keep up with your payments can help you avoid a rising loan
          balance.
        </Typography>
      </Box>
      <Footer />
    </>
  );
};

export default IncLoanBalance;
