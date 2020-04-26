import * as constants from "./constants";
import { createAction } from "redux-actions";

export const actions = {
	SignIn: createAction(constants.REGISTER_REQUEST),
	SignInSuccess: createAction(constants.REGISTER_SUCCESS),
	SignInFailure: createAction(constants.REGISTER_FAILURE),
};

const initialState = {
	isSubmited: false,
	isAuth: false,
	isLoading: false,
	data: {},
};

export const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.REGISTER_REQUEST:
			return { ...state, isLoading: true };
		case constants.REGISTER_SUCCESS:
			localStorage.setItem("isAuth", JSON.stringify(true));
			return { ...state, isLoading: false, data: action.payload, isAuth: true, isSubmited: true };
		case constants.REGISTER_FAILURE:
            localStorage.setItem("isAuth", JSON.stringify(false));
			return { ...state, isLoading: false };
		default:
			return state;
	}
};
