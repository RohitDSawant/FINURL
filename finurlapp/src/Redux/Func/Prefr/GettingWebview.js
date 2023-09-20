import axios from "axios";

export const gettingWebViewUrl = (data) => async (dispatch) => {

  dispatch({ type: "GET_WEBVIEW_REQUEST" });
  try {
    return await axios
      .post("https://api.finurl.in/api/v1/prefr/webview-api", data)
      .then((res) => {
        dispatch({ type: "GET_WEBVIEW_SUCCESS" });
        console.log(res.data)
        return res;
      });
  } catch (error) {
    dispatch({ type: "GET_WEBVIEW_FAILURE" });
    return error;
  }
};
