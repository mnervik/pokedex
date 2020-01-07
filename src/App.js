import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

// Styles
import './App.css'

// Components
import NavBar from "./components/navbar"
import HomePage from "./components/pages/HomePage"


class App extends React.Component {
    render() {
        return (
            <Router>
                <NavBar/>

                <div className="container-fluid">
                    <Switch>
                        <Route path="/about">
                            <h1>About Page</h1>
                        </Route>

                        <Route path="/pokemon/:id">
                            <h1>Specific Pokemon</h1>
                        </Route>

                        <Route path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
