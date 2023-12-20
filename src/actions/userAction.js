import axios from "axios"
import {
    CLEAR_ERRORS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from "../constant/userConstant"


// login 
export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: LOGIN_REQUEST })
        const config = { header: { "Content-type": "application/json" } }

        const { data } = await axios.post(`http://localhost:5000/api/v1/login`, { email, password }, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }

}

// register new user
export const register = (userData) =>async(dispatch)=>{
    try{
        dispatch({type:REGISTER_USER_REQUEST})
        const config = { headers: { "Content-type": "application/json" } }
        const {data} = await axios.post(`http://localhost:5000/api/v1/register`,userData,config);
        dispatch({
            type:REGISTER_USER_SUCCESS,
            payload:data.user,
        })
    }catch(error){
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}