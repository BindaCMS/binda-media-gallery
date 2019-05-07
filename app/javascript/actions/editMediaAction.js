import {types} from './actionTypes'

export function editMediumAction(medium) {
    console.log(types.EDIT_MEDIUM)
    return {
        type: types.EDIT_MEDIUM,
        payload: medium
    }
}