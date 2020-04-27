import { combineReducers } from "redux";
import { loginReducer } from "../../App/store/Login";
import { registerReducer } from "../../App/store/Register";
import { cardReducer } from "../../App/store/Card";
import { addressesReducer } from "../../App/store/AddressList";
import { routeReducer } from "../../App/store/Route";

export const rootReducer = combineReducers({
	loginReducer,
	cardReducer,
	registerReducer,
	addressesReducer,
	routeReducer,
});
