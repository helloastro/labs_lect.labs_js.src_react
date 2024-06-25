const initialState = {
    user_info: {},
};
function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGINSUCCESS':
            //console.log(action.data);
            return {
                ...state,
                user_info: action.data,
            };
        case 'LOGINFAIL':
            return {
                ...state,
                user_info: action.data,
            };
        case 'LOGOUT':
            return {
                ...state,
                user_info: action.data,
            };
        default:
            return state;
    }
}

export default LoginReducer;
