import axios from "axios";

export const send_otp = async (config) => {

  await axios
    .post("http://localhost:4000/api/v1/user/send_otp_to_customer", config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
};


export const verify_otp = async (config) => {
  try {
    const response = await axios.post("http://localhost:4000/api/v1/user/verify_customer_otp", config)
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
    
} 