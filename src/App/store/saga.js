import { takeLatest, call, put, select } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { api } from "../../App/services/api";
import { tokenSelector } from "../store/selectors";

//const getToken = (state) => state.appReducer.loginReducer.data.token;
const getToken = (state) => tokenSelector(state);

export function* fetchLogInWorker(action) {
	const { payload } = action;
	const logIn = () => api.post("/auth", payload);

	try {
		const result = yield call(logIn);
		if (result.data.success) {
			yield put(actions.logInSuccess(result.data));
			yield put(actions.cardGet(result.data));
		} else {
			yield put(actions.logInFailure());
		}
	} catch (error) {
		yield put(actions.logInFailure());
	}
}

export function* watchLogInSaga() {
	yield takeLatest(constants.LOGIN_REQUEST, fetchLogInWorker);
}

export function* fetchCardSaveWorker(action) {
	const { payload } = action;
	payload.token = yield select(getToken);

	const cardSave = () => api.post("/card", payload);

	try {
		const result = yield call(cardSave);
		if (result.data.success) {
			yield put(actions.cardSaveSuccess(result.data));
			yield put(actions.cardGet(result.data));
		} else {
			yield put(actions.cardFailure());
		}
	} catch (error) {
		yield put(actions.cardFailure());
	}
}

export function* watchCardSaveSaga() {
	yield takeLatest(constants.CARD_SAVE_REQUEST, fetchCardSaveWorker);
}

export function* fetchCardGetWorker(action) {
	const token = yield select(getToken);

	const { payload } = action;
	const cardGet = () => api.get("/card?token=" + token, payload);

	try {
		const result = yield call(cardGet);
		yield console.log(result);
		if (result.data.success) {
			yield put(actions.cardGetSuccess(result.data));
		} else {
			yield put(actions.cardFailure());
		}
	} catch (error) {
		yield put(actions.cardFailure());
	}
}

export function* watchCardGetSaga() {
	yield takeLatest(constants.CARD_GET_REQUEST, fetchCardGetWorker);
}
