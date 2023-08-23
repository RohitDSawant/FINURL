const init_state = {
  isLoading: false,
  isError: false,
  isAuth: false,
  logged_in_user: {},
  formData: {
    loanId: "",
    firstName: "",
    lastName: "",
    personalEmailId: "",
    mobileNo: 0,
    gender: "",
    dob: "",
    maritalStatus: "",
    panNumber: "",
    currentResidenceType: "",
    currentAddress: "",
    currentAddressPincode: "",
    monthsInCurrentResidence: 0,
    permanentAddressSameAsCurrAddress: false,
    permanentAddress: "",
    permanentAddressPincode: "",
    netMonthlyIncome: 0,
    itrFiled: true,
    gstFiled: true,
    desiredLoanAmount: 0,
    monthlySalaryMode: "",
    companyName: "",
    educationalQualification: "",
    fatherName: "",
    employmentType: "",
    workEmailId: "",
    motherName: "",
    monthsInCurrentCompany: 0,
    monthsInExperience: 0,
    officeAddress: "",
    officePincode: "",
    aadhaarMobileLinked: true,
    bankName: "",
    partnerSpecificInfo: {
      partnerUserId: "",
      preQual: true,
      preQualAmount: 0,
      preQualDataSource: "",
      leadSource: "",
    },
  },
};

export const appReducer = (state = init_state, action) => {
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};
