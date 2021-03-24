import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./components/Home";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                <Home/>
                </Route>

            </Switch>
        </Router>
    );
};

export default App;