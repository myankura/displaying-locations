import React, { Component } from "react";
import "./employee.css";

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        name: "",
        phoneNumber: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating employee object, and
          invoking the function reference passed from parent component
    */
    constructNewEmployee = event => {
        event.preventDefault();
        const employee = {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber
        };

        // Create the employee and redirect user to employee list
        this.props
            .addEmployee(employee)
            .then(() => this.props.history.push("/employees"));
    }
    //render employee form when admit employee is clicked.
    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="name">Employee Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Employee Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phoneNumber"
                            placeholder="Phone Number"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewEmployee}
                        className="btn btn-primary">
                        Submit</button>
                </form>
            </React.Fragment>
        )
    }
}