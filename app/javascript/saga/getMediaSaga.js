import { types } from '../actions/actionTypes'
import { takeLatest } from 'redux-saga/effects'

export function* getMediaWatcher() {
    const saga = yield takeLatest(types.GET_MEDIA, getMediaSaga )
}

export function* getMediaSaga(action) {
    console.log(action.type)
}

