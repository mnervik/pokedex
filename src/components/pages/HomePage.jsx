import React, {Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

import './HomePage.scss'

class HomePage extends Component {
    state = {
        pokemon: [{
            id: 0,
            name: "",
            weight: 0,
            img: "",
        }],
        limit: 10
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Pokemon List</h1>

                <div className="row">
                    {this.state.pokemon.map((pokemon, key) => (
                        <div className="col-xl-2 col-lg-3 col-sm-4 col-6" key={key}>
                            <div className="card pokemon">
                                <img className="card-img-top pokemon__img" src={pokemon.img} alt="pokemon"/>
                                <div className="card-body pokemon-details">
                                    <h5 className="card-title pokemon-details__name">{pokemon.name}</h5>
                                    <p className="card-text pokemon-details__weight">weight: {pokemon.weight}</p>
                                    <Link className="btn btn-primary" to={`/pokemon/${pokemon.id}`}>More Info</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    getData() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.limit}`)
            .then(({data: {results: data}}) => {
                this.clearData()

                for (let i = 0; i < data.length; i++) {
                    axios.get(data[i].url)
                        .then(({data}) => {
                            this.setState({
                                pokemon: [...this.state.pokemon, {
                                    id: data['id'],
                                    name: data['name'],
                                    weight: data['weight'],
                                    img: data['sprites']['front_default'],
                                }]
                            })
                        })
                }
            })
    }

    /* Clear Existing Data */
    clearData() {
        this.setState({
            pokemon: []
        })
    }
}

export default HomePage
