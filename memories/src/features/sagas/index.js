import { all } from "redux-saga/effects";

import memoSaga from "./memoSaga";
import userSaga from "./userSagas";

export default function* rootSaga() {
    yield all([
        memoSaga(),
        userSaga()
    ])
}