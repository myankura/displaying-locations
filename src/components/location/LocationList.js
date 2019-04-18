import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './location.css'

export default class LocationList extends Component {
    render() {
        return(
        <section className="content locations">
        {
            this.props.locations.map(location =>
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {location.name}
                            <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                        </h5>
                    </div>
                </div>)
        }
                </section>
        )
    }
}