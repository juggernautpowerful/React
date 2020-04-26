import { combineReducers } from "redux";
//import { loginReducer } from "../../App/containers/Login/store/duck";
import { loginReducer } from "../../App/store/Login";
//import { registerReducer } from "../../App/containers/SignIn/store/duck";
import { registerReducer } from "../../App/store/Register";
//import { cardReducer } from "../../App/containers/Dashboard/Profile/store/duck";
import { cardReducer } from "../../App/store/Card";

export const rootReducer = combineReducers({ loginReducer, cardReducer, registerReducer });
