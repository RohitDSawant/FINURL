import * as types from "./actiontypes";

const init_state = {
  isLoading: false,
  isError: false,
  isAuth: false,
  loggedInUser: {},
  token: "",
};

export const authReducer = (state = init_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.LOGIN_SUCCESS: {
        console.log("payload", payload)
      return {
        ...state,
        isLoading: false,
        loggedInUser: payload.user,
        isAuth: true,
        token: payload.token,
      };
    }

    case types.LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
