import {combineReducers} from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
import OperationReducer from "./OperationReducer";

export default combineReducers({
    Auth:AuthenticationReducer,
    Operation : OperationReducer


})