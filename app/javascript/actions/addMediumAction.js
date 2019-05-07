import {types} from './actionTypes'

export function addMediumAction(medium) {
    console.log(types.ADD_MEDIUM)
    return {
        type: types.ADD_MEDIUM,
        payload: medium
    }
}