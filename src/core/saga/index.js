import { all } from "redux-saga/effects";
import { watchLogInSaga, watchCardSaveSaga, watchCardGetSaga } from "../../App/store/saga";


export default function* rootSaga() {
  yield all([watchLogInSaga(), watchCardSaveSaga(), watchCardGetSaga()]);
}
