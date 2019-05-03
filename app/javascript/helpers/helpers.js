import { error } from './notifications';

export const isEmptyObject = obj => Object.keys(obj).length === 0;

export const validateMedium = (medium) => {
    const errors = {};
    if (medium.name === '') {
        errors.name = 'You must enter a name'
    }
    return errors;
}

export const handleAjaxError = (err) => {
    error(`Something went wrong: ${err}`);
    console.warn(err);
};