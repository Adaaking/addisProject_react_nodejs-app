import {call,put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const apiUrl = 'http://localhost:8800/api/'

const getMemo = async() => {
   const response = await axios.get(apiUrl + 'memories')
   return response.data
}
const createMemo = async (memory) => {
    const response = await axios.post(apiUrl + "create",memory)
    return response.data
}

function* fetchMemories() {
    try {
        const memories = yield call(getMemo())
        yield put({ type: "GET_MEMORIES_SUCCESS",memories:memories})
    } catch (error) {
        yield put({ type: 'GET_MEMORIES_FAILED',message:error.message})
    }
}

function* createMemory({payload}) {
    try {
        const memory =  yield call(createMemo,payload)
        yield put({type: "CREATE_MEMORY_SUCCESS",memory:memory})
    } catch (error) {
        yield put({ type: "CREATE_MEMORY_FAILED",message:error.message})
    }
}

function* memoSaga() {
   yield takeEvery("GET_MEMORIES",fetchMemories) 
   yield takeEvery("CREATE_MEMORY",createMemory)
}

export default memoSaga;