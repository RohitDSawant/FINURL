import * as types from "./actiontypes";

const init_state = {
  isLoading: false,
  isError: false,
  // formData: {
  //   loanId: "",
  //   firstName: "",
  //   lastName: "",
  //   personalEmailId: "",
  //   mobileNo: 0,
  //   gender: "",
  //   dob: "",
  //   maritalStatus: "",
  //   panNumber: "",
  //   currentResidenceType: "",
  //   currentAddress: "",
  //   currentAddressPincode: "",
  //   monthsInCurrentResidence: 0,
  //   permanentAddressSameAsCurrAddress: false,
  //   permanentAddress: "",
  //   permanentAddressPincode: "",
  //   netMonthlyIncome: 0,
  //   itrFiled: true,
  //   gstFiled: true,
  //   desiredLoanAmount: 0,
  //   monthlySalaryMode: "",
  //   companyName: "",
  //   educationalQualification: "",
  //   fatherName: "",
  //   employmentType: "",
  //   workEmailId: "",
  //   motherName: "",
  //   monthsInCurrentCompany: 0,
  //   monthsInExperience: 0,
  //   officeAddress: "",
  //   officePincode: "",
  //   aadhaarMobileLinked: true,
  //   bankName: "",
  //   partnerSpecificInfo: {
  //     partnerUserId: "",
  //     preQual: true,
  //     preQualAmount: 0,
  //     preQualDataSource: "",
  //     leadSource: "",
  //   },
  // },
  formData: {
    fullName: "",
    email: "",
    mobile_no: "",
    pan_number: "",
    dob: "",
    income: "",
    pincode: "",
  },
  eligible: false,
  currentProcessDetails: {
    client_token: "",
    application_id: "",
  },
};

export const appReducer = (state = init_state, action) => {
  const { type, payload } = action;

  switch (type) {
    //                <------------------------------ STASHFIN  ------------------------------------------>

    case types.CHECK_ELIGIBILITY_FOR_STASHFIN_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.CHECK_ELIGIBILITY_FOR_STASHFIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        eligible: true,
        currentProcessDetails: {
          ...state.currentProcessDetails,
          client_token: payload,
        },
      };
    }

    case types.CHECK_ELIGIBILITY_FOR_STASHFIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    // <<<<<<<<<<<< iniitate application >>>>>>>>>>>>>>>>>>>

    case types.INITIATE_APPLICATION_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.INITIATE_APPLICATION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentProcessDetails: {
          ...state.currentProcessDetails,
          application_id: payload,
        },
      };
    }

    case types.INITIATE_APPLICATION_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    //  <<<<<<<<<<<<<<<<<< flag <<<<<<<<<<<<<<<<<<<<<<<<<<

    case types.TURN_ELIGIBLE_FLAG_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.TURN_ELIGIBLE_FLAG_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        eligible: false,
        currentProcessDetails: {
          ...state.currentProcessDetails,
          application_id: "",
          client_token: "",
        },
      };
    }

    case types.TURN_ELIGIBLE_FLAG_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    //  <<<<<<<<<<<<<<<<<< check status >>>>>>>>>>>>>>>>>>>>>>>

    case types.CHECK_STATUS_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.CHECK_STATUS_SUCCESS: {
      return { ...state, isLoading: false };
    }

    case types.CHECK_STATUS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    //                <------------------------------ PREFR  ------------------------------------------>

    case types.PREFR_DEDUPE_SERVICE_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.PREFR_DEDUPE_SERVICE_SUCCESS: {
      return { ...state, isLoading: false };
    }

    case types.PREFR_DEDUPE_SERVICE_FAILURE: {
      return { ...state, isError: true };
    }

    case types.REGISTER_START_PREFR_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.REGISTER_START_PREFR_SUCCESS: {
      return { ...state, isLoading: false };
    }

    case types.REGISTER_START_PREFR_FAILURE: {
      return { ...state, isError: true };
    }


    case types.SET_APPLICATION_ID_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.SET_APPLICATION_ID_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        eligible: true,
        currentProcessDetails: {
          ...state.currentProcessDetails,
          application_id: payload,
        },
      };
    }

    case types.SET_APPLICATION_ID_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
