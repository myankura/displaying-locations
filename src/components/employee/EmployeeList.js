import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./employee.css"

//list employees
export default class EmployeeList extends Component {
    render() {
        //create a button for admitting new employees
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Hire Employee
                    </button>
                </div>
                <section className="content employees">
                    {
                        //display all employees
                        this.props.employees.map(employee =>
                            <div key={employee.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {employee.name}
                                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                        <button
                                        //Button for deleting employees
                                            onClick={() => this.props.deleteEmployee(employee.id)}
                                            className="card-link">Delete</button>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}