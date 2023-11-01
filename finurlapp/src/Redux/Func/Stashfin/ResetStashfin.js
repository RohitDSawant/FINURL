export const resetStashfinData = () => async (dispatch) => {
  dispatch({ type: "RESET_STASHFIN_REQUEST" });
  try {
    await dispatch({ type: "RESET_STASHFIN_SUCCESS" });
  } catch (error) {
    dispatch({ type: "RESET_STASHFIN_FAILURE" });
  }
};

