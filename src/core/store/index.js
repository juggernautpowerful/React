import { rootReducer } from "../reducer";
import {rootSaga} from "../saga";
import createSagaMiddleWare from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware } from "redux";

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);
