import axios from 'axios';
import setupCSRFToken from './setupCSRFToken'

console.log('hello from ajax.js')
//window.addEventListener('DOMContentLoaded', setupCSRFToken)
setupCSRFToken();

// Hook submit button to ajax
const form = document.getElementById('medium_form')
const submit = document.getElementsByName('commit')[0]

if (submit) {
    submit.addEventListener('click', submitForm)
}

/**
 *
 * @param event
 */
function submitForm(event) {
    event.preventDefault();
    axios
        .post('/media', {
                name: getFormInputValue('medium[name]'),
                description: getFormInputValue('medium[description]')
            }
        )
        .then(function (response) {
            console.log(response);
            // Show notice message
            renderNotice("Success ...")
        })
        .catch(function (error) {
            console.log(error);
            // Show alert message
            renderAlert(error.toString())
        });
}

/**
 *
 * @param message
 */
function renderNotice(message) {
    let el = document.createElement('div');
    el.setAttribute("id", "notice");
    el.innerHTML = message;
    document.body.prepend(el)
}

/**
 *
 * @param message
 */
function renderAlert(message) {
    let el = document.createElement('div');
    el.setAttribute("id", "alert");
    el.innerHTML = message;
    document.body.prepend(el)
}

/**
 *
 * @param name
 * @returns {string}
 */
function getFormInputValue(name) {
    return document.getElementsByName(name) ?
        document.getElementsByName(name)[0].value :
        ""
}