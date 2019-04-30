import docReady from'doc-ready'
import AjaxFormCommitter from '../components/AjaxFormCommitter'
import FormDataExtractor from '../components/FormDataExtractor'

docReady ( function() {
    console.log('hello from edit_medium_ajax')
    let formExtractor = new FormDataExtractor('medium_form', 'medium');
    formExtractor.submit.addEventListener('click', (e) => {
        e.preventDefault();
        let data = formExtractor.getData();
        let url = formExtractor.getAction();
        let ajaxCommitter = new AjaxFormCommitter(url, data, 'patch')
        ajaxCommitter.makeCall();
    })
})