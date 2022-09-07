
const initialState={
    createOperation:{},
    getOperationsUser:{},
    getOperationByOpId:{},
    errors:{}

}

export const CREATE_OPERATION = "CREATEOP";
export const GET_OPERATIONS_USER = "GETOPSUSER";
export const GET_OPERATIONS_BY_OP_ID = "GETOPBYOPID";
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

        case ERROR:
            return{
                error:action.payload
            }

        default:{
            return state;
        }
    }
}