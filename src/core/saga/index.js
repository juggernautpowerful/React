import { all } from "redux-saga/effects";
import { watchLogInSaga } from "../../App/containers/Login/store/saga";
import { watchSignInSaga } from "../../App/containers/SignIn/store/saga";
import {
	watchCardSaveSaga,
	watchCardGetSaga
} from "../../App/containers/Dashboard/Profile/store/saga";

export default function* rootSaga() {
	yield all([watchLogInSaga(), watchCardSaveSaga(), watchCardGetSaga(), watchSignInSaga()]);
}
