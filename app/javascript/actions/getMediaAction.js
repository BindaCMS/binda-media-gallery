import { types } from './actionTypes'

export function getMediaAction() {
    console.log(types.GET_MEDIA)
    return {
        type: types.GET_MEDIA,
    }
}