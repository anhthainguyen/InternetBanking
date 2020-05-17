import React, { Component } from 'react';
// import axios from 'axios';
import './Menu.css'
import CallApi from '../utils/ApiCaller';

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }



    componentDidMount() {
        //console.log(this.props.id)
        //var id = 
        // axios({
        //     method: 'GET',
        //     url: 'http://localhost:4200/api/khachhang',
        //     data: null

        // }).then(res => {
        //     //console.log(res);
        //     this.setState({ users: res.data });
        // }).catch(err => {
        //     console.log(err);
        // });
        if(this.props.id)
        {
            CallApi('khachhang/' + this.props.id, 'GET', null).then(res => {
                // console.log(res)
                // console.log(res.data)
                // console.log(res.data[0].SoTaiKhoan)
                // console.log(res.status)
                if(res.status)
                {
                    this.props.onSoTaiKhoan(res.data[0].SoTaiKhoan)
                    this.setState({ users: res.data });
                }
                
            });
        }
        
    }

    renderUsers = () => {
        let users = this.state.users.map((data, index) =>
            <tr key={data.idKhachHang}>
                <td>{data.HoVaTen}</td>
                <td>{data.SoTaiKhoan}</td>
                <td>{data.SoTien}</td>
                <td>{data.Email}</td>
                <td>{data.SDT}</td>
            </tr>
        );
        return users;
    }

    render() {
        return (
            // <table class="table table-bordered table-hover">
            //     <thead>
            //         <tr>
            //             <th colSpan="2">THÔNG TIN TÀI KHOẢN</th>
            //         </tr>
            //     </thead>
            //     <thead>
            //         <tr>
            //             <th>Họ và tên</th>
            //             <td>{data.HoVaTen}</td>
            //         </tr>
            //     </thead>
            //     <thead>
            //         <tr>
            //             <th>Số tài Khoản</th>
            //             <td>{data.SoTaiKhoan}</td>
            //         </tr>
            //     </thead>
            //     <thead>
            //         <tr>
            //             <th>Số Tiền</th>
            //             <td>{data.SoTien}</td>
            //         </tr>
            //     </thead>
            //     <thead>
            //         <tr>
            //             <th>Email</th>
            //             <td>{data.Email}</td>
            //         </tr>
            //     </thead>
            //     <thead>
            //         <tr>
            //             <th>Số điện thoại</th>
            //             <td>{data.SDT}</td>
            //         </tr>
            //     </thead>
            // </table>

            // <div>
            //     <label htmlFor="input-id" className="col-sm-2">Họ và tên</label>
            //     <label htmlFor="input-id" className="col-sm-2">Số tài Khoản</label>
            //     <label htmlFor="input-id" className="col-sm-2">Số Tiền</label>
            //     <label htmlFor="input-id" className="col-sm-2">Email</label>
            //     <label htmlFor="input-id" className="col-sm-2">Số điện thoại</label>
            // </div>

            // <table class="table table-hover">
            //     <thead>
            //         <tr>
            //             <th>Họ và tên</th>
            //             <th>Số tài Khoản</th>
            //             <th>Số Tiền</th>
            //             <th>Email</th>
            //             <th>Số điện thoại</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         <tr>
            //             {this.renderUsers()}
            //         </tr>
            //     </tbody>
            // </table>

            <div className="con mg-10">
                <h1>THÔNG TIN TÀI KHOẢN</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Số tài Khoản</th>
                            <th scope="col">Số Tiền</th>
                            <th scope="col">Email</th>
                            <th scope="col">Số điện thoại</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserInformation;