import {call,put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const apiUrl = 'http://localhost:8800/api/'

const getMemo = async () => {
   const response = await axios.get(apiUrl + 'memories')
   return response.data
}
const createMemo = async (memory) => {
    const response = await axios.post(apiUrl + "create",memory)
    console.log('resp',response.data)
    return response.data
}

const updateMemo = async (memory) => {
    const response = await axios.patch(apiUrl + `update/${memory._id}`,memory)
    return response.data
}

const deleteMemo = async (id) => {
    const response = await axios.delete(apiUrl+ `delete/${id}`)
    return response.data
}


function* fetchMemories() {
    try {
        const memories = yield call(getMemo)
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

function* updateMemory({payload}) {
    try {
        const memory = yield call(updateMemo,payload)
        yield put({type:"UPDATE_MEMORIES_SUCCESS",memory:memory})
    } catch (error) {
        yield put({ type:"UPDATE_MEMORIES_FAILED"})
    }
}

function* deleteMemory({payload}) {
    try {
        const memoryId = yield(call(deleteMemo,payload))
        yield put({type:"DELETE_MEMORY_SUCCESS",id:memoryId})
    } catch (error) {
        yield put({ type:"DELETE_MEMORY_FAILED"})
    }
}

function* memoSaga() {
   yield takeEvery("GET_MEMORIES",fetchMemories) 
   yield takeEvery("CREATE_MEMORY",createMemory)
   yield takeEvery("UPDATE_MEMORY",updateMemory)
   yield takeEvery("DELETE_MEMORY",deleteMemory)
}

export default memoSaga;