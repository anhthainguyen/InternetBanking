import React, { Component } from 'react';
import './Menu.css'
import CallApi from '../utils/ApiCaller';
const moment = require('moment');

class UserCreating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtIdTKDangNhap: '',
            txtTenDangNhap: '',
            txtMatKhau: ''
        };
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state);
        //const SoTaiKhoan = '234567890';
        var { txtIdTKDangNhap, txtTenDangNhap, txtMatKhau} = this.state;
        if (txtIdTKDangNhap === '') {
            confirm('Bạn chưa nhập id tài khoản đăng nhập.')//eslint-disable-line
        }
        else if (txtTenDangNhap === '') {
            confirm('Bạn chưa nhập tên đăng nhập.')//eslint-disable-line
        }
        else if (txtMatKhau === '') {
            confirm('Bạn chưa nhập mật khẩu.')//eslint-disable-line
        }
        else {
            const now = moment().format("YYYY-MM-DD HH:mm:ss");
            CallApi('tkdangnhap/add', 'POST', {
                idTKDangNhap: txtIdTKDangNhap,
                TenDangNhap: txtTenDangNhap,
                MatKhau: txtMatKhau
            }).then(res => {
                if (res.data) {
                    confirm('Bạn đã tạo tài khoản thành công.')//eslint-disable-line
                    this.setState({
                        txtIdTKDangNhap: '',
                        txtTenDangNhap: '',
                        txtMatKhau: ''
                    })
                    document.getElementById("myForm").reset();
                    console.log(res);
                }
                // this.setState({
                //     "txtSoTaiKhoan":'',
                //     "txtSoTien":'',
                //     "txtNoiDung":'',
                //     "txtnganhang":'AKBank'
                // })
                //eslint-disable-line

            });
        }
    }

    resetText = (event) => {
        this.setState({
            txtIdTKDangNhap: '',
            txtTenDangNhap: '',
            txtMatKhau: ''
        })
    }
    render() {
        return (
            <div className="mg-10" method="POST" role="form">
                <form id="myForm" onSubmit={this.onHandleSubmit} action="true">
                    <legend>TẠO TÀI KHOẢN ĐĂNG NHẬP</legend>
                    <div className="form-group">
                        <label htmlFor="true">Id tài khoản đăng nhập</label>
                        <input
                            type="number"
                            className="form-control"
                            id="true"
                            placeholder="Nhập id tài khoản"
                            name="txtSoTaiKhoan"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Tên đăng nhập</label>
                        <input
                            type="text"
                            className="form-control"
                            id="true"
                            placeholder="Nhập tên đăng nhập"
                            name="txtSoTien"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            id="true"
                            placeholder="Nhập mật khẩu tại đây"
                            name="txtNoiDung"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default UserCreating;