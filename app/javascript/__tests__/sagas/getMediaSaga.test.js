import {
    getMediaWatcher,
    getMediaSaga,
    getMediaRequest
} from "../../sagas/getMediaSaga";
import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { types } from '../../actions/actionTypes'

describe("Fetch media data (saga)", () => {
    const error = new Error("Whoops...")
    const mockAction = {
        type: types.GET_MEDIA
    }

    describe("when everything works", () => {
        it("starts a new saga", () => {
            return expectSaga(getMediaWatcher)
                .provide()
                .take(types.GET_MEDIA, getMediaSaga)
                .dispatch(mockAction)
                .run();
        })
        it("sends a request to fetch media data", () => {
            return expectSaga(getMediaSaga, mockAction)
                .provide()
                .call(getMediaRequest, mockAction)
                .run();
        })
    })
})