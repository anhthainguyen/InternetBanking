import React, { Component } from 'react';
import CallApi from '../utils/ApiCaller';

class EditTheRecipient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtSoTaiKhoan: this.props.SoTaiKhoanNN,
            txtTenGoiNho: this.props.TenGoiNho
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

    // componentDidMount(){
    //     console.log('idNguoiNhan')
    //     var { match } = this.props;
    //     if(match){
    //         var idNguoiNhan = match.params.idNguoiNhan
    //         console.log(idNguoiNhan)
    //     }
    // }

    onHandleSubmit = (event) => {
        event.preventDefault();
        var { txtSoTaiKhoan, txtTenGoiNho } = this.state;
        // if (txtTenGoiNho === ''){
        //     confirm('Bạn chưa nhập tên gợi nhớ.')//eslint-disable-line
        // }
        // const now = moment().format("YYYY-MM-DD HH:mm:ss");
        console.log(this.props.idNguoiNhan)
        if (this.props.id) {
            if (txtSoTaiKhoan === '') {
                confirm('Bạn chưa nhập số tài khoản.')//eslint-disable-line
            } else if (txtTenGoiNho === '') {
                CallApi(`khachhang/sotaikhoan/${txtSoTaiKhoan}`, 'GET', null).then(res => {
                    if (res.status === 200) {
                        console.log(res)
                        txtTenGoiNho = res.data[0].HoVaTen
                        CallApi(`nguoinhan/patch/${this.props.idNguoiNhan}`, 'POST', {
                            // idKhachHang: this.props.id,
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
            }
            else {
                CallApi(`nguoinhan/patch/${this.props.idNguoiNhan}`, 'POST', {
                    //idKhachHang: this.props.id,
                    SoTaiKhoan: txtSoTaiKhoan,
                    TenGoiNho: txtTenGoiNho
                }).then(res => {
                    console.log(res)
                    if (res.data) {
                        confirm('Bạn đã sửa người nhận thành công.')//eslint-disable-line
                        this.setState({
                            txtSoTaiKhoan: '',
                            txtTenGoiNho: '',
                        })
                        document.getElementById("myForm").reset();
                        console.log(res);
                    }

                });
                // fetch(`http://localhost:4200/api/nguoinhan/${this.props.idNguoiNhan}`, {
                //     "method": "PUT",
                //     "headers": {
                //         "content-type": "application/json",
                //         "accept": "application/json"
                //     },
                //     "body": JSON.stringify({
                //         SoTaiKhoan: txtSoTaiKhoan,
                //         TenGoiNho: txtTenGoiNho
                //     })
                // }).then(response => response.json())
                //     .then(response => {
                //         console.log(response)
                //     })
                //     .catch(err => {
                //         console.log(err);
                //     });

                // fetch(`http://localhost:4200/api/nguoinhan/${this.props.idNguoiNhan}`,{
                //     method:'PATCH',
                //     headers:{
                //         'Accept':'application/json',
                //         'Content-Type':'application/json'
                //     },
                //     body:JSON.stringify({
                //             SoTaiKhoan: txtSoTaiKhoan,
                //     TenGoiNho: txtTenGoiNho
                //     })
                // })
                // .then(res => {console.log(res)})


                // fetch(`http://localhost:4200/api/nguoinhan/${this.props.idNguoiNhan}`,{
                //     method:'PUT',
                //     headers:{
                //         'Accept':'application/json',
                //         'Content-Type':'application/json'
                //     },
                //     body:JSON.stringify({
                //             SoTaiKhoan: txtSoTaiKhoan,
                //     TenGoiNho: txtTenGoiNho
                //     })
                // })
                // .then(res => {console.log(res)})


                // CallApi(`nguoinhan/${this.props.idNguoiNhan}`, 'CREATE', {
                //     // idKhachHang: this.props.id,
                //     SoTaiKhoan: txtSoTaiKhoan,
                //     TenGoiNho: txtTenGoiNho
                // }).then(res => {
                //     console.log(res)
                //     // if (res.data) {
                //     //     confirm('Bạn đã sửa người nhận thành công.')//eslint-disable-line
                //     //     this.setState({
                //     //         txtSoTaiKhoan: '',
                //     //         txtTenGoiNho: '',
                //     //     })
                //     //     document.getElementById("myForm").reset();
                //     //     console.log(res);
                //     // }

                // });
            }
        } else {
            confirm('Bạn chưa đăng nhập.')//eslint-disable-line
        }

    }

    render() {
        return (
            <div className="mg-10">
                <form id="myForm" onSubmit={this.onHandleSubmit} action="true">
                    <div className="form-group">
                        <label htmlFor="true">Thông tin người nhận</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Số tài khoản nhận"
                            name="txtSoTaiKhoan"
                            defaultValue={this.props.SoTaiKhoanNN}
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
                            defaultValue={this.props.TenGoiNho}
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        name="guinhacno">
                        Sửa người nhận
                    </button>
                </form>
            </div>
        );
    }
}

export default EditTheRecipient;