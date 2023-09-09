import axios from "axios";

export const prefrDedupeService = (data) => async (dispatch) => {
  dispatch({ type: "PREFR_DEDUPE_SERVICE_REQUEST" });
  try {
    return await axios
      .post("https://api.finurl.in/api/v1/prefr/dedupe-service", data)
      .then((res) => {
        dispatch({ type: "PREFR_DEDUPE_SERVICE_SUCCESS" });
        return res;
      });
  } catch (error) {
    dispatch({ type: "PREFR_DEDUPE_SERVICE_FAILURE" });
    return error;
  }
};
