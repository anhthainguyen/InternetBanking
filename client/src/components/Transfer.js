import React, { Component } from 'react';
import './Menu.css'
import CallApi from '../utils/ApiCaller';
const moment = require('moment');

class Transfer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtSoTaiKhoan: '',
            txtSoTien: '',
            txtNoiDung: '',
            txtnganhang: 'AKBank'
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
        var { txtSoTaiKhoan, txtSoTien, txtNoiDung, txtnganhang } = this.state;
        if (txtSoTaiKhoan === '') {
            confirm('Bạn chưa nhập thông tin người nhận.')//eslint-disable-line
        }
        else if (txtSoTien === '') {
            confirm('Bạn chưa nhập số tiền.')//eslint-disable-line
        }
        else if (txtNoiDung === '') {
            confirm('Bạn chưa nhập nội dung.')//eslint-disable-line
        }
        else {
            const now = moment().format("YYYY-MM-DD HH:mm:ss");
            CallApi('giaodich/add', 'POST', {
                SoTaiKhoanG: this.props.sotaikhoan,
                SoTaiKhoanN: txtSoTaiKhoan,
                NganHang: txtnganhang,
                SoTien: txtSoTien,
                NoiDung: txtNoiDung,
                NgayGio: now
            }).then(res => {
                if (res.data) {
                    confirm('Bạn đã chuyển tiền thành công.')//eslint-disable-line
                    this.setState({
                        txtSoTaiKhoan: '',
                        txtSoTien: '',
                        txtNoiDung: '',
                        txtnganhang: 'AKBank'
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
            txtSoTaiKhoan: '',
            txtSoTien: '',
            txtNoiDung: '',
            txtnganhang: 'AKBank'
        })
    }

    render() {
        return (
            <div className="mg-10" method="POST" role="form">
                <form id="myForm" onSubmit={this.onHandleSubmit} action="true">
                    <legend>THÔNG TIN CHUYỂN KHOẢNG</legend>
                    <div className="form-group">
                        <label htmlFor="true">Thông tin người nhận</label>
                        <input
                            type="number"
                            className="form-control"
                            id="true"
                            placeholder="Số tài khoản"
                            name="txtSoTaiKhoan"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Số tiền chuyển</label>
                        <input
                            type="number"
                            className="form-control"
                            id="true"
                            placeholder="Việt Nam đồng"
                            name="txtSoTien"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Nội dung Chuyển</label>
                        <input
                            type="text"
                            className="form-control"
                            id="true"
                            placeholder="Nội dung Chuyển"
                            name="txtNoiDung"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Ngân hàng</label>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    name="txtnganhang"
                                    value="AKBank"
                                    id="input"
                                    //defaultValue ="AKBank"
                                    //defaultChecked="checked" 
                                    checked={this.state.txtnganhang === "AKBank"}
                                    onChange={this.onHandleChange}
                                />
                                    AKBank
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    name="txtnganhang"
                                    value="PGPBank"
                                    id="input"
                                    //defaultValue = "PGPBank"
                                    checked={this.state.txtnganhang === "PGPBank"}
                                    onChange={this.onHandleChange}
                                />
                                PGPBank
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    name="txtnganhang"
                                    value="RSABank"
                                    id="input"
                                    checked={this.state.txtnganhang === "RSABank"}
                                    //defaultValue ="RSABank" 
                                    onChange={this.onHandleChange}
                                />
                                RSABank
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>



            </div>
        );
    }
}

export default Transfer;