import React, {Component} from 'react'
import {Link} from "react-router-dom"

class NavBar extends Component {
    state = {
        brandName: "PokeDex"
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">{this.state.brandName}</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <div className="navbar-nav">
                        <Link className="navbar-item nav-link" to="/">Home</Link>
                        <Link className="navbar-item nav-link" to="/about">About</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar
