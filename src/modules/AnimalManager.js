const remoteURL = "http://localhost:5002"

//responsible for managing API calls for the key animals
export default {
    //get animal by id
    get(id) {
      return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
    },
    //get all animals
    getAll() {
      return fetch(`${remoteURL}/animals`).then(e => e.json())
    },
    //delete animal by id
    delete(id) {
      return fetch(`${remoteURL}/animals/${id}`, {
        method: "DELETE"
      })
    },
    //post a new animal to API
    post(animal) {
      return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(animal)
      }).then(data => data.json())
    }
}