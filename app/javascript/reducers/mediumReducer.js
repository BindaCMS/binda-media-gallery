import { types } from '../actions/actionTypes'
import initialState from './initialState'

console.log('hello from mediumReducer')

export default function mediumReducer(state = initialState.media, action) {
    switch(action.type) {
        case types.LOAD_MEDIA_SUCCESS:
            return action.media
        case types.UPDATE_MEDIUM_SUCCESS:
            return [
                ...state.filter(medium => medium.id !== action.medium.id ),
                Object.assign({}, action.medium)
            ]
        default:
            return state;
    }
}
