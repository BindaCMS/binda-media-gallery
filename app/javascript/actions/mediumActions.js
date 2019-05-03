import mediumApi from '../api/mediaApi';
import { types } from './actionTypes'

export function loadMedia() {
    return function(dispatch) {
        return mediumApi.getAllMedia()
            .then(media => {
                dispatch(loadMediaSuccess(media));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export function loadMediaSuccess(media) {
    return {type: types.LOAD_MEDIA_SUCCESS, media};
}