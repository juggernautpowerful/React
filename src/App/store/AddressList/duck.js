import * as constants from "./constants";
import { createAction } from "redux-actions";

export const actions = {
	fetchAddressList: createAction(constants.ADDRESS_LIST_REQUEST),
	fetchAddressListSuccess: createAction(constants.ADDRESS_LIST_SUCCESS),
	fetchAddressListFailure: createAction(constants.ADDRESS_LIST_FAILURE),
};

const initialState = {
	isLoading: false,
	data: {},
};

export const addressesReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.ADDRESS_LIST_REQUEST:
			return { ...state, isLoading: true };
		case constants.ADDRESS_LIST_SUCCESS:
			return { ...state, isLoading: false, data: action.payload };
		case constants.ADDRESS_LIST_FAILURE:
			return { ...state, isLoading: false };
		default:
			return state;
	}
};
