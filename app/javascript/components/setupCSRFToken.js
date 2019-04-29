// app/javascript/setupCSRFToken.js
import axios from 'axios'

//console.log('hello from setupCSRFToken.js')

export default function() {
    const tokenDom = document.querySelector("meta[name=csrf-token]")
    if (tokenDom) {
        const csrfToken = tokenDom.content
        axios.defaults.headers.common["X-CSRF-Token"] = csrfToken
    }
}
