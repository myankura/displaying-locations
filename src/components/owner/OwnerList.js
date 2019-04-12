import React, { Component } from 'react'

export default class OwnerList extends Component {
    render() {
        return(
            <section className="content">
                        <h2>Owners</h2>
                        <br></br>
                    {
                        this.props.owners.map(owner =>
                            <div key={owner.id}>
                                <h5>{owner.name}</h5>
                                {owner.phoneNumber}
                                <hr></hr>
                            </div>)
                    }
            </section>
        )
    }
}