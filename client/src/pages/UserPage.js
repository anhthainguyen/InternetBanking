import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './../components/Menu'
import RouterMenu from './../router/RouterMenu';
//import routes from '../routes';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            tendangnhap: this.props.tendangnhap,
            login: this.props.login,
            accessToken:this.props.accessToken
        };
    }

    setId = (params) => {
        this.setState({ id: params })
    }

    // setHoVaTen = (params) => {
    //     this.setState({ accessToken: params })
    // }

    setLogin = (params) => {
        this.setState({ login: params })
    }

    onHandleChange = (event) => {
        console.log(this.props.accessToken)
        console.log(this.state.id)
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
                        accessToken={this.props.accessToken}
                    />
                    {/* <routes
                        id={this.state.id}
                        accessToken={this.props.accessToken}
                    /> */}
                </div>
            </Router>
        );
    }
}

export default UserPage;