import axios from "axios";

export const handleStashfinEligibility = (formData) => async (dispatch) => {
  dispatch({ type: "CHECK_ELIGIBILITY_FOR_STASHFIN_REQUEST" });
  try {
    return await axios
      .post("https://devapi.stashfin.com/v3/login-client", {
        id: "a203ed58-1452-439a-a85d-03bdcf3cd9fb",
        client_secret:
          "9b9ea66ad868315ee41cf0b8c5bc960ee73c60f031e3021d1706a999ba0a6d9",
      })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "CHECK_ELIGIBILITY_FOR_STASHFIN_SUCCESS" });
        if (res.data.status) {
          dispatch({ type: "INIT_APPLICATION_FOR_STASHFIN_REQUEST" });
          return axios
            .post(
              "/api/v1/stashfin/dedupe",
              {
                userId: 1235456789,
                mobileNo: formData.mobile_no,
                token: res.data.results,
              }
              //   { withCredentials: true }
            )
            .then((response) => {
              dispatch({ type: "INIT_APPLICATION_FOR_STASHFIN_SUCESS" });

              console.log(response.data);
              // navigate("/application");
            })
            .catch((err) => {
              dispatch({ type: "INIT_APPLICATION_FOR_STASHFIN_FAILURE" });
              console.log(err);
            });
        } else {
          dispatch({ type: "CHECK_ELIGIBILITY_FOR_STASHFIN_FAILURE" });

          alert("You are not eligible!!");
        }
      })
      .catch((err) => {
        dispatch({ type: "CHECK_ELIGIBILITY_FOR_STASHFIN_FAILURE" });
        console.log(err);
      });
  } catch (error) {
    console.error("Registration error:", error.message);
  }
};
