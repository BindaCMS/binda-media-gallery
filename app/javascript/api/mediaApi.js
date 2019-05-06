class MediaApi {
    static getAllMedia() {
        return fetch('http://localhost:3000/api/media')
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

    static updateMedium(medium) {
        const request = new Request(`http://localhost:3000/api/media/${medium.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({medium: medium})
        })
    }
}

console.log('hello from mediaApi')

export default MediaApi