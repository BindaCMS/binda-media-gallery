import { GET_MEDIA_SUCCESS } from './actionTypes'

export function getMediaAction() {
    console.log(GET_MEDIA_SUCCESS)
    return {
        type: GET_MEDIA_SUCCESS
    }
}