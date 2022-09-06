import axios from "axios";
import axiosInstance from "../../utils/axiosInterceptor";

import {ERROR,LOGIN_ACTION,REGISTRATION_ACTION,SET_CONNECTED,LOGOUT} from "../reducers/AuthenticationReducer";


export const RegistrationAction = (user)=>dispatch=>{
    axios.post("http://localhost:5000/signIn",user,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
        .then(result=>{
            dispatch({
                type:REGISTRATION_ACTION,
            })
        })
        .catch(err=>{
            dispatch({
                type:ERROR,
                payload:err.response
            })
        })
}

export const LoginAction = (credentials)=>dispatch=>{
    axios.post("http://localhost:5000/login",credentials,{ withCredentials: true })
        .then(result=>{
            dispatch({
                type:LOGIN_ACTION,
                payload:{accessToken:result.data.accessToken,refreshToken:result.data.refreshToken},
                user:result.data.user
            })
        })
        .catch(err=>{
            dispatch({
                type:ERROR,
                payload:err.response

            })
        })
}

export const setConnected=(token,user)=>dispatch=>{
    console.log("actions",token,user)
    dispatch({
        type:SET_CONNECTED,
        payload:{accessToken:token.accessToken,refreshToken:token.refreshToken},
        user:user
    })
}

export const logout =()=>dispatch=>{
    const authTokens = JSON.parse(localStorage.getItem('authTokens'))
    console.log("logout",authTokens)
    axiosInstance.delete("/logout",authTokens,{ withCredentials: true })
        .then(result=>{
            console.log("test")
            dispatch({
                type:LOGOUT
            })
            localStorage.removeItem('authTokens')
            localStorage.removeItem('user')
        })
}