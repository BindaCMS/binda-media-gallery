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

    axios({
        method: 'post',
        url: '/media',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: {
            name: getFormInputValue('medium[name]'),
            description: getFormInputValue('medium[description]')
        }
    })
        .then(function (response) {
            console.log(response);
            // Show notice message
            renderFlash('notice', response.data['notice'])
        })
        .catch(function (error) {
            console.log(error);
            // Show alert message
            renderFlash('alert', error.toString())
        });
}

const flash = document.getElementById('flash');

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

/**
 *
 * @param message
 */
function renderFlash(type, message) {
    if (flash) {
        emptyNode(flash)
        let el = document.createElement('div');
        el.setAttribute("id", type);
        el.innerHTML = message;
        flash.appendChild(el)
    }
}



function emptyNode(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}