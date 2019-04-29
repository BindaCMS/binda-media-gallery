import axios from 'axios';
import docReady from'doc-ready'
import setupCSRFToken from './setupCSRFToken'
import { renderFlash } from './flash'

let form, submit;
const recordName = 'medium'

docReady( function() {
    // set up authorization key
    setupCSRFToken();
    // find relevant nodes
    form = document.forms['medium_form']
    if (form) {
        submit = form.elements['commit']
        if (submit) {
            // Hook submit button to ajax
            submit.addEventListener('click', submitForm)
        }
    }

    console.log('hello world from ajax.js')
})

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
            'Accept': 'application/json',
           //'X-Requested-With': 'XMLHttpRequest'
        },
        responseType: 'json',
        data: getFormData(),
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

/**
 *
 * @param recordName
 */
function getFormData() {
    let data = {};
    data[recordName] = {};
    [...form.elements].forEach( input => {
        console.log(input)
        if (input.type != 'hidden' && input.name.includes(recordName)) {
            let fieldName = input.name.replace(recordName, "");
            fieldName = fieldName.replace("[", "");
            fieldName = fieldName.replace("]", "");
            data[recordName][fieldName] = input.value
        }
    })
    return data
}