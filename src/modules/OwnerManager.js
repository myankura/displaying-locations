const remoteURL = "http://localhost:5002"

//manages fetch calls from API
export default {
    //get owner by id
    get(id) {
        return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
    },
    //get all owners
    getAll() {
        return fetch(`${remoteURL}/owners`).then(e => e.json())
    },
    //delete owner by id
    delete(id) {
        return fetch(`${remoteURL}/owners/${id}`, {
            method: "DELETE"
        })
    },
    //post a new owner to API
    post(owner) {
      return fetch(`${remoteURL}/owners`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(owner)
      }).then(data => data.json())
    }
}