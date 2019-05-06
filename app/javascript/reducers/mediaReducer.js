import * as actionTypes from '../actions/actionTypes'

export default function mediaReducer(state={}, action) {
    switch(action.type) {
        case actionTypes.GET_MEDIA_SUCCESS:
            return {
                ...state,
                ...{ media: action.media }
            }
        default:
            return state
    }
}