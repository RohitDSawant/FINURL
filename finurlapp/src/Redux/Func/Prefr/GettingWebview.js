import axios from "axios";

export const gettingWebViewUrl = (loanID) => async (dispatch) => {
  dispatch({ type: "GET_WEBVIEW_REQUEST" });

  try {
    return await axios
      .post("https://api.finurl.in/api/v1/prefr/webview-api", loanID)
      .then((res) => {
        dispatch({ type: "GET_WEBVIEW_SUCCESS" });
        return res;
      });
  } catch (error) {
    dispatch({ type: "GET_WEBVIEW_FAILURE" });
    return error;
  }
};
