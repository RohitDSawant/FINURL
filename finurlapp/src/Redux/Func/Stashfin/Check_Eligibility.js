import axios from "axios";

export const handleStashfinEligibility = (formData) => async (dispatch) => {
  
  dispatch({ type: "CHECK_ELIGIBILITY_FOR_STASHFIN_REQUEST" });
  try {
    return await axios
      .post("https://api.finurl.in/api/v1/stashfin/login-client", {
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
            .post("https://api.finurl.in/api/v1/stashfin/dedupe", {
              email: formData.email,
              phone: formData.phone,
              token: res.data.results,
            })
            .then((response) => {
              return response.data;
            })
            .catch((err) => {
              dispatch({ type: "CHECK_ELIGIBILTY_FOR_STASHFIN_FAILURE" });
              return err.response.data.message
            });
        } else {
          dispatch({ type: "CHECK_ELIGIBILTY_FOR_STASHFIN_FAILURE" });
        }
      })
      .catch((err) => {
        dispatch({ type: "CHECK_ELIGIBILTY_FOR_STASHFIN_FAILURE" });
        return err.response.data.message
      });
  } catch (error) {
    console.error("Registration error:", error.message);
    return error
  }
};


export const eligibile_for_Stashfin = () => async(dispatch)=>{

  dispatch({ type: "CHECK_ELIGIBLE_FOR_STASHFIN_REQUEST"})

  try{
    await dispatch({ type: "CHECK_ELIGIBLE_FOR_STASHFIN_SUCCESS" })
  }
  catch(err){
    dispatch({ type: "CHECK_ELIGIBLE_FOR_STASHFIN_FAILURE" })
  }

}