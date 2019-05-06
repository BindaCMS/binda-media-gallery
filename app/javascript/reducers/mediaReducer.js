import { types } from '../actions/actionTypes'

export default function mediaReducer(state={}, action) {
    switch(action.type) {
        case types.GET_MEDIA:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_MEDIA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payload: action.payload
            }
        case types.GET_MEDIA_TIMEOUT:
            return {
                ...state,
                isLoading: false,
                timeout: action.timeout
            }
        default:
            return state
    }
}