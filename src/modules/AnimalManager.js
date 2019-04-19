const remoteURL = "http://localhost:5002"

//responsible for getting all of the animals from the API
export default {
    get(id) {
      return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
    },
    getAll() {
      return fetch(`${remoteURL}/animals`).then(e => e.json())
    },
    delete(id) {
      return fetch(`${remoteURL}/animals/${id}`, {
        method: "DELETE"
      })
    },
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