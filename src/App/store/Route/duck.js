import * as constants from "./constants";
import { createAction } from "redux-actions";

export const actions = {
	getRoute: createAction(constants.ROUTE_REQUEST),
	getRouteSuccess: createAction(constants.ROUTE_SUCCESS),
	getRouteFailure: createAction(constants.ROUTE_FAILURE),
	routeClear: createAction(constants.ROUTE_CLEAR),
};

const initialState = {
	isLoading: false,
	data: {},
};

export const routeReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.ROUTE_CLEAR:
			return { ...state, isLoading: false , data: {}};
		case constants.ROUTE_REQUEST:
			return { ...state, isLoading: true };
		case constants.ROUTE_SUCCESS:
			return { ...state, isLoading: false, data: action.payload };
		case constants.ROUTE_FAILURE:
			return { ...state, isLoading: false };
		default:
			return state;
	}
};
