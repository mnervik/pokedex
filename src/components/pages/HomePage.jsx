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
            hidden: false,
        }],
        limit: 18,
        search: "",
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.search !== this.state.search) {
            let arr = [...this.state.pokemon]
            for (let i = this.state.pokemon.length - 1; i >= 0; i--) {
                let name = this.state.pokemon[i].name

                arr[i].hidden = (name.indexOf(this.state.search) === -1)
            }

            this.setState({arr})
        }
    }

    handleChange(e) {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Pokemon List</h1>

                <form className="search-form">
                    <input
                        type="search"
                        className="search-form__input"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.search}/>
                </form>

                <div className="row mt-2">
                    {this.state.pokemon.map((pokemon, key) => (
                        <div className={pokemon.hidden ? 'd-none' : "col-xl-2 col-lg-3 col-sm-4 col-6"} key={key}>
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
