const init_state = {
    isLoading: false,
    isError: false,
    isAuth: false,
    logged_in_user: {},
}

export const authReducer = (state=init_state, action) => {

    const {type, payload} = action

    switch(type) {




        default: {
            return state
        }
    }



}