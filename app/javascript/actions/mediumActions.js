import MediaApi from '../api/mediaApi';
import { types } from './actionTypes';

export function loadMedia() {
    return function(dispatch) {
        return MediaApi.getAllMedia()
            .then(media => {
                dispatch(loadMediaSuccess(media));
            })
            .catch(error => {
                throw(error);
            });
    };
}

console.log('hello from medium actions')

export function updateMedium(medium) {
    console.log(MediaApi)
    return function(dispatch) {
        return MediaApi.updateMedium(medium)
            .then(responseMedium => {
                dispatch(updateMediumSuccess(responseMedium))
            })
            .catch(error => {
                throw(error)
            })
    }
}

export function loadMediaSuccess(media) {
    return {type: types.LOAD_MEDIA_SUCCESS, media};
}

export function updateMediumSuccess(medium) {
    return {type: types.UPDATE_MEDIUM_SUCCESS, medium}
}