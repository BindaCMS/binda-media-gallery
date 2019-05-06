import { types } from '../actions/actionTypes'

export default function mediaReducer(state={}, action) {
    switch(action.type) {
        case types.GET_MEDIA_SUCCESS:
            return {
                ...state,
                ...{ data: action.data }
            }
        default:
            return state
    }
}