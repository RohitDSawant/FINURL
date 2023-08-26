import axios from "axios";
import { useNavigate } from "react-router-dom";



export const LoginFunc = (data) => async (dispatch) => {
  console.log(data)
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
