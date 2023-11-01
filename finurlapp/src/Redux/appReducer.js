import * as types from "./actiontypes";

const init_state = {
  isLoading: false,
  isError: false,
  found_partners: false,
  found_partners_list: [],
  current_dedupe_number: 0,
  NBC: {
    stashfin: {
      eligible: false,
      client_token: "",
      application_id: "",
    },
    prefr: {
      eligible: false,
      application_id: "",
      skip_application_details: true,
    },
  },
};

export const appReducer = (state = init_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_CURRENT_DEDUPE_NUMBER_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.SET_CURRENT_DEDUPE_NUMBER_SUCCESS: {
      return { ...state, isLoading: false, current_dedupe_number: payload };
    }

    case types.SET_CURRENT_DEDUPE_NUMBER_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.RESET_CURRENT_DEDUPE_NUMBER_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.RESET_CURRENT_DEDUPE_NUMBER_SUCCESS: {
      return { ...state, isLoading: false, current_dedupe_number: 0 };
    }

    case types.RESET_CURRENT_DEDUPE_NUMBER_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

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

    case types.CHECK_ELIGIBLE_FOR_STASHFIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.CHECK_ELIGIBLE_FOR_STASHFIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        NBC: {
          ...state.NBC,
          stashfin: {
            ...state.NBC.stashfin,
            eligible: true,
          },
        },
      };
    }

    case types.CHECK_ELIGIBLE_FOR_STASHFIN_FAILURE: {
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
            eligible: false,
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

    case types.RESET_STASHFIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.RESET_STASHFIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        NBC: {
          ...state.NBC,
          stashfin: {
            ...state.NBC.stashfin,
            application_id: "",
            client_token: "",
            eligible: false,
          },
        },
      };
    }

    case types.RESET_STASHFIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    //                <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< PREFR  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    case types.PREFR_DEDUPE_SERVICE_REQUEST: {
      return { ...state, isLoading: true, isError: false };
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
      return { ...state, isError: true, isLoading: false };
    }

    case types.SET_APPLICATION_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.SET_APPLICATION_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        NBC: {
          ...state.NBC,
          prefr: {
            ...state.NBC.prefr,
            skip_application_details: payload,
          },
        },
      };
    }

    case types.SET_APPLICATION_DETAILS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.SET_APPLICATION_ID_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.SET_APPLICATION_ID_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        NBC: {
          ...state.NBC,
          prefr: {
            ...state.NBC.prefr,
            eligible: true,
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
        eligible: false,
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

    case types.RESET_PREFR_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.RESET_PREFR_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        NBC: {
          ...state.NBC,
          prefr: {
            ...state.NBC.prefr,
            application_id: "",
            skip_application_details: false,
            eligible: false,
          },
        },
      };
    }

    case types.RESET_PREFR_FAILURE: {
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

    case types.ADDING_FORM_DATA_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.ADDING_FORM_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        formData: {
          ...state.formData,
        },
      };
    }

    case types.ADDING_FORM_DATA_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    // partner found

    case types.ADD_PARTNER_TO_LIST_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.ADD_PARTNER_TO_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        found_partners_list: [...state.found_partners_list, payload],
      };
    }

    case types.ADD_PARTNER_TO_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.SET_PARTNER_FOUND_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.SET_PARTNER_FOUND_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        found_partners: true,
      };
    }

    case types.SET_PARTNER_FOUND_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
