import axios from "axios";

export const handleStashfinInitiateApp = (formData) => async (dispatch) => {
  dispatch({ type: "INITIATE_APPLICATION_REQUEST" });

  try {
    return await axios
      .post(
        "https://api.finurl.in/api/v1/stashfin/initiate-application",
        formData
      )
      .then((res) => {
        if (res.data) {
          dispatch({
            type: "INITIATE_APPLICATION_SUCCESS",
            payload: res.data.results.application_id,
          });
        }
        return res;
      });
  } catch (error) {
    console.error("Registration error:", error.message);
    dispatch({ type: "INITIATE_APPLICATION_FAILURE" });
    return error;
  }
};

// for turning eligible flag

export const turnEligble = () => (dispatch) => {
  dispatch({ type: "TURN_ELIGIBLE_FLAG_REQUEST" });
  try {
    dispatch({ type: "TURN_ELIGIBLE_FLAG_SUCCESS"});
  } catch (error) {
    dispatch({ type: "TURN_ELIGIBLE_FLAG_FAILURE" });
  }
};
