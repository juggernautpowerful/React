import * as constants from "./constants";
import { createAction } from "redux-actions";

const isAuth = JSON.parse(localStorage.getItem("isAuth"));
const tokenAuth = localStorage.getItem("tokenAuth");

export const actions = {
	logIn: createAction(constants.LOGIN_REQUEST),
	logInSuccess: createAction(constants.LOGIN_SUCCESS),
	logInFailure: createAction(constants.LOGIN_FAILURE),
	checkIsLogin: createAction(constants.CHECK_IS_LOGIN),
	logOut: createAction(constants.LOGOUT),
};

const initialState = {
	tokenAuth: tokenAuth,
	isAuth: isAuth,
	isLoading: false,
	data: {},
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.CHECK_IS_LOGIN:
			console.log("isAuth ", isAuth);
			if (isAuth) {
				return {
					isAuth: true,
					...state,
				};
			}
			return state;
		case constants.LOGIN_REQUEST:
			return { ...state, isLoading: true };
		case constants.LOGIN_SUCCESS:
			localStorage.setItem("isAuth", JSON.stringify(true));
			localStorage.setItem("tokenAuth", action.payload.token);

			return {
				...state,
				isLoading: false,
				data: action.payload,
				isAuth: true,
				tokenAuth: action.payload.token,
			};
		case constants.LOGIN_FAILURE:
			return { ...state, isLoading: false, isAuth: false, tokenAuth: "" };
		case constants.LOGOUT:
			localStorage.setItem("isAuth", JSON.stringify(false));
			localStorage.setItem("tokenAuth", "");
			return { ...state, isLoading: false, isAuth: false, tokenAuth: "" };
		default:
			return state;
	}
};
