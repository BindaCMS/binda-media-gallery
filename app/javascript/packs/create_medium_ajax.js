import docReady from'doc-ready'
import AjaxFormCommitter from '../components/AjaxFormCommitter'
import FormDataExtractor from '../components/FormDataExtractor'

console.log('hello from create_medium_ajax')

docReady ( function() {
    let formExtractor = new FormDataExtractor('medium_form', 'medium');
    formExtractor.submit.addEventListener('click', (e) => {
        e.preventDefault();
        let data = formExtractor.getData();
        let url = formExtractor.getAction();
        let ajaxCommitter = new AjaxFormCommitter(url, data, 'post')
        ajaxCommitter.makeCall();
    })
})