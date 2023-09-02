import axios from "axios";

export const handleStashfinEligibility = (formData) => async (dispatch) => {
  // dispatch({ type: "CHECK_ELIGIBILITY_FOR_STASHFIN_REQUEST" });
  try {
    return await axios
      .post("http://localhost:4000/api/v1/stashfin/login-client", {
        id: "20395df108eb4c7fb8d94b40f2fb6f8a",
        client_secret: "BD2y7zO9D9Bq",
      })
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: "CHECK_ELIGIBILITY_FOR_STASHFIN_SUCCESS",
            payload: res.data.results,
          });
          return axios
            .post("http://localhost:4000/api/v1/stashfin/dedupe", {
              email: formData.email,
              phone: formData.phone,
              token: res.data.results,
            })
            .then((response) => {
              return response.data;
            })
            .catch((err) => {
              dispatch({ type: "INIT_APPLICATION_FOR_STASHFIN_FAILURE" });
              console.log(err);
            });
        } else {
          dispatch({ type: "INIT_APPLICATION_FOR_STASHFIN_FAILURE" });
        }
      })
      .catch((err) => {
        dispatch({ type: "INIT_APPLICATION_FOR_STASHFIN_FAILURE" });
        console.log(err);
      });
  } catch (error) {
    console.error("Registration error:", error.message);
  }
};
