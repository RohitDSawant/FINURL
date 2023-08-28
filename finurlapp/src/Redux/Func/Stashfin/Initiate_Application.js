import axios from "axios";

export const handleStashfinInitiateApp = (formData) => async (dispatch) => {
  try {
    return await axios
      .post(
        "https://api.finurl.in/api/v1/stashfin/initiate-application",
        formData
      )
      .then((res) => {
        if (res.status) {
          window.location.href = res.data.results.redirect_url;
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err);
      });
  } catch (error) {
    console.error("Registration error:", error.message);
  }
};
