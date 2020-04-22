import { rootReducer } from "../reducer";
import rootSaga from "../saga";
import createSagaMiddleWare from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(rootSaga);
