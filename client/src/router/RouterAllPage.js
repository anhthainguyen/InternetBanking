import React, { Component } from 'react';
import {
    //BrowserRouter as Router,
    Switch,
    Route,
    //Link
} from "react-router-dom";
import CustomerPage from '../pages/CustomerPage';
import Login from '../components/Login';

class RouterAllPage extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/home">
                    <CustomerPage />
                </Route>
            </Switch>
        );
    }
}

export default RouterAllPage;