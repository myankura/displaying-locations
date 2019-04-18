import React, { Component } from "react"
import "./location.css"

export default class Location extends Component {
    state = {
        saveDisabled: false
    }
    render() {
        return (
            <section className="location">
                <div className="card">
                    <div className="content card-body">
                        <h4 className="card-title">
                            {this.props.location.name}
                        </h4>
                        <h6 className="card-title">{this.props.location.address}</h6>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () =>
                                        this.props.deleteLocation(this.props.location.id)
                                )
                            }
                        }
                            disabled={this.state.saveDisabled}>Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}
