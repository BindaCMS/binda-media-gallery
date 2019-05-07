import { types } from '../actions/actionTypes'
import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'

export function* editMediumWatcher() {
    const saga = yield takeLatest(types.ADD_MEDIUM, editMediumSaga )
}

export function* editMediumSaga(action) {
    console.log(action);
    const payload = yield call(editMediumRequest, action.payload);
    if(typeof payload.id !== "undefined") {
        yield put({type: types.GET_MEDIA})
    } else {
        yield put({type: types.ADD_MEDIUM_ERROR, payload})
    }
}

export function editMediumRequest(medium) {
    return axios.put(`http://localhost:3000/api/media/${medium.id}`, medium)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
}