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
import NguoiNhanPage from '../pages/NguoiNhanPage';
import EditTheRecipient from '../components/EditTheRecipient';

class RouterMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            sotaikhoan: '',
            accessToken: this.props.accessToken,
            idNguoiNhan: '',
            SoTaiKhoanNN: '',
            TenGoiNho: ''
        };
    }

    setSoTaiKhoan = (params) => {
        this.setState({ sotaikhoan: params })
        console.log(this.state.sotaikhoan)
    }

    onHandleChange = (event) => {
        console.log(this.props.accessToken)
        console.log(this.props.id)
    }

    setidNguoiNhan = (params) => {
        this.setState({ idNguoiNhan: params })
    }

    setSoTaiKhoanNN = (params) => {
        this.setState({ SoTaiKhoanNN: params })
    }

    setTenGoiNho = (params) => {
        this.setState({ TenGoiNho: params })
    }
    // a= (event) => {
    //     console.log(this.state.idNguoiNhan)
    // }
    render() {
        return (
            <Switch>



                <Route exact path="/home">
                    <HomePage
                        id={this.state.id}
                        sotaikhoan={this.state.sotaikhoan}
                        onSoTaiKhoan={this.setSoTaiKhoan}
                        accessToken={this.state.accessToken}
                    />
                </Route>
                <Route path="/chuyekhoan">
                    <ChuyenKhoanPage
                        id={this.state.id}
                        sotaikhoan={this.state.sotaikhoan}
                        accessToken={this.state.accessToken}
                    />
                </Route>
                <Route path="/giaodich">
                    <GiaoDichPage
                        sotaikhoan={this.state.sotaikhoan}
                        accessToken={this.state.accessToken}
                    />
                </Route>
                <Route path="/nhacno">
                    <NhacNoPage
                        sotaikhoan={this.state.sotaikhoan}
                        accessToken={this.state.accessToken}
                    />
                </Route>
                <Route exact path="/nguoinhan">
                    {/* <button type="button" className="btn btn-default" onClick={this.a}>button</button> */}
                    <NguoiNhanPage
                        id={this.state.id}
                        accessToken={this.state.accessToken}
                        onidNguoiNhan={this.setidNguoiNhan}
                        onSoTaiKhoanNN={this.setSoTaiKhoanNN}
                        onTenGoiNho={this.setTenGoiNho}
                    />
                </Route>
                <Route exact path='/nguoinhan/:idNguoiNhan/edit'>
                    <EditTheRecipient
                        id={this.state.id}
                        idNguoiNhan={this.state.idNguoiNhan}
                        SoTaiKhoanNN={this.state.SoTaiKhoanNN}
                        TenGoiNho={this.state.TenGoiNho}
                        accessToken={this.state.accessToken}
                        onidNguoiNhan={this.setidNguoiNhan}
                        onSoTaiKhoanNN={this.setSoTaiKhoanNN}
                        onTenGoiNho={this.setTenGoiNho}
                    />
                </Route>
            </Switch>
        );
    }
}

export default RouterMenu;