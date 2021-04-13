import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import HomeLogin from "./components/Logowanie/HomeLogin";
import HomeCreateAccount from "./components/Logowanie/HomeCreateAccount.";
import Logged from "./components/Logged";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/logowanie">
                    <HomeLogin/>
                </Route>
                <Route exact path="/rejestracja">
                    <HomeCreateAccount/>
                </Route>
                <Route exact path="/oddaj-rzeczy">
                    <Logged/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;