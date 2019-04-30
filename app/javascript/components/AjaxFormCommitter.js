import axios from 'axios';
import { renderFlash } from "./flash";

class AjaxFormCommitter {

    constructor(config) {
        this.url = config.url ? config.url : null;
        this.data = config.data ? config.data : null;
        this.httpMethod = config.httpMethod ? config.httpMethod : 'post';
        this.initHeaders();
    }

    initHeaders() {
        let tokenDom = document.querySelector("meta[name=csrf-token]")
        tokenDom ? axios.defaults.headers.common["X-CSRF-Token"] = tokenDom.content: ""
        axios.defaults.headers.common["Content-Type"] = "application/json"
        axios.defaults.headers.common["Accept"] = "application/json"
    }

    makeCall() {
        if (this.url && this.data && this.httpMethod) {
            axios({
                method: this.httpMethod,
                url: this.url,
                data: this.data
            })
                .then(response => {
                    renderFlash('notice', response.data['notice'])
                })
                .catch(error => {
                    renderFlash('alert', error.toString())
                })
            return true;
        } else {
            return false
        }
    }
}

export default AjaxFormCommitter