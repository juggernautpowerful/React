import { combineReducers } from "redux";
import { loginReducer } from "../../App/containers/Login/store/duck";
import { signinReducer } from "../../App/containers/SignIn/store/duck";
import { cardReducer } from "../../App/containers/Dashboard/Profile/store/duck";

export const rootReducer = combineReducers({ loginReducer, cardReducer, signinReducer });
