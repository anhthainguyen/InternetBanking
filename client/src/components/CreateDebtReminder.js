import React, { Component } from 'react';
import './Menu.css'
import CallApi from '../utils/ApiCaller';

class CreateDebtReminder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtSoTaiKhoan: '',
            txtSoTien: '',
            txtNoiDung: '',
            checknhaminhno: false
        };
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
        // this.setState({
        //     txtSoTaiKhoan:event.target.value
        // });
    }


    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        var { txtSoTaiKhoan, txtSoTien, txtNoiDung, checknhaminhno } = this.state;
        // const now = moment().format("YYYY-MM-DD HH:mm:ss");
        if (this.props.sotaikhoan) {
            if (txtSoTaiKhoan === '') {
                confirm('Bạn chưa nhập số tài khoản.')//eslint-disable-line
            }
            else if (txtSoTien === '') {
                confirm('Bạn chưa nhập số tiền.')//eslint-disable-line
            }
            else if (txtNoiDung === '') {
                confirm('Bạn chưa nhập nội dung.')//eslint-disable-line
            }
            else {
                if (checknhaminhno === false) {
                    CallApi('nhacno/add', 'POST', {
                        SoTKChuNo: this.props.sotaikhoan,
                        SoTien: txtSoTien,
                        SoTKNguoiNo: txtSoTaiKhoan,
                        NoiDungNo: txtNoiDung,
                        DaThanhToan: 0,
                        NDXoaNo: "",
                        NhacMinhNo: 0
                    }).then(res => {
                        // this.setState({
                        //     "txtSoTaiKhoan":'',
                        //     "txtSoTien":'',
                        //     "txtNoiDung":'',
                        //     "txtnganhang":'AKBank'
                        // })
                        if (res.data) {
                            confirm('Bạn đã nhắc nợ thành công.')//eslint-disable-line

                            this.setState({
                                txtSoTaiKhoan: '',
                                txtSoTien: '',
                                txtNoiDung: '',
                                checknhaminhno: false
                            })
                            document.getElementById("myForm").reset();
                            console.log(res);
                        }

                    });
                }
                else {
                    CallApi('nhacno/add', 'POST', {
                        SoTKChuNo: txtSoTaiKhoan,
                        SoTien: txtSoTien,
                        SoTKNguoiNo: this.props.sotaikhoan,
                        NoiDungNo: txtNoiDung,
                        DaThanhToan: 0,
                        NDXoaNo: "",
                        NhacMinhNo: 1
                    }).then(res => {
                        if (res.data) {
                            confirm('Bạn đã nhắc nợ mình thành công.')//eslint-disable-line
                            this.setState({
                                txtSoTaiKhoan: '',
                                txtSoTien: '',
                                txtNoiDung: '',
                                checknhaminhno: false
                            })
                            document.getElementById("myForm").reset();
                            console.log(res);
                        }

                    });
                }
            }
        }
        // CallApi('nhacno/SoTKNguoiNo/' + this.props.sotaikhoan, 'GET', null).then(res => {
        //     console.log(res);
        //     this.setState({ users: res.data });
        // });
    }

    resetText = (event) => {
        this.setState({
            "txtSoTaiKhoan": '',
            "txtSoTien": '',
            "txtNoiDung": '',
            "txtnganhang": 'AKBank'
        })
    }

    render() {
        return (
            <div className="mg-10">
                <form id="myForm" onSubmit={this.onHandleSubmit} action="true">
                    <legend>TẠO NHẮC NỢ</legend>
                    <div className="form-group">
                        <label htmlFor="true">Thông tin người nhận hoặc gửi</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Số tài khoản nhận hoặc gửi"
                            name="txtSoTaiKhoan"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Số tiền</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Số tiền"
                            name="txtSoTien"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Nội dung</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nội dung nhắc nợ"
                            name="txtNoiDung"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    placeholder="Nội dung nhắc nợ"
                                    name="checknhaminhno"
                                    value="Nhắc mình nợ"
                                    onChange={this.onHandleChange}
                                />Nhắc mình nợ
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        name="guinhacno">
                        Gửi nhắc nợ
                    </button>
                    {/* <button type="button" className="btn btn-primary mg-10" id = "nhacminhno" name="nhacminhno" onClick={ this.onHandleSubmit2 }>
                        Nhắc mình nợ
                    </button> */}
                </form>
            </div>
        );
    }
}

export default CreateDebtReminder;