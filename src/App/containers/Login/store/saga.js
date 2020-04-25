import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { api } from '../../../services/api';

export function* fetchLogInWorker(action) {
	const { payload } = action;
	//console.log("actionLogInWorker ", action);
	const logIn = () => api.post("/auth", payload);
	
	try {
		const result = yield call(logIn);
		
		if (result.data.success) {
			yield put(actions.logInSuccess(result.data));
		} else {
			yield put(actions.logInFailure());
		}
	} catch (error) {
		//yield console.log("errorLogin", error);
		yield put(actions.logInFailure());
	}
}

export function* watchLogInSaga() {
	yield takeLatest(constants.LOGIN_REQUEST, fetchLogInWorker);
}


