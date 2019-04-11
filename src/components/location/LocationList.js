import React, { Component } from 'react'

export default class LocationList extends Component {
    render() {
        return(
            <article>
            <section>
            <h3>Student Kennels</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
            </section>
            <section>
            <h3>Instructor Kennels</h3>
                <h4>Nashville South Location</h4>
                <h5>600 Mutt Lane</h5>
            </section>
            </article>
        )
    }
}