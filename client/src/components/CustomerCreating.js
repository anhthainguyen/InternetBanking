import React, { Component } from 'react';
import './Menu.css'
import CallApi from '../utils/ApiCaller';
const moment = require('moment');

class CustomerCreating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtIdKhachHang: '',
            txtHoVaTen: '',
            txtSoTaiKhoan: '',
            txtSoTien: '',
            txtEmail: '',
            txtSDT: ''
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
        var { txtIdKhachHang, txtHoVaTen, txtSoTaiKhoan, txtSoTien, txtEmail, txtSDT} = this.state;
        if (txtIdKhachHang === '') {
            confirm('Bạn chưa nhập id khách hàng.')//eslint-disable-line
        }
        else if (txtHoVaTen === '') {
            confirm('Bạn chưa nhập họ và tên.')//eslint-disable-line
        }
        else if (txtSoTaiKhoan === '') {
            confirm('Bạn chưa nhập số tài khoản.')//eslint-disable-line
        }
        else if (txtSoTien === '') {
            confirm('Bạn chưa nhập số tiền.')//eslint-disable-line
        }
        else if (txtEmail === '') {
            confirm('Bạn chưa nhập email.')//eslint-disable-line
        }
        else if (txtSDT === '') {
            confirm('Bạn chưa nhập số điện thoại.')//eslint-disable-line
        }
        else {
            const now = moment().format("YYYY-MM-DD HH:mm:ss");
            CallApi('khachhang/add', 'POST', {
                idKhachHang: txtIdKhachHang,
                HoVaTen: txtHoVaTen,
                SoTaiKhoan: txtSoTaiKhoan,
                SoTien: txtSoTien,
                Email: txtEmail,
                SDT: txtSDT
            }).then(res => {
                if (res.data) {
                    confirm('Bạn đã tạo tài khoản thành công.')//eslint-disable-line
                    this.setState({
                        txtIdKhachHang: '',
                        txtHoVaTen: '',
                        txtSoTaiKhoan: '',
                        txtSoTien: '',
                        txtEmail: '',
                        txtSDT: ''
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
            txtIdKhachHang: '',
            txtHoVaTen: '',
            txtSoTaiKhoan: '',
            txtSoTien: '',
            txtEmail: '',
            txtSDT: ''
        })
    }
    render() {
        return (
            <div className="mg-10" method="POST" role="form">
                <form id="myForm" onSubmit={this.onHandleSubmit} action="true">
                    <legend>TẠO TÀI KHOẢN KHÁCH HÀNG</legend>
                    <div className="form-group">
                        <label htmlFor="true">Id của khách hàng</label>
                        <input
                            type="numer"
                            className="form-control"
                            id="true"
                            placeholder="Nhập id tài khoản"
                            name="txtSoTaiKhoan"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Họ và tên khách hàng</label>
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
                        <label htmlFor="true">Số tài khoản khách hàng</label>
                        <input
                            type="text"
                            className="form-control"
                            id="true"
                            placeholder="Nhập mật khẩu tại đây"
                            name="txtNoiDung"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Số tiền</label>
                        <input
                            type="number"
                            className="form-control"
                            id="true"
                            placeholder="Nhập mật khẩu tại đây"
                            name="txtNoiDung"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="true"
                            placeholder="Nhập mật khẩu tại đây"
                            name="txtNoiDung"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Số điện thoại</label>
                        <input
                            type="text"
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

export default CustomerCreating;