import React, { Component } from "react"
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from '../modules/AnimalManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
import OwnerManager from '../modules/OwnerManager'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'

//List all data on respective pages.
class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        AnimalManager.getAll()
            .then(animals => newState.animals = animals)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.getAll())
            .then(locations => newState.locations = locations)
            .then(() => OwnerManager.getAll())
            .then(owners => {
                newState.owners = owners
                this.setState(newState)
            })


    }
    //discharge animals
    deleteAnimal = id => AnimalManager.delete(id)
        .then(AnimalManager.getAll)
        .then(animals => {
            //this.props.history.push("/animals") returns the user back animals page in the app.
            this.props.history.push("/animals")
            this.setState({ animals: animals })
        })
    //add animals
    addAnimal = animal =>
        AnimalManager.post(animal)
            .then(() => AnimalManager.getAll())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );
    //fire employee
    deleteEmployee = id => EmployeeManager.delete(id)
        .then(EmployeeManager.getAll)
        .then(employees => {
            this.props.history.push("/employees")
            this.setState({ employees: employees })
        })
    deleteLocation = id => LocationManager.delete(id)
        .then(LocationManager.getAll)
        .then(locations => {
            this.props.history.push("/")
            this.setState({ locations: locations })
        })

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            })
            )
    }
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />

                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                        deleteAnimal={this.deleteAnimal} {...props} />
                }} />

                <Route exact path="/employees" render={() => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee}
                        employees={this.state.employees} />
                }} />

                <Route exact path="/owners" render={() => {
                    return <OwnerList deleteOwner={this.deleteOwner}
                        owners={this.state.owners} />
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    console.log("PROPS", props)
                    console.log("THIS.PROPS", this.props)
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <AnimalDetail animal={animal}
                        deleteAnimal={this.deleteAnimal} />
                }} />

                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    //Find the employee with the id of the route parameter
                    console.log("PROPS", props)
                    console.log("THIS.PROPS", this.props)
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )
                    //If the employee wasn't found, create a default one
                    if (!employee) {
                        employee = { id: 404, name: "404", phoneNumber: "Employee not found" }
                    }

                    return <EmployeeDetail employee={employee}
                        deleteEmployee={this.deleteEmployee} />
                }} />

                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    //Find the location with the id of the route parameter
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                    )
                    //If the location wasn't found, create a default one
                    if (!location) {
                        location = { id: 404, name: "404", address: "Location not found" }
                    }
                    return <LocationDetail location={location}
                        deleteLocation={this.deleteLocation} />
                }} />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)