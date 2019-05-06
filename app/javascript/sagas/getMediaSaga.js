import { types } from '../actions/actionTypes'
import { takeLatest, delay, put, race } from 'redux-saga/effects'
import axios from 'axios'

export function* getMediaWatcher() {
    const saga = yield takeLatest(types.GET_MEDIA, getMediaSaga )
}

export function* getMediaSaga(action) {
   const { payload, timeout } = yield race({ payload: getMediaRequest(), timeout: delay(1000)})
   if (typeof payload !== "undefined" ) {
        yield put({type: types.GET_MEDIA_SUCCESS, payload})
   } else {
        yield put({type: types.GET_MEDIA_TIMEOUT, timeout: "timeout"})
   }
}

export function getMediaRequest() {
    return axios.get('http://localhost:3000/api/media.json')
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
}