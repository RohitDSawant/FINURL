export const resetPrefrData = () => async (dispatch) => {
    dispatch({ type: "RESET_PREFR_REQUEST" });
    try {
      await dispatch({ type: "RESET_PREFR_SUCCESS" });
    } catch (error) {
      dispatch({ type: "RESET_PREFR_FAILURE" });
    }
  };
  