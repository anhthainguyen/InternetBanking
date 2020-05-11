import React, { Component } from 'react';
import axios from 'axios';
//import CallApi from '../utils/ApiCaller';

class TransactionSend extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }
    componentDidMount() {
        //var id = 123456789
        axios({
            method: 'GET',
            url: 'http://localhost:4200/api/giaodich/SoTaiKhoanG/123456789',
            data: null

        }).then(res => {
            console.log(res);
            this.setState({ users: res.data });
        }).catch(err => {
            console.log(err);
        });
        // CallApi('giaodich/SoTaiKhoanG/' + id, 'GET', null).then(res => {
        //     console.log(res);
        //     this.setState({ users: res.data });
        // });
    }

    renderTransactionSend = () => {
        let users = this.state.users.map((data, index) =>
            <tr key={data.idGiaoDich}>
                <td>{data.SoTaiKhoanN}</td>
                <td>{data.NganHang}</td>
                <td>{data.SoTien}</td>
                <td>{data.NoiDung}</td>
                <td>{data.NgayGio}</td>
            </tr>
        );
        return users;
    }

    render() {
        return (
            <div className="container">
                <h1>CÁC GIAO DỊCH GỬI TIỀN</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Số tài Khoản Nhận</th>
                            <th scope="col">Ngân hàng</th>
                            <th scope="col">Số Tiền</th>
                            <th scope="col">Nội dung</th>
                            <th scope="col">Ngày giờ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTransactionSend()}
                    </tbody>
                </table>
            </div>
        );
    }

    // render() {
    //     return (
    //         <div>
                
    //         </div>
    //     );
    // }
}

export default TransactionSend;