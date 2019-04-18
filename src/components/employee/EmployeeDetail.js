import React, { Component } from "react"
import "./employee.css"
// import employee from "employee.svg"

export default class Employee extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employees">
                <div className="card">
                    <div className="content card-body">
                        <h4 className="card-title">
                            {/* <img src={employee} className="icon--employee" alt="peon" /> */}
                            {this.props.employee.name}
                        </h4>
                        <h6 className="card-title">{this.props.employee.phoneNumber}</h6>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () =>
                                        this.props.deleteEmployee(this.props.employee.id)
                                )
                            }
                        }
                            disabled={this.state.saveDisabled}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}