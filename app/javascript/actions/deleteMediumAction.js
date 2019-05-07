import { types } from './actionTypes'

export function deleteMediumAction(id) {
    console.log(types.DELETE_MEDIUM)
    return {
        type: types.DELETE_MEDIUM,
        payload: id
    }
}