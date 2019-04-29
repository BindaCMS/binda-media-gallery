import axios from 'axios';
import { renderFlash } from "./flash";

class AjaxFormCommitter {

    constructor(url, data) {
        this.url = url;
        this.data = data;
        this.initHeaders();
    }

    initHeaders() {
        let tokenDom = document.querySelector("meta[name=csrf-token]")
        tokenDom ? axios.defaults.headers.common["X-CSRF-Token"] = tokenDom.content: ""
        axios.defaults.headers.common["Content-Type"] = "application/json"
        axios.defaults.headers.common["Accept"] = "application/json"
    }

    makeCall() {
        axios.post(this.url, this.data)
            .then(response => {
                renderFlash('notice', response.data['notice'])
            })
            .catch(error => {
                renderFlash('alert', error.toString())
            })
    }
}

export default AjaxFormCommitter