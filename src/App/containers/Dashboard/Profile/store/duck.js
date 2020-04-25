import * as constants from "./constants";
import { createAction } from "redux-actions";

const isCard = JSON.parse(localStorage.getItem("isCard"));

export const actions = {
	cardSave: createAction(constants.CARD_SAVE_REQUEST),
	cardSaveSuccess: createAction(constants.CARD_SAVE_SUCCESS),

	cardGet: createAction(constants.CARD_GET_REQUEST),
	cardGetSuccess: createAction(constants.CARD_GET_SUCCESS),
	cardFailure: createAction(constants.CARD_FAILURE),

	checkIsCard: createAction(constants.CHECK_IS_CARD),
};

const initialState = {
	isUpdatedCard: false,
	isCard: isCard,
	isLoading: false,
	data: {},
};

export const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.CHECK_IS_CARD:
			if (isCard) {
				return {
					isCard: true,
					isUpdatedCard: false,
					...state,
				};
			}
			return state;
		case constants.CARD_SAVE_REQUEST:
			return { ...state, isLoading: true, isUpdatedCard: false };
		case constants.CARD_SAVE_SUCCESS:
			return {
				...state,
				isLoading: false,
				isUpdatedCard: true,
				data: action.payload,
			};
		case constants.CARD_GET_REQUEST:
			return { ...state, isLoading: true, isUpdatedCard: false };
		case constants.CARD_GET_SUCCESS:
			localStorage.setItem("isCard", JSON.stringify(true));
			return { ...state, isLoading: false, isCard: true, isUpdatedCard: false, data: action.payload };
		case constants.CARD_FAILURE:
			return { ...state, isLoading: false, isUpdatedCard: false };

		default:
			return state;
	}
};
