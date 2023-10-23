import axios from "axios";

export const check_status = (data) => (dispatch) => {

    console.log(data)

  dispatch({ type: "CHECK_STATUS_REQUEST" });
  try {
    return axios
      .post("https://api.finurl.in/api/stashfin-check-status", data)
      .then((res) => {
        console.log("response from check status", res.data)
        dispatch({ type: "CHECK_STATUS_SUCCESS" });
      });
  } catch (error) {
    console.log("error from check status", error)

    dispatch({ type: "CHECK_STATUS_FAILURE" });
  }
};
