import React, { Component } from 'react'


export default class EmployeeList extends Component {
    render() {
        return (
            <section className="content">
            <h3>Our Team</h3>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <hr></hr>
                    </div>
                )
            }
            </section>
        )
    }
}