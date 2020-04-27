import { call, put, takeLatest } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { api } from "../../services/api";

export function* fetchAddressListWorker() {
	try {
			const fetchAddressList = () => api.get("/addressList");
			const result = yield call(fetchAddressList);
			//yield console.log("resultListWorker ", result.data);	
			yield put(actions.fetchAddressListSuccess(result.data));
	} catch (error) {
		console.log("CATCH: ", error);
		yield put(actions.fetchAddressListFailure());
	}
}

export function* watchAddressListSaga() {
	yield takeLatest(constants.ADDRESS_LIST_REQUEST, fetchAddressListWorker);
}

