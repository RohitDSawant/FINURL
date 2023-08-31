export const getLoansData = () => (dispatch) => {
  dispatch({ type: "GET_DASHBOARD_LOANS_DATA_REQUEST" });
  try {
    dispatch({ type: "GET_DASHBOARD_LOANS_DATA_SUCCESS", payload: {} });
  } catch (error) {
    dispatch({ type: "GET_DASHBOARD_LOANS_DATA_FAILURE" });
  }
};
