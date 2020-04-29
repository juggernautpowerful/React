import * as constants from "./constants";
import { createAction } from "redux-actions";

export const actions = {
	cardSave: createAction(constants.CARD_SAVE_REQUEST),
	cardSaveSuccess: createAction(constants.CARD_SAVE_SUCCESS),

	cardGet: createAction(constants.CARD_GET_REQUEST),
	cardGetSuccess: createAction(constants.CARD_GET_SUCCESS),
	cardFailure: createAction(constants.CARD_FAILURE)
};

const initialState = {
	error:"",
	isUpdatedCard: false,
	isLoading: false,
	data: {},
};

export const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.CARD_SAVE_REQUEST:
			return { ...state, isLoading: true, isUpdatedCard: false, error:  "" };
		case constants.CARD_SAVE_SUCCESS:
			return {
				...state,
				isLoading: false,
				isUpdatedCard: true,
				data: action.payload,
				error:  ""
			};
		case constants.CARD_GET_REQUEST:
			return { ...state, isLoading: true, isUpdatedCard: false, error:  "" };
		case constants.CARD_GET_SUCCESS:
			return { ...state, isLoading: false, isUpdatedCard: false, data: action.payload, error:  "" };
		case constants.CARD_FAILURE:
			return { ...state, isLoading: false, isUpdatedCard: false, error:  action.payload };

		default:
			return state;
	}
};
