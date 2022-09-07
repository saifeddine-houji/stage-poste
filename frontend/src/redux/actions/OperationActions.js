import axios from "axios";
import axiosInstance from "../../utils/axiosInterceptor";
import axiosInterceptor from "../../utils/axiosInterceptor";

import {CREATE_OPERATION,GET_OPERATIONS_USER,GET_OPERATIONS_BY_OP_ID,GET_OPERATIONS_BY_CLIENT_ID,GET_OPERATIONS_NUMBERS_BY_DATE,GET_OPERATIONS_TYPES_BY_DATE,ERROR} from "../reducers/OperationReducer";

export const createOperationAction = (operation)=>dispatch=>{

    axios.post("http://localhost:5000/createOperation",operation,{ withCredentials: true })
        .then(result=>{
            dispatch({
                type:CREATE_OPERATION,
            })
        })
        .catch(err=>{
            dispatch({
                type:ERROR,
                payload:err.response
            })
    })
}

export const getOperationsPerUser = ()=>dispatch=>{

    axios.get("http://localhost:5000/listOperationsByClientIdClient",{ withCredentials: true })
        .then(result=>{
            dispatch({
                type:GET_OPERATIONS_USER,
                payload:result.data
            })
        })
        .catch(err=>{
            dispatch({
                type:ERROR,
                payload:err.response
            })
        })
}


export const getOperationByOpId = (operationId) => dispatch=>{
    axios.get("http://localhost:5000/getOperationById/"+operationId.idOperation,{withCredentials:true})
        .then(result=>{
            dispatch({
                type:GET_OPERATIONS_BY_OP_ID,
                payload:result.data
            })
        })
        .catch(err=>{
            dispatch({
                type:ERROR,
                payload:err.response
            })
        })
}

export const getOperationByClientId = (operationId) => dispatch=>{

    axios.get("http://localhost:5000/listOperationsByClientId/"+operationId.idOperation,{withCredentials:true})
        .then(result=>{
            dispatch({
                type:GET_OPERATIONS_BY_CLIENT_ID,
                payload:result.data
            })
        })
        .catch(err=>{
            dispatch({
                type:ERROR,
                payload:err.response
            })
        })
}

export const OperationNumbersByDate = (operation)=>dispatch=>{
    console.log("action",operation)
    axios.post("http://localhost:5000/getTotalOperationsPerDate",operation,{ withCredentials: true })
        .then(result=>{
            dispatch({
                type:GET_OPERATIONS_NUMBERS_BY_DATE,
                payload:result.data
            })
        })
        .catch(err=>{
            dispatch({
                type:ERROR,
                payload:err.response
            })
        })
}

export const OperationTypeByDate = (operation)=>dispatch=>{

    axios.post("http://localhost:5000/filterOperationsDateType",operation,{ withCredentials: true })
        .then(result=>{
            dispatch({
                type:GET_OPERATIONS_TYPES_BY_DATE,
                payload:result.data
            })
        })
        .catch(err=>{
            dispatch({
                type:ERROR,
                payload:err.response
            })
        })
}