import axios from "axios";

export const handleStashfinInitiateApp = (formData) => async (dispatch) => {
  try {
    return await axios
      .post(
        "https://api.finurl.in/api/v1/stashfin/initiate-application",
        formData
      )
      .then((res) => {
          return res
      })
      .catch((err) => {
        console.log(err);
        return err
      });
  } catch (error) {
    console.error("Registration error:", error.message);
    return error
  }
};
