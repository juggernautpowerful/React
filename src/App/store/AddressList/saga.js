import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import { actions } from "./duck";
import { api } from "../../services/api";

export function* fetchAddressListWorker() {
	try {
		console.log(0)
			const fetchAddressList = () => api.get("/addressList");
			console.log("1")
			const result = yield call(fetchAddressList);
			yield console.log("resultListWorker ", result.data.addresses);	
			yield put(actions.fetchAddressListSuccess(result));
	} catch (error) {
		console.log("CATCH: ", error);
		yield put(actions.fetchAddressListFailure());
	}
}

export function* watchAddressListSaga() {
//	yield takeLatest(constants.ADDRESS_LIST_REQUEST, fetchAddressListWorker);
}

