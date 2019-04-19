import React, { Component } from 'react'
import { Link } from "react-router-dom"
import dog from "./DogIcon.svg"
import "./animal.css"

export default class AnimalList extends Component {
    render() {
        //create a button for admitting new animals
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
                <section className="content animals">
                    {
                        //display all animals
                        this.props.animals.map(animal =>
                            <div key={animal.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={dog} className="icon--dog" alt="doge" />
                                        {animal.name}
                                        <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                        <button
                                        //Button for deleting animals
                                            onClick={() => this.props.deleteAnimal(animal.id)}
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