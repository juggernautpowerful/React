import { createAction } from "redux-actions";
import * as constants from "./constants";
import { combineReducers } from "redux";

const isAuth = JSON.parse(localStorage.getItem("isAuth"));

export const actions = {
	logIn: createAction(constants.LOGIN_REQUEST),
	logInSuccess: createAction(constants.LOGIN_SUCCESS),
	logInFailure: createAction(constants.LOGIN_FAILURE),
  checkIsLogin: createAction(constants.CHECK_IS_LOGIN),
  
  cardSave: createAction(constants.CARD_SAVE_REQUEST),
	cardSaveSuccess: createAction(constants.CARD_SAVE_SUCCESS),

  cardGet: createAction(constants.CARD_GET_REQUEST),
	cardGetSuccess: createAction(constants.CARD_GET_SUCCESS),
	cardFailure: createAction(constants.CARD_FAILURE),
  checkIsCard: createAction(constants.CHECK_IS_CARD),
};

const initialStateLogin = {
	isAuth: false,
	isLoading: false,
	data: {},
};

const initialStateCard = {
	isCard: false,
	isLoading: false,
	data: {},
};

const cardReducer = (state = initialStateCard, action) => {
	switch (action.type) {
		case constants.CARD_SAVE_REQUEST:
			return { ...state, isLoading: true };
		case constants.CARD_SAVE_SUCCESS:
			return { ...state, isLoading: false, isCard: true, data: action.payload};;
      case constants.CARD_GET_REQUEST:
        return { ...state, isLoading: true };
      case constants.CARD_GET_SUCCESS:
        return { ...state, isLoading: false, isCard: true, data: action.payload};
      case constants.CARD_FAILURE:
        return { ...state, isLoading: false };
  
		default:
			return state;
	}
};

const loginReducer = (state= initialStateLogin , action) => {
	switch (action.type) {
		case constants.CHECK_IS_LOGIN:
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
			return { ...state, isLoading: false, data: action.payload, isAuth: true };
		case constants.LOGIN_FAILURE:
			return { ...state, isLoading: false };

		default:
			return state;
	}
};


export const appReducer = combineReducers({ loginReducer, cardReducer });
