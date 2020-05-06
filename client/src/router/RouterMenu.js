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
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/chuyekhoan">
                    <ChuyenKhoanPage />
                </Route>
                <Route path="/giaodich">
                    <GiaoDichPage />
                </Route>
                <Route path="/nhacno">
                    <NhacNoPage />
                </Route>
            </Switch>
        );
    }
}

export default RouterMenu;