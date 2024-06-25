import actionTypes from "../actions/actionsType";

const initState = {
    isLoggin: false,
    token: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS: 
        case actionTypes.LOGGIN_SUCCESS: 
            return {
                ...state,
                isLoggin: true,
                token: action.data,
                msg: ''
            }
        case actionTypes.REGISTER_FAIL: 
        case actionTypes.LOGGIN_FAIL: 
            return {
                ...state,
                isLoggin: false,
                msg: action.data,
                token: null,
            }

        case actionTypes.LOGGOUT: 
            return {
                ...state,
                isLoggin: false,
                token: null,
                msg: ''
            }
    
        default:
            return state;
    }
}

export default authReducer