
const initialState={
    createOperation:{},
    getOperation:{},
    errors:{}
}

export const CREATE_OPERATION = "CREATEOP";
export const GET_OPERATION = "GETOP";
export const ERROR = "ERROR";

export default function (state=initialState,action){
    switch (action.type){
        case CREATE_OPERATION:
            return{
                createOperation: "operation created"
            }

        case GET_OPERATION:
            return{
                ...state,
                getOperation:action.payload
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