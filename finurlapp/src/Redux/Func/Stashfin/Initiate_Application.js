import axios from "axios";

export const handleStashfinInitiateApp = (formData) => async (dispatch) => {

dispatch({type:"SETTING_APPLICATION_ID_REQUEST"})

  try {
    return await axios
      .post(
        "https://api.finurl.in/api/v1/stashfin/initiate-application",
        formData
      )
      .then((res) => {
        if(res.data){
          dispatch({type:"SETTING_APPLICATION_ID_SUCCESS", payload: res.data.results.application_id})
        }
          return res
      })
  } catch (error) {
    console.error("Registration error:", error.message);
    dispatch({type:"SETTING_APPLICATION_ID_FAILURE"})
    return error
  }
};
