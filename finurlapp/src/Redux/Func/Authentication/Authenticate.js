import axios from "axios";

export const signUp = (formdata) => async (dispatch) => {
  dispatch({ type: "SIGNUP_REQUEST" });
  try {
    return await axios.post("/api/v1/auth/signup", formdata).then((res) => {
      console.log(res.data);
      // dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
    });
  } catch (error) {
    dispatch({ type: "SIGNUP_FAILURE" });
  }
};
