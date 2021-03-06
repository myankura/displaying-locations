const remoteURL = "http://localhost:5002"

//responsible for getting all of the locations from the API
export default {
    get(id) {
        return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/locations`).then(e => e.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/locations/${id}`, {
            method: "DELETE"
        })
    }
}