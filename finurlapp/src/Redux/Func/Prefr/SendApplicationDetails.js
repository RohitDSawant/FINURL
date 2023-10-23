import axios from "axios";

export const sendApplicationDetails = (data) => async (dispatch) => {

  dispatch({ type: "SEND_APPLICATION_DETAILS_REQUEST" });
  try {
    return await axios
      .post("https://api.finurl.in/api/v1/prefr/send-app-details", data)
      .then((res) => {
        dispatch({ type: "SEND_APPLICATION_DETAILS_SUCCESS" });
        return res.data;
      });
  } catch (error) {
    console.log(error)
    dispatch({ type: "SEND_APPLICATION_DETAILS_FAILURE" });
    return error.response.data.errors.errorMessage;
  }
};
