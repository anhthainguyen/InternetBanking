import React, { Component } from 'react';
import {
    //BrowserRouter as Router,
    Switch,
    Route,
    //Link
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import ChuyenKhoanPage from '../pages/ChuyenKhoanPage';
import GiaoDichPage from '../pages/GiaoDichPage';
import NhacNoPage from '../pages/NhacNoPage';

class RouterMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            sotaikhoan: '',
        };
    }

    setSoTaiKhoan = (params) => {
        this.setState({ sotaikhoan: params })
        console.log(this.state.sotaikhoan)
    }

    render() {
        return (
            <Switch>
                <Route exact path="/home">
                    <HomePage
                        id={this.state.id}
                        sotaikhoan={this.state.sotaikhoan}
                        onSoTaiKhoan={this.setSoTaiKhoan}
                    />
                </Route>
                <Route path="/chuyekhoan">
                    <ChuyenKhoanPage
                        sotaikhoan={this.state.sotaikhoan}
                    />
                </Route>
                <Route path="/giaodich">
                    <GiaoDichPage 
                        sotaikhoan={this.state.sotaikhoan}
                    />
                </Route>
                <Route path="/nhacno">
                    <NhacNoPage
                        sotaikhoan={this.state.sotaikhoan}
                    />
                </Route>
            </Switch>
        );
    }
}

export default RouterMenu;