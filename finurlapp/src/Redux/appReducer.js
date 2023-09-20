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
  NBC: {
    stashfin: {
      client_token: "",
      application_id: "",
    },
    prefr: {
      application_id: "",
    },
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
        NBC: {
          ...state.NBC,
          stashfin: {
            ...state.NBC.stashfin,
            client_token: payload,
          },
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
        NBC: {
          ...state.NBC,
          stashfin: {
            ...state.NBC.stashfin,
            application_id: payload,
          },
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
        NBC: {
          ...state.NBC,
          stashfin: {
            ...state.NBC.stashfin,
            application_id: "",
            client_token: "",
          },
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
        NBC: {
          ...state.NBC,
          prefr: {
            ...state.NBC.prefr,
            application_id: payload,
          },
        },
      };
    }

    case types.SET_APPLICATION_ID_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.SEND_APPLICATION_DETAILS_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.SEND_APPLICATION_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.SEND_APPLICATION_DETAILS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.GET_WEBVIEW_REQUEST: {
      return { ...state, isLoading: true, isError: true };
    }

    case types.GET_WEBVIEW_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        eligible:false,
        NBC: {
          ...state.NBC,
          prefr: {
            ...state.NBC.prefr,
            application_id: "",
          },
        },
      };
    }

    case types.GET_WEBVIEW_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    // <----------------- Adding form data ---------------->

    // case types.ADDING_FORM_DATA_REQUEST: {
    //   return { ...state, isLoading: true };
    // }

    // case types.ADDING_FORM_DATA_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     formData :{
    //       ...state.formData,
    //     }
    //   };
    // }

    // case types.ADDING_FORM_DATA_FAILURE: {
    //   return { ...state, isLoading: false, isError: true };
    // }

    default: {
      return state;
    }
  }
};
