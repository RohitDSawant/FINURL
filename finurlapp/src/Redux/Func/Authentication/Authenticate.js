import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginFunc = (data) => async (dispatch) => {
  console.log(data);
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE" });
  }
};

export const verifyOtp = (otp) => async (dispatch) => {
  dispatch({ type: "OTP_VERIFY_REQUEST" });
  try {
    return await axios
      .post("http://localhost:4000/api/v1/auth/verifyOtp", otp)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "OTP_VERIFY_SUCCESS" });
      });
  } catch (error) {
    dispatch({ type: "OTP_VERIFY_FAILURE" });
  }
};

export const reset_password = (data) => async (dispatch) => {
  dispatch({ type: "RESET_PASSWORD_REQUEST" });

  try {
    await dispatch({ type: "RESET_PASSWORD_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "RESET_PASSWORD_FAILURE" });
  }
};

export const reset_completion_password = () => async (dispatch) => {
  dispatch({ type: "RESET_COMPLETION_REQUEST" });

  try {
    await dispatch({ type: "RESET_COMPLETION_SUCCESS" });
  } catch (error) {
    dispatch({ type: "RESET_COMPLETION_FAILURE" });
  }
};
