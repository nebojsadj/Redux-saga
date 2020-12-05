import { all } from "redux-saga/effects";
import albumsSaga from "./saga";

function* rootSaga() {
  yield all([albumsSaga()]);
}

export default rootSaga;
