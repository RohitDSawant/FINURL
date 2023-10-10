import * as types from "./actiontypes";

const init_state = {
  isLoading: false,
  isError: false,
  isAuth: false,
  loggedInUser: {},
  loans: [],
  token: "",
  reset_password: false,
  reset_applicant_email: "",
};

export const authReducer = (state = init_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.LOGIN_SUCCESS: {
      let arr;

      if (payload.user.loans.length > 0) {
        arr = payload.user.loans.map((loan, idx) => {
          return { ...loan, id: idx + 1 };
        });
      } else {
        arr = [];
      }

      return {
        ...state,
        isLoading: false,
        loggedInUser: payload.user,
        loans: arr,
        isAuth: true,
        token: payload.token,
      };
    }

    case types.LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.GET_DASHBOARD_LOANS_DATA_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.GET_DASHBOARD_LOANS_DATA_SUCCESS: {
      console.log("payload", payload);

      let arr;

      if (payload.length > 0) {
        arr = payload.map((loan, idx) => {
          return { ...loan, id: idx + 1 };
        });
      } else {
        arr = [];
      }

      return {
        ...state,
        isLoading: false,
        loans: arr,
      };
    }

    case types.GET_DASHBOARD_LOANS_DATA_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.RESET_PASSWORD_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        reset_applicant_email: payload.email,
        reset_password: true,
      };
    }

    case types.RESET_PASSWORD_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.RESET_COMPLETION_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.RESET_COMPLETION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        reset_applicant_email: "",
        reset_password: false,
      };
    }

    case types.RESET_COMPLETION_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
