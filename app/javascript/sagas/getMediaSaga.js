import { types } from '../actions/actionTypes'
import { takeLatest, delay, put, race } from 'redux-saga/effects'
import axios from 'axios'

export function* getMediaWatcher() {
    const saga = yield takeLatest(types.GET_MEDIA, getMediaSaga )
}

export function* getMediaSaga(action) {
   const { payload, timeout } = yield race({ payload: request(), timeout: delay(5000)})
   if (typeof payload !== "undefined" ) {
        yield put({type: types.GET_MEDIA_SUCCESS, payload})
   } else {
        yield put({type: types.GET_MEDIA_TIMEOUT, timeout: "getMediaSaga Timeout!"})
   }
}

function request() {
    return fetch('http://localhost:3000/api/media')
        .then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
}