import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { api } from "../../services/api";

export function* fetchRouteWorker(action) {
	const { payload } = action;
	const getRoute = () => api.post("/route", payload);

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
