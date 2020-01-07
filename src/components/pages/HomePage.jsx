import React, {Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

class HomePage extends Component {
    state = {
        pokemon: [{
            id: 0,
            name: "",
            weight: 0,
            img: "",
        }],
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>HomePage</h1>

                {this.printData()}
            </div>
        )
    }

    getData() {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=2')
            .then(({data: {results: data}}) => {
                this.clearData()

                for (let i = 0; i < data.length; i++) {
                    axios.get(data[i].url)
                        .then(({data}) => {
                            //console.log(data)

                            this.setState({
                                pokemon: [...this.state.pokemon, {
                                    id: data['id'],
                                    name: data['name'],
                                    weight: data['weight'],
                                    sprite: data['sprites']['front_default'],
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

    printData() {
        const arr = [];

        /*<div className="row">
            <div className="col-2">
                <div className="card">
                    <img className="card-img-top" src={this.state.pokemon[0].img}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.pokemon[0].name}</h5>
                        <p className="card-text">weight: {this.state.pokemon[0].weight}</p>
                        <Link className="btn btn-primary" to={`/pokemon/${this.state.pokemon[0].id}`}>
                            More Info
                        </Link>
                    </div>
                </div>
            </div>
        </div>*/
    }
}

export default HomePage
