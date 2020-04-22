import { combineReducers } from "redux";
import { appReducer } from "../../App/store/duck";

export const rootReducer = combineReducers({ appReducer });
