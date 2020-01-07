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

                        <Route path="/">
                            <h1>Home Page</h1>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
