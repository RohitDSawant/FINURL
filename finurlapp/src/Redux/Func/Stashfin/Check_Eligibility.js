import axios from "axios";

export const handleStashfinEligibility = (formData) => async (dispatch) => {
  // dispatch({ type: "CHECK_ELIGIBILITY_FOR_STASHFIN_REQUEST" });
  try {
    return await axios
      .post("https://api.finurl.in/api/v1/stashfin/login-client", {
        id: "20395df108eb4c7fb8d94b40f2fb6f8a",
        client_secret: "BD2y7zO9D9Bq",
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.results);
        localStorage.setItem("client_token", res.data.results);
        // dispatch({ type: "CHECK_ELIGIBILITY_FOR_STASHFIN_SUCCESS" });
        if (res.data.status) {
          console.log("first");
          return axios
            .post(
              "https://api.finurl.in/api/v1/stashfin/dedupe",
              {
                email: formData.email,
                phone: formData.phone,
                token: res.data.results,
              }
              // { withCredentials: true }
            )
            .then((response) => {
              return response.data;
            })
            .catch((err) => {
              // dispatch({ type: "INIT_APPLICATION_FOR_STASHFIN_FAILURE" });
              console.log(err);
            });
        } else {
          // dispatch({ type: "CHECK_ELIGIBILITY_FOR_STASHFIN_FAILURE" });
          alert("You are not eligible!!");
        }
      })
      .catch((err) => {
        // dispatch({ type: "CHECK_ELIGIBILITY_FOR_STASHFIN_FAILURE" });
        console.log(err);
      });
  } catch (error) {
    console.error("Registration error:", error.message);
  }
};
