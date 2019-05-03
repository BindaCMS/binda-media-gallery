class MediaApi {
    static getAllMedia() {
        return fetch('http://localhost:3000/api/media')
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }
}

console.log('hello from mediaApi')

export default MediaApi