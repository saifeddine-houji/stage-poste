import axios from "axios";
import axiosInstance from "../../utils/axiosInterceptor";
import axiosInterceptor from "../../utils/axiosInterceptor";

import {CREATE_OPERATION,GET_OPERATION,ERROR} from "../reducers/OperationReducer";

export const createOperationAction = (operation)=>dispatch=>{

    axios.post("http://localhost:5000/createOperation",operation,{ withCredentials: true })
        .then(result=>{
            dispatch({
                type:CREATE_OPERATION,
            })
        })
        .catch(err=>{
            console.log("err",err)
            dispatch({
                type:ERROR,
                payload:err.response
            })
    })
}