import { takeLatest, call, put, select } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { api } from "../../services/api";
import { tokenSelector } from "../Login";

const getToken = (state) => tokenSelector(state);

export function* fetchCardSaveWorker(action) {
	const { payload } = action;
	payload.token = yield select(getToken);
	const cardSave = () => api.post("/card", payload);

	try {
		const result = yield call(cardSave);
		if (result.data.success) {
			yield put(actions.cardSaveSuccess(result.data));
		} else {
			yield put(actions.cardFailure());
		}
	} catch (error) {
		yield put(actions.cardFailure(error.toString()));
	}
}

export function* watchCardSaveSaga() {
	yield takeLatest(constants.CARD_SAVE_REQUEST, fetchCardSaveWorker);
}

export function* fetchCardGetWorker() {
	try {
		const token = yield select(getToken);
		const cardGet = () => api.get("/card?token=" + token);
		const result = yield call(cardGet);
		if (result.status === 200) {
			yield put(actions.cardGetSuccess(result.data));
		} else {
			yield put(actions.cardFailure());
		}
	} catch (error) {
		yield put(actions.cardFailure(error.toString()));
	}
}

export function* watchCardGetSaga() {
	yield takeLatest(constants.CARD_GET_REQUEST, fetchCardGetWorker);
}
