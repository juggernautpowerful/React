import { all } from "redux-saga/effects";
import { watchLogInSaga as authorizationSaga } from "../../App/store/Login";
import { watchSignInSaga as registrationSaga } from "../../App/store/Register";
import { watchCardSaveSaga, watchCardGetSaga } from "../../App/store/Card";
import { watchAddressListSaga as addressListSaga } from "../../App/store/AddressList";
import { watchRouteSaga as routeSaga } from "../../App/store/Route";

export default function* rootSaga() {
	yield all([
		authorizationSaga(),
		watchCardSaveSaga(),
		watchCardGetSaga(),
		registrationSaga(),
		addressListSaga(),
		routeSaga()
	]);
}
