import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import employee from "./employee.svg"
import "./employee.css"

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="content employees">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {/* <img src={employee} className="icon--employee" alt="peon" /> */}
                                    {employee.name}
                                    <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                    <button
                                        onClick={() => this.props.deleteEmployee(employee.id)}
                                        className="card-link">Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}