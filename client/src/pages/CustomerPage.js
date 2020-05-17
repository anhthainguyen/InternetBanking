import React, { Component } from 'react';
import Menu from './components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterMenu from './router/RouterMenu';

class CustomerPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <RouterMenu />
                </div>
            </Router>

        );
    }
}

export default CustomerPage;