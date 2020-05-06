import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { api } from "../../services/api";

export function* fetchLogInWorker(action) {
	const { payload } = action;
	const logIn = () => api.post("/auth", payload);

	try {
		const result = yield call(logIn);

		if (result.data.success) {
			
			yield put(actions.logInSuccess(result.data));
		} else {
			yield console.log(result.data);
			yield put(actions.logInFailure(result.data.error));
		}
	} catch (error) {
		yield put(actions.logInFailure(error.toString()));
	}
}

export function* watchLogInSaga() {
	yield takeLatest(constants.LOGIN_REQUEST, fetchLogInWorker);
}
