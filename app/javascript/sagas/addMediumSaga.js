import { types } from '../actions/actionTypes'
import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'

export function* addMediumWatcher() {
    const saga = yield takeLatest(types.ADD_MEDIUM, addMediumSaga )
}

export function* addMediumSaga(action) {
    console.log(action);
    const payload = yield call(addMediumRequest, action.payload);
    if(typeof payload.id !== "undefined") {
        yield put({type: types.ADD_MEDIUM_SUCCESS, success:`${payload.name} successfully added`})
    } else {
        yield put({type: types.ADD_MEDIUM_ERROR, error:payload})
    }
    yield put({type: types.GET_MEDIA})
}

export function addMediumRequest(medium) {
    return axios({
        url: `http://localhost:3000/api/media`,
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data",
            "Accept": 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        data: medium
    })
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
}