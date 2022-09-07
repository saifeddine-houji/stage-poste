
const initialState={
    createOperation:{},
    getOperationsUser:{},
    getOperationByOpId:{},
    getOperationsByClientId:{},
    getOperationNumbersByDate:{},
    getOperationsByTypeDate:{},
    errors:{}

}

export const CREATE_OPERATION = "CREATEOP";
export const GET_OPERATIONS_USER = "GETOPSUSER";
export const GET_OPERATIONS_BY_OP_ID = "GETOPBYOPID";
export const GET_OPERATIONS_BY_CLIENT_ID = "GETOPBYCLIENTID";
export const GET_OPERATIONS_NUMBERS_BY_DATE = "GETOPNUMBYDATE";
export const GET_OPERATIONS_TYPES_BY_DATE = "GETOPTYPEBYDATE";
export const ERROR = "ERROR";

export default function (state=initialState,action){
    switch (action.type){
        case CREATE_OPERATION:
            return{
                createOperation: "operation created"
            }

        case GET_OPERATIONS_USER:
            return{
                ...state,
                getOperationsUser:action.payload
            }

        case GET_OPERATIONS_BY_OP_ID:
        return {
            ...state,
            getOperationByOpId:action.payload
        }

        case GET_OPERATIONS_BY_CLIENT_ID:
            return {
                ...state,
                getOperationsByClientId:action.payload
            }

        case GET_OPERATIONS_NUMBERS_BY_DATE:
            return{
                ...state,
                createOperation: "numbers got",
                getOperationNumbersByDate:action.payload
            }

        case GET_OPERATIONS_TYPES_BY_DATE:
            return{
                createOperation: "types got",
                getOperationsByTypeDate:action.payload
            }

        case ERROR:
            return{
                error:action.payload
            }

        default:{
            return state;
        }
    }
}