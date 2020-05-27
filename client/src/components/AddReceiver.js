import React, { Component } from 'react';
import CallApi from '../utils/ApiCaller';
//import axios from 'axios';

class AddReceiver extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtSoTaiKhoan: '',
            txtTenGoiNho: '',
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
        var { txtSoTaiKhoan, txtTenGoiNho } = this.state;
        // if (txtTenGoiNho === ''){
        //     confirm('Bạn chưa nhập tên gợi nhớ.')//eslint-disable-line
        // }
        // const now = moment().format("YYYY-MM-DD HH:mm:ss");
        if (this.props.id) {
            if (txtSoTaiKhoan === '') {
                confirm('Bạn chưa nhập số tài khoản.')//eslint-disable-line
            } else if (txtTenGoiNho === '') {
                CallApi(`khachhang/sotaikhoan/${txtSoTaiKhoan}`, 'GET', null).then(res => {
                    if (res.status === 200) {
                        console.log(res)
                        txtTenGoiNho = res.data[0].HoVaTen
                        CallApi('nguoinhan/add', 'POST', {
                            idKhachHang: this.props.id,
                            SoTaiKhoan: txtSoTaiKhoan,
                            TenGoiNho: txtTenGoiNho
                        }).then(res => {
                            if (res.data) {
                                confirm('Bạn đã thêm người nhận thành công.')//eslint-disable-line
                                this.setState({
                                    txtSoTaiKhoan: '',
                                    txtTenGoiNho: '',
                                })
                                document.getElementById("myForm").reset();
                                console.log(res);
                            }

                        });
                    }
                    else {
                        confirm('Bạn nhập số tài khoản không đúng.')//eslint-disable-line
                    }
                });
            } else {
                CallApi('nguoinhan/add', 'POST', {
                    idKhachHang: this.props.id,
                    SoTaiKhoan: txtSoTaiKhoan,
                    TenGoiNho: txtTenGoiNho
                }).then(res => {
                    if (res.data) {
                        confirm('Bạn đã thêm người nhận thành công.')//eslint-disable-line
                        this.setState({
                            txtSoTaiKhoan: '',
                            txtTenGoiNho: '',
                        })
                        document.getElementById("myForm").reset();
                        console.log(res);
                    }

                });
            }
        } else {
            confirm('Bạn chưa đăng nhập.')//eslint-disable-line
        }

    }

    render() {
        return (
            <div className="mg-10">
                <form id="myForm" onSubmit={this.onHandleSubmit} action="true">
                    <legend>THÊM NGƯỜI NHẬN</legend>
                    <div className="form-group">
                        <label htmlFor="true">Thông tin người nhận</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Số tài khoản nhận"
                            name="txtSoTaiKhoan"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Tên gợi nhớ</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tên gợi nhớ"
                            name="txtTenGoiNho"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        name="guinhacno">
                        Thêm người nhận
                    </button>
                </form>
            </div>
        );
    }
}

export default AddReceiver;