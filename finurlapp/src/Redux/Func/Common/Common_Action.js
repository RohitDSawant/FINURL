export const addPartnerToList = (partner) => async (dispatch) => {
  dispatch({ type: "ADD_PARTNER_TO_LIST_REQUEST" });
  try {
    await dispatch({ type: "ADD_PARTNER_TO_LIST_SUCCESS", payload: partner });
  } catch (error) {
    dispatch({ type: "ADD_PARTNER_TO_LIST_FAILURE" });
  }
};

export const setPartnersFound = () => async (dispatch) => {
  dispatch({ type: "SET_PARTNER_FOUND_REQUEST" });
  try {
    await dispatch({ type: "SET_PARTNER_FOUND_SUCCESS" });
  } catch (error) {
    dispatch({ type: "SET_PARTNER_FOUND_FAILURE" });
  }
};

export const setCurrentDedupeNumber = (number) => async (dispatch) => {
  dispatch({ type: "SET_CURRENT_DEDUPE_NUMBER_REQUEST" });
  try {
    await dispatch({
      type: "SET_CURRENT_DEDUPE_NUMBER_SUCCESS",
      payload: number,
    });
  } catch (error) {
    dispatch({ type: "SET_CURRENT_DEDUPE_NUMBER_FAILURE" });
  }
};

export const resetCurrentDedupeNumber = (number) => async (dispatch) => {
  dispatch({ type: "RESET_CURRENT_DEDUPE_NUMBER_REQUEST" });
  try {
    await dispatch({ type: "RESET_CURRENT_DEDUPE_NUMBER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "RESET_CURRENT_DEDUPE_NUMBER_FAILURE" });
  }
};

export const setMobileToVerify = (number) => async (dispatch) => {
  dispatch({ type: "SET_MOBILE_TO_VERIFY_REQUEST" });
  try {
    await dispatch({ type: "SET_MOBILE_TO_VERIFY_SUCCESS", payload: number });
  } catch (error) {
    dispatch({ type: "SET_MOBILE_TO_VERIFY_FAILURE" });
  }
};

export const setDedupeFormData = (data) => async (dispatch) => {
  dispatch({ type: "SET_FORMDATA_REQUEST" });
  try {
    await dispatch({ type: "SET_FORMDATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "SET_FORMDATA_FAILURE" });
  }
};