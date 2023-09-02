import axios from "axios";

export const getLoansData = (user) => (dispatch) => {
  dispatch({ type: "GET_DASHBOARD_LOANS_DATA_REQUEST" });

  const config = {
    headers: {
      "Authorization": `Bearer ${user}`,
    },
  };

  try {
    return axios.get("http://localhost:4000/api/v1/user/dashboard", config).then((res) => {
      dispatch({ type: "GET_DASHBOARD_LOANS_DATA_SUCCESS", payload: res.data.loans });
    });
  } catch (error) {
    dispatch({ type: "GET_DASHBOARD_LOANS_DATA_FAILURE" });
  }
};
