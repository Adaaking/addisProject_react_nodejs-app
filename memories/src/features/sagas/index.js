import { all } from "redux-saga/effects";

import memoSaga from "./memoSaga";

export default function* rootSaga() {
    yield all([
        memoSaga()
    ])
}