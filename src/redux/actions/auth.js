import { apiLogin, apiRegister } from "../../services/auth"
import actionTypes from "./actionsType"

export const registerAsyn = (payload) => async (dispath) => {
    try {
        const response = await apiRegister(payload)
        console.log(response);
        if(response.data?.err === 0) {
            dispath({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.token,
            })
        } else {
            dispath({
                type: actionTypes.REGISTER_FAIL,
                data: response.data?.meg,
            })
        }
    } catch (error) {
        dispath({
            type: actionTypes.REGISTER_FAIL,
            data: null
        })
    }
}


export const loginAsyn = (payload) => async (dispath) => {
    try {
        const response = await apiLogin(payload)
        console.log(response);
        if(response.data?.err === 0) {
            dispath({
                type: actionTypes.LOGGIN_SUCCESS,
                data: response.data.token,
            })
        } else {
            dispath({
                type: actionTypes.LOGGIN_FAIL,
                data: response.data?.meg,
            })
        }
    } catch (error) {
        dispath({
            type: actionTypes.LOGGIN_FAIL,
            data: null
        })
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}