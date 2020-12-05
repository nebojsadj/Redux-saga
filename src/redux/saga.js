import { call, put, takeEvery } from "redux-saga/effects";
import { error_data, success_data } from "./actions";
import { LOADING_DATA } from "./types";

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchAlbums() {
  try {
    const albums = yield call(getData);
    yield put(success_data(albums));
  } catch (e) {
    yield put(error_data(e.message));
  }
}

function* albumsSaga() {
  yield takeEvery(LOADING_DATA, fetchAlbums);
}

export default albumsSaga;
