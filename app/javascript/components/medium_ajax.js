import docReady from'doc-ready'
import AjaxFormCommitter from './AjaxFormCommitter'
import FormDataExtractor from './FormDataExtractor'


docReady ( function() {

    console.log('hello from medium_ajax')

    let formExtractor = new FormDataExtractor('medium_form', 'medium');
    // check if it's all good
    if (formExtractor.isValidForm()) {
        // hook ajax committer to submit click
        formExtractor.submit.addEventListener('click', (e) => {
            e.preventDefault();

            let config = {
                url: formExtractor.getAction() ? formExtractor.getAction() : '',
                data: formExtractor.getData(),
            }

            // action create has no method specified in html
            let httpMethod = formExtractor.getHttpMethod()
            if (httpMethod != null) { config.httpMethod = httpMethod }

            let ajaxCommitter = new AjaxFormCommitter(config)

            if (!ajaxCommitter.makeCall()) {
                console.log('Ajax Request couldn\'t be made, data or url is null')
            };
        })
    }
})