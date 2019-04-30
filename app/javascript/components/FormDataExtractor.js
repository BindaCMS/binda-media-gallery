console.log('hello from FormDataExtractor')

class FormDataExtractor {

    constructor(form_id, recordName) {
        this.form = document.forms[form_id]
        this.recordName = recordName;
        if (this.form) {
            this.submit = this.form.elements['commit']
        }
    }

    isValidForm() {
        return this.form && this.submit ? true : false
    }

    getData() {
        let data = {};
        data[this.recordName] = {};
        [...this.form.elements].forEach( input => {
            if (input.type != 'hidden' && input.name.includes(this.recordName)) {
                let fieldName = input.name.replace(this.recordName, "");
                fieldName = fieldName.replace("[", "");
                fieldName = fieldName.replace("]", "");
                data[this.recordName][fieldName] = input.value
            }
        })
        return data
    }

    getAction() {
        return this.form && this.form.action ? this.form.action : null
    }

    getHttpMethod() {
        return this.form && this.form.elements['_method'] ? this.form.elements['_method'].value : null
    }
}

export default FormDataExtractor