import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Common/Navbar";
import score_drop from "./../Assets/Images/score_drop.svg";
import styles from "./../CSS/homepage.module.css";
import Footer from "../Components/Common/Footer";

const CreditScoreDrop = () => {
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
        Why Did My Credit Score Drop?
      </Typography>
      <Box mb={1}>
        <img className={styles.loan_increase_img} src={score_drop} alt="" />
      </Box>
      <Typography
        textAlign={"center"}
        p={2}
        width={"75vw"}
        m={"auto"}
        variant="subtitle2"
      >
        Credit scores may change from one month to the next. Few points
        shouldn't cause anyone to lose sleep because they are easily lost and
        earned back. However, a significant decline—of 20 points or
        more—indicates that something unfavourable may have happened to your
        credit reports. Whenever you find yourself wondering "Why did my credit
        score drop?" look at these potential causes and the related advice on
        how to handle each of them.
      </Typography>
      <Typography variant="h5" textAlign={"center"} mt={5}>
        ' 5 ' reasons why your credit score dropped
      </Typography>
      <Box mt={5}>
        <Typography textAlign={"center"} variant="h6" p={2}>
          You missed a debt payment
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          m={"auto"}
          mt={2}
          width={"80%"}
        >
          Your credit scores might decrease by up to 80 points or more if you
          miss just one payment on a credit card or loan. This is so because the
          primary component used to determine your FICO credit scores is your
          payment history. More over one-third (35%) of your marks are
          determined by it. Your credit ratings may suffer significantly if a
          creditor notes that you are just one bill payment behind by 30 days.
          Although the missed payment will remain on your credit records for
          seven years even if you pay the past-due bill, you can thankfully earn
          the lost points back over time. Tip: Set up autopay to be proactive
          about preventing forgotten payments. If you believe you could be late
          with a payment, try to modify the date or inquire about hardship
          assistance from the creditor.
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography textAlign={"center"} variant="h6" p={2}>
          Your credit card balance's increased
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          m={"auto"}
          mt={2}
          width={"80%"}
        >
          Your utilisation ratio, commonly referred to as your debt-to-credit
          ratio (DTC), is the second most important component that affects your
          credit ratings (30%). The less of your available revolving credit you
          are utilising, the better, according to DTC. Therefore, your credit
          scores may suffer if your credit card balances rise.
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography textAlign={"center"} variant="h6" p={2}>
          Incorrect information
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          m={"auto"}
          mt={2}
          width={"80%"}
        >
          Your scores may suffer if inaccurate information appears on your
          reports, whether as a result of identity theft or creditor error. You
          have the right to challenge inaccurate information if you discover it
          in your credit report. You should never pay a third party to submit a
          claim on your behalf because it only takes a few minutes and is free
          to do so.
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography textAlign={"center"} variant="h6" p={2}>
          You applied for a new credit card or loan
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          m={"auto"}
          mt={2}
          width={"80%"}
        >
          Your credit scores may decrease by a few points each time you apply
          for new credit, whether it be a credit card, personal loan, student
          loan, mortgage, or another type of loan. This is due to the fact that
          new credit applications, sometimes referred to as "hard inquiries,"
          account for 10% of your credit ratings. Since new accounts decrease
          the average age of your credit accounts, you can experience a further
          decline in your ratings if your application is accepted. Tip: When
          looking for finance, consider the best time to submit your
          applications. Multiple mortgage or auto loan applications will only
          count as one hard inquiry if they are all submitted within 30 days.
        </Typography>
      </Box>
      <Box mt={5} mb={10}>
        <Typography textAlign={"center"} variant="h6" p={2}>
          You filed Bankruptcy
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          m={"auto"}
          mt={2}
          width={"80%"}
        >
          One of the most damaging items that can appear on your credit reports
          is bankruptcy because it demonstrates to creditors your inability to
          repay debts. Expect your scores to significantly decline if you file
          for bankruptcy; the higher your scores were before to filing, the more
          points you'll lose. Good credit holders should anticipate a reduction
          of at least 100 points. Tip: By including good information in your
          credit reports, you can hasten the bankruptcy recovery process. One
          technique to accomplish this is to have a close friend or relative add
          you as a "authorised user" to one of their credit accounts. Another
          option is to try to get a secured credit card.
        </Typography>
      </Box>
      <Footer />
    </>
  );
};

export default CreditScoreDrop;
