const remoteURL = "http://localhost:5002"

//responsible for getting all of the employees from the API
export default {
    //get employee by id
    get(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(e => e.json());
    },
    //get all employees form API
    getAll() {
        return fetch(`${remoteURL}/employees`).then(e => e.json());
    },
    //delete employee by id
    delete(id) {
        return fetch(`${remoteURL}/employees/${id}`, {
            method: "DELETE"
        })
    },
    //post a new employee to API
    post(employee) {
      return fetch(`${remoteURL}/employees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
      }).then(data => data.json())
    }
}