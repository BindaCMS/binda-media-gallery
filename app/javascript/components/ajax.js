import axios from 'axios';

// Hook submit button to ajax
const submit = document.querySelector('.actions button')
if (submit) {
    submit.addEventListener('click', submitForm)
}

function submitForm(event) {
    event.preventDefault();
    axios
        .post('media/new', {
                name: "",
                description: ""
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


function renderNotice(message) {
    let el = document.createElement('div');
    el.setAttribute("id", "notice");
    notice.innerHTML = message;
    document.body.prepend(notice)
}

function renderAlert(message) {
    let el = document.createElement('div');
    el.setAttribute("id", "alert");
    notice.innerHTML = message;
    document.body.prepend(notice)
}