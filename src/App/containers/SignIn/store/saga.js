import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { api } from '../../../services/api';


export function* fetchSignInWorker(action) {
    yield console.log(action);
	const { payload } = action;
	const SignIn = () => api.post("/register", payload);

	try {
		const result = yield call(SignIn);
				yield console.log(result);
		if (result.data.success) {
			yield put(actions.SignInSuccess(result.data));
		} else {
			yield put(actions.SignInFailure());
		}
	} catch (error) {
		yield console.log("errorSignin", error);
		yield put(actions.SignInFailure());
	}
}

export function* watchSignInSaga() {
	yield takeLatest(constants.REGISTER_REQUEST, fetchSignInWorker);
}


