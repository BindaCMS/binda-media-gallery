import docReady from'doc-ready'
import AjaxFormCommitter from './AjaxFormCommitter'
import FormDataExtractor from './FormDataExtractor'

docReady ( function() {
    let form = new FormDataExtractor('medium_form', 'medium');
    form.submit.addEventListener('click', (e) => {
        e.preventDefault();
        let data = form.getData();
        let ajaxCommitter = new AjaxFormCommitter('/media', data)
        ajaxCommitter.makeCall();
    })
})