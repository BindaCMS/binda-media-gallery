import {all} from 'redux-saga/effects'
import {getMediaWatcher} from "./getMediaSaga";
import {deleteMediumWatcher} from "./deleteMediumSaga";
import {addMediumWatcher} from "./addMediumSaga";
import {editMediumWatcher} from "./editMediumSaga";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        getMediaWatcher(),
        deleteMediumWatcher(),
        addMediumWatcher(),
        editMediumWatcher()
    ])
}