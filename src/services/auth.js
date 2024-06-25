import axios from "./axios-config";

export const apiRegister = (payload) => {
    return axios.post('/api/v1/auth/register', payload)
}

export const apiLogin = (payload) => {
    return axios.post('/api/v1/auth/login', payload)
}