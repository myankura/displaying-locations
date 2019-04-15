import React, { Component } from 'react'
import "./owner.css"

export default class OwnerList extends Component {
    render() {
        return (
            <section className="content owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {owner.name} <br></br>
                                {owner.phoneNumber}
                                <button
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</button>
                            </h5>

                        </div>
                    </div>)
            }
            </section>
        )
    }
}