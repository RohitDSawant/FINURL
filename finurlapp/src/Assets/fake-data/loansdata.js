export const loans = [
  {
    loanID: 25469788846,
    name: "Suresh Rathod",
    amt: "₹ " + 250000,
    date: "12/05/2023"
  },
  {
    loanID: 842948867,
    name: "Vivek Malothra",
    amt: "₹ " + 650000,
    date: "12/05/2023"
  },
  {
    loanID: 2546588836,
    name: "ShivShankar Patil",
    amt: "₹ " + 500000,
    date: "12/05/2023"
  },
  {
    loanID: 2546978645,
    name: "Rajiv Singh",
    amt: "₹ " + 557000,
    date: "12/05/2023"
  },
  {
    loanID: 25549788364,
    name: "Ismail Nawab ",
    amt: "₹ " + 200000,
    date: "12/05/2023"
  },
  {
    loanID: 2524178977,
    name: "Suryakumar Mishra",
    amt: "₹ " + 125000,
    date: "12/05/2023"
  },
  {
    loanID: 25478788894,
    name: "Joseph Gomes",
    amt: "₹ " + 295000,
    date: "12/05/2023"
  },
  {
    loanID: 25974588821,
    name: "Suresh Rathod",
    amt: "₹ " + 155000,
    date: "12/05/2023"
  },
];


function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDate() {
  const start = new Date(2020, 0, 1).getTime();
  const end = new Date().getTime();
  return new Date(start + Math.random() * (end - start));
}

const statuses = ["Pending", "In process", "Passed"];

const data = [];

for (let id = 0; id <= 20; id++) {
  const application_id = generateRandomNumber(1000000000, 9999999999);
  const name = "Random Name " + id;
  const loanStatus = statuses[generateRandomNumber(0, 2)];
  const dateOfApplication = generateRandomDate();
  const loanAmount = generateRandomNumber(100000, 2500000);

  data.push({
    id,
    application_id,
    name,
    loan_status: loanStatus,
    date_of_application: dateOfApplication.toISOString(),
    loan_amount: loanAmount,
  });
}

export default data
