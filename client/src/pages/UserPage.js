import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './../components/Menu'
import RouterMenu from './../router/RouterMenu';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            tendangnhap: this.props.tendangnhap,
            login: this.props.login
        };
    }

    setId = (params) => {
        this.setState({ id: params })
    }

    // setHoVaTen = (params) => {
    //     this.setState({ hovaten: params })
    // }

    setLogin = (params) => {
        this.setState({ login: params })
    }

    render() {
        return (
            <Router>
                <div>
                    <Menu
                        login={this.state.login}
                        tendangnhap={this.state.tendangnhap}
                        onLogin={this.setLogin}
                    />
                    <RouterMenu
                        id={this.state.id}
                    />
                </div>
            </Router>
        );
    }
}

export default UserPage;