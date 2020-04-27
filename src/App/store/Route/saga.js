import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { api } from "../../services/api";

export function* fetchRouteWorker(action) {
	const { payload } = action;
	
	const getRoute = () => api.get(`/route?address1=${payload[0]}&address2=${payload[1]}`);

	try {
		const result = yield call(getRoute);
		yield console.log("fetchRouteWorkerResult", result);
		yield put(actions.getRouteSuccess(result.data));
	} catch (error) {
		yield console.log("errorRoute", error);
		yield put(actions.getRouteFailure());
	}
}

export function* watchRouteSaga() {
	yield takeLatest(constants.ROUTE_REQUEST, fetchRouteWorker);
}
