import { types } from './actionTypes'

export function getMediaAction() {
    console.log(types.GET_MEDIA_SUCCESS)
    return {
        type: types.GET_MEDIA_SUCCESS
    }
}