import axios from "axios";

export const registerStart = (data) => async (dispatch) => {
  dispatch({ type: "REGISTER_START_PREFR_REQUEST" });

  try {
    return await axios
      .post("https://api.finurl.in/api/v1/prefr/register-api", data)
      .then((res) => {
        dispatch({ type: "REGISTER_START_PREFR_SUCCESS" });
        return res;
      });
  } catch (error) {
    dispatch({ type: "REGISTER_START_PREFR_FAILURE" });
    return error;
  }
};

export const settingApplicationID = (id) => async (dispatch) => {
  dispatch({ type: "SET_APPLICATION_ID_REQUEST" });
  try {
    dispatch({ type: "SET_APPLICATION_ID_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "SET_APPLICATION_ID_FAILURE" });
  }
};
